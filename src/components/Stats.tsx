import { Activity, Cpu, Zap, Shield } from 'lucide-react';

function Stats() {
  const stats = [
    {
      icon: Activity,
      value: '12,845',
      label: 'Активных спутников',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
    },
    {
      icon: Cpu,
      value: '500+',
      label: 'Расчётов в секунду',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Zap,
      value: '<1ms',
      label: 'Задержка обработки',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Предотвращённых коллизий',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
  ];

  return (
    <section id="stats" className="py-24 px-8 bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Производительность в цифрах
          </h2>
          <p className="text-gray-400 text-lg">
            Реальные показатели системы орбитального мониторинга
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className={`${stat.bgColor} ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>

                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
