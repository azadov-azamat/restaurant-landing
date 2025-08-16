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

  const foodData = [
    {
      title: "Chicken soup",
      description: "Spicy with garlic",
      price: "$10.00",
      image: "/images/plate/1.png",
      onAdd: () => console.log("Added Chicken soup 1"),
    },
    {
      title: "Chicken soup",
      description: "Spicy with garlic",
      price: "$10.00",
      image: "/images/plate/2.png",
      onAdd: () => console.log("Added Chicken soup 2"),
    },
    {
      title: "Chicken soup",
      description: "Spicy with garlic",
      price: "$10.00",
      image: "/images/plate/3.png",
      onAdd: () => console.log("Added Chicken soup 3"),
    },
    {
      title: "Chicken soup",
      description: "Spicy with garlic",
      price: "$10.00",
      image: "/images/plate/4.png",
      onAdd: () => console.log("Added Chicken soup 4"),
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
      {/* <div> */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-36">
          Популярные блюда
        </h2> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {
              foodData.map((food, index) => <FoodCard key={index} {...food} />)
            }
        </div> */}
        <FoodSlider />
        {/* <div className="flex justify-end mt-10">
          <Button showArrow variant="primary" size="md">
              Посмотреть меню
            </Button>
        </div> */}
      {/* </div> */}
    </main>

  )
}

export default App
