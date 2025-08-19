import HeaderCard from "../../components/card/header"
import Image from "../../components/custom/image";
import NewsSlider from "../../components/slider/news";
import { motion } from "framer-motion"
import { Button } from "../../components/custom/button";
import Breadcrumb from "../../components/breadcrumb";
import TeamMember from "../../components/card/team";

function About() {

  const breadcrumbItems = [
    { label: "Главная", href: "/" },
    { label: "О нас" }
  ];

  return (
    <main className="mt-8 mb-16 space-y-16">
      <HeaderCard>
       <div className="text-black z-10 text-xl font-normal">
          <div className="flex  items-center justify-between my-10">
              <Breadcrumb items={breadcrumbItems} />
          </div>
          <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="leading-relaxed z-10">
                  <p>
                    С 1995 года наша миссия в ресторане — питать и вдохновлять каждого члена команды, гостя и сообщество,
                    которому мы служим. Спустя все эти годы эти основные ценности остаются в основе всего, что мы делаем. От
                    нашего меню до наших услуг и способов ведения бизнеса — наш свежий, неожиданный и человечный взгляд
                    отличает нас. Мы называем это Необыкновенной Добротой. И это во всем, что мы делаем.
                  </p>

                  <p className='mt-2'>
                    Имея более 450 ресторанов в 26 штатах и более 8000 членов команды, мы два года подряд были названы Forbes
                    одним из лучших работодателей Америки в области разнообразия. Денверский деловой журнал признал нас одним
                    из лучших мест для работы. Мы считаем, что эти успехи основаны на нашей уникальной и заботливой культуре,
                    благодаря которой каждый, кто входит в наши двери, чувствует себя желанным гостем и оцененным по
                    достоинству.
                  </p>
                </div>
              </motion.div>

   {/* Our Food Section */}
              <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid lg:grid-cols-2 gap-12 items-center mb-20"
                  >
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-bold text-center ">
                        Наша еда
                      </h2>

                      <p className="text-lg leading-relaxed">
                        Наша страсть — создавать исключительные впечатления от еды по отличной цене. От традиционных и современных
                        блюд до наших собственных кулинарных творений, таких как фаршированные тортеллони премиум-класса, наши
                        свежеприготовленные рецепты отличаются индивидуальностью, креативностью и ярким вкусом кухонь всего мира.
                      </p>

                      <p className="text-lg leading-relaxed">
                        От «Пенне Роза» до японской лапши, салата «Мед и всемирно известных макарон с сыром «Висконсин» — мы
                        используем только самые лучшие и полезные ингредиенты. Каждое блюдо готовится свежим и делается на заказ.
                        Наше богатое меню наполнено яркими, яркими и приятными вкусами.
                      </p>

                      <Button
                        showArrow
                        
                      >
                        Посмотреть меню
                      </Button>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative">
                      <Image
                        src="/placeholder.svg"
                        alt="Delicious soup with noodles and vegetables"
                        className="rounded-3xl w-[503px] h-[670px] object-cover"
                      />
                    </motion.div>
                </motion.div>

 <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative order-2 lg:order-1"
                >
                  <Image
                    src="/placeholder.svg"
                    alt="Gourmet burger with fresh ingredients"
                    className="rounded-3xl w-[503px] h-[670px] object-cover"
                  />
                </motion.div>

                <div className="space-y-6 order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-center ">
                    Наш путь
                  </h2>

                  <p className="text-lg leading-relaxed">
                    С самого начала мы взяли на себя обязательство предлагать свежие продукты, свежие ингредиенты и новый
                    взгляд на заботу о наших гостях, членах нашей команды и наших сообществах. Мы искренне верим, что нет
                    ничего, что могло бы объединить людей или сделать мир лучше, чем тарелка лапши.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Продолжая расти, мы реализуем ключевые инициативы во всей нашей компании, чтобы поддержать светлое
                    будущее. В нашем отчете о влиянии рассматриваются некоторые из этих областей, такие как создание меню,
                    наполненного свежими и захватывающими новыми вкусами; активация лучших в отрасли льгот для людей; и
                    некоторые способы лучше заботиться о наших сообществах — и о нашей планете — которую мы называем домом.
                  </p>
                </div>
              </motion.div>
        </div>
       </div>
       <TeamSection/>
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

  const defaultMembers = [
    {
      id: 1,
      name: "Александр Петро",
      role: "главный повар",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Александр Петро",
      role: "помощник повара",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Александр Петро",
      role: "бургер кинг",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Жулия Виллиам",
      role: "официантка",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Жулия Виллиам",
      role: "официантка",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Жулия Виллиам",
      role: "официантка",
      image: "/placeholder.svg",
    },
  ]

function TeamSection({ title = "Наша команда", members = defaultMembers }: any) {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-black text-center mb-16"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {members.map((member: any, index: number) => (
            <TeamMember
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
