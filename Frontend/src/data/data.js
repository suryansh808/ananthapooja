import img1 from "../assets/category/DECORATIONS.webp";
import img2 from "../assets/category/ESSENTIALS.webp";
import img3 from "../assets/category/FOOD.webp";
import img4 from "../assets/category/PANDIT.webp";

import ganapathi from "../assets/pooja/ganesh.webp";
import satyanarayana from "../assets/pooja/Satyanarayana.webp";
import gruhapravesha from "../assets/pooja/GruhaPravesha.webp";
import vastushanti from "../assets/pooja/VASTU.webp";
import lakshmi from "../assets/pooja/LAKSHMI.webp";
import navagraha from "../assets/pooja/navagrahapooja.webp";
import ayudha from "../assets/pooja/AyudhaPooja.webp";
import bhoomija from "../assets/pooja/BhoomiPooja.webp";
import engagement from "../assets/pooja/engagement.webp"
import wedding from "../assets/pooja/Wedding.webp"
import seemantha from "../assets/pooja/Seemantha.webp"
import umamaheshwari from "../assets/pooja/UmaMaheshwari.webp"
import namakarana from "../assets/pooja/Namakarana.webp"
import sudarshan from "../assets/pooja/Sudarshana.webp"
import hiranya from "../assets/pooja/Hiranya.webp"
import kundali from "../assets/pooja/Kundali.webp"
import gayathri from "../assets/pooja/Gayathri.webp"

import step1 from "../assets/step/1.webp";
import step2 from "../assets/step/2.webp";
import step3 from "../assets/step/3.webp";
import step4 from "../assets/step/4.webp";

import g1 from "../assets/gallery/g1.webp";
import g2 from "../assets/gallery/g2.webp";
import g3 from "../assets/gallery/g3.webp";
import g4 from "../assets/gallery/g4.webp";
import g5 from "../assets/gallery/g5.webp";
import g6 from "../assets/gallery/g6.webp";
import g7 from "../assets/gallery/g7.webp";
import g8 from "../assets/gallery/g8.webp";

import ass1 from "../assets/consultancy/a.webp";
import ass2 from "../assets/consultancy/v.webp";
import ass3 from "../assets/consultancy/m.webp";

