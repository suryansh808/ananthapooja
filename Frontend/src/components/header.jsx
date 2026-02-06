import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const LinkList = [
     { name: "Home", path: "/" },
     { name: "Services", path: "/allpooja" },
     { name: "Gallery", path: "/gallery" },
     { name: "Pincodes", path: "/pincode" },
     { name: "About", path: "/about" },
     { name: "Contact", path: "/contact" },
  ]

  return (

      <nav
        className={`fixed w-full z-50 px-2.5 transition-all duration-300 ${scrolled ? "bg-amber-50/95 backdrop-blur-sm shadow-lg" : " backdrop-blur-xl bg-[#ffffff69] text-orange-950  font-semibold"}`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex flex-col  space-y-1 cursor-pointer">
                <img src={logo} alt="logo" className="lg:h-18 h-15" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {LinkList.map(
                (item) => (
                  <Link to={item.path}
                    key={item.name}
                    className={` font-bold transition-colors`}
                  >
                    {item.name}
                  </Link>
                ),
              )}
             
            </div>
             <a
                href="https://wa.me/+918861571188"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hidden hover:bg-green-700 transition md:flex items-center space-x-2 shadow-md"
              >
                <MessageCircle size={16} />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-orange-950"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#4D2268]">
            <div className=" pt-2 pb-6 space-y-1">
              {LinkList.map((item) => (
                <Link
                  to={item.path}
                  key={item.name}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-orange-100 rounded-lg transition"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/+918861571188"
                className="block w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </nav>
 
  );
};

export default Header;
