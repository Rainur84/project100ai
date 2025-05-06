import { DonationMethod } from '../types';

export const donationMethods: DonationMethod[] = [
  {
    id: 'bank-card',
    name: 'Bank card',
    icon: 'credit-card',
    instructions: 'Transfer any amount to the card: 4400 4303 3462 9885. Thank you for your support!',
    url: '4400 4303 3462 9885' // ❗ Now here is the card number to copy
  },
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    icon: 'bitcoin',
    instructions: 'Send Bitcoin to the address:',
    url: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5' // ❗ Биткоин-адрес для копирования
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    icon: 'ethereum',
    instructions: 'Send Ethereum to the address:',
    url: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e' // ❗ Эфир-адрес для копирования
  },
  {
    id: 'patreon',
    name: 'Patreon',
    icon: 'at-sign',
    instructions: 'Support us monthly via Patreon and get bonuses!',
    url: 'https://www.patreon.com/Neurobox' // ❗ Патреон ссылка
  }
];