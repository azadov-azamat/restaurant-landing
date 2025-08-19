import Breadcrumb from "../../components/breadcrumb";
import HeaderCard from "../../components/card/header"
import { NewsCard } from "../../components/card/news";
import Image from "../../components/custom/image";
import Pagination from "../../components/pagination";

function News() {

  const breadcrumbItems = [
    { label: "Главная", href: "/" },
    { label: "Новости" }
  ];

  const reviewsData = [
      {
        imageSrc: "/images/mock/1.png",
        description:
          "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
        avatarSrc: "/images/mock/user.png",
        name: "Сергей",
      },
      {
        imageSrc: "/images/mock/2.png",
        description:
          "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
        avatarSrc: "/images/mock/user.png",
        name: "Сергей",
      },
      {
        imageSrc: "/images/mock/3.png",
        description:
          "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
        avatarSrc: "/images/mock/user.png",
        name: "Сергей",
      },
  ];

  const galleryItems = Array.from({ length: 8 }).map((_, idx) => ({
    id: idx + 1,
    imageSrc: `/images/gallery/image${idx === 0 ? "" : `-${idx}`}.png`,
  }));

  return (
    <main className="mt-8 mb-16 space-y-16">
      <HeaderCard>
        <div className="flex  items-center justify-between my-10">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-32 space-y-24 text-black">
            {
                    [...reviewsData, ...reviewsData, ...reviewsData, ...reviewsData].map((food, index) => <NewsCard key={index} {...food} />)
            }
            <div></div>
        </div>

        <div>
            <Image
              src="/images/menu-leaf/1.png"
              alt="menu-header-leaf-1"
              className="w-[252px] absolute -right-[70px] top-[8pc]"
            />
            <Image
              src="/images/menu-leaf/2.png"
              alt="menu-header-leaf-2"
              className="w-[170px] absolute top-[23pc] -left-[4pc]"
            />
            <Image
              src="/images/menu-leaf/4.png"
              alt="menu-header-leaf-4"
              className="w-60 absolute bottom-[40pc] -left-[4pc]"
            />
            <Image
              src="/images/menu-leaf/5.png"
              alt="menu-header-leaf-5"
              className="w-60 absolute bottom-[40pc] -right-[70px]"
            />
        </div>

        <div className="my-12 flex justify-center">
            <Pagination currentPage={2} totalPages={5} onPageChange={() => {}} />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-12">
            Галерея
          </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 place-items-center items-stretch">
            {galleryItems.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.imageSrc}
                  alt="Preview"
                  width={274}
                  height={185}
                  className="object-cover object-center rounded-3xl shadow-2xl"
                />
              </div>
            ))}
          </div>
          <div className="my-12 flex justify-center">
            <Pagination currentPage={2} totalPages={5} onPageChange={() => {}} />
          </div>
        </div>
      </HeaderCard>
    </main>

  )
}

export default News
