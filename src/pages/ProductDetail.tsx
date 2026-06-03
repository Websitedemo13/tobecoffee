import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { getPageContent } from "@/lib/supabase";
import { defaultProductPageContent, ProductPageContent } from "@/lib/content";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id ?? "");
  const [content, setContent] = useState<ProductPageContent>(defaultProductPageContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPageContent<ProductPageContent>("product", defaultProductPageContent).then((c) => {
      setContent(c);
      setLoading(false);
    });
  }, []);

  const products = content.products || [];
  const product = useMemo(() => products.find((p) => p.id === productId) || null, [productId, products]);
  const related = useMemo(
    () => products.filter((p) => p.id !== productId && (!product || p.category === product.category)).slice(0, 3),
    [products, productId, product]
  );

  if (loading) {
    return (
      <Layout>
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">Đang tải sản phẩm...</p>
          </div>
        </section>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl font-bold mb-4">Sản phẩm không tồn tại</h1>
            <p className="text-muted-foreground mb-6">Sản phẩm bạn tìm đang không có hoặc đã bị thay đổi.</p>
            <Link to="/product">
              <Button>Quay lại danh sách</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-foreground text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-primary-foreground/60 mb-4">
            <Link to="/" className="hover:text-primary-foreground">Trang chủ</Link> /{" "}
            <Link to="/product" className="hover:text-primary-foreground">Sản phẩm</Link> /{" "}
            <span className="text-primary-foreground/90">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-2 items-start">
          <div className="overflow-hidden rounded-3xl bg-secondary shadow-sm">
            {product.imgUrl && <img src={product.imgUrl} alt={product.name} className="w-full object-cover" loading="lazy" />}
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">{product.category}</p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            <p className="font-body text-lg text-muted-foreground mb-6">{product.desc}</p>

            <div className="space-y-4 border-t border-border pt-6 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Danh mục</span>
                <span className="font-medium">{product.category}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Xuất xứ</span>
                <span className="font-medium">{product.origin}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="flex-1" asChild>
                <a href="tel:0909806947">Liên hệ đặt hàng</a>
              </Button>
              <Button size="lg" variant="secondary" className="flex-1" asChild>
                <Link to="/product">Quay lại</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {product.details && (
        <section className="py-12 bg-secondary/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-2xl font-bold mb-4">Mô tả chi tiết</h2>
            <p className="font-body text-base leading-relaxed text-muted-foreground whitespace-pre-line">{product.details}</p>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold mb-8 text-center">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-secondary overflow-hidden">
                    {p.imgUrl && (
                      <img src={p.imgUrl} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-base font-bold leading-snug">{p.name}</h3>
                    <p className="font-body text-xs text-muted-foreground line-clamp-2 mt-1">{p.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
