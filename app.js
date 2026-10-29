const sampleWords = [
  { word: "accommodate", meaning: "đáp ứng nhu cầu; cung cấp chỗ ở", type: "verb", category: "Khách sạn", pronunciation: "/əˈkɑːmədeɪt/" },
  { word: "acquisition", meaning: "việc mua lại hoặc tiếp nhận", type: "noun", category: "Kinh doanh", pronunciation: "/ˌækwɪˈzɪʃən/" },
  { word: "agenda", meaning: "chương trình hoặc các mục cần bàn", type: "noun", category: "Cuộc họp", pronunciation: "/əˈdʒendə/" },
  { word: "annual", meaning: "hằng năm; diễn ra mỗi năm", type: "adjective", category: "Kinh doanh", pronunciation: "/ˈænjuəl/" },
  { word: "applicant", meaning: "người nộp đơn, ứng viên", type: "noun", category: "Nhân sự", pronunciation: "/ˈæplɪkənt/" },
  { word: "apply", meaning: "nộp đơn; áp dụng", type: "verb", category: "Nhân sự", pronunciation: "/əˈplaɪ/" },
  { word: "appointment", meaning: "cuộc hẹn; lịch gặp đã sắp xếp", type: "noun", category: "Cuộc họp", pronunciation: "/əˈpɔɪntmənt/" },
  { word: "arrange", meaning: "sắp xếp hoặc thu xếp", type: "verb", category: "Cuộc họp", pronunciation: "/əˈreɪndʒ/" },
  { word: "attend", meaning: "tham dự; có mặt tại", type: "verb", category: "Cuộc họp", pronunciation: "/əˈtend/" },
  { word: "attendee", meaning: "người tham dự sự kiện hoặc cuộc họp", type: "noun", category: "Cuộc họp", pronunciation: "/əˌtenˈdiː/" },
  { word: "authorize", meaning: "cho phép hoặc chính thức chấp thuận", type: "verb", category: "Kinh doanh", pronunciation: "/ˈɔːθəraɪz/" },
  { word: "available", meaning: "có sẵn; có thể sử dụng hoặc tham gia", type: "adjective", category: "Công việc", pronunciation: "/əˈveɪləbəl/" },
  { word: "benefit", meaning: "lợi ích; phúc lợi", type: "noun", category: "Nhân sự", pronunciation: "/ˈbenɪfɪt/" },
  { word: "brochure", meaning: "tờ giới thiệu hoặc tài liệu quảng bá", type: "noun", category: "Tiếp thị", pronunciation: "/broʊˈʃʊr/" },
  { word: "budget", meaning: "ngân sách; khoản tiền dự trù", type: "noun", category: "Kinh doanh", pronunciation: "/ˈbʌdʒɪt/" },
  { word: "candidate", meaning: "ứng viên cho vị trí hoặc cơ hội", type: "noun", category: "Nhân sự", pronunciation: "/ˈkændɪdeɪt/" },
  { word: "collaborate", meaning: "hợp tác để cùng hoàn thành công việc", type: "verb", category: "Công việc", pronunciation: "/kəˈlæbəreɪt/" },
  { word: "conference", meaning: "hội nghị hoặc cuộc họp quy mô lớn", type: "noun", category: "Cuộc họp", pronunciation: "/ˈkɑːnfərəns/" },
  { word: "confirm", meaning: "xác nhận thông tin hoặc sự sắp xếp", type: "verb", category: "Cuộc họp", pronunciation: "/kənˈfɜːrm/" },
  { word: "deadline", meaning: "thời hạn cuối để hoàn thành việc gì", type: "noun", category: "Công việc", pronunciation: "/ˈdedlaɪn/" },
  { word: "dedicated", meaning: "tận tâm, hết lòng với công việc", type: "adjective", category: "Nhân sự", pronunciation: "/ˈdedɪkeɪtɪd/" },
  { word: "delivery", meaning: "việc giao hàng; hàng được giao", type: "noun", category: "Vận chuyển", pronunciation: "/dɪˈlɪvəri/" },
  { word: "department", meaning: "phòng hoặc ban trong một tổ chức", type: "noun", category: "Công việc", pronunciation: "/dɪˈpɑːrtmənt/" },
  { word: "description", meaning: "mô tả; phần trình bày đặc điểm", type: "noun", category: "Công việc", pronunciation: "/dɪˈskrɪpʃən/" },
  { word: "destination", meaning: "điểm đến của chuyến đi hoặc hàng hóa", type: "noun", category: "Du lịch", pronunciation: "/ˌdestɪˈneɪʃən/" },
  { word: "employee", meaning: "nhân viên; người làm việc cho tổ chức", type: "noun", category: "Nhân sự", pronunciation: "/ɪmˈplɔɪiː/" },
  { word: "employer", meaning: "người hoặc tổ chức thuê lao động", type: "noun", category: "Nhân sự", pronunciation: "/ɪmˈplɔɪər/" },
  { word: "equipment", meaning: "thiết bị hoặc dụng cụ dùng cho công việc", type: "noun", category: "Công việc", pronunciation: "/ɪˈkwɪpmənt/" },
  { word: "estimate", meaning: "ước tính; bản dự toán", type: "noun", category: "Kinh doanh", pronunciation: "/ˈestɪmət/" },
  { word: "extension", meaning: "phần mở rộng; số máy nhánh", type: "noun", category: "Công việc", pronunciation: "/ɪkˈstenʃən/" },
  { word: "facility", meaning: "cơ sở hoặc tiện nghi phục vụ một mục đích", type: "noun", category: "Khách sạn", pronunciation: "/fəˈsɪləti/" },
  { word: "feedback", meaning: "ý kiến phản hồi hoặc nhận xét", type: "noun", category: "Công việc", pronunciation: "/ˈfiːdbæk/" },
  { word: "frequently", meaning: "thường xuyên; xảy ra nhiều lần", type: "adverb", category: "Công việc", pronunciation: "/ˈfriːkwəntli/" },
  { word: "headquarters", meaning: "trụ sở chính của một tổ chức", type: "noun", category: "Kinh doanh", pronunciation: "/ˈhedkwɔːrtərz/" },
  { word: "inquire", meaning: "hỏi hoặc yêu cầu cung cấp thông tin", type: "verb", category: "Giao tiếp", pronunciation: "/ɪnˈkwaɪər/" },
  { word: "inspection", meaning: "việc kiểm tra cẩn thận", type: "noun", category: "Công việc", pronunciation: "/ɪnˈspekʃən/" },
  { word: "invoice", meaning: "hóa đơn liệt kê hàng hóa hoặc dịch vụ cần thanh toán", type: "noun", category: "Kinh doanh", pronunciation: "/ˈɪnvɔɪs/" },
  { word: "itinerary", meaning: "lịch trình của chuyến đi", type: "noun", category: "Du lịch", pronunciation: "/aɪˈtɪnəreri/" },
  { word: "negotiate", meaning: "thương lượng để đạt thỏa thuận", type: "verb", category: "Kinh doanh", pronunciation: "/nɪˈɡoʊʃieɪt/" },
  { word: "outstanding", meaning: "còn chưa thanh toán; còn tồn đọng", type: "adjective", category: "Kinh doanh", pronunciation: "/aʊtˈstændɪŋ/" },
  { word: "policy", meaning: "chính sách hoặc quy định của tổ chức", type: "noun", category: "Kinh doanh", pronunciation: "/ˈpɑːləsi/" },
  { word: "postpone", meaning: "hoãn lại sang thời điểm khác", type: "verb", category: "Cuộc họp", pronunciation: "/poʊstˈpoʊn/" },
  { word: "purchase", meaning: "mua; việc mua hàng hóa hoặc dịch vụ", type: "verb", category: "Kinh doanh", pronunciation: "/ˈpɜːrtʃəs/" },
  { word: "receipt", meaning: "biên lai xác nhận đã nhận tiền hoặc hàng", type: "noun", category: "Kinh doanh", pronunciation: "/rɪˈsiːt/" },
  { word: "recruit", meaning: "tuyển người vào làm hoặc tham gia tổ chức", type: "verb", category: "Nhân sự", pronunciation: "/rɪˈkruːt/" },
  { word: "refund", meaning: "hoàn tiền; khoản tiền được trả lại", type: "noun", category: "Kinh doanh", pronunciation: "/ˈriːfʌnd/" },
  { word: "reservation", meaning: "việc đặt trước chỗ hoặc dịch vụ", type: "noun", category: "Du lịch", pronunciation: "/ˌrezərˈveɪʃən/" },
  { word: "shipment", meaning: "lô hàng được gửi đi hoặc vận chuyển", type: "noun", category: "Vận chuyển", pronunciation: "/ˈʃɪpmənt/" },
  { word: "submit", meaning: "nộp tài liệu hoặc gửi đề xuất để xem xét", type: "verb", category: "Công việc", pronunciation: "/səbˈmɪt/" },
  { word: "supplier", meaning: "nhà cung cấp hàng hóa hoặc dịch vụ", type: "noun", category: "Kinh doanh", pronunciation: "/səˈplaɪər/" },
  { word: "vacancy", meaning: "vị trí công việc đang cần người; chỗ còn trống", type: "noun", category: "Nhân sự", pronunciation: "/ˈveɪkənsi/" },
  { word: "warranty", meaning: "cam kết sửa chữa hoặc thay thế sản phẩm trong thời hạn", type: "noun", category: "Kinh doanh", pronunciation: "/ˈwɔːrənti/" }
].map((item, index) => ({ ...item, id: index + 1 }));

