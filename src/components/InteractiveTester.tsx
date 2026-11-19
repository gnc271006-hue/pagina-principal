import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, CheckCircle, Sparkles, Volume2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { interactiveExercises } from '../data/content';

interface InteractiveTesterProps {
  onOpenCheckout: () => void;
}

export const InteractiveTester: React.FC<InteractiveTesterProps> = ({ onOpenCheckout }) => {
  const [selectedExIndex, setSelectedExIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(interactiveExercises[0].duration);
  const [completed, setCompleted] = useState(false);

  const currentExercise = interactiveExercises[selectedExIndex];

  // Reset when exercise changes
  const handleSelectExercise = (idx: number) => {
    setSelectedExIndex(idx);
    setIsRunning(false);
    setTimeLeft(interactiveExercises[idx].duration);
    setCompleted(false);
  };

  useEffect(() => {
    let interval: any = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setCompleted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {
        // fail gracefully if confetti not supported
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(currentExercise.duration);
    setCompleted(false);
  };

  const progressPercent = Math.round(
    ((currentExercise.duration - timeLeft) / currentExercise.duration) * 100
  );

  return (
    <section id="exercicios" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Demonstração Interativa ao Vivo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Experimente 1 Exercício Agora Mesmo
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Sinta na prática como os exercícios orofaríngeos ativam os músculos certos em menos de 15 segundos.
          </p>
        </div>

        {/* Exercise Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {interactiveExercises.map((ex, idx) => (
            <button
              key={ex.id}
              onClick={() => handleSelectExercise(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedExIndex === idx
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-102'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{ex.title.split(':')[0]}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${selectedExIndex === idx ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-200 text-slate-600'}`}>
                {ex.target}
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Box */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Instructions */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  Foco: {currentExercise.target}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {currentExercise.title}
                </h3>
                <p className="text-emerald-400 text-xs sm:text-sm font-medium mt-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> {currentExercise.benefit}
                </p>
              </div>

              {/* Steps list */}
              <div className="space-y-2.5">
                {currentExercise.steps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3 text-xs sm:text-sm text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-indigo-500 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {sIdx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Timer & Interactive Control */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-6">
                {/* SVG Progress Circle */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-slate-800"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray={264}
                    strokeDashoffset={264 - (264 * progressPercent) / 100}
                    strokeLinecap="round"
                    className="text-emerald-500 transition-all duration-300"
                    fill="transparent"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
                    {timeLeft}s
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold mt-1">
                    {completed ? 'Concluído!' : isRunning ? 'Executando...' : 'Pronto'}
                  </span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3 w-full justify-center">
                {!completed ? (
                  <button
                    onClick={() => setIsRunning(!isRunning)}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black py-3 px-5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20 active:scale-95 text-sm"
                  >
                    {isRunning ? (
                      <>
                        <Pause className="w-4 h-4 fill-slate-950" /> Pausar
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-slate-950" /> Iniciar Exercício ({currentExercise.duration}s)
                      </>
                    )}
                  </button>
                ) : (
                  <div className="w-full space-y-2 text-center">
                    <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Excelente! Você completou o movimento.
                    </div>
                    <button
                      onClick={onOpenCheckout}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:brightness-105 active:scale-95"
                    >
                      <span>Quero os 7 Dias Completos</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <button
                  onClick={handleReset}
                  title="Reiniciar tempo"
                  className="p-3 bg-white/10 hover:bg-white/20 text-slate-300 rounded-xl transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
