import { Satellite, ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <iframe
        src="https://my.spline.design/earthdayandnight-4E5blT3ONRonq3Fh1pjKdCBW/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute inset-0 w-full h-full scale-150"
        title="3D Earth Animation"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-10" />

      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <Satellite className="w-8 h-8 text-cyan-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Orbital Lab
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-cyan-400 transition-colors">
            Возможности
          </a>
          <a href="#stats" className="hover:text-cyan-400 transition-colors">
            Статистика
          </a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            О проекте
          </a>
          <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-full transition-colors">
            Начать
          </button>
        </div>
      </nav>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-sm">Учебно-практический проект</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
            Orbital Lab
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Симулятор орбитального трафика
        </p>

        <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
          Отработка алгоритмов, архитектуры и инженерных практик на реальной космической задаче.
          Создавайте орбиты, симулируйте движение спутников и анализируйте трафик в реальном времени.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
            Запустить симуляцию
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full font-semibold transition-all">
            Документация
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-400">10K+</div>
            <div className="text-sm text-gray-400 mt-1">Объектов на орбите</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">50+</div>
            <div className="text-sm text-gray-400 mt-1">Алгоритмов</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">99.9%</div>
            <div className="text-sm text-gray-400 mt-1">Точность</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