const grammarTopics = [
  { id: "parts-of-speech", title: "Từ loại trong câu", level: "CƠ BẢN", icon: "Aa", summary: "Nhận biết danh từ, động từ, tính từ và trạng từ qua vị trí trong câu.", rule: "Danh từ thường đứng sau mạo từ/tính từ sở hữu; tính từ bổ nghĩa cho danh từ; trạng từ thường bổ nghĩa cho động từ, tính từ hoặc cả câu.", example: "The assistant responded promptly to the customer.", highlight: "promptly = trạng từ bổ nghĩa cho responded" },
  { id: "subject-verb", title: "Sự hòa hợp chủ ngữ – động từ", level: "CƠ BẢN", icon: "S–V", summary: "Chia động từ theo chủ ngữ số ít hoặc số nhiều.", rule: "Ở thì hiện tại đơn, chủ ngữ ngôi thứ ba số ít thường đi với động từ thêm -s/-es. Cẩn thận tìm chủ ngữ chính khi câu có cụm giới từ dài.", example: "The list of new products is on the desk.", highlight: "Chủ ngữ chính là list (số ít), nên dùng is" },
  { id: "verb-tenses", title: "Các thì động từ thường gặp", level: "TRỌNG ĐIỂM", icon: "T", summary: "Chọn thì dựa vào mốc thời gian và ngữ cảnh công việc.", rule: "Hiện tại hoàn thành (have/has + V3) diễn tả việc có liên quan đến hiện tại; quá khứ đơn diễn tả việc đã kết thúc tại thời điểm xác định.", example: "Ms. Lee has worked here since 2021.", highlight: "since 2021 → bắt đầu trong quá khứ và còn tiếp diễn" },
  { id: "passive-voice", title: "Câu bị động", level: "TRỌNG ĐIỂM", icon: "⇄", summary: "Dùng khi muốn nhấn mạnh hành động hoặc đối tượng nhận hành động.", rule: "Cấu trúc cơ bản: be + past participle (V3). Chia be theo thì và chủ ngữ; có thể thêm by + người thực hiện.", example: "The invoices are reviewed every Friday.", highlight: "are reviewed = bị động hiện tại đơn" },
  { id: "infinitive-gerund", title: "To-infinitive & gerund", level: "TRỌNG ĐIỂM", icon: "to", summary: "Nhớ dạng động từ theo sau một số động từ quen thuộc.", rule: "plan, agree, hope thường theo sau bởi to + V. enjoy, avoid, consider thường theo sau bởi V-ing.", example: "The manager agreed to extend the deadline.", highlight: "agree + to-infinitive" },
  { id: "relative-clauses", title: "Mệnh đề quan hệ", level: "NÂNG CAO", icon: "↳", summary: "Nối danh từ với thông tin bổ sung bằng who, which, that.", rule: "who thường thay cho người; which thay cho vật/sự việc; that có thể thay cho người hoặc vật trong mệnh đề xác định.", example: "The employee who prepared the report is on leave.", highlight: "who thay cho the employee và làm chủ ngữ" },
  { id: "prepositions", title: "Giới từ thời gian & địa điểm", level: "TRỌNG ĐIỂM", icon: "in", summary: "Phân biệt in, on và at trong các mốc thời gian, địa điểm.", rule: "in + tháng/năm/khoảng thời gian; on + ngày cụ thể; at + giờ cụ thể. Một số cụm cố định cần học theo cụm từ.", example: "The presentation begins at 9 a.m. on Monday.", highlight: "at + giờ; on + ngày" },
  { id: "comparisons", title: "So sánh hơn & so sánh nhất", level: "NÂNG CAO", icon: "↗", summary: "So sánh tính từ/trạng từ để mô tả sản phẩm và kết quả.", rule: "Tính từ ngắn thường dùng -er/-est; tính từ dài dùng more/most. So sánh hơn thường đi với than; so sánh nhất thường có the.", example: "This model is more efficient than the previous one.", highlight: "more efficient than = hiệu quả hơn" }
];

