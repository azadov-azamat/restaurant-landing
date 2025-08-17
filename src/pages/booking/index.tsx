import Breadcrumb from "../../components/breadcrumb";
import HeaderCard from "../../components/card/header"
import NewsSlider from "../../components/slider/news";

function Booking() {

  const breadcrumbItems = [
    { label: "Главная", href: "/" },
    { label: "Бронирование" }
  ];

  return (
    <main className="mt-8 mb-16 space-y-16">
      <HeaderCard>
        <div className="flex  items-center justify-between my-10">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div>
          <img
              src="/images/leaf/1.png"
              alt="header-leaf-1"
              className="w-[510px] absolute top-[3pc] left-[15pc]"
              loading="lazy"
            />
            <img
              src="/images/leaf/3.png"
              alt="header-leaf-3"
              className="w-[260px] absolute bottom-[10pc] right-[-3pc]"
              loading="lazy"
            />
            <img
              src="/images/leaf/4.png"
              alt="header-leaf-4"
              className="w-60 absolute top-[68px] -left-[70px]"
              loading="lazy"
            />
        </div>
      </HeaderCard>
    
      <NewsSlider />
    </main>

  )
}

export default Booking
