import {useState} from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState<string>('')
  const [propietario, setPropietario] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [alta, setAlta] = useState<string>('')
  const [sintomas, setSintomas] = useState<string>('')
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: any) =>{
    e.preventDefault();
    if ([nombre, propietario, email, alta, sintomas].includes('')){
      console.log('Campos vacio');
      setError(true);
    }
    else{
      setError(false);
      console.log('Campos lleno')
    }

  }
  return (
    <section className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center  mb-10">
        Añade pacientes y
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
        {error && (
          <div className='bg-red-800 text-center p-3 uppercase font-bold mb-3 rounded'>
            <p className='text-white'>Todos los campos son obligatorios </p>
          </div>
        )}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre mascota
          </label>
          <input
            id='mascota'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(text) => setNombre(text.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre del propietario
          </label>
          <input
            id='propietario'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id='email'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email contacto propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input
            id='alta'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value='Agregar paciente'
        />
      </form>
    </section>
  )
}

export default Formulario