const practiceQuestions = [
  { prompt: "The marketing team _____ the campaign results every Friday.", options: ["review", "reviews", "reviewed", "reviewing"], answer: 1, explanation: "The marketing team được xem là chủ ngữ số ít trong câu này, nên hiện tại đơn dùng reviews." },
  { prompt: "Please submit your travel request _____ Friday afternoon.", options: ["by", "during", "among", "while"], answer: 0, explanation: "By Friday afternoon diễn tả hạn chót: trước hoặc muộn nhất vào chiều thứ Sáu." },
  { prompt: "Ms. Chen has worked in the accounting department _____ 2022.", options: ["for", "since", "until", "during"], answer: 1, explanation: "Since đi với một mốc thời gian bắt đầu; for đi với một khoảng thời gian." },
  { prompt: "The conference room _____ before the guests arrive.", options: ["will prepare", "will be prepared", "preparing", "has prepare"], answer: 1, explanation: "Phòng họp nhận hành động chuẩn bị, vì vậy dùng bị động tương lai: will be + V3." },
  { prompt: "We are looking for a candidate who _____ strong communication skills.", options: ["have", "having", "has", "to have"], answer: 2, explanation: "Who thay cho candidate (số ít), nên động từ hiện tại đơn là has." },
  { prompt: "The new software is _____ to use than the previous version.", options: ["easy", "easiest", "easier", "more easy"], answer: 2, explanation: "Easy là tính từ ngắn; dạng so sánh hơn là easier, và cấu trúc đi với than." },
  { prompt: "All employees must _____ the updated safety guidelines.", options: ["read", "reads", "reading", "to reading"], answer: 0, explanation: "Động từ khuyết thiếu must đi trực tiếp với động từ nguyên mẫu: must read." },
  { prompt: "The manager agreed _____ the delivery schedule.", options: ["revising", "revise", "to revise", "revised"], answer: 2, explanation: "Agree thường đi với to-infinitive: agree to do something." },
  { prompt: "Customer feedback is important for _____ our services.", options: ["improve", "improves", "improving", "improved"], answer: 2, explanation: "Giới từ for được theo sau bởi danh từ hoặc V-ing; ở đây dùng improving." },
  { prompt: "The documents _____ by the legal team yesterday.", options: ["checked", "were checked", "are checking", "have check"], answer: 1, explanation: "Documents nhận hành động và yesterday là quá khứ; dùng bị động quá khứ were checked." },
  { prompt: "If you need assistance, please contact the receptionist _____ the front desk.", options: ["at", "on", "from", "between"], answer: 0, explanation: "At the front desk là cụm giới từ chỉ địa điểm: tại quầy lễ tân." },
  { prompt: "The quarterly report, _____ was completed this morning, is ready for review.", options: ["who", "where", "which", "whose"], answer: 2, explanation: "Which thay cho sự vật (the quarterly report) trong mệnh đề quan hệ không xác định." },
  { prompt: "Mr. Patel _____ the proposal yet, so we cannot begin the project.", options: ["did not approve", "has not approved", "does not approving", "was not approve"], answer: 1, explanation: "Yet thường dùng với hiện tại hoàn thành phủ định để nói việc chưa xảy ra đến hiện tại." },
  { prompt: "The supplier delivered the equipment _____ than we expected.", options: ["early", "earlier", "earliest", "more early"], answer: 1, explanation: "So sánh thời điểm giao hàng cần trạng từ so sánh hơn: earlier than." },
  { prompt: "Neither the director nor the assistants _____ available this afternoon.", options: ["is", "was", "are", "be"], answer: 2, explanation: "Với neither...nor, động từ thường hòa hợp với chủ ngữ gần nhất; assistants là số nhiều nên dùng are." }
];

const words = [...lessonVocabulary, ...additionalVocabulary, ...sampleWords];
const storageKey = "lingua-toeic-flashcard-progress";
const rewardsStorageKey = "lingua-toeic-flashcard-rewards";
const hardReviewCelebrationsStorageKey = "lingua-toeic-hard-review-celebrations";
const dailyVocabularyGoalStorageKey = "lingua-toeic-daily-vocabulary-goal";
const grammarStorageKey = "lin-toeic-grammar-completed";
const practiceStorageKey = "lin-toeic-practice-results";
const settingsStorageKey = "lin-toeic-user-settings";
const currentCardStorageKey = "lin-toeic-current-card-id";
const categories = ["Tất cả", ...new Set(words.map(item => item.category))];
let wordProgress = loadWordProgress();
let reviewRewards = loadReviewRewards();
let completedHardReviewCelebrations = loadStoredIds(
  hardReviewCelebrationsStorageKey,
  categories.filter(category => category !== "Tất cả")
);
let dailyVocabularyGoal = loadDailyVocabularyGoal();
let completedGrammar = loadStoredIds(grammarStorageKey, grammarTopics.map(topic => topic.id));
let practiceResults = loadPracticeResults();
let userSettings = loadUserSettings();
let activeTest = [];
let testIndex = 0;
let testScore = 0;
let testAnswered = false;
let testStarted = false;
let activePage = "vocabulary";
let currentFilter = "all";
let currentCategory = "Tất cả";
let visibleWords = [];
let currentIndex = 0;
let cardIsFlipped = false;
let hardReviewSession = false;
let reviewedHardWords = new Set();
let hardReviewDeckIds = [];
let hardReviewCategory = null;
let activeSpeechUtterance = null;
let speechStatusTimeout = null;
let toastTimeout = null;
let celebrationReturnFocus = null;
let celebrationClosesHardReview = false;

function showToast(message) {
  const toast = document.querySelector("#toast-notification");
  window.clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add("toast-visible");
  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("toast-visible");
  }, 1800);
}

function getLocalDateKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function createDailyVocabularyGoal() {
  return { date: getLocalDateKey(), reviewedIds: [], rememberedIds: [], shownMilestones: [] };
}

function loadDailyVocabularyGoal() {
  try {
    const saved = JSON.parse(localStorage.getItem(dailyVocabularyGoalStorageKey) || "null");
    if (!saved || saved.date !== getLocalDateKey()) return createDailyVocabularyGoal();
    const validIds = new Set(words.map(item => item.id));
    return {
      date: saved.date,
      reviewedIds: Array.isArray(saved.reviewedIds) ? [...new Set(saved.reviewedIds.filter(id => validIds.has(id)))] : [],
      rememberedIds: Array.isArray(saved.rememberedIds) ? [...new Set(saved.rememberedIds.filter(id => validIds.has(id)))] : [],
      shownMilestones: Array.isArray(saved.shownMilestones) ? [...new Set(saved.shownMilestones)] : []
    };
  } catch (error) {
    console.warn("Không thể đọc tiến độ mục tiêu từ vựng hôm nay.", error);
    return createDailyVocabularyGoal();
  }
}

function saveDailyVocabularyGoal() {
  try {
    localStorage.setItem(dailyVocabularyGoalStorageKey, JSON.stringify(dailyVocabularyGoal));
  } catch (error) {
    console.warn("Không thể lưu tiến độ mục tiêu từ vựng hôm nay.", error);
  }
}

function showCelebration({ title, message, points = 10, fireworks = false, eyebrow = "MỤC TIÊU HỌC TẬP", closesHardReview = false }) {
  celebrationReturnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  celebrationClosesHardReview = closesHardReview;
  document.querySelector("#celebration-eyebrow").textContent = eyebrow;
  document.querySelector("#celebration-title").textContent = title;
  document.querySelector("#celebration-message").textContent = message;
  document.querySelector("#reward-chip").innerHTML = `✦ <strong>+${points} điểm</strong>`;
  const fireworksContainer = document.querySelector("#fireworks");
  fireworksContainer.classList.toggle("hidden", !fireworks);
  fireworksContainer.innerHTML = fireworks
    ? Array.from({ length: 30 }, (_, index) =>
      `<span style="--i:${index};--x:${(index * 47 + 13) % 100}%;--h:${(index * 53 + 27) % 360}deg"></span>`
    ).join("")
    : "";
  document.querySelector("#celebration-modal").classList.remove("hidden");
  document.querySelector("#celebration-close").focus();
}

