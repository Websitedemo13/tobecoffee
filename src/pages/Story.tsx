import Layout from "@/components/Layout";
import storyImg from "@/assets/story-sourcing.jpg";

const Story = () => (
  <Layout>
    {/* Hero banner */}
    <section className="bg-foreground text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Câu chuyện thương hiệu</h1>
        <p className="font-body text-primary-foreground/70 text-lg">TOBE Coffee — Brew Bold, Be TOBE</p>
      </div>
    </section>

    {/* Split section */}
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
            <span className="text-primary">Tobe Pause</span> — Thảnh thơi từng phút giây
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            TOBE Coffee ra đời từ niềm đam mê với hạt cà phê Việt Nam. Chúng tôi tin rằng mỗi tách cà phê là một khoảnh khắc dừng lại — để thưởng thức, để suy ngẫm, để sống trọn vẹn.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Từ những vườn cà phê xanh mướt ở Buôn Ma Thuột đến quy trình rang xay cẩn thận, TOBE mang đến hương vị đậm đà, chân thực nhất của cà phê Việt.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Triết lý <strong className="text-foreground">"Brew Bold, Be TOBE"</strong> không chỉ là slogan — đó là lời cam kết về chất lượng và sự khác biệt trong từng sản phẩm.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Giá trị cốt lõi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Chất lượng", desc: "Chọn lọc 100% hạt cà phê Arabica & Robusta hảo hạng từ cao nguyên Việt Nam." },
            { title: "Bền vững", desc: "Hợp tác trực tiếp với nông dân, đảm bảo thu mua công bằng và canh tác bền vững." },
            { title: "Sáng tạo", desc: "Không ngừng đổi mới với các dòng sản phẩm Cold Brew, Drip Bag và cà phê hoà tan cao cấp." },
          ].map((v) => (
            <div key={v.title} className="bg-card p-8 rounded-sm border border-border">
              <div className="w-12 h-1 bg-primary mb-4" />
              <h3 className="font-heading text-xl font-bold mb-3">{v.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Story;
