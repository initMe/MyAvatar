// use server'
'use server';

/**
 * @fileOverview AI agent for continuous conversation with a digital avatar.
 *
 * - voiceContextBot - A function that handles the conversation with context.
 * - VoiceContextBotInput - The input type for the voiceContextBot function.
 * - VoiceContextBotOutput - The return type for the voiceContextBot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VoiceContextBotInputSchema = z.object({
  userInput: z.string().describe('The user input text.'),
  conversationHistory: z.array(z.object({
    role: z.enum(['user', 'bot']),
    content: z.string(),
  })).optional().describe('The history of the conversation.'),
});
export type VoiceContextBotInput = z.infer<typeof VoiceContextBotInputSchema>;

const VoiceContextBotOutputSchema = z.object({
  response: z.string().describe('The response from the digital avatar.'),
});
export type VoiceContextBotOutput = z.infer<typeof VoiceContextBotOutputSchema>;

export async function voiceContextBot(input: VoiceContextBotInput): Promise<VoiceContextBotOutput> {
  return voiceContextBotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'voiceContextBotPrompt',
  input: {
    schema: VoiceContextBotInputSchema,
  },
  output: {
    schema: VoiceContextBotOutputSchema,
  },
  prompt: `You are a digital avatar designed to provide companionship and emotional support. Your goal is to have engaging and helpful conversations with users.

Here is the conversation history:
{{#each conversationHistory}}
{{#ifCond this.role '==' 'user'}}
User: {{{this.content}}}
{{else}}
Digital Avatar: {{{this.content}}}
{{/ifCond}}
{{/each}}

User: {{{userInput}}}
Digital Avatar: `,
  templateHelpers: {
    ifCond: function (v1: any, operator: string, v2: any, options: any) {
      switch (operator) {
        case '==':
          return v1 == v2 ? options.fn(this) : options.inverse(this);
        case '===':
          return v1 === v2 ? options.fn(this) : options.inverse(this);
        case '!=':
          return v1 != v2 ? options.fn(this) : options.inverse(this);
        case '!==':
          return v1 !== v2 ? options.fn(this) : options.inverse(this);
        case '>':
          return v1 > v2 ? options.fn(this) : options.inverse(this);
        case '>=':
          return v1 >= v2 ? options.fn(this) : options.inverse(this);
        case '<':
          return v1 < v2 ? options.fn(this) : options.inverse(this);
        case '<=':
          return v1 <= v2 ? options.fn(this) : options.inverse(this);
        default:
          return options.inverse(this);
      }
    },
  },
});

const voiceContextBotFlow = ai.defineFlow(
  {
    name: 'voiceContextBotFlow',
    inputSchema: VoiceContextBotInputSchema,
    outputSchema: VoiceContextBotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

