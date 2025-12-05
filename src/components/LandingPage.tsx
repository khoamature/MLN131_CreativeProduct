import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Church,
  Users,
  HandHeart,
  Coins,
  Brain,
  Heart,
  Calendar,
  UsersRound,
  Building2,
  Sparkles,
  Handshake,
  CircleAlert,
  Scale,
  Clover,
  Flag,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const LandingPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<number>>(
    new Set()
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Hero Slideshow State
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Gallery State
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState<number>(0);

  // Hero slides data
  const heroSlides = [
    {
      image: "/images/hero/slide1.jpg",
      title: "Chùa Việt Nam",
      subtitle: "Di sản văn hóa Phật giáo",
    },
    {
      image: "/images/hero/slide2.jpg",
      title: "Nhà thờ Công giáo",
      subtitle: "Kiến trúc tôn giáo Tây phương",
    },
    {
      image: "/images/hero/slide3.jpg",
      title: "Đền thờ tín ngưỡng",
      subtitle: "Tín ngưỡng dân gian Việt Nam",
    },
    {
      image: "/images/hero/slide4.png",
      title: "Cầu nguyện",
      subtitle: "Đời sống tâm linh",
    },
  ];

  // Gallery images data
  const galleryImages = [
    {
      src: "/images/gallery/gallery1.jpg",
      title: "Chùa Một Cột",
      location: "Hà Nội",
    },
    {
      src: "/images/gallery/gallery2.png",
      title: "Nhà thờ Đức Bà",
      location: "TP. Hồ Chí Minh",
    },
    {
      src: "/images/gallery/gallery3.jpg",
      title: "Thánh địa La Vang",
      location: "Quảng Trị",
    },
    {
      src: "/images/gallery/gallery4.jpg",
      title: "Chùa Bái Đính",
      location: "Ninh Bình",
    },
    {
      src: "/images/gallery/gallery5.png",
      title: "Thánh thất Cao Đài",
      location: "Tây Ninh",
    },
    {
      src: "/images/gallery/gallery6.png",
      title: "Lễ Phật Đản",
      location: "Việt Nam",
    },
    {
      src: "/images/gallery/gallery7.png",
      title: "Lễ Giáng sinh",
      location: "Việt Nam",
    },
  ];

  // Auto-play hero slideshow
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, heroSlides.length]);

  // Auto-play gallery
  useEffect(() => {
    const galleryInterval = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(galleryInterval);
  }, [galleryImages.length]);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(
                entry.target.getAttribute("data-index") || "0"
              );
              setVisibleElements((prev) => new Set(prev).add(index));
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      const elements = document.querySelectorAll("[data-animate]");
      elements.forEach((el) => observerRef.current?.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const nguonGocs = [
    {
      Icon: Coins,
      title: "Nguồn gốc Kinh tế - Xã hội",
      details: [
        "Xã hội nguyên thủy: Do lực lượng sản xuất thấp kém, con người yếu đuối trước thiên nhiên nên thần thánh hóa nó.",
        "Xã hội có giai cấp: Sự áp bức, bóc lột, bất công khiến con người tìm đến tôn giáo như sự giải phóng tinh thần.",
      ],
    },
    {
      Icon: Brain,
      title: "Nguồn gốc Nhận thức",
      details: [
        "Khi nhận thức còn giới hạn, những điều khoa học chưa giải thích được bị gán cho siêu nhiên.",
        "Thực chất là sự tuyệt đối hóa mặt chủ thể, biến cái khách quan thành cái siêu nhiên.",
      ],
    },
    {
      Icon: Heart,
      title: "Nguồn gốc Tâm lý",
      details: [
        "Sự sợ hãi (bệnh tật, rủi ro) hoặc nhu cầu được an ủi, bình yên.",
        "Cả tình cảm tích cực (lòng biết ơn, tôn kính tổ tiên/anh hùng) cũng là nguồn gốc.",
      ],
    },
  ];

  const nguyenTacs = [
    {
      title: "1. Tôn trọng, bảo đảm quyền tự do tín ngưỡng và không tín ngưỡng",
      content: [
        "Đây là quyền thuộc về ý thức tư tưởng.",
        "Nghiêm cấm mọi hành vi cấm đoán hoặc ép buộc. Nhà nước bảo hộ các tôn giáo hoạt động đúng pháp luật.",
      ],
    },
    {
      title: "2. Khắc phục ảnh hưởng tiêu cực gắn liền với cải tạo xã hội",
      content: [
        "Phải xác lập một thế giới hiện thực không còn áp bức, nghèo đói (nguồn gốc của ảo tưởng tôn giáo).",
        'Không dùng mệnh lệnh hành chính hay "tuyên chiến" với tôn giáo.',
      ],
    },
    {
      title: "3. Phân biệt hai mặt Chính trị và Tư tưởng",
      content: [
        "Mặt chính trị: Đấu tranh loại bỏ sự lợi dụng tôn giáo của các thế lực phản động.",
        "Mặt tư tưởng: Tôn trọng nhu cầu nội tâm, dùng giáo dục và vận động là chính.",
        "Hậu quả nếu không phân biệt: Dễ dẫn đến cực đoan (buông lỏng hoặc trấn áp thô bạo).",
      ],
    },
    {
      title: "4. Quan điểm lịch sử - cụ thể",
      content: [
        "Tôn giáo luôn vận động. Cần xem xét vai trò của từng tôn giáo trong từng giai đoạn cụ thể để ứng xử phù hợp, không rập khuôn.",
      ],
    },
  ];

  const cauTrucTonGiao = [
    {
      Icon: HandHeart,
      title: "Niềm tin",
      description: "Tin sâu sắc vào đấng siêu nhiên, thần linh",
      image: "/images/structure/niem-tin.jpg",
    },
    {
      Icon: BookOpen,
      title: "Giáo thuyết",
      description: "Hệ thống giáo lý, giáo luật, lễ nghi",
      image: "/images/structure/giao-thuyet.jpg",
    },
    {
      Icon: Church,
      title: "Cơ sở thờ tự",
      description: "Nơi sinh hoạt tôn giáo",
      image: "/images/structure/co-so.jpg",
    },
    {
      Icon: Users,
      title: "Tổ chức nhân sự",
      description: "Hàng ngũ chức sắc, nhà tu hành quản lý việc đạo",
      image: "/images/structure/to-chuc.jpg",
    },
    {
      Icon: UsersRound,
      title: "Tín đồ",
      description: "Lực lượng quần chúng đông đảo tự nguyện tin theo",
      image: "/images/structure/tin-do.jpg",
    },
  ];

  const dacDiemVN = [
    {
      Icon: Flag,
      title: "Quốc gia đa tôn giáo",
      description: "Có nhiều loại hình tôn giáo, tín ngưỡng khác nhau.",
      image: "/images/vietnam/da-ton-giao.jpg",
    },
    {
      Icon: Clover,
      title: "Đa dạng, đan xen, hòa bình",
      description:
        "Chung sống hòa bình, không có xung đột hay chiến tranh tôn giáo.",
      image: "/images/vietnam/hoa-binh.jpg",
    },
    {
      Icon: Handshake,
      title: "Đồng hành cùng dân tộc",
      description: "Tín đồ phần lớn là nhân dân lao động, có lòng yêu nước.",
      image: "/images/vietnam/dong-hanh.jpg",
    },
    {
      Icon: Users,
      title: "Vai trò của chức sắc",
      description: "Có uy tín và ảnh hưởng lớn tới tín đồ.",
      image: "/images/vietnam/chuc-sac.jpg",
    },
    {
      Icon: Globe,
      title: "Quan hệ quốc tế",
      description: "Có quan hệ rộng mở với các tổ chức tôn giáo thế giới.",
      image: "/images/vietnam/quoc-te.jpg",
    },
  ];

  const chinhSach = [
    {
      Icon: Sparkles,
      title: "Nhu cầu tinh thần",
      description:
        "Khẳng định tôn giáo là nhu cầu của một bộ phận nhân dân, tồn tại lâu dài cùng CNXH.",
    },
    {
      Icon: Handshake,
      title: "Đại đoàn kết",
      description: "Thực hiện nhất quán chính sách đại đoàn kết dân tộc.",
    },
    {
      Icon: Users,
      title: "Vận động quần chúng",
      description: "Là nội dung cốt lõi của công tác tôn giáo.",
    },
    {
      Icon: Building2,
      title: "Trách nhiệm hệ thống",
      description: "Là trách nhiệm của toàn bộ hệ thống chính trị.",
    },
    {
      Icon: Scale,
      title: "Tuân thủ pháp luật",
      description: "Việc theo đạo và truyền đạo phải tuân thủ pháp luật.",
    },
  ];

  const [activeNguonGoc, setActiveNguonGoc] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf8f3] to-[#f0e9dc]">
      {/* Hero Section with Slideshow */}
      <header className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(139, 111, 71, 0.7), rgba(160, 130, 109, 0.7)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-3 sm:px-4">
          <div className="max-w-6xl mx-auto text-center animate-fadeIn">
            <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-lg sm:text-2xl font-semibold hover:scale-105 transition-transform">
              Chương VI - Triết Học Mác - Lênin
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-6 drop-shadow-2xl leading-tight">
              Tôn Giáo Trong Thời Kỳ Quá Độ
            </h1>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-6 drop-shadow-2xl leading-tight">
              Lên Chủ Nghĩa Xã Hội
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Vấn đề Dân tộc và Tôn giáo theo quan điểm Chủ nghĩa Mác - Lênin
            </p>

            {/* Slide Info */}
            <div className="mt-4 sm:mt-8 text-base sm:text-lg font-semibold">
              <p>{heroSlides[currentSlide].title}</p>
              <p className="text-xs sm:text-sm text-gray-200">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            setIsAutoPlaying(false);
            setCurrentSlide(
              (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
            );
          }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          onClick={() => {
            setIsAutoPlaying(false);
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
          }}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </header>

      {/* Decorative Side Elements */}
      <div className="fixed left-0 top-1/4 w-32 h-96 pointer-events-none z-0 hidden lg:block">
        <div className="absolute top-0 left-4 w-20 h-20 border-2 border-[#8b6f47]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-24 -left-4 w-32 h-32 border-2 border-[#b89968]/15 rounded-full"></div>
        <div className="absolute top-48 left-8 w-12 h-12 bg-gradient-to-br from-[#8b6f47]/10 to-[#b89968]/10 rounded-full"></div>
        <div className="absolute top-72 left-2 w-16 h-16 border-2 border-dashed border-[#d4a373]/20 rounded-lg rotate-45"></div>
        <div className="absolute top-20 left-16 w-2 h-2 bg-[#8b6f47]/30 rounded-full"></div>
        <div className="absolute top-40 left-6 w-3 h-3 bg-[#b89968]/25 rounded-full"></div>
        <div className="absolute top-64 left-20 w-2 h-2 bg-[#d4a373]/30 rounded-full"></div>
      </div>

      <div className="fixed right-0 top-1/3 w-32 h-96 pointer-events-none z-0 hidden lg:block">
        <div className="absolute top-0 right-4 w-24 h-24 border-2 border-[#b89968]/15 rounded-full"></div>
        <div className="absolute top-28 right-8 w-16 h-16 border-2 border-[#8b6f47]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-52 -right-2 w-28 h-28 border-2 border-[#d4a373]/10 rounded-full"></div>
        <div className="absolute top-80 right-6 w-14 h-14 bg-gradient-to-br from-[#b89968]/10 to-[#8b6f47]/10 rounded-full"></div>
        <div className="absolute top-16 right-20 w-2 h-2 bg-[#8b6f47]/25 rounded-full"></div>
        <div className="absolute top-44 right-4 w-3 h-3 bg-[#b89968]/30 rounded-full"></div>
        <div className="absolute top-68 right-16 w-2 h-2 bg-[#d4a373]/25 rounded-full"></div>
        <div className="absolute top-36 right-12 w-10 h-10 border-2 border-dashed border-[#8b6f47]/15 rounded-lg -rotate-12"></div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="fixed left-0 bottom-1/4 w-32 h-64 pointer-events-none z-0 hidden lg:block">
        <div className="absolute bottom-0 left-6 w-18 h-18 border-2 border-[#d4a373]/20 rounded-full"></div>
        <div className="absolute bottom-20 left-2 w-8 h-8 bg-gradient-to-br from-[#8b6f47]/15 to-transparent rounded-full"></div>
        <div className="absolute bottom-40 left-10 w-12 h-12 border-2 border-dashed border-[#b89968]/15 rounded-full"></div>
      </div>

      <div className="fixed right-0 bottom-1/3 w-32 h-64 pointer-events-none z-0 hidden lg:block">
        <div className="absolute bottom-0 right-8 w-16 h-16 border-2 border-[#8b6f47]/15 rounded-full"></div>
        <div className="absolute bottom-24 right-4 w-10 h-10 bg-gradient-to-br from-[#b89968]/10 to-transparent rounded-full"></div>
        <div className="absolute bottom-48 right-12 w-14 h-14 border-2 border-dashed border-[#d4a373]/20 rounded-lg rotate-12"></div>
      </div>

      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 pb-8 relative z-10">
        {/* SECTION I: Quan điểm CNML về tôn giáo */}
        <div className="mb-32">
          <div
            data-animate
            data-index={1}
            className={`text-center mb-8 sm:mb-12 md:mb-16 ${
              visibleElements.has(1) ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8b6f47] mb-3 sm:mb-4 px-2">
              I. QUAN ĐIỂM CỦA CHỦ NGHĨA MÁC - LÊNIN VỀ TÔN GIÁO
            </h1>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#8b6f47] to-[#b89968] mx-auto rounded-full"></div>
          </div>

          {/* Bản chất tôn giáo */}
          <section className="mb-20">
            <div
              data-animate
              data-index={30}
              className={`bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 border border-[#d4a373] hover:shadow-3xl transition-shadow ${
                visibleElements.has(30)
                  ? "animate-slideUp"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center mb-8">
                <div className="w-2 h-16 bg-gradient-to-b from-[#8b6f47] to-[#b89968] rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-[#8b6f47]">
                  A. Bản Chất, Cấu Trúc và Nguồn Gốc Tôn Giáo
                </h2>
              </div>

              {/* Lưu ý Box */}
              <div className="mb-8 bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start">
                  <CircleAlert className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-amber-800 mb-3">
                      Lưu ý: Phân biệt rõ ràng
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong className="text-amber-700">• Tôn giáo:</strong>{" "}
                        Hệ thống niềm tin có tổ chức, giáo lý, giáo hội rõ ràng
                        (Phật giáo, Thiên chúa giáo...)
                      </p>
                      <p>
                        <strong className="text-amber-700">
                          • Tín ngưỡng:
                        </strong>{" "}
                        Niềm tin dân gian, truyền thống (thờ cúng tổ tiên, tín
                        ngưỡng thờ Mẫu...)
                      </p>
                      <p>
                        <strong className="text-amber-700">
                          • Mê tín dị đoan:
                        </strong>{" "}
                        Niềm tin phi lý, không có cơ sở khoa học, cản trở sự
                        phát triển
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div
                  data-animate
                  data-index={31}
                  className={`bg-gradient-to-r from-[#faf8f3] to-[#f0e9dc] rounded-2xl border-l-4 border-[#8b6f47] shadow-md hover:shadow-lg transition-shadow overflow-hidden ${
                    visibleElements.has(31) ? "animate-fadeIn" : "opacity-0"
                  }`}
                >
                  {/* Image Banner */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src="/images/sections/ban-chat.png"
                      alt="Bản chất tôn giáo"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8b6f47] to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-3xl font-bold text-white drop-shadow-lg flex items-center">
                        1. Bản chất của tôn giáo
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        <strong className="text-[#8b6f47]">
                          • Góc độ Triết học:
                        </strong>{" "}
                        Tôn giáo là một hình thái ý thức xã hội phản ánh hiện
                        thực khách quan, nhưng đó là sự{" "}
                        <span className="font-semibold text-amber-700">
                          "phản ánh hư ảo"
                        </span>{" "}
                        - không đúng với bản chất khách quan của sự vật, hiện
                        tượng.
                      </p>
                      <blockquote className="italic bg-white p-5 rounded-xl border-l-4 border-[#b89968] my-4 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-gray-600 mb-2">
                          "Tất cả mọi tôn giáo chẳng qua chỉ là sự phản ánh hư
                          ảo - vào trong đầu óc của con người - của những lực
                          lượng ở bên ngoài chi phối cuộc sống hàng ngày của họ,
                          sự phản ánh mà ở đó các lực lượng trần gian mang hình
                          thức các lực lượng ngoài trần gian."
                        </p>
                        <cite className="text-[#8b6f47] font-semibold not-italic">
                          – Ph. Ăngghen
                        </cite>
                      </blockquote>
                      <p>
                        <strong className="text-[#8b6f47]">
                          • Góc độ Thế giới quan:
                        </strong>{" "}
                        Tôn giáo mang thế giới quan duy tâm, trái ngược với thế
                        giới quan duy vật biện chứng của chủ nghĩa Mác - Lênin.
                        Đây là sự khác biệt cơ bản về nhận thức và phương pháp
                        luận.
                      </p>
                      <p>
                        <strong className="text-[#8b6f47]">
                          • Góc độ Nguồn gốc sáng tạo:
                        </strong>{" "}
                        Tôn giáo là sản phẩm do con người sáng tạo ra để đáp ứng
                        nhu cầu tâm linh, giải thích thế giới và tìm kiếm sự an
                        ủi. Tuy nhiên, sau khi hình thành, con người lại trở nên
                        lệ thuộc vào các giáo lý và nghi lễ tôn giáo.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  data-animate
                  data-index={32}
                  className={`bg-gradient-to-r from-[#f0e9dc] to-[#e8d5b7] p-8 rounded-2xl border-l-4 border-[#a0826d] shadow-md hover:shadow-lg transition-shadow ${
                    visibleElements.has(32) ? "animate-fadeIn" : "opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-[#8b6f47] mb-4 flex items-center">
                    2. Cấu trúc của tôn giáo
                  </h3>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Một tôn giáo hình thành khi có đủ 5 yếu tố cơ bản sau:
                  </p>

                  {/* Tree Structure - 5 cards */}
                  <div className="flex flex-col items-center">
                    {/* Root - Tôn giáo */}
                    <div className="bg-gradient-to-br from-[#8b6f47] to-[#a0826d] text-white px-8 py-4 rounded-xl shadow-lg font-bold text-lg mb-6 flex items-center hover:scale-105 transition-transform">
                      TÔN GIÁO
                    </div>

                    {/* Connecting Line */}
                    <div className="w-1 h-8 bg-[#a0826d] hidden lg:block"></div>

                    {/* Horizontal Branch Line */}
                    <div className="relative w-full">
                      {/* Main horizontal line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#a0826d] hidden lg:block"></div>

                      {/* 5 Vertical connectors */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-3 relative">
                        {cauTrucTonGiao.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center"
                          >
                            <div className="w-1 h-8 bg-[#a0826d] hidden lg:block"></div>
                            <div
                              data-animate
                              data-index={33 + index}
                              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all border-2 border-[#e8d5b7] hover:border-[#8b6f47] text-center w-full h-full overflow-hidden flex flex-col ${
                                visibleElements.has(33 + index)
                                  ? "animate-slideUp"
                                  : "opacity-0 translate-y-8"
                              }`}
                            >
                              {/* Card Image */}
                              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                              </div>

                              {/* Card Content */}
                              <div className="p-3 sm:p-4 md:p-6 flex-grow flex flex-col">
                                <p className="font-bold text-[#8b6f47] mb-2 text-base sm:text-lg">
                                  {item.title}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-600 flex-grow">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nguồn gốc với Tabs */}
                <div
                  data-animate
                  data-index={40}
                  className={`bg-gradient-to-r from-[#faf8f3] to-[#f0e9dc] p-8 rounded-2xl border-l-4 border-[#8b6f47] shadow-md hover:shadow-lg transition-shadow ${
                    visibleElements.has(40) ? "animate-fadeIn" : "opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-[#8b6f47] mb-6 flex items-center">
                    3. Nguồn gốc của tôn giáo
                  </h3>

                  {/* Tab Navigation */}
                  <div className="flex gap-2 mb-6 border-b-2 border-[#e8d5b7]">
                    {nguonGocs.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveNguonGoc(index)}
                        className={`px-6 py-3 font-semibold rounded-t-lg transition-all ${
                          activeNguonGoc === index
                            ? "bg-[#8b6f47] text-white shadow-lg"
                            : "bg-white/50 text-[#8b6f47] hover:bg-white hover:shadow"
                        }`}
                      >
                        {item.title.replace("Nguồn gốc ", "")}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="bg-white p-6 rounded-xl shadow-inner">
                    <h4 className="text-xl font-bold text-[#8b6f47] mb-4 flex items-center">
                      {React.createElement(nguonGocs[activeNguonGoc].Icon, {
                        className: "w-7 h-7 mr-2 text-[#8b6f47]",
                      })}
                      <span>{nguonGocs[activeNguonGoc].title}</span>
                    </h4>
                    <ul className="space-y-3">
                      {nguonGocs[activeNguonGoc].details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-700 leading-relaxed"
                        >
                          <span className="text-[#8b6f47] mr-2 font-bold">
                            •
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tính chất */}
          <section className="mb-20">
            <div
              data-animate
              data-index={50}
              className={`bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 border border-[#d4a373] hover:shadow-3xl transition-shadow ${
                visibleElements.has(50)
                  ? "animate-slideUp"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center mb-8">
                <div className="w-2 h-16 bg-gradient-to-b from-[#8b6f47] to-[#b89968] rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-[#8b6f47]">
                  B. Tính Chất Của Tôn Giáo
                </h2>
              </div>
              <div className="space-y-6">
                <div
                  data-animate
                  data-index={51}
                  className={`flex items-start space-x-4 p-6 bg-gradient-to-r from-[#faf8f3] to-[#f0e9dc] rounded-xl shadow-md border-l-4 border-[#b89968] hover:shadow-lg transition-all ${
                    visibleElements.has(51)
                      ? "animate-slideUp"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <Calendar className="w-10 h-10 text-[#8b6f47] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl text-[#8b6f47] mb-2">
                      Tính lịch sử
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Tôn giáo sinh ra, tồn tại, phát triển và có thể mất đi
                      theo các giai đoạn lịch sử. Khi điều kiện kinh tế - xã hội
                      thay đổi, vai trò và hình thức của tôn giáo cũng biến đổi
                      theo.
                    </p>
                  </div>
                </div>
                <div
                  data-animate
                  data-index={52}
                  className={`flex items-start space-x-4 p-6 bg-gradient-to-r from-[#f0e9dc] to-[#e8d5b7] rounded-xl shadow-md border-l-4 border-[#a0826d] hover:shadow-lg transition-all ${
                    visibleElements.has(52)
                      ? "animate-slideUp"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <UsersRound className="w-10 h-10 text-[#8b6f47] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl text-[#8b6f47] mb-2">
                      Tính quần chúng
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Tôn giáo là nơi sinh hoạt văn hóa, tinh thần của đông đảo
                      nhân dân. Trên thế giới, có khoảng{" "}
                      <strong className="text-[#8b6f47]">3/4 dân số</strong>{" "}
                      theo một tôn giáo nào đó, thể hiện tầm ảnh hưởng sâu rộng
                      của tôn giáo.
                    </p>
                  </div>
                </div>
                <div
                  data-animate
                  data-index={53}
                  className={`flex items-start space-x-4 p-6 bg-gradient-to-r from-[#e8d5b7] to-[#d4a373] rounded-xl shadow-md border-l-4 border-[#8b6f47] hover:shadow-lg transition-all ${
                    visibleElements.has(53)
                      ? "animate-slideUp"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <Building2 className="w-10 h-10 text-[#8b6f47] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl text-[#8b6f47] mb-2">
                      Tính chính trị
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Tính chất này chỉ xuất hiện khi xã hội có giai cấp. Tôn
                      giáo phản ánh đấu tranh giai cấp và{" "}
                      <strong className="text-amber-700">
                        có thể bị lợi dụng
                      </strong>{" "}
                      cho mục đích chính trị, gây chia rẽ hoặc đối lập xã hội.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Nguyên tắc giải quyết */}
          <section className="mb-20">
            <div
              data-animate
              data-index={60}
              className={`bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 border border-[#d4a373] hover:shadow-3xl transition-shadow ${
                visibleElements.has(60)
                  ? "animate-slideUp"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center mb-10">
                <div className="w-2 h-16 bg-gradient-to-b from-[#8b6f47] to-[#b89968] rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-[#8b6f47]">
                  C. Nguyên Tắc Giải Quyết Vấn Đề Tôn Giáo
                </h2>
              </div>
              <div className="space-y-4">
                {nguyenTacs.map((item, index) => (
                  <div
                    key={index}
                    data-animate
                    data-index={10 + index}
                    className={`border-2 border-[#e8d5b7] rounded-2xl overflow-hidden hover:border-[#8b6f47] transition-all ${
                      visibleElements.has(10 + index)
                        ? "animate-fadeIn"
                        : "opacity-0"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-5 bg-gradient-to-r from-[#8b6f47] to-[#a0826d] text-white font-semibold text-left flex justify-between items-center hover:from-[#7a5f3f] hover:to-[#8f7360] transition-all"
                    >
                      <span className="flex-1 pr-4">{item.title}</span>
                      <span
                        className="text-3xl font-light transition-transform duration-300"
                        style={{
                          transform:
                            activeAccordion === index
                              ? "rotate(180deg)"
                              : "rotate(0)",
                        }}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeAccordion === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 py-5 bg-gradient-to-r from-[#faf8f3] to-[#f0e9dc]">
                        <ul className="space-y-3">
                          {item.content.map((text, i) => (
                            <li
                              key={i}
                              className="text-gray-700 flex items-start leading-relaxed"
                            >
                              <span className="text-[#8b6f47] mr-3 font-bold text-lg">
                                •
                              </span>
                              <span>{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* END SECTION I */}

        {/* GALLERY CAROUSEL */}
        <div className="mb-32">
          <section
            data-animate
            data-index={50}
            className={`bg-gradient-to-br from-[#8b6f47] via-[#a0826d] to-[#b89968] rounded-3xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden ${
              visibleElements.has(50) ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
            </div>

            <div className="relative z-10">
              {/* Gallery Title */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
                  Hình Ảnh Tôn Giáo Việt Nam
                </h2>
                <div className="w-32 h-1 bg-white mx-auto rounded-full"></div>
              </div>

              {/* Carousel Container */}
              <div className="relative max-w-6xl mx-auto">
                {/* Main Image Display */}
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={galleryImages[currentGalleryIndex].src}
                    alt={galleryImages[currentGalleryIndex].title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/1200x800/8b6f47/ffffff?text=Gallery+Image";
                    }}
                  />

                  {/* Image Overlay with Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      {galleryImages[currentGalleryIndex].title}
                    </h3>
                    <p className="text-white/90 text-lg drop-shadow-md">
                      {galleryImages[currentGalleryIndex].location}
                    </p>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => {
                      setCurrentGalleryIndex((prev) =>
                        prev === 0 ? galleryImages.length - 1 : prev - 1
                      );
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-4 rounded-full transition-all shadow-lg hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => {
                      setCurrentGalleryIndex((prev) =>
                        prev === galleryImages.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-4 rounded-full transition-all shadow-lg hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex justify-center gap-4 mt-8 overflow-x-auto pb-4">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentGalleryIndex(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition-all ${
                        index === currentGalleryIndex
                          ? "ring-4 ring-white shadow-2xl scale-110"
                          : "opacity-60 hover:opacity-100 hover:scale-105"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://via.placeholder.com/200x200/8b6f47/ffffff?text=" +
                            (index + 1);
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* END GALLERY */}

        {/* SECTION II: Tôn giáo ở Việt Nam */}
        <div className="mb-12">
          <div
            data-animate
            data-index={2}
            className={`text-center mb-16 ${
              visibleElements.has(2) ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            <h1 className="text-4xl font-bold text-[#8b6f47] mb-4">
              II. TÔN GIÁO Ở VIỆT NAM VÀ CHÍNH SÁCH HIỆN NAY
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#8b6f47] to-[#b89968] mx-auto rounded-full"></div>
          </div>

          {/* Tôn giáo ở Việt Nam */}
          <section className="mb-20">
            <div
              data-animate
              data-index={70}
              className={`bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 border border-[#d4a373] hover:shadow-3xl transition-shadow ${
                visibleElements.has(70)
                  ? "animate-slideUp"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center mb-12">
                <div className="w-2 h-16 bg-gradient-to-b from-[#8b6f47] to-[#b89968] rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-[#8b6f47]">
                  A. Đặc Điểm Tôn Giáo Ở Việt Nam
                </h2>
              </div>

              {/* Grid Layout - 3 cards first row, 2 cards centered second row */}
              <div className="space-y-6">
                {/* First row: 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {dacDiemVN.slice(0, 3).map((item, index) => (
                    <div
                      key={index}
                      data-animate
                      data-index={20 + index}
                      className={`group bg-white rounded-2xl overflow-hidden border-2 border-[#e8d5b7] hover:border-[#8b6f47] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 ${
                        visibleElements.has(20 + index)
                          ? "animate-slideUp"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {/* Card Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>

                      {/* Card Content */}
                      <div className="p-8">
                        <h4 className="text-xl font-bold text-[#8b6f47] mb-3">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second row: 2 cards centered */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                  {dacDiemVN.slice(3, 5).map((item, index) => (
                    <div
                      key={index + 3}
                      data-animate
                      data-index={23 + index}
                      className={`group bg-white rounded-2xl overflow-hidden border-2 border-[#e8d5b7] hover:border-[#8b6f47] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 ${
                        visibleElements.has(23 + index)
                          ? "animate-slideUp"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {/* Card Image */}
                      <div className="relative h-40 sm:h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>

                      {/* Card Content */}
                      <div className="p-4 sm:p-6 md:p-8">
                        <h4 className="text-lg sm:text-xl font-bold text-[#8b6f47] mb-2 sm:mb-3">
                          {item.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              data-animate
              data-index={80}
              className={`mt-12 bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 border border-[#d4a373] hover:shadow-3xl transition-shadow ${
                visibleElements.has(80)
                  ? "animate-slideUp"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center mb-10">
                <div className="w-2 h-16 bg-gradient-to-b from-[#8b6f47] to-[#b89968] rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-[#8b6f47]">
                  B. Chính Sách Của Đảng và Nhà Nước
                </h2>
              </div>

              {/* Timeline Layout */}
              <div className="space-y-6">
                {chinhSach.map((item, index) => (
                  <div
                    key={index}
                    data-animate
                    data-index={81 + index}
                    className={`group relative ${
                      visibleElements.has(81 + index)
                        ? "animate-fadeIn"
                        : "opacity-0"
                    }`}
                  >
                    <div className="flex gap-6">
                      {/* Icon Circle */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8b6f47] to-[#a0826d] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <item.Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="flex-grow bg-gradient-to-r from-[#faf8f3] to-[#f0e9dc] rounded-xl p-6 border-l-4 border-[#8b6f47] shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                        <h4 className="text-xl font-bold text-[#8b6f47] mb-3">
                          {item.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Connector Line */}
                    {index < chinhSach.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-6 bg-gradient-to-b from-[#8b6f47] to-[#b89968]"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* END SECTION II */}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#5a4536] to-[#8b6f47] text-white py-10 border-t-4 border-[#b89968]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg mb-2 font-semibold">
            Chương VI: Vấn đề Dân tộc và Tôn giáo
          </p>
          <p className="text-gray-300">
            Triết học Mác - Lênin • © Group5_3W_MLN131_03_TriLM32
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
