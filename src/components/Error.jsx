const Error = ({mensaje}) => {
  return (
        <div 
            className='bg-secundario uppercase p-1 text-center rounded-md mb-5 text-white font-bold'>
            <p>{mensaje}</p>
        </div> 
  )
}

export default Error