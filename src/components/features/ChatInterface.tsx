
'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import type { FormEventHandler } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Mic, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { voiceContextBot, type VoiceContextBotInput, type VoiceContextBotOutput } from '@/ai/flows/voice-context-bot';
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useClientEffect } from '@/hooks/useClientEffect';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
}

export function ChatInterface() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isVoiceOutputEnabled, setIsVoiceOutputEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const { toast } = useToast();

  useClientEffect(() => {
    synthRef.current = window.speechSynthesis;
    // Focus input on initial mount
    inputRef.current?.focus();
    return () => {
      if (synthRef.current && synthRef.current.speaking) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if(scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  };

  useEffect(scrollToBottom, [messages]);

  const speak = (text: string) => {
    if (!isVoiceOutputEnabled || !synthRef.current || !text) return;
    if (synthRef.current.speaking) {
        synthRef.current.cancel(); // Cancel current speech if any
    }

    const utterance = new SpeechSynthesisUtterance(text);
    // Attempt to use a Chinese voice if available
    const voices = synthRef.current.getVoices();
    const chineseVoice = voices.find(voice => voice.lang.startsWith('zh'));
    if (chineseVoice) {
      utterance.voice = chineseVoice;
    }
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (event) => {
      console.error('SpeechSynthesisUtterance.onerror', event);
      setIsSpeaking(false);
      toast({
        title: "语音错误",
        description: "无法播放音频。",
        variant: "destructive",
      });
    };
    synthRef.current.speak(utterance);
  };

  const mutation = useMutation<VoiceContextBotOutput, Error, VoiceContextBotInput>({
    mutationFn: voiceContextBot,
    onSuccess: (data) => {
      const botMessage: Message = { id: Date.now().toString(), role: 'bot', content: data.response };
      setMessages((prev) => [...prev, botMessage]);
      speak(data.response);
    },
    onError: (error) => {
      console.error("AI 错误:", error);
      toast({
        title: "AI 错误",
        description: "抱歉，我无法处理您的请求。请再试一次。",
        variant: "destructive",
      });
      const errorMessage: Message = { id: Date.now().toString(), role: 'bot', content: "我现在连接有些问题。请稍后再试。" };
      setMessages((prev) => [...prev, errorMessage]);
    },
    onSettled: () => {
      setIsBotTyping(false);
      inputRef.current?.focus();
    }
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || mutation.isPending) return;

    const newUserMessage: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsBotTyping(true);

    const conversationHistory = messages.map(msg => ({ role: msg.role, content: msg.content }));
    
    mutation.mutate({ userInput: newUserMessage.content, conversationHistory });
  };

  const toggleVoiceOutput = () => {
    setIsVoiceOutputEnabled(prev => {
      if (prev && synthRef.current?.speaking) {
        synthRef.current.cancel();
        setIsSpeaking(false);
      }
      // Ensure voices are loaded before trying to find a Chinese voice again
      if (!prev && synthRef.current && synthRef.current.getVoices().length === 0) {
        synthRef.current.onvoiceschanged = () => {
           // Voices are loaded, now we can proceed
        };
      }
      return !prev;
    });
  };
  
  // Ensure voices are loaded for speech synthesis
  useClientEffect(() => {
    if (synthRef.current && synthRef.current.getVoices().length === 0) {
      synthRef.current.onvoiceschanged = () => {
        // Voices loaded
      };
    }
  }, []);


  return (
    <div className="flex flex-col h-full glassmorphism rounded-xl overflow-hidden">
      <div className="p-4 border-b border-accent/20 flex justify-between items-center">
        <h3 className="font-orbitron text-xl text-glow-accent">聊天控制台</h3>
        <Button variant="ghost" size="icon" onClick={toggleVoiceOutput} aria-label={isVoiceOutputEnabled ? "禁用语音输出" : "启用语音输出"}>
          {isVoiceOutputEnabled ? <Volume2 className="h-5 w-5 text-accent" /> : <VolumeX className="h-5 w-5 text-muted-foreground" />}
        </Button>
      </div>

      <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-lg shadow ${
                  msg.role === 'user'
                    ? 'bg-primary/80 text-primary-foreground rounded-br-none'
                    : 'bg-secondary/70 text-secondary-foreground rounded-bl-none'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {isBotTyping && (
            <div className="flex justify-start">
              <div className="max-w-[70%] p-3 rounded-lg shadow bg-secondary/70 text-secondary-foreground rounded-bl-none">
                <Loader2 className="h-5 w-5 animate-spin text-accent" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-4 border-t border-accent/20">
        <div className="flex items-center space-x-2">
          <Input
            ref={inputRef}
            type="text"
            placeholder="输入您的消息..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-background/70 focus:ring-accent placeholder:text-muted-foreground/70"
            disabled={mutation.isPending}
            aria-label="聊天输入框"
          />
          <Button type="button" variant="outline" size="icon" className="border-accent text-accent hover:bg-accent/10" disabled aria-label="使用麦克风 (即将推出)">
            <Mic className="h-5 w-5" />
          </Button>
          <Button type="submit" size="icon" className="bg-accent hover:bg-accent/90 text-accent-foreground" disabled={mutation.isPending || !input.trim()} aria-label="发送消息">
            {mutation.isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </Button>
        </div>
      </form>
    </div>
  );
}