function setSpeechStatus(message, state) {
  const status = document.querySelector("#speech-status");
  status.textContent = message;
  status.dataset.state = state;
  status.classList.remove("hidden");
}

function resetSpeechStatus(cancelPlayback = false) {
  if (speechStatusTimeout) {
    window.clearTimeout(speechStatusTimeout);
    speechStatusTimeout = null;
  }
  const utterance = activeSpeechUtterance;
  activeSpeechUtterance = null;
  if (cancelPlayback && utterance && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  const status = document.querySelector("#speech-status");
  status.textContent = "";
  status.classList.add("hidden");
  delete status.dataset.state;
}

function showSpeechError(message) {
  activeSpeechUtterance = null;
  setSpeechStatus(message, "error");
  speechStatusTimeout = window.setTimeout(() => resetSpeechStatus(), 3500);
}

function loadWordProgress() {
  try {
    const storedValue = localStorage.getItem(storageKey);
    const stored = storedValue ? JSON.parse(storedValue) : null;
    return Object.fromEntries(words.map(item => {
      const state = stored?.[item.id];
      const memory = state?.memory === "hard" ? "hard" : null;
      const note = typeof state?.note === "string" ? state.note.slice(0, 500) : "";
      return [item.id, { memory, note, reviewed: state?.reviewed === true, remembered: state?.remembered === true }];
    }));
  } catch (error) {
    console.warn("Không thể đọc tiến độ từ vựng đã lưu.", error);
    return Object.fromEntries(words.map(item => [item.id, { memory: null, note: "", reviewed: false, remembered: false }]));
  }
}

function loadStoredIds(key, validIds) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(saved) ? [...new Set(saved.filter(id => validIds.includes(id)))] : [];
  } catch (error) {
    console.warn("Không thể đọc tiến độ đã lưu.", error);
    return [];
  }
}

function loadPracticeResults() {
  try {
    const saved = JSON.parse(localStorage.getItem(practiceStorageKey) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter(result =>
      result && Number.isInteger(result.score) && Number.isInteger(result.total) &&
      result.score >= 0 && result.total > 0 && result.score <= result.total
    ).slice(-20);
  } catch (error) {
    console.warn("Không thể đọc kết quả luyện thi đã lưu.", error);
    return [];
  }
}

function loadUserSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(settingsStorageKey) || "null");
    const targetScore = Number(saved?.targetScore);
    return {
      targetScore: Number.isInteger(targetScore) && targetScore >= 10 && targetScore <= 990 ? targetScore : null,
      learnerName: typeof saved?.learnerName === "string" ? saved.learnerName.slice(0, 32) : ""
    };
  } catch (error) {
    console.warn("Không thể đọc mục tiêu học tập đã lưu.", error);
    return { targetScore: null, learnerName: "" };
  }
}

function loadReviewRewards() {
  try {
    const saved = Number(localStorage.getItem(rewardsStorageKey));
    return Number.isInteger(saved) && saved >= 0 ? saved : 0;
  } catch (error) {
    console.warn("Không thể đọc điểm thưởng đã lưu.", error);
    return 0;
  }
}

function saveWordProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(wordProgress));
  } catch (error) {
    console.warn("Không thể lưu tiến độ từ vựng trên trình duyệt.", error);
  }
}

function saveReviewRewards() {
  try {
    localStorage.setItem(rewardsStorageKey, String(reviewRewards));
  } catch (error) {
    console.warn("Không thể lưu điểm thưởng trên trình duyệt.", error);
  }
}

function saveCompletedHardReviewCelebrations() {
  try {
    localStorage.setItem(hardReviewCelebrationsStorageKey, JSON.stringify(completedHardReviewCelebrations));
  } catch (error) {
    console.warn("Không thể lưu trạng thái pháo hoa của bài từ vựng.", error);
  }
}

function saveCompletedGrammar() {
  try {
    localStorage.setItem(grammarStorageKey, JSON.stringify(completedGrammar));
  } catch (error) {
    console.warn("Không thể lưu tiến độ ngữ pháp.", error);
  }
}

function savePracticeResults() {
  try {
    localStorage.setItem(practiceStorageKey, JSON.stringify(practiceResults.slice(-20)));
  } catch (error) {
    console.warn("Không thể lưu kết quả luyện thi.", error);
  }
}

function loadCurrentCardId() {
  try {
    return localStorage.getItem(currentCardStorageKey) || "";
  } catch (error) {
    console.warn("Không thể đọc vị trí thẻ hiện tại.", error);
    return "";
  }
}

function saveCurrentCard() {
  if (visibleWords.length === 0) return;
  try {
    localStorage.setItem(currentCardStorageKey, visibleWords[currentIndex]?.id || "");
  } catch (error) {
    console.warn("Không thể lưu vị trí thẻ hiện tại.", error);
  }
}

function saveUserSettings() {
  try {
    localStorage.setItem(settingsStorageKey, JSON.stringify(userSettings));
  } catch (error) {
    console.warn("Không thể lưu mục tiêu học tập.", error);
  }
}

function renderCategories() {
  document.querySelector("#category-tabs").innerHTML = categories.map(category =>
    `<button class="category-button${category === currentCategory ? " active" : ""}" data-category="${category}">${category}</button>`
  ).join("");
}

function updateProgress() {
  const hardCount = words.filter(item => wordProgress[item.id].memory === "hard").length;
  const rememberedCount = words.filter(item => wordProgress[item.id].remembered).length;
  const percent = words.length === 0 ? 0 : rememberedCount / words.length * 100;
  const percentLabel = `${Number(percent.toFixed(1))}%`;
  document.querySelector("#hard-count").textContent = hardCount;
  document.querySelector("#total-count").textContent = words.length;
  document.querySelector("#progress-percent").textContent = percentLabel;
  document.querySelector("#remembered-count").textContent = `${rememberedCount}/${words.length} từ đã nhớ`;
  document.querySelector("#progress-bar").style.width = `${percent}%`;
  document.querySelector("#reward-points").textContent = reviewRewards * 10;
  document.querySelector("#review-count").textContent = reviewRewards;
  document.querySelector("#mobile-progress-percent").textContent = percentLabel;
  document.querySelector("#mobile-progress-bar").style.width = `${percent}%`;
  document.querySelector("#mobile-total-count").textContent = words.length;
  document.querySelector("#mobile-remembered-count").textContent = rememberedCount;
  document.querySelector("#mobile-hard-count").textContent = hardCount;
  document.querySelector("#mobile-reward-points").textContent = reviewRewards * 10;
  updateDashboard();
}

function getEstimatedScore() {
  if (practiceResults.length === 0) return null;
  const recentResults = practiceResults.slice(-5);
  const quizAccuracy = recentResults.reduce((sum, result) => sum + result.score / result.total, 0) / recentResults.length;
  const grammarProgress = completedGrammar.length / grammarTopics.length;
  const vocabularyReview = words.filter(item => wordProgress[item.id].reviewed).length / words.length;
  const learningIndex = quizAccuracy * 0.8 + grammarProgress * 0.1 + vocabularyReview * 0.1;
  return Math.round((200 + learningIndex * 790) / 10) * 10;
}

