import Image from 'next/image'
import { formatearDinero } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

const Producto = ({ producto }) => {
    const { handleSetProducto, handleChangeModal } = useQuiosco()
    const { nombre, precio, imagen } = producto

    return (
        <div className='border'>
            <Image
                src={`/assets/img/${imagen}.jpg`}
                alt={`Imagen ${nombre}`}
                width={300}
                height={400}
            />
            <div className='p-5'>
                <h2 className='text-xl font-bold'>{nombre}</h2>
                <p className='mt-5 font-black text-lg text-amber-400'>
                    {formatearDinero(precio)}
                </p>

                <button type='button'
                    className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
                    onClick={() => {
                        handleChangeModal()
                        handleSetProducto(producto)
                    }}
                >Agregar</button>
            </div>
        </div>
    )
}

export default Producto