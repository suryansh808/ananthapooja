import { Link } from "react-router-dom"
import logo from "../assets/footerlogo.webp";
import { Facebook, Instagram, MessageCircleMore } from "lucide-react";
import CTA from "./CTA";
import img from "../assets/footerbg.webp"
const Footer = () => {
    const LinkList = [
     { name: "Home", path: "/" },
     { name: "Services", path: "/allpooja" },
     { name: "Pincodes", path: "/pincode" },
     { name: "About", path: "/about" },
     { name: "Contact", path: "/contact" },
  ]

  return (
      <footer style={{backgroundImage: `url(${img})`}} className=" px-2.5 py-10 bg-no-repeat bg-center bg-cover text-white bg-[#090A0C]">
          <div className="" >
             <CTA/>
          <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <img src={logo} alt="logo" className="h-24" />
            </div>
            <p className=" text-sm">
              Authentic Vedic rituals with modern convenience
            </p>
          </div>

          <div className=" ">
            <h4 className="font-bold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              {LinkList.map((item) => (
                <Link
                  to={item.path}
                  key={item.name}
                  className="block transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="  ">
            <h4 className="font-bold mb-3">Popular Poojas</h4>
            <div className="space-y-2 text-sm">
              <div>Ganapathi Pooja</div>
              <div>Satyanarayana Pooja</div>
              <div>Gruha Pravesha</div>
              <div>Vastu Shanti</div>
            </div>
          </div>

          <div className="  ">
            <h4 className="font-bold mb-3">Contact</h4>
            <div className="space-y-2 text-sm">
              <div>+91 8861571188</div>
              <div>Bangalore, Karnataka</div>
               <div className="pt-4 flex items-center">
              <a href="" className="mr-4 hover:opacity-75 hover:text-pink-700 duration-300 transition-opacity" target="_blank" rel="noopener noreferrer">
               <Instagram />
              </a>
              <a href="" className="mr-4 hover:opacity-75 hover:text-blue-700 transition-opacity" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
              <a href="https://wa.me/+918861571188" className="hover:opacity-75 hover:text-green-700 transition-opacity" target="_blank" rel="noopener noreferrer">
                <MessageCircleMore />
              </a>
               
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-t-stone-700 pt-5 text-center text-sm">
          <p>&copy; 2026 Ananthapooja.com · Part of Anantha Ecosystem · All Rights Reserved</p>
          <p className="mt-2">Preserving Sanatana Dharma with devotion and authenticity</p>
        </div>
          </div>
          </div>
    </footer>
  )
}

export default Footer
