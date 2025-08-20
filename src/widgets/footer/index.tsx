import { memo, useMemo } from "react";
import Image from "../../components/custom/image";

// Constants

const socialLinks = [
  { href: "#", label: "Telegram", icon: "/icons/telegram.png" },
  { href: "#", label: "WhatsApp", icon: "/icons/whatsapp.png" },
  { href: "#", label: "Facebook", icon: "/icons/facebook.png" },
  { href: "#", label: "Instagram", icon: "/icons/instagram.png" },
];

const services = [
  { text: "Цены", href: "#" },
  { text: "Отслеживание", href: "#" },
  { text: "Сообщить об ошибке", href: "#" },
  { text: "Условия услуг", href: "#" },
];

const company = [
  { text: "Отчетность", href: "#" },
  { text: "Свяжитесь с нами", href: "#" },
  { text: "Управление", href: "#" },
];

const address = [
  "Узбекистан, Ташкент Улица, 24",
  "+998948488448",
  "info@bmgsoft.com",
];

type FooterItem = string | { text: string; href: string };

const FooterSection = memo(({ title, items }: { title: string; items: FooterItem[] }) => (
  <div className="space-y-4">
    <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, idx) =>
        typeof item === "string" ? (
          <li key={idx} className="text-base font-normal">{item}</li>
        ) : (
          <li key={idx}>
            <a href={item.href} className="text-base font-medium">
              {item.text}
            </a>
          </li>
        )
      )}
    </ul>
  </div>
));

const LogoAndSocials = memo(() => (
  <div className="space-y-4">
    <div className="w-40">
      <Image
          src="/images/logo.png"
          alt="footer-logo-background"
          className="w-[212px] -ml-8"
      />
    </div>
    <div className="flex space-x-4">
      {socialLinks.map((link, idx) => (
        <a key={idx} href={link.href} aria-label={link.label}>
          <Image
            src={link.icon}
            alt={link.label}
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </a>
      ))}
    </div>
  </div>
));

export default function Footer() {

  const overlayStyle = useMemo(
      () => "absolute inset-0 bg-white/40  -z-9",
      []
  );

  return (
    <footer className="z-10 text-black relative md:h-[314px] md:p-0 py-4 h-auto flex items-center justify-center overflow-hidden">
      <div className={overlayStyle} />
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/footer.png"
          alt="footer-background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="z-10 flex items-center justify-center md:justify-between container">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-10">
          <LogoAndSocials />
          <FooterSection title="Наши услуги" items={services} />
          <FooterSection title="Наша компания" items={company} />
          <FooterSection title="Адрес" items={address} />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-24">
          <LogoAndSocials />
          <FooterSection title="Наши услуги" items={services} />
          <FooterSection title="Наша компания" items={company} />
          <FooterSection title="Адрес" items={address} />
        </div>
      </div>
    </footer>
  );
}
