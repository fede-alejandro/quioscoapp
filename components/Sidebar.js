import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';
import Categoria from './Categoria';
import Link from 'next/link';

const Sidebar = () => {
    const { categorias } = useQuiosco();

    return (
        <>
            <Link href='/'>
                <Image
                    width={200}
                    height={100}
                    src='/assets/img/logo.svg' alt='Imagen logotipo'
                    className='m-auto'
                />
            </Link>

            <nav className='mt-5'>
                {categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </nav>
        </>
    )
}

export default Sidebar;