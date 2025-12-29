
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
