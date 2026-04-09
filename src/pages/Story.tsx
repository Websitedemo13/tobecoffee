import Layout from "@/components/Layout";
import storyImg from "@/assets/story-sourcing.jpg";
import statsBg from "@/assets/stats-bg.jpg";

const missions = [
  {
    icon: "🌍",
    title: "Nâng Tầm Giá Trị Cà Phê Việt Trên Bản Đồ Thế Giới",
    desc: "Từ mối liên kết với hơn 600 hộ nông dân trồng cà phê tại Lâm Đồng, TOBE ứng dụng mô hình thu mua quả chín, tổ chức hội thảo tập huấn hàng năm, thay đổi thời quen sản xuất để nâng cao chất lượng cà phê.",
  },
  {
    icon: "🌱",
    title: "Cải Thiện Đời Sống Người Nông Dân Trồng Cà Phê",
    desc: "Dựa trên niềm tin và sự hợp tác bền vững, đi kèm với chính sách công thưởng về sản lượng và chất lượng nguyên liệu, TOBE muốn góp phần cải thiện đời sống của người nông dân và hệ sinh thái cà phê.",
  },
  {
    icon: "☕",
    title: "Để Người Việt Được Thưởng Thức Cà Phê Ngon",
    desc: "Luôn nỗ lực đi đầu về chất lượng, TOBE mang đến người tiêu dùng Việt Nam những sản phẩm cà phê tươi mới và thơm ngon nhất. Bởi quan trọng hơn cả, người Việt xứng đáng được thưởng thức cà phê ngon.",
  },
];

const stats = [
  { number: "90%+", label: "Tỷ lệ quả chín đạt chuẩn sản xuất sang xay nguyên chất" },
  { number: "600+", label: "Nông hộ liên kết trồng & sản xuất nhân xanh chất lượng cao" },
  { number: "2000+", label: "Tấn nguyên liệu chất lượng cao khai thác nguồn cung cả mùa vụ" },
  { number: "150+", label: "Tấn cà phê rang xay cung ứng cho khách hàng mới năm" },
];

const services = [
  {
    title: "Cung Ứng Cà Phê Nhân Xanh",
    desc: "Nguồn nguyên liệu tốt sẽ tạo nên sản phẩm chất lượng. TOBE cam kết nguồn cung cà phê nhân xanh chất lượng cao suốt niên vụ cho các nhà rang xay và doanh nghiệp sản xuất thương mại.",
  },
  {
    title: "Cung Cấp Cà Phê Rang Xay",
    desc: "Đồ uống ngon là phần tử quyết định tạo nên sự thành công của một thương hiệu. Vì vậy, ưu tiên hàng đầu của TOBE là hạt cà phê phải tươi mới và hợp vị khi giao đến khách hàng.",
  },
  {
    title: "Tư Vấn Giải Pháp Kinh Doanh Cà Phê",
    desc: "TOBE đồng hành cùng đối tác và khách hàng trong các giải pháp về đầu tư chi phí, quản lý chất lượng và phát triển kinh doanh, tối ưu nhu cầu sử dụng sản phẩm tại địa điểm kinh doanh.",
  },
];

const Story = () => (
  <Layout>
    {/* Hero banner */}
    <section className="bg-foreground text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Giới thiệu TOBE</h1>
        <p className="font-body text-primary-foreground/70 text-lg">Brew Bold, Be TOBE</p>
      </div>
    </section>

    {/* Mục Tiêu - Quote */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 italic">Mục Tiêu</h2>
        <div className="relative">
          <span className="text-primary text-6xl font-serif absolute -top-4 -left-4">"</span>
          <p className="font-body text-lg md:text-xl text-muted-foreground italic leading-relaxed px-8">
            Trở thành nhà cung ứng cà phê chất lượng tốt nhất và người đồng hành uy tín hàng đầu cho các đối tác là chuỗi và thương hiệu F&B tại Việt Nam.
          </p>
          <span className="text-primary text-6xl font-serif absolute -bottom-8 -right-4">"</span>
        </div>
      </div>
    </section>

    {/* Nhiệm Vụ - 3 cards */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">Nhiệm Vụ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((m) => (
            <div key={m.title} className="bg-card p-8 rounded-sm border border-border text-center">
              <div className="text-4xl mb-4">{m.icon}</div>
              <h3 className="font-heading text-lg font-bold mb-4 leading-snug">{m.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Split section - Image + text */}
    <section className="py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="overflow-hidden rounded-sm">
          <img
            src={storyImg}
            alt="Thu hoạch cà phê"
            className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            loading="lazy"
            width={960}
            height={1280}
          />
        </div>
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Tại Sao Chọn <span className="text-primary">TOBE</span>?
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            TOBE tập trung phát triển vùng canh tác và chuẩn hóa quy trình sản xuất để giới thiệu đến đối tác — khách hàng hương vị cà phê tuyệt vời đến từ nông trại Lâm Đồng.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.number}>
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{s.number}</p>
                <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Dịch Vụ */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Dịch Vụ</h2>
        <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Với mỗi sản phẩm cà phê gửi đến quý đối tác — khách hàng, đội ngũ TOBE gửi vào đó sự tỉ mỉ và tận tâm để đem đến trải nghiệm dịch vụ tốt nhất.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={s.title} className="bg-card border border-border rounded-sm overflow-hidden group">
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <span className="font-heading text-5xl text-primary/20">0{i + 1}</span>
              </div>
              <div className="p-6">
                <p className="font-body text-[10px] uppercase tracking-widest text-primary font-semibold mb-2">
                  {i === 0 ? "Cung ứng" : i === 1 ? "Cung cấp" : "Tư vấn giải pháp"}
                </p>
                <h3 className="font-heading text-lg font-bold mb-3">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <span className="font-body text-sm text-primary font-semibold cursor-pointer hover:underline">
                  ▶ Xem thêm
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Story;