function updateDashboard() {
  const estimatedScore = getEstimatedScore();
  const name = userSettings.learnerName;
  document.querySelector("#dashboard-greeting").textContent = name
    ? `Chào ${name}, cùng luyện TOEIC nhé.`
    : "Chào bạn, cùng luyện TOEIC nhé.";
  document.querySelector("#dashboard-hard-count").textContent =
    words.filter(item => wordProgress[item.id].memory === "hard").length;
  document.querySelector("#dashboard-grammar-count").textContent = completedGrammar.length;
  document.querySelector("#dashboard-test-count").textContent = practiceResults.length;
  document.querySelector("#dashboard-grammar-complete").textContent = completedGrammar.length;
  document.querySelector("#dashboard-practice-count").textContent = practiceResults.length;
  document.querySelector("#grammar-progress-count").textContent = completedGrammar.length;
  document.querySelector("#grammar-completed-heading").textContent = completedGrammar.length;
  document.querySelector("#grammar-progress-bar").style.width =
    `${completedGrammar.length / grammarTopics.length * 100}%`;
  document.querySelector("#test-best-score").textContent = practiceResults.length
    ? `${Math.max(...practiceResults.map(result => Math.round(result.score / result.total * 100)))}%`
    : "—";
  document.querySelector("#score-goal-value").textContent = userSettings.targetScore
    ? `${userSettings.targetScore} điểm`
    : "Chưa đặt";

  const scoreElement = document.querySelector("#estimated-score");
  const captionElement = document.querySelector("#estimated-score-caption");
  const goalProgress = document.querySelector("#score-goal-progress");
  scoreElement.textContent = estimatedScore ? `${estimatedScore}` : "—";
  if (!estimatedScore) {
    captionElement.textContent = "Hoàn thành mini test để nhận ước tính dựa trên kết quả học tập.";
    goalProgress.style.width = "0%";
  } else if (userSettings.targetScore) {
    const difference = estimatedScore - userSettings.targetScore;
    captionElement.textContent = difference >= 0
      ? `Bạn đang đạt mục tiêu ${userSettings.targetScore} điểm.`
      : `Còn khoảng ${Math.abs(difference)} điểm để chạm mục tiêu của bạn.`;
    goalProgress.style.width = `${Math.min(100, estimatedScore / userSettings.targetScore * 100)}%`;
  } else {
    captionElement.textContent = `Ước tính từ ${practiceResults.length} lượt mini test gần nhất.`;
    goalProgress.style.width = "0%";
  }
}

