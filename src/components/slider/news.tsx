"use client";

import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import { Button } from "../custom/button";
import { NewsCard } from "../card/news";

export default function NewsSlider() {

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
      loop: true,
      mode: "snap",
      slides: {
        perView: 3,
        spacing: 15,
      },
      breakpoints: {
        "(max-width: 768px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(max-width: 480px)": {
          slides: { perView: 1, spacing: 10 },
        },
      }
    });

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

  return (
    <div className="relative">
      <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-12">
        Новости/Галерея
      </h2>

      <div ref={sliderRef} className="keen-slider flex pt-20 !overflow-visible z-10 my-16">
        {reviewsData.map((food, index) => (
          <motion.div
            key={index}
            className="keen-slider__slide !overflow-visible"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <NewsCard {...food} />
          </motion.div>
        ))}
      </div>

        <div className="flex justify-end">
          <Button showArrow variant="primary" size="md">
              Посмотреть все
            </Button>
        </div>
    </div>
  );
}