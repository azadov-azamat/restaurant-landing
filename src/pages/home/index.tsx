import HeaderCard from "../../components/card/header"

function App() {
  const sampleNavLinks = [
    { label: "Меню", href: "/"},
    { label: "Новости", href: "/news"},
    { label: "Бронирование", href: "/chef/news"},
    { label: "О нас", href: "/about-us"},
    { label: "Контакты", href: "/contacts"},
  ]

  return (
    <main className="mt-10">
      <HeaderCard sampleNavLinks={sampleNavLinks}>
       <div className="flex items-center justify-between">
         <div>

        </div>
        <div>
          <img
              src="/images/luxury.png"
              // width={34}
              className="w-[600px]"
              alt="header-luxuery"
              loading="lazy"
            />
        </div>
       </div>
      </HeaderCard>
      <p className="text-center text-2xl font-bold">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
