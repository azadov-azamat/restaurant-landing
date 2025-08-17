import { memo, useMemo, useCallback } from "react";
import type { FC } from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

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

const BUTTON_VARIANTS: Variants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const FoodCardComponent: FC<FoodCardProps> = ({
  title,
  description,
  price,
  image,
  onAdd,
}) => {
  const handleAdd = useCallback(() => {
    onAdd?.();
  }, [onAdd]);

  const imgSrc = useMemo(() => image || "/placeholder.svg", [image]);

  return (
    <motion.div
      variants={CARD_CONTAINER_VARIANTS}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 0.6 }}
      className="relative w-[263px]"
    >
      {/* Food Image */}
      <motion.div
        variants={IMAGE_VARIANTS}
        transition={{ duration: 0.3 }}
        className="absolute -top-20 left-1/2 transform -translate-x-[54%] z-10"
      >
        <div className="w-56 h-52 rounded-full overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
            width={220}
            height={210}
            loading="lazy"
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
            <Heart size={15} strokeWidth={3} className="text-black"/>
          </div>
        </div>

        {/* Price and Add Button */}
        <div className="flex items-end justify-between">
          <div className="text-black">
            <span className="font-normal text-xl leading-normal text-black">
              {price}
            </span>
          </div>

          <motion.button
            variants={BUTTON_VARIANTS}
            whileHover="hover"
            whileTap="tap"
            onClick={handleAdd}
            className="
              w-12 h-10
              bg-black
              rounded-lg
              flex items-center justify-center
              shadow-lg hover:shadow-xl
              transition-shadow
            "
          >
            <img
              src="/icons/basket.png"
              alt="footer-logo-background"
              width={23}
              loading="lazy"
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

FoodCardComponent.displayName = "FoodCardComponent";
export const FoodCard = memo(FoodCardComponent);
