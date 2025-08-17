import FeatureCard from "../../components/card/feature";
import { FoodCard } from "../../components/card/food";
import HeaderCard from "../../components/card/header"
import { Button } from "../../components/custom/button"
import FoodSlider from "../../components/slider/food";

function App() {
  const sampleNavLinks = [
    { label: "Меню", href: "/"},
    { label: "Новости", href: "/news"},
    { label: "Бронирование", href: "/chef/news"},
    { label: "О нас", href: "/about-us"},
    { label: "Контакты", href: "/contacts"},
  ]

 const featuresData = [
  {
    icon: "/icons/soup.png",
    title: "Качественные продукты",
    width: 48,
    description:
      "Входные билеты в музеи, для посещения достопримечательностей, памятников",
  },
  {
    icon: "/icons/taxi-car.png",
    title: "Быстрая доставка",
    width: 40,
    description:
      "Входные билеты в музеи, для посещения достопримечательностей, памятников",
  },
  {
    icon: "/icons/pizza.png",
    title: "Вкусные рецепты",
    width: 67,
    description:
      "Входные билеты в музеи, для посещения достопримечательностей, памятников",
  },
  {
    icon: "/icons/terrace.png",
    title: "Уютная атмосфера",
    width: 40,
    description:
      "Входные билеты в музеи, для посещения достопримечательностей, памятников",
  },
  {
    icon: "/icons/shef.png",
    title: "Опытные повара",
    width: 48,
    description:
      "Входные билеты в музеи, для посещения достопримечательностей, памятников",
  },
  {
    icon: "/icons/user-following.png",
    title: "Обслуживания",
    width: 40,
    description:
      "Входные билеты в музеи, для посещения достопримечательностей, памятников",
  },
];


  return (
    <main className="my-8 space-y-14">
      <HeaderCard sampleNavLinks={sampleNavLinks}>
        <div className="flex flex-col md:flex-row items-center text-center md:text-start my-10">
          <div className="md:w-1/2 w-full space-y-4">
            <h1 className="md:w-2/3 w-full text-black font-medium text-4xl sm:text-6xl uppercase tracking-wide leading-tight">
              Вкусная еда ждет тебя!
            </h1>
            <Button showArrow variant="primary" size="md" className="mt-4">
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
              className="w-60 absolute top-[68px] -left-[70px]"
              loading="lazy"
            />
        </div>
      </HeaderCard>
      
      <FoodSlider />

      <div className="flex relative flex-col md:flex-row items-center text-center md:text-start mb-20 mt-40">
        <div>
              <div className="mock-form w-[463px] h-[760px] bg-white/50 backdrop-blur-[10px] border-2 border-white/20 rounded-3xl flex flex-col justify-between p-6">

              </div>
        </div>
        <div className="">
          <img
            src="/images/pizza.png"
            alt="header-leaf-2"
            className="absolute -top-24 -right-[70px] w-[840px]"
            loading="lazy"
          />
        </div>

        <img
          src="/images/leaf/7.png"
          alt="header-leaf-3"
          className="w-[430px] absolute -top-[12pc] left-[28pc]"
          loading="lazy"
        />

        <img
          src="/images/leaf/8.png"
          alt="header-leaf-3"
          className="w-[430px] absolute -bottom-[8pc] right-[18pc]"
          loading="lazy"
        />
      </div>

       <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Почему именно мы?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuresData.map((item, index) => (
            <FeatureCard
              key={index}
              {...item}
            />
          ))}
        </div>
      </section>
    </main>

  )
}

export default App
