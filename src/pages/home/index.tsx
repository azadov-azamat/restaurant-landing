import HeaderCard from "../../components/card/header"
import { Button } from "../../components/custom/button"

function App() {
  const sampleNavLinks = [
    { label: "Меню", href: "/"},
    { label: "Новости", href: "/news"},
    { label: "Бронирование", href: "/chef/news"},
    { label: "О нас", href: "/about-us"},
    { label: "Контакты", href: "/contacts"},
  ]

  return (
    <main className="my-8 space-y-14">
      <HeaderCard sampleNavLinks={sampleNavLinks}>
        <div className="flex flex-col md:flex-row items-center text-center md:text-start my-10">
          <div className="w-1/2 space-y-4">
            <h1 className="w-2/3 text-black font-medium text-4xl sm:text-6xl uppercase tracking-wide leading-tight">
              Вкусная еда ждет тебя!
            </h1>
            <Button showArrow variant="primary" size="md">
              Посмотреть меню
            </Button>
          </div>

          <div>
            <img
              src="/images/luxury.png"
              
              alt="header-luxury"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <img
              src="/images/leaf/1.png"
              alt="header-leaf-1"
              className="w-[510px] absolute top-[3pc] left-[15pc]"
              loading="lazy"
            />
            {/* <img
              src="/images/leaf/2.png"
              alt="header-leaf-2"
              className="absolute bottom-0 right-0"
              loading="lazy"
            /> */}
            <img
              src="/images/leaf/3.png"
              alt="header-leaf-3"
              className="w-[260px] absolute bottom-[10pc] right-[-3pc]"
              loading="lazy"
            />
            <img
              src="/images/leaf/4.png"
              alt="header-leaf-4"
              className="w-60 absolute top-[68px] -left-6"
              loading="lazy"
            />
        </div>
      </HeaderCard>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-36">
          Популярные блюда
        </h2>
      </div>
    </main>

  )
}

export default App