export const poojas = [
  {
    id: "ganesha-puja",
    name: "Ganesha Puja",
    purpose: "Remove obstacles and invoke auspicious beginnings",
    when: "Before new ventures, house entry, business start, festivals",
    category: "home",
    image: ganapathi,
    packages: [
      { label: "60-90 mins", price: 3000, purohits: 1 },
      { label: "90 mins - 2 hrs", price: 10000, purohits: 2 },
      { label: "More than 2 hrs", price: 15000, purohits: 3, includes: "Ganesha Homa" }
    ]
  },

  {
    id: "satyanarayana-puja",
    name: "Satyanarayana Puja",
    purpose: "Invoke blessings of Lord Vishnu for prosperity and well-being",
    when: "Full moon days, special occasions, after wish fulfillment",
    category: "home",
    image: satyanarayana,
    packages: [
      { label: "60-120 mins", price: 5000, purohits: 1 },
      { label: "2 - 3 hrs", price: 15000, purohits: 2, includes: "Homa + Prasadam + Katha" },
      { label: "More than 3 hrs", price: 30000, purohits: 3, includes: "Homa + Prasadam + Katha + Navagraha Homa" }
    ]
  },

  {
    id: "griha-pravesha",
    name: "Griha Pravesha",
    purpose: "Sanctify a new home and remove negative energies",
    when: "Before moving into a new house",
    category: "property",
    image: gruhapravesha,
    packages: null
  },

  {
    id: "vastu-shanti",
    name: "Vastu Shanti",
    purpose: "Balance energies and correct Vastu doshas",
    when: "Home/office construction, renovations, Vastu corrections",
    category: "property",
    image: vastushanti,
    packages: [
      { label: "2 - 3 hrs", price: 5000, purohits: 1 },
      { label: "3 - 4 hrs", price: 10000, purohits: 2, includes: "Ganesha Homa" },
      { label: "More than 4 hrs", price: 25000, purohits: 3, includes: "Ganesha Homa + Prasadam" }
    ]
  },

  {
    id: "lakshmi-puja",
    name: "Lakshmi Puja",
    purpose: "Invoke wealth, prosperity and abundance",
    when: "Fridays, Diwali, business openings, monthly rituals",
    category: "home",
    image: lakshmi,
    packages: [
      { label: "60-90 mins", price: 5000, purohits: 1 },
      { label: "2 - 3 hrs", price: 10000, purohits: 2 },
      { label: "More than 3 hrs", price: 25000, purohits: 3, includes: "Ganesha Homa + Lakshmi Kubera Puja" }
    ]
  },

  {
    id: "navagraha-shanti-homa",
    name: "Navagraha Shanti Homa",
    purpose: "Pacify planetary doshas and balance cosmic energies",
    when: "Astrological afflictions, life transitions, health issues",
    category: "shanti",
    image: navagraha,
    packages: [
      { label: "60-90 mins", price: 5000, purohits: 1 },
      { label: "2 - 3 hrs", price: 10000, purohits: 2 },
      { label: "More than 3 hrs", price: 25000, purohits: 3, includes: "Katha + Ganesha Homa + Ganesh Puja" }
    ]
  },

  {
    id: "vahana-puja",
    name: "Vahana Puja",
    purpose: "Bless vehicles and instruments of livelihood",
    when: "Vehicle purchase, festivals like Dussehra",
    category: "home",
    image: ayudha,
    packages: null
  },

  {
    id: "bhoomi-puja",
    name: "Bhoomi Puja",
    purpose: "Seek blessings before starting construction",
    when: "Before construction or land development",
    category: "property",
    image: bhoomija,
    packages: [
      { label: "60-90 mins", price: 5000, purohits: 1 },
      { label: "90 mins - 2 hrs", price: 10000, purohits: 2 },
      { label: "More than 2 hrs", price: 25000, purohits: 3, includes: "Ganesha Homa" }
    ]
  },

  /* -------- NEWLY ADDED SERVICES (PLACEHOLDER DATA) -------- */

  {
    id: "engagement-ceremony",
    name: "Engagement Ceremony",
    purpose: "Traditional rituals marking the engagement of bride and groom",
    when: "Before wedding ceremonies",
    category: "ceremony",
    image: engagement,
    packages: null
  },

  {
    id: "wedding-ceremony",
    name: "Wedding Ceremony",
    purpose: "Complete Vedic wedding rituals",
    when: "On auspicious wedding dates",
    category: "ceremony",
    image: wedding,
    packages: null
  },

  {
    id: "seemantha",
    name: "Seemantha (Baby Shower Ritual)",
    purpose: "Blessings for mother and unborn child",
    when: "During pregnancy (7th or 9th month)",
    category: "family",
    image: seemantha,
    packages: null
  },

  {
    id: "uma-maheshwari-puja",
    name: "Uma Maheshwari Puja",
    purpose: "Blessings for marital harmony and family well-being",
    when: "For couples seeking divine blessings",
    category: "home",
    image: umamaheshwari,
    packages: null
  },

  {
    id: "namakarana",
    name: "Namakarana (Naming Ceremony)",
    purpose: "Naming ceremony for newborn baby",
    when: "After childbirth on auspicious date",
    category: "family",
    image: namakarana,
    packages: null
  },

  {
    id: "sudarshana-homa",
    name: "Sudarshana Homa",
    purpose: "Protection from negative energies and obstacles",
    when: "During health issues or spiritual cleansing",
    category: "homa",
    image: sudarshan,
    packages: null
  },

  {
    id: "hiranya-sraddham",
    name: "Hiranya Sraddham",
    purpose: "Ritual offerings for ancestors",
    when: "During Pitru Paksha or death anniversaries",
    category: "ritual",
    image: hiranya,
    packages: null
  },

  {
    id: "kundali-matching",
    name: "Kundali Matching",
    purpose: "Horoscope compatibility check for marriage",
    when: "Before engagement or marriage",
    category: "astrology",
    image: kundali,
    packages: null
  },

  {
    id: "gayathri-japa",
    name: "Gayathri Japa",
    purpose: "Chanting ritual for spiritual growth and purification",
    when: "For peace, focus and divine blessings",
    category: "japa",
    image: gayathri,
    packages: null
  }
];


