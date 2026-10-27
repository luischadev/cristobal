export const site = {
  name: "Raggio & Valderrama Abogados",
  short: "R&V Abogados",
  tagline:
    "Derecho Laboral | Litigación | Asesoría legal a trabajadores, empresas y empleadores en Santiago, Chile.",
  address: "Benjamin #2944, Oficina 20, Las Condes.",
  phone: "+56 2 2638 6121",
  whatsapp: "56968499069",
  whatsappText: "Hola. Necesito asesoría jurídica por un tema laboral",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=100064040622561",
    instagram: "https://www.instagram.com/raggiovalderrama/",
    linkedin: "https://www.linkedin.com/",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/trabajadores", label: "Trabajadores" },
  { href: "/empresas", label: "Empresas" },
  { href: "/equipo", label: "Equipo" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function waLink() {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappText)}`;
}
