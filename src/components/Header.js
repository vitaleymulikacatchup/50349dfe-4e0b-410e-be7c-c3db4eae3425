import React from 'react';
import { Menu, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <button className="lg:hidden">
              <Menu className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 text-blue-500" />
              <span className="text-blue-500">Передати показ</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>0-800-304-502</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Call-center</span>
            </div>
            <div className="bg-yellow-400 px-2 py-1 rounded text-xs font-bold">
              Енергетика
              <br />
              Онлайн
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">ЗОЕ</span>
              </div>
              <div className="text-sm">
                <div className="font-bold text-blue-600">ЗАПОРІЗЬКА</div>
                <div className="text-blue-600">ОБЛЕНЕРГО</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">
              Населенню
            </a>
            <a href="#" className="text-red-500 hover:text-red-700 font-medium flex items-center space-x-1">
              <span>📅</span>
              <span>Графіки відключень</span>
            </a>
            <a href="#" className="text-yellow-500 hover:text-yellow-700 font-medium">
              Підприємствам
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;