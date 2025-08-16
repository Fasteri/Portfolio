'use client';

import { useState, useEffect } from 'react';

export default function Landing() {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<Array<{top: string, left: string, size: string, duration: string}>>([]);

  useEffect(() => {
    setIsClient(true);
    
    // Генерация частиц только на клиенте
    const generatedParticles = Array.from({ length: 15 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 30 + 10}px`,
      duration: `${Math.random() * 10 + 10}s`
    }));
    
    setParticles(generatedParticles);
  }, []);

  // Данные для секций
  const features = [
    {
      icon: '💻',
      title: 'Практика с первого дня',
      description: 'Реальные проекты вместо скучных задачек. Создавай портфолио во время обучения.'
    },
    {
      icon: '👨‍🏫',
      title: 'Поддержка наставника',
      description: 'Персональный ментор будет помогать тебе на протяжении всего курса.'
    },
    {
      icon: '🚀',
      title: 'Трудоустройство',
      description: 'Помощь в составлении резюме и подготовка к собеседованиям.'
    }
  ];

  const modules = [
    {
      icon: '🛠️',
      title: 'Основы программирования',
      items: [
        'Синтаксис JavaScript',
        'Работа с DOM',
        'Асинхронное программирование',
        'Git и GitHub'
      ]
    },
    {
      icon: '🌐',
      title: 'Frontend разработка',
      items: [
        'HTML5 и CSS3',
        'Адаптивная верстка',
        'React и Redux',
        'TypeScript'
      ]
    },
    {
      icon: '📱',
      title: 'Проекты',
      items: [
        'Интернет-магазин',
        'Социальная сеть',
        'Мобильное приложение',
        'Финальный проект'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Алексей',
      text: 'После курса устроился джуниор-разработчиком. Преподаватели объясняют сложные вещи простым языком. Особенно понравилась практическая часть!'
    },
    {
      name: 'Мария',
      text: 'Перешла в IT из маркетинга. Сначала боялась, что не справлюсь, но благодаря поддержке ментора всё получилось! Уже работаю в продуктовой компании.'
    },
    {
      name: 'Иван',
      text: 'Лучшее соотношение цены и качества. Гибкий график позволил совмещать с работой. Теперь работаю удаленно и получаю в 2 раза больше.'
    }
  ];

  const pricingPlans = [
    {
      title: 'Базовый',
      price: '4 990 ₽',
      description: 'Для самостоятельного обучения',
      features: [
        'Доступ ко всем лекциям',
        'Практические задания',
        'Доступ в общий чат',
        'Сертификат об окончании'
      ],
      gradient: 'from-gray-700 to-gray-800',
      popular: false
    },
    {
      title: 'Профессия',
      price: '9 990 ₽',
      description: 'Самый популярный вариант',
      features: [
        'Проверка домашних заданий',
        'Персональный ментор',
        'Индивидуальный план обучения',
        'Проекты для портфолио',
        'Подготовка резюме'
      ],
      gradient: 'from-yellow-500 to-orange-500',
      popular: true
    },
    {
      title: 'Премиум',
      price: '14 990 ₽',
      description: 'Максимальный результат',
      features: [
        'Все из пакета "Профессия"',
        'Гарантия трудоустройства',
        '1-он-1 консультации',
        'Стажировка в компаниях-партнерах',
        'Пожизненный доступ'
      ],
      gradient: 'from-purple-500 to-pink-500',
      popular: false
    }
  ];

  const socialLinks = [
    {
      name: 'Telegram',
      icon: '✈️',
      link: '#'
    },
    {
      name: 'YouTube',
      icon: '▶️',
      link: '#'
    },
    {
      name: 'VK',
      icon: '📱',
      link: '#'
    },
    {
      name: 'Instagram',
      icon: '📸',
      link: '#'
    }
  ];

  return (
    <main className="font-sans overflow-hidden">
      {/* Анимированный фон с частицами (рендерится только на клиенте) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-600/10 to-indigo-700/10"></div>
        {isClient && particles.map((particle, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-purple-500/20 animate-float"
            style={{
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
              animationDuration: particle.duration
            }}
          ></div>
        ))}
      </div>

      {/* Hero секция */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-transparent opacity-70 animate-pulse-slow"></div>
        </div>
        
        <div className="relative space-y-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Научись программировать
            </span>
            <br />
            <span className="overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 inline-block">
              с нуля за 3 месяца
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Онлайн-курсы для новичков — от первых шагов до трудоустройства
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
              Начать обучение
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                Узнать больше
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 animate-bounce-slow">
          <div className="w-8 h-14 rounded-full border-4 border-white/50 flex justify-center p-2">
            <div className="w-2 h-2 rounded-full bg-white animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Features с 3D эффектом */}
      <section id="features" className="relative z-10 py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Преимущества курса
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-6xl mb-6 text-cyan-400 animate-pulse">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum с интерактивными вкладками */}
      <section id="curriculum" className="relative z-10 py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
              Программа курса
            </span>
          </h2>
          
          <div className="bg-gray-900/80 backdrop-blur rounded-2xl border border-gray-800 shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg overflow-hidden">
              {modules.map((module, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 p-8 group hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl mb-4 text-green-400 group-hover:text-cyan-400 transition-colors">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{module.title}</h3>
                  <ul className="space-y-2">
                    {module.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials с параллакс эффектом */}
      <section id="testimonials" className="relative z-10 py-20 px-6 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Отзывы студентов
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-full">
                    <div className="bg-gray-800 rounded-full p-1">
                      <div className="w-16 h-16 bg-gray-200 border-2 border-dashed rounded-full" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic text-gray-300 border-l-4 border-purple-500 pl-4 py-2">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing с 3D карточками */}
      <section id="pricing" className="relative z-10 py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Выбери свой пакет
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`p-1 rounded-3xl bg-gradient-to-br ${plan.gradient} transform transition-all duration-500 hover:scale-105`}
              >
                <div className="bg-gray-900 rounded-3xl p-8 h-full">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                    {plan.popular && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-bold px-3 py-1 rounded-full uppercase">
                        Популярный
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-white mb-2">
                      {plan.price}
                      <span className="text-xl text-gray-400">/мес</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#contact"
                    className={`block w-full text-center px-6 py-4 font-bold rounded-full transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-lg hover:shadow-orange-500/30'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    Выбрать план
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact с анимированной формой */}
      <section id="contact" className="relative z-10 py-20 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Начни свой путь в IT
                </h2>
                <p className="text-gray-300 mb-8">
                  Оставь заявку и получи консультацию по подбору курса. Мы свяжемся с тобой в течение 15 минут.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 text-white">+7 (999) 123-45-67</div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 text-white">contact@coding-school.ru</div>
                  </div>
                </div>
              </div>
              
              <div className="p-12">
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Сообщение</label>
                    <textarea 
                      rows={4}
                      className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Ваше сообщение..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    Отправить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 px-6 bg-black/80 backdrop-blur text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                CodeMaster
              </h3>
              <p className="text-gray-500 mt-2">Онлайн-школа программирования</p>
            </div>
            
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all"
                  aria-label={social.name}
                >
                  <div className="text-xl text-white">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500">
            <p>© 2025 Онлайн-школа программирования. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Глобальные стили для анимаций */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInDown 1s ease-out forwards;
          animation-name: fadeInDown;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 2s ease infinite;
        }
      `}</style>
    </main>
  )
}