function showPage(pageName) {
  const titles = {
    home: "Tổng quan",
    vocabulary: "Từ vựng TOEIC",
    grammar: "Ngữ pháp TOEIC",
    practice: "Luyện thi TOEIC"
  };
  if (!titles[pageName]) return;
  activePage = pageName;
  document.querySelectorAll(".view-page").forEach(page => {
    page.classList.toggle("active", page.id === `page-${pageName}`);
  });
  document.querySelectorAll("[data-page], [data-mobile-page]").forEach(button => {
    button.classList.toggle("active", (button.dataset.page || button.dataset.mobilePage) === pageName);
  });
  document.querySelector("#breadcrumb-current").textContent = titles[pageName];
  document.querySelector(".mobile-progress").classList.toggle("hidden", pageName !== "vocabulary");
  if (pageName === "grammar") renderGrammar();
  if (pageName === "practice") renderPracticeIntro();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderGrammar() {
  document.querySelector("#grammar-list").innerHTML = grammarTopics.map(topic => {
    const completed = completedGrammar.includes(topic.id);
    return `<article class="grammar-topic${completed ? " grammar-completed" : ""}">
      <button class="grammar-topic-toggle" type="button" data-grammar-toggle="${topic.id}" aria-expanded="false" aria-controls="grammar-detail-${topic.id}">
        <span class="grammar-topic-icon">${topic.icon}</span>
        <span class="grammar-topic-title"><span class="grammar-level">${topic.level}</span><strong>${topic.title}</strong><small>${topic.summary}</small></span>
        <span class="grammar-topic-state">${completed ? "✓ Đã ôn" : "Xem bài"} <b aria-hidden="true">⌄</b></span>
      </button>
      <div class="grammar-topic-detail hidden" id="grammar-detail-${topic.id}">
        <div class="grammar-rule"><strong>Ghi nhớ</strong><p>${topic.rule}</p></div>
        <div class="grammar-example"><strong>Ví dụ</strong><p>${topic.example}</p><small>${topic.highlight}</small></div>
        <button class="grammar-complete-button" type="button" data-grammar-complete="${topic.id}" aria-pressed="${completed}">${completed ? "✓ Đã ôn chủ điểm này" : "Đánh dấu đã ôn"}</button>
      </div>
    </article>`;
  }).join("");
}

function updatePracticeBestScore() {
  const highest = practiceResults.length
    ? Math.max(...practiceResults.map(result => Math.round(result.score / result.total * 100)))
    : null;
  document.querySelector("#test-best-score").textContent = highest === null ? "—" : `${highest}%`;
}

function renderPracticeIntro() {
  if (testStarted) return;
  document.querySelector("#test-intro").classList.remove("hidden");
  document.querySelector("#test-panel").classList.add("hidden");
  updatePracticeBestScore();
}

function startPracticeTest() {
  activeTest = [...practiceQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
  testIndex = 0;
  testScore = 0;
  testAnswered = false;
  testStarted = true;
  document.querySelector("#test-intro").classList.add("hidden");
  document.querySelector("#test-panel").classList.remove("hidden");
  renderPracticeQuestion();
}

function renderPracticeQuestion() {
  const question = activeTest[testIndex];
  const panel = document.querySelector("#test-panel");
  panel.innerHTML = `<div class="test-progress-label"><span>CÂU ${testIndex + 1} / ${activeTest.length}</span><span>Đúng ${testScore}</span></div>
    <div class="test-progress-track"><span style="width:${testIndex / activeTest.length * 100}%"></span></div>
    <div class="test-question">${question.prompt}</div>
    <div class="test-options">${question.options.map((option, index) =>
      `<button type="button" class="test-option" data-answer-index="${index}"><span>${String.fromCharCode(65 + index)}</span>${option}</button>`
    ).join("")}</div>
    <div class="test-feedback hidden" id="test-feedback" aria-live="polite"></div>
    <button type="button" class="primary-button test-next-button hidden" id="test-next-button">${testIndex === activeTest.length - 1 ? "Xem kết quả" : "Câu tiếp theo"} <span>→</span></button>`;
}

function answerPracticeQuestion(selectedIndex) {
  if (testAnswered) return;
  testAnswered = true;
  const question = activeTest[testIndex];
  const correct = selectedIndex === question.answer;
  if (correct) testScore += 1;
  document.querySelectorAll(".test-option").forEach((option, index) => {
    option.disabled = true;
    if (index === question.answer) option.classList.add("answer-correct");
    else if (index === selectedIndex) option.classList.add("answer-incorrect");
  });
  const feedback = document.querySelector("#test-feedback");
  feedback.classList.remove("hidden");
  feedback.classList.toggle("feedback-correct", correct);
  feedback.innerHTML = `<strong>${correct ? "Chính xác!" : "Chưa đúng."}</strong><p>${question.explanation}</p>`;
  document.querySelector("#test-next-button").classList.remove("hidden");
}

function finishPracticeTest() {
  practiceResults.push({ score: testScore, total: activeTest.length, completedAt: new Date().toISOString() });
  practiceResults = practiceResults.slice(-20);
  savePracticeResults();
  testStarted = false;
  updatePracticeBestScore();
  updateDashboard();
  const estimate = getEstimatedScore();
  document.querySelector("#test-panel").innerHTML = `<div class="test-result">
    <div class="test-result-icon">✦</div><div class="eyebrow">HOÀN THÀNH MINI TEST</div>
    <h2>${testScore >= 8 ? "Làm tốt lắm!" : "Bạn đã hoàn thành!"}</h2>
    <p>Bạn trả lời đúng <strong>${testScore} / ${activeTest.length}</strong> câu.</p>
    <div class="test-result-score">${Math.round(testScore / activeTest.length * 100)}<span>%</span></div>
    <p class="test-estimate-note">Điểm TOEIC ước tính hiện tại: <strong>${estimate}</strong> · Chỉ mang tính tham khảo</p>
    <button class="primary-button" id="test-restart-button">Làm mini test mới <span>↻</span></button>
  </div>`;
}

function openGoalOnboarding() {
  document.querySelectorAll('input[name="target-score"]').forEach(input => {
    input.checked = Number(input.value) === userSettings.targetScore;
  });
  document.querySelector("#learner-name").value = userSettings.learnerName;
  document.querySelector("#onboarding-error").textContent = "";
  document.querySelector("#onboarding-modal").classList.remove("hidden");
  const selectedGoal = document.querySelector('input[name="target-score"]:checked');
  if (!selectedGoal) document.querySelector('input[name="target-score"]').focus();
}

function closeGoalOnboarding() {
  document.querySelector("#onboarding-modal").classList.add("hidden");
}

function flipCurrentCard() {
  if (visibleWords.length === 0) return;
  cardIsFlipped = !cardIsFlipped;
  const currentWord = visibleWords[currentIndex];
  let reachedTenReviewMilestone = false;
  if (cardIsFlipped && !dailyVocabularyGoal.reviewedIds.includes(currentWord.id)) {
    dailyVocabularyGoal.reviewedIds.push(currentWord.id);
    saveDailyVocabularyGoal();
    if (dailyVocabularyGoal.reviewedIds.length >= 10 && !dailyVocabularyGoal.shownMilestones.includes("ten-reviewed")) {
      dailyVocabularyGoal.shownMilestones.push("ten-reviewed");
      saveDailyVocabularyGoal();
      reachedTenReviewMilestone = true;
    }
  }
  if (cardIsFlipped && !wordProgress[currentWord.id].reviewed) {
    wordProgress[currentWord.id].reviewed = true;
    saveWordProgress();
    updateDashboard();
  }
  if (cardIsFlipped && hardReviewSession && hardReviewDeckIds.includes(currentWord.id)) {
    reviewedHardWords.add(currentWord.id);
    if (reviewedHardWords.size === visibleWords.length) {
      renderCard();
      if (reachedTenReviewMilestone) {
        reviewRewards += 1;
        saveReviewRewards();
        updateProgress();
      }
      completeHardReview({ dailyMilestone: reachedTenReviewMilestone });
      return;
    }
  }
  renderCard();
  if (reachedTenReviewMilestone) {
    reviewRewards += 1;
    saveReviewRewards();
    updateProgress();
    showCelebration({
      title: "Tuyệt vời!",
      message: `Bạn đã ôn ${dailyVocabularyGoal.reviewedIds.length}/100 từ hôm nay — hoàn thành 1/10 mục tiêu!`
    });
  }
}

function getVisibleWords() {
  if (hardReviewSession) {
    return hardReviewDeckIds.map(id => words.find(item => item.id === id)).filter(Boolean);
  }
  const query = document.querySelector("#vocab-search").value.trim().toLocaleLowerCase("vi");
  return words.filter(item => {
    const state = wordProgress[item.id];
    const matchesStatus = currentFilter === "all"
      || (currentFilter === "hard" && state.memory === "hard");
    const matchesCategory = currentCategory === "Tất cả" || item.category === currentCategory;
    const matchesSearch = `${item.word} ${item.meaning} ${item.type} ${item.category}`.toLocaleLowerCase("vi").includes(query);
    return matchesStatus && matchesCategory && matchesSearch;
  });
}

function renderCard() {
  resetSpeechStatus(true);
  const card = document.querySelector("#flashcard");
  const flashcardWrap = document.querySelector(".flashcard-wrap");
  const counter = document.querySelector("#card-counter");
  const navigation = document.querySelector(".deck-navigation");
  const dictionary = document.querySelector("#card-dictionary");
  const noteForm = document.querySelector("#word-note-form");
  const sourceDisclaimer = document.querySelector(".source-disclaimer");
  const emptyState = document.querySelector("#empty-state");
  emptyState.classList.toggle("hidden", visibleWords.length > 0);
  flashcardWrap.classList.toggle("hidden", visibleWords.length === 0);
  card.classList.toggle("hidden", visibleWords.length === 0);
  navigation.classList.toggle("hidden", visibleWords.length === 0);
  counter.classList.toggle("hidden", visibleWords.length === 0);
  sourceDisclaimer.classList.toggle("hidden", visibleWords.length === 0);
  noteForm.classList.toggle("hidden", visibleWords.length === 0 || !cardIsFlipped);
  navigation.querySelectorAll(".deck-arrow").forEach(button => {
    button.disabled = visibleWords.length < 2;
  });

  if (visibleWords.length === 0) {
    dictionary.classList.add("hidden");
    return;
  }

  const item = visibleWords[currentIndex];
  const state = wordProgress[item.id];
  card.classList.toggle("flipped", cardIsFlipped);
  card.setAttribute("aria-expanded", String(cardIsFlipped));
  card.setAttribute("aria-label", `${cardIsFlipped ? "Mặt sau" : "Mặt trước"} của flashcard ${item.word}; nhấn để ${cardIsFlipped ? "quay lại từ" : "xem nghĩa"}`);
  document.querySelector("#card-counter").textContent = `${currentIndex + 1} / ${visibleWords.length}`;
  document.querySelector("#card-type").textContent = item.type;
  document.querySelector("#card-mark").textContent = "";
  document.querySelector("#card-word").textContent = item.word;
  document.querySelector("#card-pronunciation").textContent = cardIsFlipped ? item.pronunciation : "";
  document.querySelector("#card-meaning").textContent = cardIsFlipped ? item.meaning : "";
  document.querySelector("#card-hint").textContent = cardIsFlipped ? "Chạm hoặc nhấn Space để xem lại từ" : "Chạm hoặc nhấn Space để lật thẻ";
  document.querySelector("#word-note-input").value = state.note;
  document.querySelector("#note-save-status").textContent = state.note ? "Đã lưu" : "";
  const hardCheckbox = document.querySelector("#hard-checkbox");
  hardCheckbox.checked = state.memory === "hard";
  hardCheckbox.setAttribute("aria-label", `Đánh dấu ${item.word} là từ khó nhớ`);
  hardCheckbox.closest(".hard-checkbox").classList.toggle("selected", hardCheckbox.checked);
  const rememberCheckbox = document.querySelector("#remember-checkbox");
  rememberCheckbox.checked = state.remembered;
  rememberCheckbox.setAttribute("aria-label", `Đánh dấu ${item.word} là đã nhớ`);
  rememberCheckbox.closest(".remember-checkbox").classList.toggle("selected", rememberCheckbox.checked);
  document.querySelector("#speaker-button").setAttribute("aria-label", `Nghe phát âm từ ${item.word}`);
  document.querySelector("#speaker-button").title = `Nghe phát âm từ ${item.word}`;

  const dictionaryUrl = `https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(item.word)}`;
  const youglishUrl = `https://youglish.com/pronounce/${encodeURIComponent(item.word)}/english`;
  document.querySelector("#cambridge-disclaimer-link").href = dictionaryUrl;
  document.querySelector("#youglish-disclaimer-link").href = youglishUrl;
  dictionary.classList.toggle("hidden", !cardIsFlipped);
  dictionary.innerHTML = cardIsFlipped
    ? `<span>${item.word} · Từ điển & phát âm</span><span class="card-dictionary-links"><a href="${dictionaryUrl}" target="_blank" rel="noopener noreferrer">Tra Cambridge ↗</a><a href="${youglishUrl}" target="_blank" rel="noopener noreferrer">Nghe trên YouGlish ↗</a></span>`
    : "";
}

function renderCards(preferredWordId) {
  visibleWords = getVisibleWords();
  if (preferredWordId !== undefined) {
    const preferredIndex = visibleWords.findIndex(item => item.id === preferredWordId);
    if (preferredIndex !== -1) currentIndex = preferredIndex;
    else currentIndex = Math.min(currentIndex, visibleWords.length - 1);
  } else {
    currentIndex = Math.min(currentIndex, visibleWords.length - 1);
  }
  currentIndex = Math.max(0, currentIndex);
  renderCard();
  saveCurrentCard();
}

document.querySelectorAll(".filter-button").forEach(button => button.addEventListener("click", () => {
  reviewedHardWords.clear();
  currentFilter = button.dataset.filter;
  hardReviewDeckIds = currentFilter === "hard"
    ? words.filter(item =>
      wordProgress[item.id].memory === "hard" &&
      (currentCategory === "Tất cả" || item.category === currentCategory)
    ).map(item => item.id)
    : [];
  hardReviewSession = currentFilter === "hard" && hardReviewDeckIds.length > 0;
  hardReviewCategory = currentFilter === "hard" && currentCategory !== "Tất cả" ? currentCategory : null;
  if (hardReviewSession) {
    cardIsFlipped = false;
    document.querySelector("#vocab-search").value = "";
  }
  document.querySelectorAll(".filter-button").forEach(filter => filter.classList.toggle("active", filter === button));
  renderCards(hardReviewDeckIds[0]);
}));

document.querySelector("#category-tabs").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  reviewedHardWords.clear();
  currentCategory = button.dataset.category;
  hardReviewDeckIds = currentFilter === "hard"
    ? words.filter(item =>
      wordProgress[item.id].memory === "hard" &&
      (currentCategory === "Tất cả" || item.category === currentCategory)
    ).map(item => item.id)
    : [];
  hardReviewSession = currentFilter === "hard" && hardReviewDeckIds.length > 0;
  hardReviewCategory = currentFilter === "hard" && currentCategory !== "Tất cả" ? currentCategory : null;
  if (hardReviewSession) {
    cardIsFlipped = false;
    document.querySelector("#vocab-search").value = "";
  }
  renderCategories();
  renderCards(hardReviewDeckIds[0]);
});

