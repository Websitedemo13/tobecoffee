import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80 py-16">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">TOBE Coffee</h3>
        <p className="font-body text-sm leading-relaxed">
          Brew Bold. Be TOBE. — Thương hiệu cà phê Việt Nam, mang đến hương vị đậm đà từ cao nguyên Buôn Ma Thuột.
        </p>
      </div>
      <div>
        <h4 className="font-heading text-lg font-bold text-primary-foreground mb-4">Liên kết</h4>
        <ul className="space-y-2 font-body text-sm">
          <li><Link to="/story" className="hover:text-primary transition-colors">Giới thiệu</Link></li>
          <li><Link to="/product" className="hover:text-primary transition-colors">Sản phẩm</Link></li>
          <li><Link to="/blog" className="hover:text-primary transition-colors">Tin tức</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition-colors">Liên hệ</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading text-lg font-bold text-primary-foreground mb-4">Liên hệ</h4>
        <ul className="space-y-3 font-body text-sm">
          <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> TP. Hồ Chí Minh & Vũng Tàu</li>
          <li className="flex items-center gap-2"><Phone size={16} className="text-primary" /> 0901 234 567</li>
          <li className="flex items-center gap-2"><Mail size={16} className="text-primary" /> hello@tobecoffee.vn</li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-12 pt-6 border-t border-primary-foreground/10 text-center font-body text-xs text-primary-foreground/50">
      © 2026 TOBE Coffee. All rights reserved.
    </div>
  </footer>
);

export default Footer;
