import { Link } from "react-router-dom";
import { Leaf, Coffee, Wind, Snowflake, Filter, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-coffee-field.jpg";

const categories = [
  { icon: Leaf, title: "Cà phê nhân xanh", desc: "Green coffee beans" },
  { icon: Coffee, title: "Cà phê hạt rang", desc: "Roasted coffee beans" },
  { icon: Wind, title: "Cà phê bột", desc: "Ground coffee" },
  { icon: Snowflake, title: "Cà phê ủ lạnh", desc: "Cold brew coffee" },
  { icon: Filter, title: "Cà phê túi lọc", desc: "Drip-bag coffee" },
  { icon: Zap, title: "Cà phê hoà tan", desc: "Instant coffee" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Cánh đồng cà phê Việt Nam"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground tracking-tight mb-6 animate-fade-in">
          BREW BOLD. BE TOBE.
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8" style={{ animationDelay: "0.2s" }}>
          Hương vị cà phê đậm đà từ cao nguyên Việt Nam
        </p>
        <Link
          to="/product"
          className="inline-block bg-primary text-primary-foreground font-body font-semibold px-8 py-3 rounded-sm uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
        >
          Khám phá sản phẩm
        </Link>
      </div>
    </section>

    {/* Categories */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Danh mục sản phẩm
        </h2>
        <p className="font-body text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Đa dạng dòng sản phẩm cà phê chất lượng cao từ TOBE
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to="/product"
              className="group bg-card rounded-sm p-8 text-center hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30"
            >
              <cat.icon className="mx-auto mb-4 text-primary" size={40} strokeWidth={1.5} />
              <h3 className="font-heading text-lg font-bold mb-1">{cat.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Câu chuyện TOBE</h2>
        <p className="font-body text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Từ những hạt cà phê chín mọng trên cao nguyên đến ly cà phê hoàn hảo trong tay bạn.
        </p>
        <Link
          to="/story"
          className="inline-block bg-primary-foreground text-foreground font-body font-semibold px-8 py-3 rounded-sm uppercase tracking-wider text-sm hover:bg-primary-foreground/90 transition-colors"
        >
          Tìm hiểu thêm
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
