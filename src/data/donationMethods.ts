import { DonationMethod } from '../types';

export const donationMethods: DonationMethod[] = [
  {
    id: 'bank-card',
    name: 'Bank card',
    icon: 'credit-card',
    instructions: 'Transfer any amount to the card: 4400 4303 3462 9885. Thank you for your support!',
    url: '4400 4303 3462 9885'
  },
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    icon: 'bitcoin',
    instructions: 'Send Bitcoin to the address:',
    url: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: 'dollar-sign',
    instructions: 'Donate via PayPal using the button below:',
    url: 'https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID'
  },
  {
    id: 'ko-fi',
    name: 'Ko-fi',
    icon: 'coffee',
    instructions: 'Support us with a coffee on Ko-fi:',
    url: 'https://ko-fi.com/yourname'
  },
  {
    id: 'buymeacoffee',
    name: 'Buy Me a Coffee',
    icon: 'coffee',
    instructions: 'Support us via Buy Me a Coffee:',
    url: 'https://www.buymeacoffee.com/yourname'
  }
];