document.querySelector("#vocab-search").addEventListener("input", () => {
  hardReviewSession = false;
  reviewedHardWords.clear();
  hardReviewDeckIds = [];
  currentFilter = "all";
  currentCategory = "Tất cả";
  hardReviewCategory = null;
  document.querySelectorAll(".filter-button").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === currentFilter);
  });
  renderCategories();
  renderCards();
});
document.querySelector("#flashcard").addEventListener("click", () => {
  flipCurrentCard();
});

function moveCard(direction) {
  if (visibleWords.length < 2) return;
  if (hardReviewSession && direction > 0 && currentIndex === visibleWords.length - 1) {
    if (reviewedHardWords.size === visibleWords.length) {
      completeHardReview();
      return;
    }
    const nextUnreviewed = visibleWords.findIndex((item, index) => index > currentIndex && !reviewedHardWords.has(item.id));
    if (nextUnreviewed !== -1) currentIndex = nextUnreviewed;
    else {
      const firstUnreviewed = visibleWords.findIndex(item => !reviewedHardWords.has(item.id));
      if (firstUnreviewed === -1) {
        completeHardReview();
        return;
      }
      currentIndex = firstUnreviewed;
    }
  } else {
    currentIndex = (currentIndex + direction + visibleWords.length) % visibleWords.length;
  }
  cardIsFlipped = false;
  saveCurrentCard();
  renderCard();
}

function updateCurrentWord(update) {
  if (visibleWords.length === 0) return;
  const item = visibleWords[currentIndex];
  update(wordProgress[item.id]);
  saveWordProgress();
  updateProgress();
  renderCards(item.id);
}

