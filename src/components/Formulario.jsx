import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({setPacientes, pacientes, paciente}) => {
    const [nombre, setNombre] = useState('')
    const [dueño, setDueño] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(paciente).length > 0 ) {
            setNombre(paciente.nombre)
            setDueño(paciente.dueño)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if([nombre, dueño, email, fecha, sintomas].includes('') ) {
            setError(true)
            return
        } 
        
        setError(false)

        const objetoPaciente = {
            nombre,
            dueño,
            email,
            fecha,
            sintomas,

        }
        
        if(paciente.id) {

            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacientesActualizados)

        }else{
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }



        setNombre('')
        setDueño('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>

        <p className='text-lg mt-5 text-center mb-5'>
            Añade Pacientes y {''}
            <span className='text-secundario font-bold text-lg'>Administralos</span>
        </p>

        <form onSubmit={handleSubmit} className='bg-principal shadow-xl rounded-lg py-10 px-5 mb-10'>

            {error && <Error mensaje='Todos los campos son obligatorios'/>}

            <div className='mb-5'>
                <label htmlFor="mascota" className='block text-grey-700 uppercase font-bold'>Nombre de Mascota <span className='text-secundario'>*</span> </label>
                <input 
                type="text" 
                id='mascota' 
                placeholder='Nombre de Mascota' 
                className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
                value={nombre}
                onChange={ (e) => setNombre(e.target.value)} 
                />
            </div>
            <div className='mb-5'>
                <label htmlFor="dueño" className='block text-grey-700 uppercase font-bold'>Nombre del Dueño <span className='text-secundario'>*</span></label>
                <input 
                type="text" 
                id='dueño' 
                placeholder='Nombre del Dueño' 
                className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
                value={dueño}
                onChange={ (e) => setDueño(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor="email" className='block text-grey-700 uppercase font-bold'>Email <span className='text-secundario'>*</span></label>
                <input 
                    type="email" 
                    id='email' 
                    placeholder='Email' 
                    className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label htmlFor="alta" className='block text-grey-700 uppercase font-bold'>Alta <span className='text-secundario'>*</span></label>
                <input 
                    type="date" 
                    id='alta' 
                    className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
                    value={fecha}
                    onChange={ (e) => setFecha(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                
                <label htmlFor="sintomas" className='block text-grey-700 uppercase font-bold'>Sintomas <span className='text-secundario'>*</span></label>
                <textarea 
                    id='sintomas' 
                    className='border-2 w-full mt-2 placeholder-gray-400 rounded-md' 
                    placeholder='Ingrese los sintomas que presenta su mascota'
                    value={sintomas}
                    onChange={ (e) => setSintomas(e.target.value)}
                />

            </div>

            <input type="submit" className='bg-secundario w-full rounded-md text-white p-2 hover:bg-secundario-oscuro cursor-pointer transition-all' value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}/>
        </form>
    </div>
  )
}

export default Formulario