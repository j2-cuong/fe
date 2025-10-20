export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  author: string;
  publishedAt: string;
  excerpt: string;
  category: string;
  featured: boolean;
  timeLife: string;
  image?: string;
  tags?: string[];
}

export interface NewsCategory {
  id: string;
  label: string;
  color: string;
  description?: string;
}

export const newsCategories: NewsCategory[] = [
  {
    id: "all",
    label: "Tất cả",
    color: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    description: "Xem tất cả bài viết",
  },
  {
    id: "Lộ trình",
    label: "Lộ trình",
    color: "bg-purple-100 text-purple-700 hover:bg-purple-200",
    description: "Lộ trình phát triển game",
  },
  {
    id: "Hoạt Động",
    label: "Hoạt Động",
    color: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
    description: "Các hoạt động trong game",
  },
  {
    id: "Event",
    label: "Event",
    color: "bg-orange-100 text-orange-700 hover:bg-orange-200",
    description: "Sự kiện đặc biệt",
  },
  {
    id: "Mini Game",
    label: "Mini Game",
    color: "bg-pink-100 text-pink-700 hover:bg-pink-200",
    description: "Trò chơi phụ",
  },
  {
    id: "Hỗ trợ",
    label: "Hỗ trợ",
    color: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    description: "Hỗ trợ người chơi",
  },
  {
    id: "Nạp thẻ",
    label: "Nạp thẻ",
    color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
    description: "Thông tin nạp thẻ",
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Phúc lợi nạp thẻ",
    slug: "phuc-loi-nap-the",
    author: "Administrator",
    publishedAt: "20/10/2025",
    excerpt: "Tìm hiểu về các phúc lợi và ưu đãi khi nạp thẻ vào game",
    category: "Nạp thẻ",
    featured: true,
    timeLife: "Hàng ngày",
    image: "/images/recharge-benefits.jpg",
    tags: ["nạp thẻ", "phúc lợi", "ưu đãi"],
  },
  {
    id: 2,
    title: "Hoa Sơn Luận Kiếm",
    slug: "hoa-son-luan-kiem",
    author: "Administrator",
    publishedAt: "20/10/2025",
    excerpt: "Hoạt động hoa sơn luận kiếm",
    category: "Hàng ngày",
    featured: false,
    timeLife: "Thứ 6",
    image: "/images/boss-registration.jpg",
    tags: ["tra cứu", "báo danh", "boss"],
  },
  {
    id: 3,
    title: "Boss Hỏa Kỳ Lân",
    slug: "hoa-ky-lan",
    author: "Administrator",
    publishedAt: "20/10/2025",
    excerpt: "Boss hỏa kỳ lân",
    category: "Boss",
    featured: false,
    timeLife: "Thứ 2",
    image: "/images/new-player-support.jpg",
    tags: ["hỗ trợ", "người mới", "chính sách"],
  },
  {
    id: 4,
    title: "Tần thủy hoàng",
    slug: "tan-thuy-hoang",
    author: "Administrator",
    publishedAt: "20/10/2025",
    excerpt: "Thử thách từ hoàng đế Tần Thủy Hoàng với những nhiệm vụ đặc biệt",
    category: "Hoạt Động",
    featured: false,
    timeLife: "Hàng ngày",
    image: "/images/qin-emperor.jpg",
    tags: ["tần thủy hoàng", "thử thách", "nhiệm vụ"],
  },
  {
    id: 5,
    title: "Võ lâm cao thủ",
    slug: "hoat-dong-vo-lam-cao-thu",
    author: "Administrator",
    publishedAt: "20/10/2025",
    excerpt:
      "Chinh phục linh thú huyền thoại Hỏa kỳ lân để nhận phần thưởng độc quyền",
    category: "Hoạt Động",
    featured: false,
    timeLife: "Hàng ngày",
    image: "/images/fire-qilin.jpg",
    tags: ["hỏa kỳ lân", "linh thú", "phần thưởng"],
  },
  {
    id: 6,
    title: "Võ lâm cao thủ",
    slug: "hoat-dong-vo-lam-cao-thu",
    author: "Administrator",
    publishedAt: "20/10/2025",
    excerpt:
      "Chinh phục linh thú huyền thoại Hỏa kỳ lân để nhận phần thưởng độc quyền",
    category: "Hoạt Động",
    featured: false,
    timeLife: "Hàng ngày",
    image: "/images/fire-qilin.jpg",
    tags: ["hỏa kỳ lân", "linh thú", "phần thưởng"],
  },
];

export const getFeaturedArticles = () => {
  // Lấy 5 bài viết nổi bật, nếu không đủ thì lấy bài viết mới nhất
  const featured = newsArticles.filter((article) => article.featured);
  if (featured.length >= 5) {
    return featured.slice(0, 5);
  }

  // Nếu không đủ 5 bài nổi bật, lấy thêm bài viết mới nhất
  const sortedArticles = newsArticles.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return [
    ...featured,
    ...sortedArticles.filter((article) => !article.featured),
  ].slice(0, 5);
};

export const getArticlesByCategory = (category: string) => {
  if (category === "all") return newsArticles;
  return newsArticles.filter((article) => article.category === category);
};

export const searchArticles = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return newsArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.excerpt.toLowerCase().includes(lowercaseQuery) ||
      article.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};
