import { useState } from "react";
import { X, CheckCircle2, XCircle } from "lucide-react";
import { Question } from "../data/milestones";

interface QuizModalProps {
  checkpointName: string;
  questions: Question[];
  onComplete: () => void;
  onClose: () => void;
}

export default function QuizModal({
  checkpointName,
  questions,
  onComplete,
  onClose,
}: QuizModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (optionIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(optionIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    if (!correct) {
      // Wrong answer - restart quiz after delay
      setTimeout(() => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowResult(false);
      }, 2000);
    } else if (currentQuestionIndex === questions.length - 1) {
      // Last question and correct - complete quiz
      setTimeout(() => {
        onComplete();
      }, 1500);
    } else {
      // Correct - move to next question
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg sm:rounded-xl max-w-2xl w-full p-4 sm:p-6 relative shadow-2xl max-h-[95vh] overflow-y-auto z-50">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 pr-8">
            {checkpointName}
          </h2>
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Câu hỏi {currentQuestionIndex + 1}/{questions.length}
            </p>
            <div className="flex gap-1">
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-6 sm:w-8 h-1 rounded ${
                    idx < currentQuestionIndex
                      ? "bg-green-500"
                      : idx === currentQuestionIndex
                      ? "bg-blue-500"
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800 mb-3 sm:mb-4">
            {currentQuestion.question}
          </p>

          <div className="space-y-2 sm:space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? showResult
                      ? isCorrect
                        ? "border-green-500 bg-green-50"
                        : "border-red-500 bg-red-50"
                      : "border-blue-500 bg-blue-50"
                    : showResult && index === currentQuestion.correctAnswer
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm sm:text-base text-gray-800">
                    {option}
                  </span>
                  {showResult && (
                    <>
                      {selectedAnswer === index && (
                        <>
                          {isCorrect ? (
                            <CheckCircle2
                              className="text-green-500 flex-shrink-0"
                              size={20}
                            />
                          ) : (
                            <XCircle
                              className="text-red-500 flex-shrink-0"
                              size={20}
                            />
                          )}
                        </>
                      )}
                      {!isCorrect &&
                        index === currentQuestion.correctAnswer && (
                          <CheckCircle2
                            className="text-green-500 flex-shrink-0"
                            size={20}
                          />
                        )}
                    </>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {!showResult && (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className={`w-full py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors ${
              selectedAnswer !== null
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Xác nhận
          </button>
        )}

        {showResult && !isCorrect && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 text-center">
            <p className="text-red-700 text-sm sm:text-base font-semibold">
              Sai rồi! Quiz sẽ bắt đầu lại từ đầu...
            </p>
          </div>
        )}

        {showResult &&
          isCorrect &&
          currentQuestionIndex < questions.length - 1 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 text-center">
              <p className="text-green-700 text-sm sm:text-base font-semibold">
                ✓ Chính xác! Chuyển sang câu tiếp theo...
              </p>
            </div>
          )}

        {showResult &&
          isCorrect &&
          currentQuestionIndex === questions.length - 1 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 text-center">
              <p className="text-green-700 text-sm sm:text-base font-semibold">
                🎉 Chúc mừng! Bạn đã hoàn thành quiz!
              </p>
            </div>
          )}
      </div>
    </div>
  );
}
