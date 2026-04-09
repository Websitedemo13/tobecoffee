import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const posts = [
  { id: 1, title: "Cách pha Cold Brew tại nhà đơn giản", excerpt: "Hướng dẫn chi tiết cách pha cà phê ủ lạnh ngon chuẩn vị ngay tại nhà với dụng cụ đơn giản.", date: "2026-03-15", topic: "Cách pha" },
  { id: 2, title: "Cà phê và Sức khỏe: Những lợi ích bất ngờ", excerpt: "Nghiên cứu mới nhất cho thấy cà phê có nhiều lợi ích cho sức khỏe hơn bạn nghĩ.", date: "2026-03-08", topic: "Sức khỏe" },
  { id: 3, title: "Khám phá vùng cà phê Buôn Ma Thuột", excerpt: "Hành trình đến thủ phủ cà phê Việt Nam — nơi sinh ra những hạt Robusta hảo hạng nhất.", date: "2026-02-20", topic: "Khám phá" },
  { id: 4, title: "Sự khác biệt giữa Arabica và Robusta", excerpt: "Tìm hiểu đặc điểm, hương vị và cách chọn loại cà phê phù hợp với gu của bạn.", date: "2026-02-10", topic: "Kiến thức" },
  { id: 5, title: "Drip Bag — Xu hướng cà phê tiện lợi", excerpt: "Cà phê túi lọc đang trở thành lựa chọn yêu thích của giới văn phòng hiện đại.", date: "2026-01-28", topic: "Xu hướng" },
  { id: 6, title: "TOBE ra mắt dòng sản phẩm mới 2026", excerpt: "Cập nhật các sản phẩm mới nhất từ TOBE Coffee trong năm 2026.", date: "2026-01-15", topic: "Tin TOBE" },
];

const topics = ["Cách pha Cold Brew tại nhà", "Cà phê và Sức khỏe", "Xu hướng cà phê 2026", "Khám phá vùng nguyên liệu"];

const Blog = () => (
  <Layout>
    <section className="bg-foreground text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Tin tức & Blog</h1>
        <p className="font-body text-primary-foreground/70 text-lg">Cập nhật kiến thức và câu chuyện cà phê</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Posts */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((p) => (
            <article key={p.id} className="bg-card border border-border rounded-sm overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-secondary flex items-center justify-center">
                <span className="font-heading text-3xl text-primary/20">TOBE</span>
              </div>
              <div className="p-6">
                <p className="font-body text-xs text-muted-foreground mb-2">{p.date} · {p.topic}</p>
                <h3 className="font-heading text-lg font-bold mb-2 leading-snug">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">{p.excerpt}</p>
                <Link to="#" className="font-body text-sm text-primary font-semibold hover:underline">
                  Xem thêm →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="lg:w-72 shrink-0">
          <div className="sticky top-24">
            <h3 className="font-heading text-lg font-bold mb-4">Chủ đề nổi bật</h3>
            <ul className="space-y-3">
              {topics.map((t) => (
                <li key={t}>
                  <Link to="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors block py-2 border-b border-border">
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  </Layout>
);

export default Blog;
