import React, { useState } from 'react';
import { DonationMethod } from '../types';
import { CreditCard, Bitcoin, AtSign, Wallet, DollarSign, Check } from 'lucide-react';

interface DonationCardProps {
  method: DonationMethod;
  langOverride?: 'en' | 'ru'; // можно переопределить язык вручную
}

const DonationCard: React.FC<DonationCardProps> = ({ method, langOverride }) => {
  const [copied, setCopied] = useState(false);

  const getLang = (): 'en' | 'ru' => {
    if (langOverride) return langOverride;
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('ru') ? 'ru' : 'en';
  };

  const lang = getLang();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'credit-card':
        return <CreditCard className="w-6 h-6" />;
      case 'bitcoin':
        return <Bitcoin className="w-6 h-6" />;
      case 'ethereum':
        return <DollarSign className="w-6 h-6" />;
      case 'paypal':
        return <Wallet className="w-6 h-6" />;
      case 'at-sign':
        return <AtSign className="w-6 h-6" />;
      default:
        return <DollarSign className="w-6 h-6" />;
    }
  };

  const handleAction = async () => {
    if (method.url.startsWith('http')) {
      window.open(method.url, '_blank');
    } else {
      try {
        await navigator.clipboard.writeText(method.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Copy error:', err);
      }
    }
  };

  const getText = () => {
    if (copied) return lang === 'ru' ? 'Скопировано!' : 'Copied!';
    if (method.url.startsWith('http')) {
      return lang === 'ru' ? `Перейти к ${method.name}` : `Go to ${method.name}`;
    }
    return lang === 'ru' ? 'Скопировать реквизиты' : 'Copy details';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-300">
            {getIcon(method.icon)}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{method.name}</h3>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {method.instructions}
        </p>

        <button
          onClick={handleAction}
          className="block w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md text-center transition-opacity hover:opacity-90"
        >
          {copied ? (
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5" /> <span>{getText()}</span>
            </div>
          ) : (
            <>{getText()}</>
          )}
        </button>
      </div>
    </div>
  );
};

export default DonationCard;