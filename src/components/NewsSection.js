import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const NewsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Latest News */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-gray-500 text-sm">📰 ОСТАННІ НОВИНИ</span>
            </div>
            
            <article className="news-card bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                27 ЖОВТНЯ ПО ЗАПОРІЗЬКІЙ ОБЛАСТІ ДІЯТИМУТЬ ГПВ
              </h2>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>27 Жовтня 2025</span>
                </div>
              </div>

              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 text-white p-4 rounded">
                    <div className="text-center">
                      <div className="text-sm font-bold">Діятиме графік</div>
                      <div className="text-sm">погодинних</div>
                      <div className="text-sm">відключень</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Відповідно до команди НЕК «Укренерго», з метою стабілізації ситуації в Об'єднаній енергосистемі, 27 жовтня з 10:30 до 24:00 по Запорізькій області будуть застосовані графіки погодинних відключень (ГПВ). Очікувано вимкнуться 1 черга.
                  </p>
                  
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">Години відстрочки електропостачання по чергах відповідно до переміщень:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>1.1: 21:00 - 24:00</div>
                      <div>1.2: 21:00 - 24:00</div>
                      <div>2.1: 10:30 - 14:00</div>
                      <div>2.2: 10:30 - 14:00</div>
                      <div>3.1: не вимикається</div>
                      <div>3.2: не вимикається</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500">
                    <div>4.1: 14:00 - 17:30</div>
                    <div>4.2: 14:00 - 17:30</div>
                    <div>5.1: не вимикається</div>
                    <div>5.2: не вимикається</div>
                    <div>6.1: 17:30 - 21:00</div>
                    <div>6.2: 17:30 - 21:00</div>
                  </div>
                  
                  <p className="text-blue-600 text-sm mt-4">
                    <a href="#" className="hover:underline">
                      Перелік адрес для кожної з черг середнього адрес для кожної з черг. Дивитися свою чергу за адресою (для м. Запоріжжя):
                    </a>
                  </p>
                  
                  <p className="text-sm text-gray-600 mt-2">
                    За наказом НЕК «Укренерго» графіки аварійних відключень по Запорізькій області скасовано.
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Current News */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-gray-500 text-sm">📰 АКТУАЛЬНІ НОВИНИ</span>
            </div>
            
            <div className="space-y-4">
              <article className="news-card bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  Реєстр електропостачальників
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Реєстр електропостачальників, які приєдналися до умов публічного договору електропостачання про надання послуг у розподільчу електромережу...
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Читати далі</a>
              </article>
              
              <article className="news-card bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  Перелік типів лічильників, рекомендованих до встановлення ПАТ «Запоріжжяобленерго», та їх технічні характеристики
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  У відповідності до Кодексу комерційного обліку електричної енергії, затвердженого Постановою НКРЕ від 14.03.2018 № ...
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Читати далі</a>
              </article>
              
              <article className="news-card bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  До уваги споживачів за об'єктами, розташованими на територіях, де ведуться бойові дії, або тимчасово окупованих російською федерацією
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  з 24.02.2022 проти України здійснюється військова агресія російської федерації, у зв'язку з чим 24.02.2022 Указом...
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Читати далі</a>
              </article>
              
              <article className="news-card bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  ПАТ «Запоріжжяобленерго» інформує щодо розгляду звернень (листів) споживачів (заявників) з метою врегулювання договірних відносин в період дії правового режиму воєнного стану
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  з 24.02.2022 проти України здійснюється військова агресія російської федерації, у зв'язку з чим 24.02.2022 Указом...
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Читати далі</a>
              </article>
            </div>
            
            <div className="text-center mt-6">
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Переглянути всі новини
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;