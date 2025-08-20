import { LazyLoadImage } from "react-lazy-load-image-component";
import type { LazyLoadImageProps } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Image = (props: LazyLoadImageProps) => {
  const { className = "", ...rest } = props;

  // Agar className ichida 'absolute' bo‘lsa
  if (className.includes("absolute")) {
    // absolute bo‘lganini ajratamiz
    const wrapperClasses = className;
    const imgClasses = className
      .split(" ")
      .filter((cls) => !cls.includes("absolute")) // faqat positioning classlarni olib tashlaymiz
      .join(" ");

    return (
      <div className={wrapperClasses  + ' z-0'}>
        <LazyLoadImage
          {...rest}
          loading={props.loading || "lazy"}
          effect="blur"
          className={imgClasses}
        />
      </div>
    );
  }

  // Oddiy holat
  return (
    <LazyLoadImage
      {...rest}
      loading={props.loading || "lazy"}
      effect="blur"
      className={className}
    />
  );
};

export default Image;
