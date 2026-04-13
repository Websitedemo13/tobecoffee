import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import tobeLogo from "/logo.png";

const navLinks = [
  { to: "/", label: "Trang chủ" },
  { to: "/story", label: "Giới thiệu" },
  { to: "/product", label: "Sản phẩm" },
  { to: "/blog", label: "Tin tức" },
  { to: "/contact", label: "Liên hệ" },
];

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={tobeLogo} alt="TOBE Coffee" className="h-10 md:h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                location.pathname === l.to
                  ? "text-primary font-semibold"
                  : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-foreground border-t border-primary-foreground/10 px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 font-body text-sm uppercase tracking-wider ${
                location.pathname === l.to
                  ? "text-primary font-semibold"
                  : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
