import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, RotateCcw, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';

interface QuizSectionProps {
  onOpenCheckout: () => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ onOpenCheckout }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      title: 'Com que frequência você ou alguém percebe que você ronca?',
      options: [
        { label: 'Raramente ou apenas quando estou muito cansado', points: 1 },
        { label: 'De 2 a 4 noites por semana', points: 2 },
        { label: 'Praticamente todas as noites sem interrupção', points: 3 }
      ]
    },
    {
      title: 'Você costuma acordar com a boca seca ou sensação de garganta arranhando?',
      options: [
        { label: 'Nunca, acordo respirando normalmente pelo nariz', points: 1 },
        { label: 'Às vezes, principalmente em noites mais secas ou frias', points: 2 },
        { label: 'Frequentemente, sempre preciso de um copo d\'água ao acordar', points: 3 }
      ]
    },
    {
      title: 'O barulho do seu ronco já atrapalhou o sono do seu parceiro(a)?',
      options: [
        { label: 'Não recebo reclamações frequentes', points: 1 },
        { label: 'Sim, a pessoa acorda assustada ou me cutuca para virar', points: 2 },
        { label: 'Sim, já chegamos ao ponto de cogitar ou usar quartos separados', points: 3 }
      ]
    },
    {
      title: 'Como você avalia sua disposição e energia durante o dia?',
      options: [
        { label: 'Acordo descansado e com energia constante', points: 1 },
        { label: 'Sinto quedas de energia no meio da tarde', points: 2 },
        { label: 'Acordo cansado como se não tivesse dormido nada', points: 3 }
      ]
    }
  ];

  const handleSelectOption = (points: number) => {
    const updated = [...answers, points];
    setAnswers(updated);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const totalPoints = answers.reduce((acc, p) => acc + p, 0);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">
            Autoavaliação Rápida (1 Minuto)
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Descubra o Nível do Seu Ronco
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Responda 4 perguntas simples para receber uma recomendação personalizada sobre como os exercícios ilustrados podem ajudar no seu caso.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl max-w-2xl mx-auto">
          {!showResult ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                  <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 leading-snug">
                {questions[currentQuestion].title}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentQuestion].options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(opt.points)}
                    className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 transition-all font-medium text-sm text-slate-800 flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt.label}</span>
                    <span className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-indigo-600 group-hover:bg-indigo-600 flex items-center justify-center shrink-0 ml-3">
                      <span className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Resultado da Sua Avaliação
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  {totalPoints >= 9
                    ? 'Indicação Alta para Fortalecimento Muscular Imediato'
                    : totalPoints >= 6
                    ? 'Nível Moderado: Início de Flacidez na Região Orofaríngea'
                    : 'Nível Inicial: Ideal para Prevenção e Hábitos Saudáveis'}
                </h3>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs sm:text-sm text-slate-700 space-y-2">
                <p>
                  <strong>Análise do Perfil:</strong> Seus sintomas apontam que a musculatura que sustenta a língua e o palato mole está relaxando além do normal durante a noite, gerando atrito e vibração sonora.
                </p>
                <p className="text-indigo-900 font-medium">
                  <strong>Recomendação:</strong> Praticar a rotina de 8 a 10 minutos diários do <em>Guia Ilustrado de Exercícios para o Ronco</em> para restaurar a tonicidade e melhorar a respiração nasal com o checklist noturno.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Acessar o Guia Indicado (R$ 29,90)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-4 py-3 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Refazer teste
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
