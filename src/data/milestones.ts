export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Milestone {
  id: number;
  name: string;
  region: string;
  description: string;
  position: { top: string; left: string };
  color: string;
  puzzleImage: string;
  questions: Question[];
}

export const MILESTONES: Milestone[] = [
  {
    id: 1,
    name: "Hà Nội",
    region: "Vùng Đồng bằng sông Hồng",
    description:
      "Thủ đô, trung tâm văn hóa, nơi tập trung nhiều chùa chiền cổ (Phật giáo) và Nhà thờ lớn.",
    position: { top: "24%", left: "40%" },
    color: "#ef4444",
    puzzleImage: "/images/boardgame/hanoi.png",
    questions: [
      {
        id: 1,
        question: "Theo Ph. Ăngghen, bản chất cốt lõi của tôn giáo là gì?",
        options: [
          "A. Sự phản ánh trực tiếp và chính xác hiện thực khách quan",
          "B. Sự phản ánh hư ảo các lực lượng chi phối cuộc sống con người",
          "C. Sự sáng tạo nghệ thuật dựa trên trí tưởng tượng phong phú",
          "D. Hệ thống triết học giải thích nguồn gốc thế giới tự nhiên",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 2,
        question: "Xét về phương diện thế giới quan, tôn giáo đối lập với:",
        options: [
          "A. Chủ nghĩa duy tâm chủ quan",
          "B. Chủ nghĩa duy vật biện chứng",
          "C. Các hình thái ý thức xã hội khác",
          "D. Khoa học xã hội và nhân văn",
        ],
        correctAnswer: 1, // B (Đối lập với DVBC)
      },
      {
        id: 3,
        question:
          "Trong xã hội nguyên thủy, nguồn gốc kinh tế - xã hội của tôn giáo là:",
        options: [
          "A. Sự áp bức, bóc lột của giai cấp thống trị",
          "B. Sự phát triển mạnh mẽ của tư duy trừu tượng",
          "C. Sự bất lực của con người trước sức mạnh tự nhiên",
          "D. Nhu cầu giao lưu văn hóa giữa các bộ lạc",
        ],
        correctAnswer: 2, // C
      },
      {
        id: 4,
        question:
          "Khi xã hội có giai cấp, yếu tố nào là nguồn gốc sâu xa nảy sinh tôn giáo?",
        options: [
          "A. Sự nghèo nàn về đời sống vật chất",
          "B. Sự bần cùng hóa về văn hóa tinh thần",
          "C. Áp bức giai cấp và sự bất lực trước bất công xã hội",
          "D. Trình độ dân trí thấp kém và lạc hậu",
        ],
        correctAnswer: 2, // C
      },
      {
        id: 5,
        question: "Về mặt nhận thức, tôn giáo xuất hiện khi con người:",
        options: [
          "A. Tuyệt đối hóa, thần thánh hóa những điều chưa nhận thức được",
          "B. Phủ nhận hoàn toàn vai trò của thực tiễn khách quan",
          "C. Đạt đến đỉnh cao của tư duy trừu tượng hóa",
          "D. Muốn giải thích thế giới bằng các công cụ khoa học",
        ],
        correctAnswer: 0, // A
      },
      {
        id: 6,
        question:
          "Trạng thái tâm lý nào thường thúc đẩy con người tìm đến tôn giáo?",
        options: [
          "A. Sự thỏa mãn và hạnh phúc tột cùng",
          "B. Sự sợ hãi, lo âu hoặc nhu cầu được an ủi",
          "C. Sự thờ ơ, lãnh đạm với cuộc sống",
          "D. Sự tự tin tuyệt đối vào bản thân",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 7,
        question: "Luận điểm nào sau đây đúng với quan điểm Mác - Lênin?",
        options: [
          "A. Tôn giáo sáng tạo ra con người và xã hội",
          "B. Con người sáng tạo ra tôn giáo vì mục đích của mình",
          "C. Thượng đế và con người cùng sáng tạo ra tôn giáo",
          "D. Tôn giáo là sản phẩm của thần linh ban tặng",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 8,
        question:
          "Là một thực thể xã hội, cấu trúc của tôn giáo KHÔNG bao gồm yếu tố nào?",
        options: [
          "A. Hệ thống giáo lý, giáo luật, lễ nghi",
          "B. Hệ thống cơ sở vật chất kỹ thuật hiện đại",
          "C. Hệ thống tổ chức nhân sự và tín đồ",
          "D. Hệ thống cơ sở thờ tự và niềm tin tôn giáo",
        ],
        correctAnswer: 1, // B (Sai ở chữ "kỹ thuật hiện đại")
      },
      {
        id: 9,
        question:
          "Ranh giới chủ yếu để phân biệt Tôn giáo và Mê tín dị đoan là:",
        options: [
          "A. Số lượng người tin theo đông hay ít",
          "B. Có được nhà nước công nhận hay không",
          "C. Niềm tin mù quáng dẫn đến hành vi cực đoan, phản văn hóa",
          "D. Có hệ thống kinh sách và giáo lý hay không",
        ],
        correctAnswer: 2, // C
      },
    ],
  },
  {
    id: 2,
    name: "Thừa Thiên Huế",
    region: "Vùng Duyên hải miền Trung",
    description:
      "Cố đô, cái nôi của Phật giáo Đàng Trong, nổi tiếng với văn hóa tâm linh.",
    position: { top: "43%", left: "53%" },
    color: "#f59e0b",
    puzzleImage: "/images/boardgame/hue.png",
    questions: [
      {
        id: 1,
        question:
          "Tính chất nào KHÔNG thuộc về bản chất của tôn giáo theo Mác-Lênin?",
        options: [
          "A. Tính lịch sử",
          "B. Tính quần chúng",
          "C. Tính chính trị",
          "D. Tính khoa học",
        ],
        correctAnswer: 3, // D (Tôn giáo không có tính khoa học)
      },
      {
        id: 2,
        question: "Biểu hiện cụ thể của 'Tính lịch sử' trong tôn giáo là gì?",
        options: [
          "A. Tôn giáo là chân lý vĩnh hằng, bất biến",
          "B. Tôn giáo biến đổi theo sự thay đổi của điều kiện kinh tế - xã hội",
          "C. Tôn giáo tồn tại độc lập với lịch sử nhân loại",
          "D. Tôn giáo xuất hiện trước khi xã hội loài người hình thành",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 3,
        question: "Tại sao nói tôn giáo có 'Tính quần chúng'?",
        options: [
          "A. Vì tôn giáo là nơi sinh hoạt tinh thần của đông đảo nhân dân",
          "B. Vì tất cả mọi người trên thế giới đều theo tôn giáo",
          "C. Vì tôn giáo chỉ dành cho tầng lớp bình dân lao động",
          "D. Vì tôn giáo do quần chúng tự phát sáng tạo ra mà không cần giáo lý",
        ],
        correctAnswer: 0, // A
      },
      {
        id: 4,
        question:
          "Tính chính trị của tôn giáo chỉ xuất hiện trong điều kiện nào?",
        options: [
          "A. Khi con người bắt đầu có tư duy trừu tượng",
          "B. Khi xã hội phân chia giai cấp và có đấu tranh giai cấp",
          "C. Khi nhà nước chính thức ban hành luật pháp tôn giáo",
          "D. Khi các tôn giáo bắt đầu mâu thuẫn với nhau",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 5,
        question:
          "Trong xã hội có đối kháng giai cấp, tôn giáo thường phản ánh điều gì?",
        options: [
          "A. Khát vọng hòa bình của toàn nhân loại",
          "B. Sự phát triển của lực lượng sản xuất",
          "C. Lợi ích và cuộc đấu tranh của các giai cấp",
          "D. Sự thống nhất về tư tưởng của mọi tầng lớp",
        ],
        correctAnswer: 2, // C
      },
      {
        id: 6,
        question: "Giai cấp thống trị thường lợi dụng tôn giáo để làm gì?",
        options: [
          "A. Khuyến khích quần chúng đấu tranh giành quyền lợi",
          "B. Ru ngủ, làm giảm nhuệ khí đấu tranh của quần chúng",
          "C. Phát triển nền văn hóa đậm đà bản sắc dân tộc",
          "D. Xây dựng xã hội công bằng, dân chủ, văn minh",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 7,
        question: "Khi điều kiện kinh tế - xã hội thay đổi thì tôn giáo sẽ:",
        options: [
          "A. Giữ nguyên các giáo lý cũ để bảo tồn truyền thống",
          "B. Biến mất hoàn toàn ngay lập tức",
          "C. Có sự thay đổi để thích nghi với điều kiện mới",
          "D. Trở thành lực lượng cản trở sự phát triển",
        ],
        correctAnswer: 2, // C
      },
      {
        id: 8,
        question:
          "Ở Việt Nam, mặt tích cực trong tính chính trị của tôn giáo là:",
        options: [
          "A. Tham gia vào bộ máy quản lý nhà nước",
          "B. Tinh thần hộ quốc an dân, đồng hành cùng dân tộc",
          "C. Tuyên truyền tư tưởng chính trị của giáo hội",
          "D. Độc lập hoàn toàn với chính trị quốc gia",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 9,
        question: "Vì sao tôn giáo vẫn tồn tại lâu dài trong chủ nghĩa xã hội?",
        options: [
          "A. Vì nó đáp ứng nhu cầu tinh thần, tình cảm của một bộ phận nhân dân",
          "B. Vì nhà nước không đủ quyền lực để xóa bỏ tôn giáo",
          "C. Vì tôn giáo mang lại lợi ích kinh tế lớn cho đất nước",
          "D. Vì các thế lực thù địch duy trì tôn giáo để chống phá",
        ],
        correctAnswer: 0, // A
      },
    ],
  },
  {
    id: 3,
    name: "Tây Nguyên",
    region: "Vùng Cao nguyên",
    description:
      "Đại diện cho văn hóa các dân tộc thiểu số, Nhà rông, sự phát triển của Công giáo và Tin lành trong đồng bào dân tộc.",
    position: { top: "60%", left: "65%" },
    color: "#10b981",
    puzzleImage: "/images/boardgame/taynguyen.png",
    questions: [
      {
        id: 1,
        question:
          "Nguyên tắc nào là nền tảng trong chính sách tôn giáo của Đảng ta?",
        options: [
          "A. Xóa bỏ dần dần các hình thức tín ngưỡng lạc hậu",
          "B. Tôn trọng và bảo đảm quyền tự do tín ngưỡng, tôn giáo",
          "C. Hợp nhất các tôn giáo thành một tổ chức thống nhất",
          "D. Khuyến khích người dân thực hiện nếp sống vô thần",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 2,
        question:
          "Biện pháp căn bản để khắc phục ảnh hưởng tiêu cực của tôn giáo là:",
        options: [
          "A. Cấm đoán các hoạt động truyền đạo trái phép",
          "B. Tuyên truyền giáo dục chủ nghĩa vô thần khoa học",
          "C. Cải tạo xã hội, xóa bỏ nguồn gốc sinh ra áp bức, bất công",
          "D. Kiểm soát chặt chẽ hoạt động của chức sắc tôn giáo",
        ],
        correctAnswer: 2, // C
      },
      {
        id: 3,
        question:
          "Khi giải quyết vấn đề tôn giáo, cần phân biệt rõ hai mặt nào?",
        options: [
          "A. Mặt văn hóa và mặt kinh tế",
          "B. Mặt tích cực và mặt hạn chế",
          "C. Mặt chính trị và mặt tư tưởng",
          "D. Mặt thiêng liêng và mặt trần tục",
        ],
        correctAnswer: 2, // C
      },
      {
        id: 4,
        question:
          "Đối với 'mặt tư tưởng' (nhu cầu tín ngưỡng) của tôn giáo, phương pháp giải quyết là:",
        options: [
          "A. Sử dụng bạo lực cách mạng để trấn áp",
          "B. Dùng mệnh lệnh hành chính để hạn chế",
          "C. Giáo dục, thuyết phục và vận động quần chúng",
          "D. Bỏ mặc để tự do phát triển không kiểm soát",
        ],
        correctAnswer: 2, // C
      },
      {
        id: 5,
        question:
          "Đối với 'mặt chính trị' (sự lợi dụng tôn giáo), thái độ của Nhà nước là:",
        options: [
          "A. Kiên quyết đấu tranh loại bỏ",
          "B. Thỏa hiệp để giữ ổn định xã hội",
          "C. Dùng biện pháp giáo dục nhẹ nhàng",
          "D. Coi đó là quyền tự do ngôn luận",
        ],
        correctAnswer: 0, // A
      },
      {
        id: 6,
        question:
          "Quan điểm 'lịch sử - cụ thể' trong vấn đề tôn giáo yêu cầu điều gì?",
        options: [
          "A. Áp dụng một chính sách chung cho mọi tôn giáo ở mọi thời điểm",
          "B. Xem xét vai trò của từng tôn giáo trong từng giai đoạn lịch sử",
          "C. Chỉ ưu tiên các tôn giáo có lịch sử lâu đời",
          "D. Phủ nhận vai trò của các tôn giáo mới xuất hiện",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 7,
        question: "Hành vi nào sau đây xâm phạm quyền tự do tín ngưỡng?",
        options: [
          "A. Quản lý hoạt động tôn giáo theo pháp luật",
          "B. Ép buộc người dân theo đạo hoặc bỏ đạo",
          "C. Vận động chức sắc tham gia hoạt động xã hội",
          "D. Trùng tu, tôn tạo các di tích tôn giáo",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 8,
        question:
          "Nhà nước XHCN ứng xử thế nào với các tôn giáo tuân thủ pháp luật?",
        options: [
          "A. Tìm cách hạn chế quy mô phát triển",
          "B. Phân biệt đối xử giữa các tôn giáo",
          "C. Tôn trọng và bảo hộ hoạt động bình thường",
          "D. Không can thiệp và không quan tâm",
        ],
        correctAnswer: 2, // C
      },
      {
        id: 9,
        question:
          "Tại sao việc giải quyết vấn đề tôn giáo phải là quá trình lâu dài?",
        options: [
          "A. Vì tôn giáo có nguồn gốc sâu xa và tính bảo thủ tương đối",
          "B. Vì nhà nước chưa đủ nguồn lực để giải quyết dứt điểm",
          "C. Vì số lượng tín đồ tôn giáo đang ngày càng giảm sút",
          "D. Vì tôn giáo không ảnh hưởng nhiều đến đời sống xã hội",
        ],
        correctAnswer: 0, // A
      },
    ],
  },
  {
    id: 4,
    name: "TP. Hồ Chí Minh",
    region: "Vùng Đông Nam Bộ",
    description:
      "Trung tâm kinh tế, nơi giao thoa của rất nhiều tôn giáo (Công giáo, Phật giáo, Tin lành...).",
    position: { top: "71%", left: "50%" },
    color: "#3b82f6",
    puzzleImage: "/images/boardgame/hochiminh.png",
    questions: [
      {
        id: 1,
        question: "Về phương diện tôn giáo, Việt Nam được ví von là:",
        options: [
          "A. Mảnh đất cằn cỗi của đức tin",
          "B. Bảo tàng tôn giáo của thế giới",
          "C. Quốc gia độc tôn giáo",
          "D. Nơi xung đột gay gắt giữa các tôn giáo",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 2,
        question:
          "Đặc điểm nổi bật trong quan hệ giữa các tôn giáo ở Việt Nam là:",
        options: [
          "A. Cạnh tranh gay gắt để giành giật tín đồ",
          "B. Tách biệt hoàn toàn, không giao lưu với nhau",
          "C. Chung sống hòa bình, đoàn kết và đan xen",
          "D. Xung đột vũ trang thường xuyên xảy ra",
        ],
        correctAnswer: 2, // C
      },
      {
        id: 3,
        question:
          "Tuyệt đại đa số tín đồ tôn giáo ở Việt Nam thuộc giai cấp nào?",
        options: [
          "A. Giai cấp tư sản và địa chủ",
          "B. Nhân dân lao động",
          "C. Tầng lớp trí thức và văn nghệ sĩ",
          "D. Người nước ngoài sinh sống tại Việt Nam",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 4,
        question:
          "Giá trị tinh thần chủ đạo của tín đồ các tôn giáo ở Việt Nam là gì?",
        options: [
          "A. Tinh thần quốc tế vô sản",
          "B. Lòng yêu nước và tinh thần dân tộc",
          "C. Tinh thần sùng bái văn hóa phương Tây",
          "D. Tinh thần ly khai, tự trị địa phương",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 5,
        question: "Đâu là nhóm các tôn giáo nội sinh (ra đời tại Việt Nam)?",
        options: [
          "A. Phật giáo, Công giáo, Tin Lành",
          "B. Cao Đài, Hòa Hảo, Tứ Ân Hiếu Nghĩa",
          "C. Hồi giáo, Bà La Môn, Phật giáo",
          "D. Công giáo, Tin Lành, Chính Thống giáo",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 6,
        question:
          "Chính sách đối ngoại của các tôn giáo ở Việt Nam hiện nay là:",
        options: [
          "A. Đóng cửa, hạn chế tiếp xúc bên ngoài",
          "B. Chỉ quan hệ với các nước trong khu vực Đông Nam Á",
          "C. Mở rộng quan hệ với các tổ chức tôn giáo quốc tế",
          "D. Phụ thuộc hoàn toàn vào sự chỉ đạo từ nước ngoài",
        ],
        correctAnswer: 2, // C
      },
      {
        id: 7,
        question:
          "Vai trò của đội ngũ chức sắc tôn giáo ở Việt Nam được đánh giá là:",
        options: [
          "A. Có uy tín và ảnh hưởng lớn đến quần chúng tín đồ",
          "B. Không có vai trò gì đáng kể trong xã hội",
          "C. Là đối tượng cần phải loại bỏ khỏi đời sống xã hội",
          "D. Chỉ lo việc đạo, không quan tâm việc đời",
        ],
        correctAnswer: 0, // A
      },
      {
        id: 8,
        question:
          "Lịch sử Việt Nam ghi nhận điều gì về vấn đề chiến tranh tôn giáo?",
        options: [
          "A. Thường xuyên xảy ra các cuộc thánh chiến đẫm máu",
          "B. Chưa từng xảy ra xung đột, chiến tranh tôn giáo",
          "C. Chiến tranh tôn giáo là nguyên nhân chính gây mất nước",
          "D. Các tôn giáo luôn tìm cách tiêu diệt lẫn nhau",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 9,
        question: "Cơ sở nào tạo nên sự đoàn kết giữa các tôn giáo ở Việt Nam?",
        options: [
          "A. Sự tương đồng về giáo lý và nghi lễ",
          "B. Sự áp đặt cưỡng bức của chính quyền",
          "C. Lợi ích quốc gia dân tộc và truyền thống văn hóa",
          "D. Sự tài trợ tài chính từ các tổ chức quốc tế",
        ],
        correctAnswer: 2, // C
      },
    ],
  },
  {
    id: 5,
    name: "An Giang / Cần Thơ",
    region: "Vùng Đồng bằng sông Cửu Long",
    description:
      "Vùng đất của các tôn giáo nội sinh (Phật giáo Hòa Hảo, Cao Đài), Hồi giáo (người Chăm) và Phật giáo Nam tông (người Khmer).",
    position: { top: "76%", left: "35%" },
    color: "#8b5cf6",
    puzzleImage: "/images/boardgame/angiang.png",
    questions: [
      {
        id: 1,
        question: "Đảng ta xác định tín ngưỡng, tôn giáo là nhu cầu:",
        options: [
          "A. Nhất thời của một bộ phận người lạc hậu",
          "B. Tinh thần của một bộ phận nhân dân",
          "C. Chính trị của các thế lực phản động",
          "D. Giải trí đơn thuần của quần chúng",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 2,
        question: "Trong quá trình xây dựng CNXH, tôn giáo sẽ:",
        options: [
          "A. Bị xóa bỏ ngay lập tức bằng biện pháp hành chính",
          "B. Tự tiêu vong trong thời gian ngắn",
          "C. Tồn tại lâu dài cùng với dân tộc",
          "D. Phát triển mạnh mẽ lấn át chính quyền",
        ],
        correctAnswer: 2, // C
      },
      {
        id: 3,
        question: "Chính sách xuyên suốt của Đảng đối với tôn giáo là:",
        options: [
          "A. Phân biệt đối xử giữa người có đạo và không có đạo",
          "B. Đại đoàn kết dân tộc (đoàn kết lương - giáo)",
          "C. Hạn chế tối đa sự phát triển của tôn giáo",
          "D. Ưu tiên người không theo đạo trong bộ máy nhà nước",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 4,
        question: "Nội dung cốt lõi của công tác tôn giáo là gì?",
        options: [
          "A. Quản lý hành chính nhà nước về tôn giáo",
          "B. Công tác vận động quần chúng",
          "C. Xây dựng cơ sở vật chất cho tôn giáo",
          "D. Đấu tranh chống mê tín dị đoan",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 5,
        question: "Chủ thể chịu trách nhiệm làm công tác tôn giáo là:",
        options: [
          "A. Riêng Ban Tôn giáo Chính phủ",
          "B. Riêng Mặt trận Tổ quốc Việt Nam",
          "C. Của cả hệ thống chính trị do Đảng lãnh đạo",
          "D. Của các chức sắc tôn giáo tự quản lý",
        ],
        correctAnswer: 2, // C
      },
      {
        id: 6,
        question: "Mọi hoạt động theo đạo và truyền đạo phải tuân thủ:",
        options: [
          "A. Quy định riêng của từng giáo hội",
          "B. Hiến pháp và Pháp luật của Nhà nước",
          "C. Hiến chương của các tổ chức quốc tế",
          "D. Phong tục tập quán của địa phương",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 7,
        question:
          "Đảng chủ trương phát huy những giá trị tích cực nào của tôn giáo?",
        options: [
          "A. Giá trị kinh tế và thương mại",
          "B. Giá trị văn hóa và đạo đức tốt đẹp",
          "C. Giá trị thần bí và siêu nhiên",
          "D. Giá trị quyền lực chính trị",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 8,
        question:
          "Hành vi nào bị nghiêm cấm trong hoạt động tôn giáo tại Việt Nam?",
        options: [
          "A. Giảng đạo tại cơ sở thờ tự hợp pháp",
          "B. Lợi dụng tôn giáo để phá hoại độc lập, đoàn kết dân tộc",
          "C. Tham gia các hoạt động từ thiện nhân đạo",
          "D. In ấn kinh sách theo quy định của pháp luật",
        ],
        correctAnswer: 1, // B
      },
      {
        id: 9,
        question:
          "Mục tiêu chung để đoàn kết đồng bào có đạo và không có đạo là:",
        options: [
          "A. Tất cả mọi người đều phải theo một tôn giáo",
          "B. Xây dựng nước Việt Nam: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
          "C. Xóa bỏ hoàn toàn sự khác biệt về đức tin",
          "D. Tập trung phát triển kinh tế cá nhân làm giàu",
        ],
        correctAnswer: 1, // B
      },
    ],
  },
];