export const pincodes = [
  { code: "560066", area: "Whitefield" },
  { code: "560103", area: "Bellandur" },
  { code: "560078", area: "JP Nagar" },
  { code: "560064", area: "Yelahanka" },
  { code: "560035", area: "Sarjapur" },
  { code: "560098", area: "RR Nagar" },
  { code: "560100", area: "Electronic City" },
];

export const testimonials = [
  {
    text: "Very authentic pooja. Priest arrived on time and explained every ritual beautifully.",
    author: "Priya M.",
    location: "Whitefield",
    rating: 5,
  },
  {
    text: "Complete arrangement with all materials. Made our Gruha Pravesha so peaceful and memorable.",
    author: "Rajesh K.",
    location: "Bellandur",
    rating: 5,
  },
  {
    text: "Professional service and very knowledgeable purohit. Highly recommended for authentic rituals.",
    author: "Lakshmi S.",
    location: "JP Nagar",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Do you bring all pooja items?",
    a: "Yes, complete samagri is included unless specified. Our purohits arrive with everything needed for the ritual.",
  },
  {
    q: "Can I choose the language?",
    a: "Absolutely! We offer services in Kannada, Tamil, Telugu, Hindi, and Sanskrit. Just mention your preference while booking.",
  },
  {
    q: "Is this authentic Vedic pooja?",
    a: "Yes, strictly as per shastra. All our purohits are Vedic-trained and follow traditional scriptures.",
  },
  {
    q: "How do I book a pooja?",
    a: "Simply select your pooja, fill the booking form with your pincode and preferred date, and we'll confirm via WhatsApp within 2 hours.",
  },
  {
    q: "What is included in the price?",
    a: "Price includes experienced purohit, complete pooja samagri, muhurtha guidance, setup and cleanup. Prasadam preparation is optional.",
  },
  {
    q: "How much advance notice do you need?",
    a: "We recommend booking at least 3-5 days in advance. For urgent requirements, please call us directly.",
  },
];

export const packages = [
  {
    title: "Check a Pandit",
    desc: "Experienced Vedic priests for home rituals and community poojas",
    img: `${img4}`,
    btn: "Book Now",
  },
  {
    title: "Check Essentials",
    desc: "Temple-grade samagri delivered to your home for a complete ritual",
    img: `${img2}`,
    btn: "Book Now",
  },
  {
    title: "Check Food",
    desc: "Satvik, traditional hygienic prasadam for your family",
    img: `${img3}`,
    btn: "Book Now",
  },
  {
    title: "Check Decorations",
    desc: "Flowers, rangoli, and decorative items arranged beautifully for your space",
    img: `${img1}`,
    btn: "Book Now",
  },
];

export const steps = [
  {
    title: "Choose Pandit",
    desc: "Verified pandits for authentic pooja rituals",
    img: `${step1}`,
  },
  {
    title: "Select Samagri",
    desc: "Temple-grade samagri prepared for poojas",
    img: `${step2}`,
  },
  {
    title: "Choose Prasadam",
    desc: "Pure veg satvik prasadam with devotion",
    img: `${step3}`,
  },
  {
    title: "Add Decorations",
    desc: "Fresh flowers and décor for divine ambience",
    img: `${step4}`,
  },
];

export const images = [
  `${g1}`,
  `${g2}`,
  `${g3}`,
  `${g4}`,
  `${g5}`,
  `${g6}`,
  `${g7}`,
  `${g8}`,
];

export const services = [
  {
    title: "Astrological Consultation",
    img: `${ass1}`,
    tag: "Astrology",
  },
  {
    title: "Vastu Consultation",
    img: `${ass2}`,
    tag: "Vastu",
  },
  {
    title: "Muhurtha Consultation",
    img: `${ass3}`,
    tag: "Muhurtha",
  },
];
