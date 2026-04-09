import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-foreground text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Liên hệ</h1>
          <p className="font-body text-primary-foreground/70 text-lg">Chúng tôi luôn sẵn sàng lắng nghe bạn</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Info + Form */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: MapPin, label: "Địa chỉ", value: "TP. Hồ Chí Minh & Vũng Tàu" },
                { icon: Phone, label: "Hotline", value: "0901 234 567" },
                { icon: Mail, label: "Email", value: "hello@tobecoffee.vn" },
                { icon: Clock, label: "Giờ làm việc", value: "T2 – T7: 8:00 – 18:00" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="font-body text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-body text-sm font-medium block mb-1">Họ và tên</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-border rounded-sm px-4 py-3 font-body text-sm bg-card focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium block mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border rounded-sm px-4 py-3 font-body text-sm bg-card focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium block mb-1">Nội dung</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-border rounded-sm px-4 py-3 font-body text-sm bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  placeholder="Nhập nội dung tin nhắn..."
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto rounded-sm font-body uppercase tracking-wider text-xs px-8">
                Gửi tin nhắn
              </Button>
            </form>
          </div>

          {/* Right - Map */}
          <div className="rounded-sm overflow-hidden border border-border min-h-[400px]">
            <iframe
              title="TOBE Coffee Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197115!2d106.69765!3d10.77639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM1LjAiTiAxMDbCsDQxJzUxLjUiRQ!5e0!3m2!1svi!2svn!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
