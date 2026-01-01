
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

export interface IntegrationLogo {
  name: string;
  icon: string;
  type: 'img' | 'material' | 'custom';
}


export interface AiMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}

export interface UseCase {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  messages: AiMessage[];
}
