import HeaderCard from "../../components/card/header"
import Image from "../../components/custom/image";
import NewsSlider from "../../components/slider/news";

function Contacts() {
  return (
    <main className="mt-8 mb-16 space-y-16">
      <HeaderCard>

        <div>
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
        </div>
      </HeaderCard>
    
      <NewsSlider />
    </main>

  )
}

export default Contacts