document.querySelector("#previous-card").addEventListener("click", () => moveCard(-1));
document.querySelector("#next-card").addEventListener("click", () => moveCard(1));
document.querySelector("#shuffle-button").addEventListener("click", () => {
  hardReviewSession = false;
  reviewedHardWords.clear();
  hardReviewDeckIds = [];
  for (let index = visibleWords.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [visibleWords[index], visibleWords[randomIndex]] = [visibleWords[randomIndex], visibleWords[index]];
  }
  currentIndex = 0;
  cardIsFlipped = false;
  saveCurrentCard();
  renderCard();
  showToast("Đã trộn thẻ");
});
document.querySelector("#hard-checkbox").addEventListener("change", event => {
  updateCurrentWord(state => {
    state.memory = event.currentTarget.checked ? "hard" : null;
    if (event.currentTarget.checked) {
      state.remembered = false;
      dailyVocabularyGoal.rememberedIds = dailyVocabularyGoal.rememberedIds.filter(id => id !== visibleWords[currentIndex].id);
      saveDailyVocabularyGoal();
    }
  });
});
document.querySelector("#remember-checkbox").addEventListener("change", event => {
  if (visibleWords.length === 0) return;
  const item = visibleWords[currentIndex];
  updateCurrentWord(state => {
    state.remembered = event.currentTarget.checked;
    if (event.currentTarget.checked) state.memory = null;
  });
  dailyVocabularyGoal.rememberedIds = event.currentTarget.checked
    ? [...new Set([...dailyVocabularyGoal.rememberedIds, item.id])]
    : dailyVocabularyGoal.rememberedIds.filter(id => id !== item.id);
  if (dailyVocabularyGoal.rememberedIds.length >= 100 && !dailyVocabularyGoal.shownMilestones.includes("hundred-remembered")) {
    dailyVocabularyGoal.shownMilestones.push("hundred-remembered");
    reviewRewards += 1;
    saveReviewRewards();
    updateProgress();
    showCelebration({
      title: "Bạn đã đạt mục tiêu!",
      message: "Bạn đã đánh dấu 100 từ là đã nhớ hôm nay. Hoàn thành mục tiêu 100 từ!",
      points: 10,
      fireworks: true,
      eyebrow: "MỤC TIÊU 100 TỪ HOÀN THÀNH"
    });
  }
  saveDailyVocabularyGoal();
});
document.querySelector("#speaker-button").addEventListener("click", () => {
  if (visibleWords.length === 0) return;
  resetSpeechStatus(true);
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    showSpeechError("Trình duyệt chưa hỗ trợ phát âm.");
    return;
  }
  const word = visibleWords[currentIndex].word;
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.85;
  activeSpeechUtterance = utterance;
  utterance.onend = () => { activeSpeechUtterance = null; };
  utterance.onerror = () => {
    if (activeSpeechUtterance === utterance) showSpeechError("Không phát được âm thanh. Thử lại nhé.");
  };
  try {
    window.speechSynthesis.speak(utterance);
  } catch (error) {
    console.error("Không thể phát âm từ vựng.", error);
    if (activeSpeechUtterance === utterance) showSpeechError("Không phát được âm thanh. Thử lại nhé.");
  }
});
document.querySelector("#word-note-form").addEventListener("submit", event => {
  event.preventDefault();
  if (visibleWords.length === 0) return;
  const item = visibleWords[currentIndex];
  wordProgress[item.id].note = document.querySelector("#word-note-input").value.trim().slice(0, 500);
  saveWordProgress();
  document.querySelector("#note-save-status").textContent = wordProgress[item.id].note ? "Đã lưu ghi chú" : "Đã xóa ghi chú";
});

function completeHardReview({ dailyMilestone = false } = {}) {
  if (!hardReviewSession) return;
  hardReviewSession = false;
  const showFireworks = hardReviewCategory !== null &&
    !completedHardReviewCelebrations.includes(hardReviewCategory);
  if (showFireworks) {
    completedHardReviewCelebrations.push(hardReviewCategory);
    saveCompletedHardReviewCelebrations();
  }
  reviewRewards += 1;
  saveReviewRewards();
  updateProgress();
  const categoryLabel = hardReviewCategory ? ` trong ${hardReviewCategory}` : "";
  showCelebration({
    title: "Bạn làm được rồi!",
    message: `Bạn đã ôn xong ${hardReviewDeckIds.length} từ khó nhớ${categoryLabel}. Mỗi lượt ôn giúp trí nhớ vững vàng hơn!${dailyMilestone ? " Bạn cũng đã ôn 10/100 từ hôm nay — hoàn thành 1/10 mục tiêu!" : ""}`,
    points: dailyMilestone ? 20 : 10,
    fireworks: showFireworks,
    eyebrow: dailyMilestone ? "THỬ THÁCH · MỤC TIÊU 1/10" : "THỬ THÁCH HOÀN THÀNH",
    closesHardReview: true
  });
}

function closeCelebration() {
  document.querySelector("#celebration-modal").classList.add("hidden");
  const closesHardReview = celebrationClosesHardReview;
  if (closesHardReview) {
    hardReviewDeckIds = [];
    reviewedHardWords.clear();
    hardReviewCategory = null;
  }
  const returnFocus = celebrationReturnFocus;
  celebrationReturnFocus = null;
  celebrationClosesHardReview = false;
  renderCards();
  if (closesHardReview) {
    document.querySelector('.filter-button[data-filter="hard"]').focus();
  } else if (returnFocus?.isConnected) {
    returnFocus.focus();
  }
}

document.querySelector("#celebration-close").addEventListener("click", closeCelebration);

document.querySelectorAll(".sidebar-nav-button").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});
document.querySelectorAll("[data-mobile-page]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.mobilePage));
});
document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.go));
});

document.querySelector("#grammar-list").addEventListener("click", event => {
  const toggle = event.target.closest("[data-grammar-toggle]");
  if (toggle) {
    const detail = document.querySelector(`#grammar-detail-${toggle.dataset.grammarToggle}`);
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    detail.classList.toggle("hidden", expanded);
    return;
  }
  const complete = event.target.closest("[data-grammar-complete]");
  if (!complete) return;
  const topicId = complete.dataset.grammarComplete;
  completedGrammar = completedGrammar.includes(topicId)
    ? completedGrammar.filter(id => id !== topicId)
    : [...completedGrammar, topicId];
  saveCompletedGrammar();
  renderGrammar();
  updateDashboard();
});

document.querySelector("#test-start-button").addEventListener("click", startPracticeTest);
document.querySelector("#test-panel").addEventListener("click", event => {
  const option = event.target.closest("[data-answer-index]");
  if (option) {
    answerPracticeQuestion(Number(option.dataset.answerIndex));
    return;
  }
  if (event.target.closest("#test-next-button")) {
    if (testIndex === activeTest.length - 1) finishPracticeTest();
    else {
      testIndex += 1;
      testAnswered = false;
      renderPracticeQuestion();
    }
    return;
  }
  if (event.target.closest("#test-restart-button")) startPracticeTest();
});

document.querySelector("#edit-goal-button").addEventListener("click", openGoalOnboarding);
document.querySelector("#dashboard-edit-goal").addEventListener("click", openGoalOnboarding);
document.querySelector("#goal-form").addEventListener("submit", event => {
  event.preventDefault();
  const selectedGoal = document.querySelector('input[name="target-score"]:checked');
  if (!selectedGoal) {
    document.querySelector("#onboarding-error").textContent = "Chọn mục tiêu điểm TOEIC để tiếp tục nhé.";
    return;
  }
  userSettings = {
    targetScore: Number(selectedGoal.value),
    learnerName: document.querySelector("#learner-name").value.trim().slice(0, 32)
  };
  saveUserSettings();
  updateDashboard();
  closeGoalOnboarding();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !document.querySelector("#celebration-modal").classList.contains("hidden")) {
    closeCelebration();
    return;
  }
  if (event.altKey || event.ctrlKey || event.metaKey || event.target.matches("input, textarea, select, a")) return;
  if (event.key === "ArrowRight") moveCard(1);
  else if (event.key === "ArrowLeft") moveCard(-1);
  else if (event.code === "Space" && !event.target.matches("button")) {
    event.preventDefault();
    flipCurrentCard();
  }
});

document.querySelector("#today-label").textContent = new Intl.DateTimeFormat("vi-VN", {
  weekday: "long", day: "numeric", month: "long"
}).format(new Date());

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js")
    .catch(error => console.warn("Không thể bật chế độ dùng LIN ngoại tuyến.", error));
}

renderCategories();
renderGrammar();
updateProgress();
renderCards(loadCurrentCardId() || undefined);
renderPracticeIntro();
saveCurrentCard();
showPage("vocabulary");
if (!userSettings.targetScore) openGoalOnboarding();
