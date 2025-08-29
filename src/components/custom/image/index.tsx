// components/custom/Image/index.tsx
import React from "react";
import { LazyLoadImage, type LazyLoadImageProps } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = Omit<LazyLoadImageProps, "alt" | "loading" | "src"> & {
  src: string;                // majburiy
  alt: string;                // majburiy (SEO/AX)
  width?: number;             // joy rezerve qilish uchun tavsiya
  height?: number;            // joy rezerve qilish uchun tavsiya
  aspectRatio?: number;       // width/height bermasangiz, masalan 16/9 = 1.777...
  sizes?: string;             // responsive uchun
  srcSet?: string;            // responsive uchun
  priority?: boolean;         // LCP rasm uchun true -> eager + fetchpriority=high
  className?: string;
};

const Image: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  aspectRatio,
  sizes,
  srcSet,
  priority = false,
  className = "",
  ...rest
}) => {
  // 1) Layout shiftni oldini olish: width/height yoki aspect-ratio
  const style: React.CSSProperties = {
    ...(rest.style || {}),
    ...(aspectRatio && !width && !height ? { aspectRatio } : {}),
    // img element block bo‘lsin, inline-gap CLS keltirmasin
    display: "block",
  };

  // 2) Above-the-fold (LCP) uchun eager; boshqalar lazy
  const loading = priority ? "eager" : "lazy";
  // 3) Brauzer hintlari
  // const fetchpriority = priority ? "high" : "auto";
  const decoding = "async";

  // 4) absolute class’larni parent’ga tashlab, img’da saqlamaslik shart emas,
  //    lekin agar ishlatsangiz, container’ga ham barqaror height/aspectRatio bering.

  // Agar width/height bor bo‘lsa, attribut sifatida beramiz
  const sizeAttrs = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...(sizes ? { sizes } : {}),
    ...(srcSet ? { srcSet } : {}),
  };

  // LCP rasm uchun LazyLoadImage o‘rniga oddiy <img> ko‘pincha barqarorroq
  if (priority) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={priority ? "high" : "auto"}
        decoding={decoding}
        style={style}
        {...sizeAttrs}
      />
    );
  }

  // Boshqa hollarda lazy + blur
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      // blur placeholder CLS bermasligi uchun container o‘lchami barqaror bo‘lishi zarur
      effect="blur"
      // react-lazy-load-image-component ga to‘g‘ridan-to‘g‘ri width/height/sizes/srcSet uzatamiz
      style={style}
      {...sizeAttrs}
      {...rest}
    />
  );
};

export default Image;
