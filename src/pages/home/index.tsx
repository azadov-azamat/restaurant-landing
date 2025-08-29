import { useNavigate } from "react-router-dom";
import FeatureCard from "../../components/card/feature";
import HeaderCard from "../../components/card/header"
import { Button } from "../../components/custom/button"
import Image from "../../components/custom/image";
import FoodSlider from "../../components/slider/food";
import NewsSlider from "../../components/slider/news";
import OrderForm from "../../components/form/order";

function App() {

  const navigate = useNavigate();
  
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
    <main className="mt-8 mb-16 space-y-16">
      <HeaderCard>
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-start my-10">
          <div className="lg:w-1/2 w-full space-y-4 mb-10 lg:mb-0">
            <h1 className="lg:w-2/3 w-full text-black font-normal lg:font-semibold text-4xl sm:text-6xl uppercase tracking-wide leading-tight">
              Вкусная еда ждет тебя!
            </h1>
            <Button 
                showArrow 
                onClick={()=> navigate('/menu')}
                variant="primary" size="md" className="mt-4">
              Посмотреть меню
            </Button>
          </div>

          <div className="-mb-[16pc] lg:mb-0">
            <Image
              src="/images/luxury.webp"
              alt="header-luxury"
              priority
            />
          </div>
        </div>
        <div className="lg:block hidden">
          <Image
              src="/images/leaf/1.png"
              alt="header-leaf-1"
              className="w-[510px] absolute top-[3pc] left-[15pc]"
              priority
            />
          <Image
              src="/images/leaf/3.png"
              alt="header-leaf-3"
              className="w-[260px] absolute bottom-[10pc] right-[-3pc]"
              priority
          />
          <Image
              src="/images/leaf/4.png"
              alt="header-leaf-4"
              className="w-60 absolute top-[68px] -left-[70px]"
              priority
          />
        </div>
      </HeaderCard>
      
      <div className="mt-[16pc] lg:mt-0">
        <FoodSlider />
      </div>

      <div className="flex relative flex-col lg:flex-row items-center text-center lg:text-start mt-18 w-full">
        <div className="w-full z-10">
            {/* <div className="mock-form md:w-[463px] w-full  rounded-3xl bg-white/50 backdrop-blur-[10px] flex flex-col justify-between p-6"> */}
              <OrderForm/>
            {/* </div> */}
        </div>
        <div className="z-0">
          <Image
            src="/images/pizza.webp"
            alt="header-pizza"
            className="absolute lg:-top-24 top-10 -right-[70px] lg:w-[840px] w-[560px]"
            priority
          />
        </div>

        <div className="lg:block hidden">
          <Image
            src="/images/leaf/7.png"
            alt="header-leaf-7"
            className="w-[430px] absolute -top-[12pc] left-[28pc]"
            priority
          />

          <Image
            src="/images/leaf/8.png"
            alt="header-leaf-8"
            className="w-[430px] absolute -bottom-[8pc] right-[18pc]"
            priority
          />
        </div>
      </div>

      <section> 
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black text-center mb-12">
          Почему именно мы?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-x-8 space-y-16">
          {featuresData.map((item, index) => (
            <FeatureCard
              key={index}
              {...item}
            />
          ))}
        </div>
      </section>

      <NewsSlider />
    </main>

  )
}

export default App
