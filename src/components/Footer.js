import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contacts */}
          <div>
            <h3 className="text-cyan-400 text-lg font-bold mb-4">Контакти</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-300">Телефон: прийом показ (для побутових споживачів):</span>
                <div className="text-white">(061)228-51-09, (061)702-05-50,</div>
                <div className="text-white">(098)168-01-01; (050)119-91-69; (093)170-28-35</div>
              </div>
              <div>
                <span className="text-gray-300">Адреса: вул. Славгавір, 14, м. Запоріжжя,</span>
                <div className="text-white">69035; e-mail: kanc@zoe.com.ua</div>
              </div>
              <div className="text-cyan-400">
                <a href="#" className="hover:underline">
                  Особистий кабінет замовника послуг комерційного обліку
                </a>
              </div>
            </div>
          </div>

          {/* Service Info */}
          <div>
            <h3 className="text-gray-300 text-lg font-bold mb-4">
              Споживачі можуть подати скаргу до АТ "Запоріжжяобленерго" щодо якості послуг через мобільний додаток "Енергетика Онлайн"
            </h3>
            <div className="flex space-x-4 mb-6">
              <img src="/images/google-play.png" alt="Google Play" className="h-10" />
              <img src="/images/app-store.png" alt="App Store" className="h-10" />
            </div>
            <div className="flex space-x-2 mb-6">
              <img src="/images/icon1.png" alt="Icon 1" className="w-12 h-12" />
              <img src="/images/icon2.png" alt="Icon 2" className="w-12 h-12" />
              <img src="/images/icon3.png" alt="Icon 3" className="w-12 h-12" />
              <img src="/images/icon4.png" alt="Icon 4" className="w-12 h-12" />
              <img src="/images/icon5.png" alt="Icon 5" className="w-12 h-12" />
            </div>
            <div className="mb-6">
              <img src="/images/qr-code.png" alt="QR Code" className="w-24 h-24" />
            </div>
          </div>

          {/* Anti-corruption */}
          <div>
            <h3 className="text-cyan-400 text-lg font-bold mb-4">Антикорупційна Діяльність</h3>
            <div className="space-y-3 text-sm">
              <div className="text-white">Шановні споживачі!</div>
              <div className="text-gray-300">
                В АТ "Запоріжжяобленерго" працює Лінія довіри з питань запобігання та протидії корупції
              </div>
              <div className="text-cyan-400 font-bold">
                ТЕЛЕФОН: (050) 822-64-26
              </div>
              <div className="text-cyan-400">
                <a href="mailto:stopcorrupt@zoe.com.ua" className="hover:underline">
                  E-mail: stopcorrupt@zoe.com.ua
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <div className="bg-blue-600 inline-block px-6 py-2 rounded mb-4">
              <span className="text-white font-bold">слідкуйте за нами на facebook</span>
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-300">Передати покази:</span>
              <MessageCircle className="w-5 h-5 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;