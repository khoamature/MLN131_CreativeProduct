import { useState, useEffect } from "react";
import { X } from "lucide-react";
import confetti from "canvas-confetti";

interface PuzzlePiece {
  id: number;
  currentPosition: number;
}

interface PuzzleModalProps {
  checkpointName: string;
  imagePath: string;
  onComplete: () => void;
  onClose: () => void;
}

export default function PuzzleModal({
  checkpointName,
  imagePath,
  onComplete,
  onClose,
}: PuzzleModalProps) {
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);

  useEffect(() => {
    // Initialize puzzle pieces (0-8) and shuffle them
    const initialPieces = Array.from({ length: 9 }, (_, i) => ({
      id: i,
      currentPosition: i,
    }));

    // Shuffle using Fisher-Yates algorithm
    const shuffled = [...initialPieces];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i].currentPosition;
      shuffled[i].currentPosition = shuffled[j].currentPosition;
      shuffled[j].currentPosition = temp;
    }

    setPieces(shuffled);
  }, []);

  const handlePieceClick = (pieceIndex: number) => {
    if (selectedPiece === null) {
      setSelectedPiece(pieceIndex);
    } else {
      // Swap pieces
      const newPieces = [...pieces];
      const temp = newPieces[selectedPiece].currentPosition;
      newPieces[selectedPiece].currentPosition =
        newPieces[pieceIndex].currentPosition;
      newPieces[pieceIndex].currentPosition = temp;
      setPieces(newPieces);
      setSelectedPiece(null);

      // Check if puzzle is solved
      const isSolved = newPieces.every(
        (piece) => piece.id === piece.currentPosition
      );
      if (isSolved) {
        // Confetti animation
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = {
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          zIndex: 9999,
        };

        const randomInRange = (min: number, max: number) => {
          return Math.random() * (max - min) + min;
        };

        const interval: any = setInterval(() => {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 50 * (timeLeft / duration);

          // Fire from left
          confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          });

          // Fire from right
          confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          });
        }, 250);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }
  };

  const getPieceStyle = (pieceId: number) => {
    const row = Math.floor(pieceId / 3);
    const col = pieceId % 3;
    return {
      backgroundImage: `url(${imagePath})`,
      backgroundSize: "300%",
      backgroundPosition: `${col * 50}% ${row * 50}%`,
    };
  };

  const isSolved = pieces.every((piece) => piece.id === piece.currentPosition);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg sm:rounded-xl max-w-lg w-full p-4 sm:p-6 relative shadow-2xl max-h-[95vh] overflow-y-auto z-50">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 pr-8">
            Ghép hình - {checkpointName}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600">
            Nhấp vào 2 mảnh để hoán đổi vị trí
          </p>
        </div>

        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-4 sm:mb-6 aspect-square">
          {pieces.map((piece, index) => (
            <button
              key={index}
              onClick={() => handlePieceClick(index)}
              className={`relative border-2 sm:border-4 rounded-md sm:rounded-lg transition-all overflow-hidden ${
                selectedPiece === index
                  ? "border-blue-500 scale-95"
                  : "border-gray-300 hover:border-blue-300"
              } ${isSolved ? "border-green-500" : ""}`}
              style={getPieceStyle(piece.currentPosition)}
            >
              <div className="absolute inset-0 hover:bg-white/10 transition-colors" />
            </button>
          ))}
        </div>

        {isSolved && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 text-center">
            <p className="text-green-700 font-semibold text-sm sm:text-base md:text-lg">
              🎉 Chúc mừng! Bạn đã hoàn thành ghép hình!
            </p>
          </div>
        )}

        {!isSolved && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 text-center">
            <p className="text-blue-700 text-xs sm:text-sm md:text-base">
              Hãy sắp xếp các mảnh ghép để tạo thành hình hoàn chỉnh
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
