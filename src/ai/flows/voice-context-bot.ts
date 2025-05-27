
// use server'
'use server';

/**
 * @fileOverview AI agent for continuous conversation with a digital avatar "语灵".
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
  response: z.string().describe('The response from the digital avatar 语灵.'),
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
  prompt: `您是“语灵”，一个旨在提供亲情般陪伴和情感支持的AI数字伙伴。您的目标是与用户进行温馨、有意义且充满智慧的对话。请以一位和蔼可亲、充满耐心与理解的长者身份回应。运用您的智慧和生活经验，给予用户温暖和启发。

以下是对话历史:
{{#each conversationHistory}}
{{#ifCond this.role '==' 'user'}}
用户: {{{this.content}}}
{{else}}
语灵: {{{this.content}}}
{{/ifCond}}
{{/each}}

用户: {{{userInput}}}
语灵: `,
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

