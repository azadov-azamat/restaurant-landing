import HeaderCard from "../../components/card/header"

function News() {
  return (
    <main className="mt-8 mb-16 space-y-16">
      <HeaderCard>

        <div>
          <img
              src="/images/leaf/1.png"
              alt="header-leaf-1"
              className="w-[510px] absolute top-[3pc] left-[15pc]"
              loading="lazy"
            />
            <img
              src="/images/leaf/3.png"
              alt="header-leaf-3"
              className="w-[260px] absolute bottom-[10pc] right-[-3pc]"
              loading="lazy"
            />
            <img
              src="/images/leaf/4.png"
              alt="header-leaf-4"
              className="w-60 absolute top-[68px] -left-[70px]"
              loading="lazy"
            />
        </div>
      </HeaderCard>
    </main>

  )
}

export default News
