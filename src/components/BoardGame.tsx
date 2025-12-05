import React, { useState, useRef, useEffect } from "react";
import {
  Lock,
  Trophy,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { MILESTONES } from "../data/milestones";
import QuizModal from "./QuizModal";
import PuzzleModal from "./PuzzleModal";
import confetti from "canvas-confetti";

interface Checkpoint {
  id: number;
  name: string;
  region: string;
  description: string;
  position: { top: string; left: string };
  color: string;
}

const BoardGame: React.FC = () => {
  const [selectedCheckpoint, setSelectedCheckpoint] = useState<number | null>(
    null
  );
  const [showFlagVideo, setShowFlagVideo] = useState(false);
  const [completedCheckpoints, setCompletedCheckpoints] = useState<number[]>(
    []
  );
  const [showQuiz, setShowQuiz] = useState(false);
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [currentMilestone, setCurrentMilestone] = useState<number | null>(null);
  const [viewingImage, setViewingImage] = useState<{
    name: string;
    path: string;
    checkpointId: number;
  } | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (showFlagVideo) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((error) => {
          // Ignore play interruption errors
          console.log("Audio play interrupted:", error);
        });
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [showFlagVideo]);

  // Trigger confetti when all checkpoints are completed
  useEffect(() => {
    if (completedCheckpoints.length === 5) {
      const duration = 5000;
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

        // Fire from multiple positions
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [completedCheckpoints.length]);

  const checkpoints: Checkpoint[] = [
    {
      id: 1,
      name: "Hà Nội",
      region: "Vùng Đồng bằng sông Hồng",
      description:
        "Thủ đô, trung tâm văn hóa, nơi tập trung nhiều chùa chiền cổ (Phật giáo) và Nhà thờ lớn.",
      position: { top: "24%", left: "40%" },
      color: "#ef4444",
    },
    {
      id: 2,
      name: "Thừa Thiên Huế",
      region: "Vùng Duyên hải miền Trung",
      description:
        "Cố đô, cái nôi của Phật giáo Đàng Trong, nổi tiếng với văn hóa tâm linh.",
      position: { top: "43%", left: "53%" },
      color: "#f59e0b",
    },
    {
      id: 3,
      name: "Tây Nguyên",
      region: "Vùng Cao nguyên",
      description:
        "Đại diện cho văn hóa các dân tộc thiểu số, Nhà rông, sự phát triển của Công giáo và Tin lành trong đồng bào dân tộc.",
      position: { top: "60%", left: "65%" },
      color: "#10b981",
    },
    {
      id: 4,
      name: "TP. Hồ Chí Minh",
      region: "Vùng Đông Nam Bộ",
      description:
        "Trung tâm kinh tế, nơi giao thoa của rất nhiều tôn giáo (Công giáo, Phật giáo, Tin lành...).",
      position: { top: "71%", left: "50%" },
      color: "#3b82f6",
    },
    {
      id: 5,
      name: "An Giang / Cần Thơ",
      region: "Vùng Đồng bằng sông Cửu Long",
      description:
        "Vùng đất của các tôn giáo nội sinh (Phật giáo Hòa Hảo, Cao Đài), Hồi giáo (người Chăm) và Phật giáo Nam tông (người Khmer).",
      position: { top: "76%", left: "35%" },
      color: "#8b5cf6",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f1e8] to-[#e8e0d5] pt-20 pb-4 relative">
      {/* Decorative Side Elements - Always visible */}
      <div className="fixed left-0 top-1/4 w-32 h-96 pointer-events-none z-0 hidden lg:block">
        <div className="absolute top-0 left-4 w-20 h-20 border-2 border-amber-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-24 -left-4 w-32 h-32 border-2 border-yellow-500/15 rounded-full"></div>
        <div className="absolute top-48 left-8 w-12 h-12 bg-gradient-to-br from-amber-500/10 to-yellow-400/10 rounded-full"></div>
        <div className="absolute top-72 left-2 w-16 h-16 border-2 border-dashed border-amber-600/20 rounded-lg rotate-45"></div>
        <div className="absolute top-20 left-16 w-2 h-2 bg-amber-500/30 rounded-full"></div>
        <div className="absolute top-40 left-6 w-3 h-3 bg-yellow-500/25 rounded-full"></div>
        <div className="absolute top-64 left-20 w-2 h-2 bg-amber-600/30 rounded-full"></div>
      </div>

      <div className="fixed right-0 top-1/3 w-32 h-96 pointer-events-none z-0 hidden lg:block">
        <div className="absolute top-0 right-4 w-24 h-24 border-2 border-yellow-500/15 rounded-full"></div>
        <div className="absolute top-28 right-8 w-16 h-16 border-2 border-amber-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-52 -right-2 w-28 h-28 border-2 border-amber-500/10 rounded-full"></div>
        <div className="absolute top-80 right-6 w-14 h-14 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-full"></div>
        <div className="absolute top-16 right-20 w-2 h-2 bg-amber-500/25 rounded-full"></div>
        <div className="absolute top-44 right-4 w-3 h-3 bg-yellow-500/30 rounded-full"></div>
        <div className="absolute top-68 right-16 w-2 h-2 bg-amber-600/25 rounded-full"></div>
        <div className="absolute top-36 right-12 w-10 h-10 border-2 border-dashed border-yellow-500/15 rounded-lg -rotate-12"></div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="fixed left-0 bottom-1/4 w-32 h-64 pointer-events-none z-0 hidden lg:block">
        <div className="absolute bottom-0 left-6 w-18 h-18 border-2 border-amber-400/20 rounded-full"></div>
        <div className="absolute bottom-20 left-2 w-8 h-8 bg-gradient-to-br from-amber-500/15 to-transparent rounded-full"></div>
        <div className="absolute bottom-40 left-10 w-12 h-12 border-2 border-dashed border-yellow-500/15 rounded-full"></div>
      </div>

      <div className="fixed right-0 bottom-1/3 w-32 h-64 pointer-events-none z-0 hidden lg:block">
        <div className="absolute bottom-0 right-8 w-16 h-16 border-2 border-amber-500/15 rounded-full"></div>
        <div className="absolute bottom-24 right-4 w-10 h-10 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full"></div>
        <div className="absolute bottom-48 right-12 w-14 h-14 border-2 border-dashed border-amber-600/20 rounded-lg rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col mt-2 gap-3 pb-4">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
          {/* Left & Center: Map and Rules in same card */}
          <div className="flex-1 bg-white/90 backdrop-blur rounded-2xl lg:rounded-3xl shadow-2xl p-2 lg:p-4 border border-[#d4c4b0] flex flex-col sm:flex-row gap-2 lg:gap-4">
            {/* Map Section */}
            <div className="flex-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
              <div className="relative h-full flex items-center justify-center">
                {/* Map Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-full w-auto">
                  <img
                    src="/images/boardgame/map.png"
                    alt="Bản đồ Việt Nam"
                    className="h-full w-auto object-contain"
                  />

                  {/* Hoàng Sa - Đảo phía trên */}
                  <div
                    className="absolute group"
                    style={{
                      top: "33%",
                      right: "6%",
                    }}
                    onMouseEnter={() => setShowFlagVideo(true)}
                    onMouseLeave={() => setShowFlagVideo(false)}
                  >
                    <p className="text-xl font-bold text-white hover:cursor-pointer">
                      Hoàng Sa
                    </p>
                  </div>

                  {/* Trường Sa - Đảo phía dưới */}
                  <div
                    className="absolute group"
                    style={{
                      bottom: "25%",
                      right: "5%",
                    }}
                    onMouseEnter={() => setShowFlagVideo(true)}
                    onMouseLeave={() => setShowFlagVideo(false)}
                  >
                    <p className="text-xl font-bold text-white hover:cursor-pointer">
                      Trường Sa
                    </p>
                  </div>

                  {/* Checkpoints */}
                  {checkpoints.map((checkpoint) => {
                    const isCompleted = completedCheckpoints.includes(
                      checkpoint.id
                    );
                    const isUnlocked =
                      checkpoint.id === 1 ||
                      completedCheckpoints.includes(checkpoint.id - 1);

                    return (
                      <div
                        key={checkpoint.id}
                        className="absolute transform -translate-x-1/2 -translate-y-[90%] cursor-pointer group"
                        style={{
                          top: checkpoint.position.top,
                          left: checkpoint.position.left,
                        }}
                        onClick={() => {
                          if (!isUnlocked) return;
                          if (isCompleted) {
                            setSelectedCheckpoint(
                              selectedCheckpoint === checkpoint.id
                                ? null
                                : checkpoint.id
                            );
                          } else {
                            setCurrentMilestone(checkpoint.id);
                            setShowQuiz(true);
                          }
                        }}
                      >
                        {/* Checkpoint Flag */}
                        <div
                          className="relative"
                          style={{
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                          }}
                        >
                          {/* Vietnam Flag */}
                          <div
                            className={`relative w-8 h-8 ${
                              isCompleted
                                ? "animate-pulse"
                                : isUnlocked
                                ? "animate-bounce"
                                : "opacity-50"
                            }`}
                          >
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center text-xl"
                              style={{
                                background: isCompleted
                                  ? "linear-gradient(to bottom, #10b981 0%, #10b981 100%)"
                                  : isUnlocked
                                  ? "linear-gradient(to bottom, #da251d 0%, #da251d 100%)"
                                  : "linear-gradient(to bottom, #6b7280 0%, #6b7280 100%)",
                                border: isCompleted
                                  ? "2px solid #10b981"
                                  : "2px solid #ffcd00",
                              }}
                            >
                              {isCompleted ? "✓" : isUnlocked ? "⭐" : "🔒"}
                            </div>
                            {/* Number Badge */}
                            <div
                              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white font-bold text-[10px] shadow-lg"
                              style={{ backgroundColor: checkpoint.color }}
                            >
                              {checkpoint.id}
                            </div>
                          </div>
                        </div>

                        {/* Hover Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                          <div
                            className="px-3 py-1 rounded-lg text-white text-sm font-semibold shadow-lg"
                            style={{ backgroundColor: checkpoint.color }}
                          >
                            {checkpoint.name}{" "}
                            {isCompleted ? "✓" : isUnlocked ? "" : "🔒"}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Game Rules */}
            <div className="w-full sm:w-72 lg:w-80 overflow-y-auto max-h-[300px] sm:max-h-full">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-4 border-2 border-amber-200 shadow-md">
                <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
                  📜 Luật Chơi
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="leading-relaxed">
                    Chào mừng bạn đến với{" "}
                    <strong>
                      Hành trình Khám phá Tôn giáo & Tín ngưỡng Việt Nam
                    </strong>
                    ! Nhiệm vụ của bạn là chinh phục bản đồ hình chữ S qua 5
                    chặng đường lịch sử.
                  </p>

                  <div className="bg-white/70 rounded-lg p-3 border border-amber-200">
                    <p className="font-bold text-amber-900 mb-2">
                      🎯 Mục Tiêu:
                    </p>
                    <p>
                      Thu thập đủ 5 Bức tranh Bí ẩn tương ứng với 5 vùng miền để
                      giành chiến thắng.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-bold text-amber-900">🚀 Cách Chơi:</p>

                    <div className="pl-3 space-y-2">
                      <div>
                        <p className="font-semibold text-gray-800">
                          📍 Chọn Điểm Đến:
                        </p>
                        <p className="text-xs">
                          Bắt đầu hành trình từ Mốc số 1 trên bản đồ.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-800">
                          🧠 Thử Thách Trí Tuệ (Quiz):
                        </p>
                        <ul className="text-xs list-disc pl-4 space-y-1">
                          <li>Mỗi mốc có 09 câu hỏi trắc nghiệm</li>
                          <li>
                            Quy tắc khắc nghiệt: Trả lời đúng 9/9 câu liên tiếp
                          </li>
                          <li className="text-red-600 font-semibold">
                            ⚠️ Sai 1 câu = Làm lại từ đầu!
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-800">
                          🧩 Ghép Tranh (Puzzle):
                        </p>
                        <p className="text-xs">
                          Sau khi vượt qua Quiz, nhận 9 mảnh ghép và sắp xếp
                          thành bức tranh hoàn chỉnh.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-800">
                          🏆 Nhận Thưởng & Đi Tiếp:
                        </p>
                        <ul className="text-xs list-disc pl-4 space-y-1">
                          <li>Hoàn thành bức tranh để mở khóa Mốc tiếp theo</li>
                          <li>Bức tranh được lưu vào Bộ sưu tập của bạn</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Collection Section */}
          <div className="hidden lg:flex w-80 flex-col gap-3">
            {/* Collection Section */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border-2 border-purple-200 shadow-md">
              <h3 className="text-lg font-bold text-purple-800 mb-3 flex items-center gap-2">
                🖼️ Bộ Sưu Tập
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {checkpoints.map((checkpoint) => {
                  const isCompleted = completedCheckpoints.includes(
                    checkpoint.id
                  );
                  const milestone = MILESTONES.find(
                    (m) => m.id === checkpoint.id
                  );

                  return (
                    <div
                      key={checkpoint.id}
                      className={`aspect-square rounded-lg border-2 border-dashed border-gray-300 bg-white/50 flex items-center justify-center overflow-hidden ${
                        isCompleted && milestone
                          ? "cursor-pointer hover:scale-105 transition-transform"
                          : ""
                      }`}
                      onClick={() => {
                        if (isCompleted && milestone) {
                          setViewingImage({
                            name: checkpoint.name,
                            path: milestone.puzzleImage,
                            checkpointId: checkpoint.id,
                          });
                        }
                      }}
                    >
                      {isCompleted && milestone ? (
                        <img
                          src={milestone.puzzleImage}
                          alt={checkpoint.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center">
                          <Lock className="w-8 h-8 mx-auto mb-1 text-gray-400" />
                          <p className="text-xs text-gray-500 font-semibold">
                            Mốc {checkpoint.id}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 bg-white/50 flex items-center justify-center">
                  <div className="text-center">
                    <Trophy
                      className={`w-8 h-8 mx-auto mb-1 ${
                        completedCheckpoints.length === 5
                          ? "text-yellow-500 animate-pulse"
                          : "text-gray-400"
                      }`}
                    />
                    <p className="text-xs text-gray-500 font-semibold">
                      {completedCheckpoints.length === 5
                        ? "Hoàn thành!"
                        : "Hoàn thành"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collection Section for Mobile/Tablet - Below map */}
        <div className="lg:hidden bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border-2 border-purple-200 shadow-md">
          <h3 className="text-lg font-bold text-purple-800 mb-3 flex items-center gap-2">
            🖼️ Bộ Sưu Tập
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {checkpoints.map((checkpoint) => {
              const isCompleted = completedCheckpoints.includes(checkpoint.id);
              const milestone = MILESTONES.find((m) => m.id === checkpoint.id);

              return (
                <div
                  key={checkpoint.id}
                  className={`aspect-square rounded-lg border-2 border-dashed border-gray-300 bg-white/50 flex items-center justify-center overflow-hidden ${
                    isCompleted && milestone
                      ? "cursor-pointer hover:scale-105 transition-transform"
                      : ""
                  }`}
                  onClick={() => {
                    if (isCompleted && milestone) {
                      setViewingImage({
                        name: checkpoint.name,
                        path: milestone.puzzleImage,
                        checkpointId: checkpoint.id,
                      });
                    }
                  }}
                >
                  {isCompleted && milestone ? (
                    <img
                      src={milestone.puzzleImage}
                      alt={checkpoint.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <Lock className="w-8 h-8 mx-auto mb-1 text-gray-400" />
                      <p className="text-xs text-gray-500 font-semibold">
                        Mốc {checkpoint.id}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
            <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 bg-white/50 flex items-center justify-center">
              <div className="text-center">
                <Trophy
                  className={`w-8 h-8 mx-auto mb-1 ${
                    completedCheckpoints.length === 5
                      ? "text-yellow-500 animate-pulse"
                      : "text-gray-400"
                  }`}
                />
                <p className="text-xs text-gray-500 font-semibold">
                  {completedCheckpoints.length === 5
                    ? "Hoàn thành!"
                    : "Hoàn thành"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flag Video Overlay - Full screen with opacity */}
      {showFlagVideo && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <video
            src="/videos/VietNam_Flag.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-40"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-20">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.9)] animate-wave px-4 text-center sm:whitespace-nowrap">
              Hoàng Sa - Trường Sa Là Của Việt Nam!
            </h1>
          </div>
          {/* Audio */}
          <audio ref={audioRef} src="/audios/music1.mp3" />
        </div>
      )}

      {/* Quiz Modal */}
      {showQuiz && currentMilestone !== null && (
        <QuizModal
          checkpointName={
            MILESTONES.find((m) => m.id === currentMilestone)?.name || ""
          }
          questions={
            MILESTONES.find((m) => m.id === currentMilestone)?.questions || []
          }
          onComplete={() => {
            setShowQuiz(false);
            setShowPuzzle(true);
          }}
          onClose={() => {
            setShowQuiz(false);
            setCurrentMilestone(null);
          }}
        />
      )}

      {/* Puzzle Modal */}
      {showPuzzle && currentMilestone !== null && (
        <PuzzleModal
          checkpointName={
            MILESTONES.find((m) => m.id === currentMilestone)?.name || ""
          }
          imagePath={
            MILESTONES.find((m) => m.id === currentMilestone)?.puzzleImage || ""
          }
          onComplete={() => {
            setCompletedCheckpoints([
              ...completedCheckpoints,
              currentMilestone,
            ]);
            setShowPuzzle(false);
            setCurrentMilestone(null);
          }}
          onClose={() => {
            setShowPuzzle(false);
            setCurrentMilestone(null);
          }}
        />
      )}

      {/* Image Viewer Modal */}
      {viewingImage &&
        (() => {
          const currentIndex = completedCheckpoints.findIndex(
            (id) => id === viewingImage.checkpointId
          );
          const totalCompleted = completedCheckpoints.length;

          const goToPrevious = () => {
            if (currentIndex > 0) {
              const prevCheckpointId = completedCheckpoints[currentIndex - 1];
              const prevCheckpoint = checkpoints.find(
                (c) => c.id === prevCheckpointId
              );
              const prevMilestone = MILESTONES.find(
                (m) => m.id === prevCheckpointId
              );
              if (prevCheckpoint && prevMilestone) {
                setViewingImage({
                  name: prevCheckpoint.name,
                  path: prevMilestone.puzzleImage,
                  checkpointId: prevCheckpointId,
                });
              }
            }
          };

          const goToNext = () => {
            if (currentIndex < totalCompleted - 1) {
              const nextCheckpointId = completedCheckpoints[currentIndex + 1];
              const nextCheckpoint = checkpoints.find(
                (c) => c.id === nextCheckpointId
              );
              const nextMilestone = MILESTONES.find(
                (m) => m.id === nextCheckpointId
              );
              if (nextCheckpoint && nextMilestone) {
                setViewingImage({
                  name: nextCheckpoint.name,
                  path: nextMilestone.puzzleImage,
                  checkpointId: nextCheckpointId,
                });
              }
            }
          };

          return (
            <div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4"
              onClick={() => setViewingImage(null)}
            >
              {/* Decorative Left Elements */}
              <div className="fixed left-0 top-1/4 w-32 h-96 pointer-events-none z-40 hidden lg:block">
                <div className="absolute top-0 left-4 w-20 h-20 border-2 border-amber-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-24 -left-4 w-32 h-32 border-2 border-yellow-500/20 rounded-full"></div>
                <div className="absolute top-48 left-8 w-12 h-12 bg-gradient-to-br from-amber-500/15 to-yellow-400/15 rounded-full"></div>
                <div className="absolute top-72 left-2 w-16 h-16 border-2 border-dashed border-amber-600/25 rounded-lg rotate-45"></div>
                <div className="absolute top-20 left-16 w-2 h-2 bg-amber-500/40 rounded-full"></div>
                <div className="absolute top-40 left-6 w-3 h-3 bg-yellow-500/35 rounded-full"></div>
                <div className="absolute top-64 left-20 w-2 h-2 bg-amber-600/40 rounded-full"></div>
              </div>

              {/* Decorative Right Elements */}
              <div className="fixed right-0 top-1/4 w-32 h-96 pointer-events-none z-40 hidden lg:block">
                <div className="absolute top-0 right-4 w-24 h-24 border-2 border-yellow-500/20 rounded-full"></div>
                <div className="absolute top-28 right-8 w-16 h-16 border-2 border-amber-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-52 -right-2 w-28 h-28 border-2 border-amber-500/15 rounded-full"></div>
                <div className="absolute top-80 right-6 w-14 h-14 bg-gradient-to-br from-yellow-500/15 to-amber-500/15 rounded-full"></div>
                <div className="absolute top-16 right-20 w-2 h-2 bg-amber-500/35 rounded-full"></div>
                <div className="absolute top-44 right-4 w-3 h-3 bg-yellow-500/40 rounded-full"></div>
                <div className="absolute top-68 right-16 w-2 h-2 bg-amber-600/35 rounded-full"></div>
                <div className="absolute top-36 right-12 w-10 h-10 border-2 border-dashed border-yellow-500/20 rounded-lg -rotate-12"></div>
              </div>

              <div
                className="relative w-full max-w-3xl z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-200 max-h-[95vh] sm:max-h-[90vh] flex flex-col">
                  {/* Header */}
                  <div className="flex-shrink-0 p-2 sm:p-3 md:p-4 bg-amber-600 text-white">
                    <h2 className="text-base sm:text-xl md:text-2xl font-bold text-center">
                      {viewingImage.name}
                    </h2>
                  </div>

                  {/* Image Container with Navigation */}
                  <div className="relative flex-1 bg-white flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden min-h-[250px] sm:min-h-[350px] md:min-h-[400px]">
                    <img
                      src={viewingImage.path}
                      alt={viewingImage.name}
                      className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-lg border border-gray-200"
                      style={{ maxHeight: "calc(95vh - 150px)" }}
                    />

                    {/* Previous Button - Inside modal */}
                    {totalCompleted > 1 && currentIndex > 0 && (
                      <button
                        onClick={goToPrevious}
                        className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
                        title="Ảnh trước"
                      >
                        <ChevronLeft
                          size={20}
                          className="text-gray-700 sm:w-6 sm:h-6"
                        />
                      </button>
                    )}

                    {/* Next Button - Inside modal */}
                    {totalCompleted > 1 &&
                      currentIndex < totalCompleted - 1 && (
                        <button
                          onClick={goToNext}
                          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
                          title="Ảnh tiếp theo"
                        >
                          <ChevronRight
                            size={20}
                            className="text-gray-700 sm:w-6 sm:h-6"
                          />
                        </button>
                      )}
                  </div>

                  {/* Footer */}
                  <div className="flex-shrink-0 p-2 sm:p-3 md:p-4 bg-amber-50 border-t border-amber-200 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
                    {totalCompleted > 1 && (
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">
                        {currentIndex + 1} / {totalCompleted}
                      </span>
                    )}
                    <a
                      href={viewingImage.path}
                      download={`${viewingImage.name}.png`}
                      className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-amber-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-amber-700 transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      <Download size={18} className="sm:w-5 sm:h-5" /> Tải về
                    </a>
                    <button
                      onClick={() => setViewingImage(null)}
                      className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-700 transition-all shadow-lg"
                    >
                      Đóng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
    </div>
  );
};

export default BoardGame;
