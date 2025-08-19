import { memo, useMemo, useCallback, useState } from "react";
import type { FC } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "../custom/image";

// Types
interface FoodCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  onAdd?: () => void;
}

// Framer Motion variants
const CARD_CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { y: -5 },
};

const IMAGE_VARIANTS: Variants = {
  hover: { scale: 1.05 },
};

const FoodCardComponent: FC<FoodCardProps> = ({
  title,
  description,
  price,
  image,
  onAdd,
}) => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleAdd = useCallback(() => {
    setCount((prev) => prev + 1);
    onAdd?.();
  }, [onAdd]);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const imgSrc = useMemo(() => image || "/placeholder.svg", [image]);

  return (
    <motion.div
      variants={CARD_CONTAINER_VARIANTS}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 0.6 }}
      className="relative w-[263px] z-10"
    >
      {/* Food Image */}
      <motion.div
        variants={IMAGE_VARIANTS}
        transition={{ duration: 0.3 }}
        className="absolute -top-20 left-1/2 transform -translate-x-[54%] z-10"
      >
        <div className="w-56 h-52 rounded-full overflow-hidden">
          <Image
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
            width={220}
            height={210}
          />
        </div>
      </motion.div>

      {/* Card Content */}
      <div
        className="
          relative
          w-[241px]
          h-full
          pt-32 px-4 pb-4
          bg-white/50 backdrop-blur-[10px]
          rounded-3xl
          flex flex-col justify-between
        "
      >
        {/* Text Content */}
        <div className="flex items-start justify-between mb-2">
          <div className="text-left text-black">
            <h3 className="font-bold mb-1 text-xl leading-normal text-black">
              {title}
            </h3>
            <p className="text-sm leading-normal font-normal text-black opacity-80">
              {description}
            </p>
          </div>

          <div className="mt-0.5">
  <button onClick={() => setLiked((prev) => !prev)}>
    <Heart
      size={18}
      strokeWidth={2.5}
      className={`transition-colors duration-300 ${
        liked ? "text-red-500 fill-red-500" : "text-black"
      }`}
    />
  </button>
</div>
        </div>

        {/* Price and Add Button / Counter */}
        <div className="flex items-end justify-between">
          <div className="text-black">
            <span className="font-normal text-xl leading-normal text-black">
              {price}
            </span>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            < motion.div
              animate={{ width: count === 0 ? 48 : 120 }} // 🔥 width animatsiya
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="
                h-10 bg-black rounded-lg flex items-center justify-center
                shadow-lg overflow-hidden text-white
              "
            >
              {count === 0 ? (
                // basket icon
                <button
                  onClick={handleAdd}
                  className="flex items-center justify-center w-full h-full"
                >
                  <Image src="/icons/basket.png" alt="basket" width={20} height={20} />
                </button>
              ) : (
                // counter
                <div className="flex items-center justify-between w-full px-2">
                  <button
                    onClick={handleDecrement}
                    className="px-2 text-lg font-bold hover:text-red-400"
                  >
                    −
                  </button>
                  <span className="text-sm font-medium">{count}</span>
                  <button
                    onClick={handleIncrement}
                    className="px-2 text-lg font-bold hover:text-green-400"
                  >
                    +
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

FoodCardComponent.displayName = "FoodCardComponent";
export const FoodCard = memo(FoodCardComponent);
