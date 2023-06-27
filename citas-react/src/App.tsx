import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  return (
    <>
      <Header/>
      <main className="container mx-auto">
        <div className="mt-12 md:flex">
          <Formulario />
          <ListadoPacientes />
        </div>
      </main>
    </>
  )
}

export default App
