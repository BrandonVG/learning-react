import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <section className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado pacientes</h2> 
      <p className="text-xl mt-5 mb-7 text-center">
        Administra tus
        <span className="text-indigo-600 font-bold"> pacientes y citas</span>
      </p>
      <div className="md:h-screen overflow-scroll">
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
      </div>
    </section>
  );
}

export default ListadoPacientes;