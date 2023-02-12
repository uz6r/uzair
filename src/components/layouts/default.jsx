import Header from "./includes/header"
import Footer from "./includes/footer"

function Layout ({children}) {
  return (
    <section className="bg-zinc-900 text-zinc-50 font-mono">
      <div className="container flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 px-3 py-10">
          {children}
        </main>
        <Footer />
      </div>
    </section>
  )
}

export default Layout