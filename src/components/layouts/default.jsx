import { useState } from "react"
import Header from "./includes/header"
import Footer from "./includes/footer"
import Menu from "./includes/menu"

function Layout ({children}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-zinc-800 text-zinc-50 font-mono px-4">
      <div className="container flex flex-col min-h-screen">
        <Header setIsOpen={setIsOpen} />
        <main className="flex-1 px-3 py-10">
          {children}
        </main>
        <Footer />
      </div>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
        
      </Menu>
    </section>
  )
}

export default Layout