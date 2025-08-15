import { memo, useMemo, useCallback } from "react";
import type { FC } from "react";
import { Plus } from "lucide-react";
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
      className="relative w-[263px] h-[395px]"
    >
      {/* Food Image */}
      <motion.div
        variants={IMAGE_VARIANTS}
        transition={{ duration: 0.3 }}
        className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-yellow-400 shadow-2xl">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
            width={160}
            height={160}
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Card Content */}
      <div
        className="
          relative
          h-full
          pt-24 px-6 pb-6
          bg-white/5 backdrop-blur-[10px]
          border-2 border-white/20
          rounded-3xl
          flex flex-col justify-between
        "
      >
        {/* Text Content */}
        <div className="text-left text-white">
          <h3 className="font-normal mb-2 text-[24px] leading-normal text-white">
            {title}
          </h3>
          <p className="text-[15px] leading-normal font-normal text-white opacity-80">
            {description}
          </p>
        </div>

        {/* Price and Add Button */}
        <div className="flex items-end justify-between mt-auto">
          <div className="text-white">
            <span className="font-normal text-[24px] leading-normal text-white">
              {price}
            </span>
          </div>

          <motion.button
            variants={BUTTON_VARIANTS}
            whileHover="hover"
            whileTap="tap"
            onClick={handleAdd}
            className="
              w-12 h-12
              bg-white
              rounded-xl
              flex items-center justify-center
              shadow-lg hover:shadow-xl
              transition-shadow
            "
          >
            <Plus className="w-6 h-6 text-black" strokeWidth={2} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

FoodCardComponent.displayName = "FoodCardComponent";
export const FoodCard = memo(FoodCardComponent);
