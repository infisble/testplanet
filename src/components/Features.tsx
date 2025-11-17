import { Orbit, Brain, LineChart, Database, Radar, GitBranch } from 'lucide-react';

function Features() {
  const features = [
    {
      icon: Orbit,
      title: 'Симуляция орбит',
      description: 'Моделирование движения спутников по различным орбитам с учётом гравитации и возмущений',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Brain,
      title: 'Алгоритмы предсказания',
      description: 'Машинное обучение для прогнозирования траекторий и предотвращения столкновений',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: LineChart,
      title: 'Анализ трафика',
      description: 'Визуализация и анализ движения объектов в режиме реального времени',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: Database,
      title: 'База данных объектов',
      description: 'Полный каталог спутников и космического мусора с историей перемещений',
      gradient: 'from-pink-500 to-red-600',
    },
    {
      icon: Radar,
      title: 'Детекция коллизий',
      description: 'Обнаружение потенциальных столкновений и расчёт манёвров уклонения',
      gradient: 'from-red-500 to-orange-600',
    },
    {
      icon: GitBranch,
      title: 'API интеграция',
      description: 'Открытый API для интеграции с внешними системами и сервисами',
      gradient: 'from-orange-500 to-cyan-600',
    },
  ];

  return (
    <section id="features" className="py-24 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 text-sm font-medium">Возможности платформы</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Инженерные инструменты
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              нового поколения
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Комплексная платформа для разработки, тестирования и внедрения алгоритмов управления орбитальным трафиком
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300" />

                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Готовы начать?</h3>
              <p className="text-gray-400">
                Присоединяйтесь к сообществу разработчиков и исследователей
              </p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 whitespace-nowrap">
              Создать аккаунт
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
