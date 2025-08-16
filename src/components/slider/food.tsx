"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { FoodCard } from "../card/food";
import { Button } from "../custom/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FoodSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true)
    },
  });

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
    <div className="relative">
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
        Популярные блюда
      </h2>

        {loaded && instanceRef.current && (<>
            <button
                onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                    }
                disabled={currentSlide === 0}
                className="absolute -left-12 top-1/2 -translate-y-1/2 z-20  p-3 rounded-full hover:scale-110 transition"
            >
                <ChevronLeft />
            </button>
            <button
                onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }
                disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                    }
                className="absolute -right-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full hover:scale-110 transition"
            >
                <ChevronRight width={33}/>
            </button>
        </>)}
      <div ref={sliderRef} className="keen-slider flex pt-20 !overflow-visible z-10 my-10">
        {foodData.map((food, index) => (
          <motion.div
            key={index}
            className="keen-slider__slide !overflow-visible"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FoodCard {...food} />
          </motion.div>
        ))}
      </div>

        <div className="flex justify-end mt-10">
          <Button showArrow variant="primary" size="md">
              Посмотреть меню
            </Button>
        </div>

        <div>
            <img
              src="/images/leaf/5.png"
              alt="food-slider-leaf-5"
              className="w-[140px] absolute -bottom-10 -left-8"
              loading="lazy"
            />

            <img
              src="/images/leaf/6.png"
              alt="food-slider-leaf-5"
              className="w-[160px] absolute -top-5 -right-8"
              loading="lazy"
            />
        </div>
    </div>
  );
}