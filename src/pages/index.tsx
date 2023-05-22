import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-full min-h-screen bg-gray-100 overflow-auto'>
      <header className='bg-orange-700'>
        <nav className='flex items-center justify-between h-16 px-8 lg:px-14'>
          <div className='w-10 h-10 bg-white'></div>
          <div><p className='text-white text-lg'>Login</p></div>
        </nav>
      </header>
      <section className='lg:grid lg:grid-cols-2 lg:mt-[120px] px-8 lg:px-14'>
        <div className='col-span-1 flex flex-col justify-center'>
          <h1 className='text-gray-800 text-5xl font-semibold'>Ingresa y revisa tu consumo</h1>
          <p className='text-gray-600 text-lg w-[490px] mt-4'>Hola, en octobill podras realizar cobros y revisar el estado de cuenta. </p>
        </div>
        <div className='col-span-1'>
          <div className='bg-white border md:w-[420px] px-10 py-9 mx-auto rounded-lg'>
            <form className='flex flex-col justify-center '>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='email'>
                    <p className='text-gray-700 text-base font-medium'>Email</p>
                  </label>
                  <input name='email' type="email" className='bg-gray-50 w-full h-8 pl-2 border rounded-lg' />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='password'>
                    <p className='text-gray-700 text-base font-medium'>Clave</p>
                  </label>
                  <input name='password' type="password" className='bg-gray-50 w-full h-8 border rounded-lg' />
                </div>
                <div className='mt-3'>
                  <button type="submit" className='w-full bg-orange-700 px-4 py-2 rounded-lg hover:bg-orange-600'>
                    <p className='text-white font-semibold'>Entrar</p>
                  </button>
                </div>
              </div>
            </form>
            <div className='mt-2'>
              <button type="submit" className='w-full  px-4 py-2 rounded-lg border'>
                <p className='text-gray-700 font-semibold'>Entrar con Google</p>
              </button>
            </div>
            <div className='mt-6'>
              <p className='text-sm text-center text-gray-600'>
                Aun no estas registrado?
                <span className='text-orange-700 text-sm font-medium ml-1 hover:underline cursor-pointer'>
                  Registrate
                </span>
              </p>

            </div>
          </div>

        </div>
      </section>
    </main >)
}
