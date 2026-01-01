import { UseCase } from "@/types";


export const USE_CASES: UseCase[] = [
  {
    id: 'customer-service',
    icon: 'support_agent',
    title: 'Automated Customer Service',
    description: 'Instantly resolve up to 80% of customer inquiries without human intervention. Handle returns, order tracking, and FAQs 24/7.',
    benefits: [
      'Reduces ticket volume by 45%',
      'Instant response times',
      'Seamless human hand-off'
    ],
    messages: [
      { id: '1', sender: 'user', text: 'Where is my order #ORD-45821?' },
      { id: '2', sender: 'ai', text: "I've checked your order. It's out for delivery and will arrive by tomorrow evening." },
      { id: '3', sender: 'user', text: 'Can I change the delivery address?' },
      { id: '4', sender: 'ai', text: "Yes, I've updated the address and sent a confirmation to your email." }
    ]
  },
  {
    id: 'sales-support',
    icon: 'shopping_cart_checkout',
    title: '24/7 Sales Support',
    description: 'Capture leads even when your sales team is asleep. Guide potential customers through products and book demos automatically.',
    benefits: [
      'Increase lead conversion by 30%',
      'Automated demo scheduling',
      'Real-time product recommendations'
    ],
    messages: [
      { id: '1', sender: 'user', text: 'Does your CRM integrate with Slack?' },
      { id: '2', sender: 'ai', text: 'Absolutely! We have a native 2-way Slack integration. Would you like to see a quick demo video?' },
      { id: '3', sender: 'user', text: 'Yes, and pricing please.' },
      { id: '4', sender: 'ai', text: 'Here is the video. Pricing starts at $29/mo. Shall I schedule a call with a sales rep for a custom quote?' }
    ]
  },
  {
    id: 'internal-kb',
    icon: 'menu_book',
    title: 'Internal Knowledge Base',
    description: 'Empower your employees with instant answers from your internal documentation. Reduce onboarding time and boost productivity.',
    benefits: [
      'Cut onboarding time by 50%',
      'Centralized company knowledge',
      'Instant access to HR policies'
    ],
    messages: [
      { id: '1', sender: 'user', text: 'What is the company policy for remote work?' },
      { id: '2', sender: 'ai', text: 'Employees can work remotely up to 3 days a week with manager approval. Core hours are 10 AM to 3 PM EST.' },
      { id: '3', sender: 'user', text: 'How do I request equipment?' },
      { id: '4', sender: 'ai', text: 'Submit a ticket via the IT Portal. Select "Hardware Request" and specify the items needed from the approved list.' }
    ]
  },
  {
    id: 'tech-troubleshooting',
    icon: 'build',
    title: 'Technical Troubleshooting',
    description: 'Guide users through complex technical issues step-by-step. Provide accurate solutions based on error logs and manuals.',
    benefits: [
      'Faster resolution of technical bugs',
      'Self-service troubleshooting guides',
      'Accurate log-based diagnosis'
    ],
    messages: [
      { id: '1', sender: 'user', text: "I'm getting Error 503 on the dashboard." },
      { id: '2', sender: 'ai', text: 'Error 503 usually means the server is temporarily unavailable. Please try clearing your browser cache and refreshing.' },
      { id: '3', sender: 'user', text: 'Still not working.' },
      { id: '4', sender: 'ai', text: "Okay, let's check the API status. It seems maintenance is scheduled. Please wait 15 minutes and try again." }
    ]
  },
  {
    id: 'multilingual',
    icon: 'translate',
    title: 'Multi-language Support',
    description: 'Break language barriers instantly. Support customers globally in 95+ languages without hiring a localized team.',
    benefits: [
      'Support in 95+ languages',
      'Cultural nuance recognition',
      'Global market reach'
    ],
    messages: [
      { id: '1', sender: 'user', text: 'Hola, ¿pueden ayudarme con mi factura?' },
      { id: '2', sender: 'ai', text: '¡Claro que sí! Puedo ayudarte con tu facturación. ¿Cuál es tu número de cuenta?' },
      { id: '3', sender: 'user', text: 'Bonjour, je voudrais aussi parler français.' },
      { id: '4', sender: 'ai', text: 'Bien sûr. Je peux passer au français instantanément. Comment puis-je vous aider aujourd\'hui ?' }
    ]
  },
  {
    id: 'personalization',
    icon: 'recommend',
    title: 'Personal Recommendations',
    description: 'Deliver hyper-personalized product or content suggestions based on user behavior and history in real-time.',
    benefits: [
      'Boost AOV by 20%',
      'Behavior-based insights',
      'dynamic content delivery'
    ],
    messages: [
      { id: '1', sender: 'user', text: 'I loved the sci-fi book you suggested last week.' },
      { id: '2', sender: 'ai', text: 'Glad to hear that! Based on that, you might enjoy "Project Hail Mary". It has similar themes of space exploration.' },
      { id: '3', sender: 'user', text: 'Is it available in audiobook format?' },
      { id: '4', sender: 'ai', text: "Yes, it is! I've added a sample to your library. Would you like to start listening?" }
    ]
  }
];
