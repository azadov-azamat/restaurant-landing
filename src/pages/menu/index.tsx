import Breadcrumb from "../../components/breadcrumb";
import { FoodCard } from "../../components/card/food";
import HeaderCard from "../../components/card/header"
import NewsSlider from "../../components/slider/news";
import TabNavigation from "../../components/tabs";

function Menu() {

  const breadcrumbItems = [
    { label: "Главная", href: "/" },
    { label: "Меню" }
  ];

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
  ]

  return (
    <main className="mt-8 mb-16 space-y-16">
      <HeaderCard>
        <div className="flex  items-center justify-between my-10">
            <Breadcrumb items={breadcrumbItems} />
            <TabNavigation
              tabs={["Блюда", "Салаты", "Напитки", "Фаст-Фуд"]}
              defaultTab={0}
              onChange={(index) => console.log("Active tab:", index)}
            />
          </div>
        <div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6 mt-32 space-y-24">
          {
            [...foodData, ...foodData, ...foodData, ...foodData].map((food, index) => <FoodCard key={index} {...food} />)
          }
        </div>
          <img
              src="/images/menu-leaf/1.png"
              alt="menu-header-leaf-1"
              className="w-[252px] absolute -right-[70px] top-[8pc]"
              loading="lazy"
            />
            <img
              src="/images/menu-leaf/2.png"
              alt="menu-header-leaf-2"
              className="w-[170px] absolute top-[23pc] -left-[4pc]"
              loading="lazy"
            />
            <img
              src="/images/menu-leaf/3.png"
              alt="menu-header-leaf-3"
              className="w-60 absolute top-1/2 left-[40%]"
              loading="lazy"
            />
            <img
              src="/images/menu-leaf/4.png"
              alt="menu-header-leaf-4"
              className="w-60 absolute bottom-[10pc] -left-[4pc]"
              loading="lazy"
            />
            <img
              src="/images/menu-leaf/5.png"
              alt="menu-header-leaf-5"
              className="w-60 absolute bottom-[10pc] -right-[70px]"
              loading="lazy"
            />
        </div>
      </HeaderCard>
    
      <NewsSlider />
    </main>

  )
}

export default Menu
