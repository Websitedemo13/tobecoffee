import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const allCategories = [
  "Tất cả", "Cà phê nhân xanh", "Cà phê hạt rang", "Cà phê bột",
  "Cà phê ủ lạnh", "Cà phê túi lọc", "Cà phê hoà tan",
];

const origins = ["Tất cả", "Buôn Ma Thuột", "Đà Lạt", "Sơn La"];

const products = [
  { id: 1, name: "Tobe Robusta Hạt Rang", category: "Cà phê hạt rang", origin: "Buôn Ma Thuột", price: 189000 },
  { id: 2, name: "Tobe Arabica Đà Lạt", category: "Cà phê hạt rang", origin: "Đà Lạt", price: 245000 },
  { id: 3, name: "Tobe Drip Bag - Hương Vị Đậm Đà", category: "Cà phê túi lọc", origin: "Buôn Ma Thuột", price: 120000 },
  { id: 4, name: "Tobe Cold Brew Original", category: "Cà phê ủ lạnh", origin: "Buôn Ma Thuột", price: 85000 },
  { id: 5, name: "Tobe Cà Phê Bột Truyền Thống", category: "Cà phê bột", origin: "Buôn Ma Thuột", price: 135000 },
  { id: 6, name: "Tobe Instant Premium", category: "Cà phê hoà tan", origin: "Đà Lạt", price: 95000 },
  { id: 7, name: "Tobe Green Bean Sơn La", category: "Cà phê nhân xanh", origin: "Sơn La", price: 320000 },
  { id: 8, name: "Tobe Cold Brew Vanilla", category: "Cà phê ủ lạnh", origin: "Đà Lạt", price: 95000 },
  { id: 9, name: "Tobe Drip Bag - Arabica Blend", category: "Cà phê túi lọc", origin: "Đà Lạt", price: 130000 },
];

const formatPrice = (p: number) => p.toLocaleString("vi-VN") + "₫";

const Product = () => {
  const [cat, setCat] = useState("Tất cả");
  const [origin, setOrigin] = useState("Tất cả");

  const filtered = products.filter(
    (p) => (cat === "Tất cả" || p.category === cat) && (origin === "Tất cả" || p.origin === origin)
  );

  return (
    <Layout>
      <section className="bg-foreground text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Sản phẩm</h1>
          <p className="font-body text-primary-foreground/70 text-lg">Đa dạng lựa chọn cho mọi gu thưởng thức</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
          {/* Filters */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-24">
              <h3 className="font-heading text-lg font-bold mb-4">Danh mục</h3>
              <ul className="space-y-2 mb-8">
                {allCategories.map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => setCat(c)}
                      className={`font-body text-sm w-full text-left px-3 py-2 rounded-sm transition-colors ${
                        cat === c ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-secondary text-muted-foreground"
                      }`}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
              <h3 className="font-heading text-lg font-bold mb-4">Xuất xứ</h3>
              <ul className="space-y-2">
                {origins.map((o) => (
                  <li key={o}>
                    <button
                      onClick={() => setOrigin(o)}
                      className={`font-body text-sm w-full text-left px-3 py-2 rounded-sm transition-colors ${
                        origin === o ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-secondary text-muted-foreground"
                      }`}
                    >
                      {o}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <p className="font-body text-muted-foreground text-center py-20">Không tìm thấy sản phẩm phù hợp.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((p) => (
                  <div key={p.id} className="bg-card border border-border rounded-sm overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-secondary flex items-center justify-center">
                      <span className="font-heading text-4xl text-primary/30">TOBE</span>
                    </div>
                    <div className="p-5">
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">{p.category}</p>
                      <h3 className="font-heading text-base font-bold mb-2 leading-snug">{p.name}</h3>
                      <p className="font-body text-lg font-semibold text-primary mb-4">{formatPrice(p.price)}</p>
                      <Button className="w-full rounded-sm font-body uppercase tracking-wider text-xs">
                        Mua ngay
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
