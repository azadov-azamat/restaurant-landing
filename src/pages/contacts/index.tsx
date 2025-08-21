import Breadcrumb from "../../components/breadcrumb";
import HeaderCard from "../../components/card/header"
import ContactForm from "../../components/form/contact";
import NewsSlider from "../../components/slider/news";

function Contacts() {

  const breadcrumbItems = [
    { label: "Главная", href: "/" },
    { label: "Связаться с нами" }
  ];

  const contacts = [
    {
      icon: '/icons/mail.png',
      title: "Напишите нам",
      items: [
        {
          label: "info@bmgsoft.com",
          action: () => (window.location.href = "mailto:info@bmgsoft.com"),
        },
        {
          label: "t.me/bmgsoft.com",
          action: () => window.open("https://t.me/bmgsoft.com", "_blank"),
        },
      ],
    },
    {
      icon: '/icons/phone.png',
      title: "Позвоните нам",
      items: [
        {
          label: "+9998908767888",
          action: () => (window.location.href = "tel:+9998908767888"),
        },
        {
          label: "+9989865332322",
          action: () => (window.location.href = "tel:+9989865332322"),
        },
      ],
    },
    {
      icon: '/icons/map.png',
      title: "Посетите нас",
      items: [
        {
          label: "Узбекистан, Ташкент",
          action: () =>
            window.open("https://maps.google.com?q=Узбекистан, Ташкент Улица 24"),
        },
        {
          label: "Улица, 24",
          action: () =>
            window.open("https://maps.google.com?q=Узбекистан, Ташкент Улица 24"),
        },
      ],
    },
  ];

  return (
    <main className="mt-8 mb-16 space-y-16">
      <HeaderCard>
        <div className="flex flex-col lg:flex-row items-center justify-between my-10">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto py-12">
          {contacts.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center cursor-pointer"
            >
              <img src={card.icon} alt={card.title} className="w-12 h-12" />
              <h3 className="font-bold text-black text-2xl mt-4">{card.title}</h3>
              <div className="flex flex-col space-y-1">
                {card.items.map((item, i) => (
                  <button
                    key={i}
                    onClick={item.action}
                    className="text-[#080808] m-0 p-0 text-base font-normal"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <ContactForm/>
        <div className="mb-10"></div>
        {/* <div>
          <Image
              src="/images/leaf/1.png"
              alt="header-leaf-1"
              className="w-[510px] absolute top-[3pc] left-[15pc]"
            />
            <Image
              src="/images/leaf/3.png"
              alt="header-leaf-3"
              className="w-[260px] absolute bottom-[10pc] right-[-3pc]"
            />
            <Image
              src="/images/leaf/4.png"
              alt="header-leaf-4"
              className="w-60 absolute top-[68px] -left-[70px]"
            />
        </div> */}
      </HeaderCard>
    
      <NewsSlider />
    </main>

  )
}

export default Contacts
