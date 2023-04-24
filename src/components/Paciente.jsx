const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { nombre, dueño, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm(`¿Deseas eliminar a ${nombre}?` )

        if (respuesta) {
            eliminarPaciente(id)
        }
    }

  return (
        <div className='mx-5 my-8 bg-principal  shadow-xl px-5 py-10 rounded-lg'>
            
            <p className='font-bold mb-3 text-grey-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>{nombre}</span>           
            </p>
            <p className='font-bold mb-3 text-grey-700 uppercase'>Dueño: {''}
                <span className='font-normal normal-case'>{dueño}</span>           
            </p>
            <p className='font-bold mb-3 text-grey-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>{email}</span>           
            </p>
            <p className='font-bold mb-3 text-grey-700 uppercase'>Fecha de Alta: {''}
                <span className='font-normal normal-case'>{fecha}</span>           
            </p>
            <p className='font-bold mb-3 text-grey-700 uppercase'>Sintomas: {''}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>
            <div className="flex justify-between">

                <button 
                    type='button'
                    className="py-1 px-2 bg-cuarto mr-2 rounded-md text-white "
                    onClick={() => setPaciente(paciente)}>
                Editar</button>
                <button 
                    type='button'
                    className="py-1 px-2 bg-secundario rounded-md text-white hover:bg-secundario"
                    onClick={handleEliminar}>
                Eliminar</button>
          
            </div>

        </div>
  )
}

export default Paciente