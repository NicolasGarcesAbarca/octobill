import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/router'
import FormLogin from '@/components/forms/login'

export default function Home() {
  const router = useRouter()
  return (
    <main className='w-full min-h-screen bg-gray-100 overflow-auto'>
      <header className='bg-orange-700'>
        <nav className='flex items-center justify-between h-16 px-8 lg:px-14'>
          <div className='w-10 h-10 bg-white'></div>
          <div><p className='text-white text-lg'>Ayuda</p></div>
        </nav>
      </header>
      <section className='px-8 lg:grid lg:grid-cols-2 lg:mt-[120px] lg:px-14'>
        <div className='hidden lg:flex flex-col items-center py-10 md:p-0 col-span-1 '>
          <div className='max-w-[600px]'>
            <h1 className='text-gray-800  text-5xl  font-semibold '>Ingresa a revisar tu consumo</h1>
            <p className=' text-gray-600 text-lg w-[490px] mt-4'>En octobill podrás revisar el estado de cuenta con gráficos de consumo y consultar dudas en el chat. </p>
          </div>
          <div className='grid grid-cols-3 gap-6 w-full py-6'>
            <div className='col-span-1 aspect-square bg-transparent border rounded-lg'></div>
            <div className='col-span-1 aspect-square bg-transparent border rounded-lg'></div>
            <div className='col-span-1 aspect-square bg-transparent border rounded-lg'></div>
          </div>
        </div>
        <div className='lg:col-span-1'>
          <div className='bg-white border mt-16 lg:mt-0 md:w-[420px] px-10 py-8 lg:py-9 mx-auto rounded-lg'>
            <FormLogin />
            <div className='mt-4'>
              <button type="submit" className='flex items-center justify-center w-full  px-4 py-2 rounded-lg border hover:bg-gray-100'>
                <FcGoogle size={30} className='pr-1 text-gray-700' />
                <p className='text-gray-700 font-semibold'>Entrar con Google</p>
              </button>
            </div>
            <div className='mt-6'>
              <p className='text-sm text-center text-gray-600'>
                ¿Aún no estas registrado?
                <span onClick={() => router.push('/register')}
                  className='text-orange-700 text-sm font-medium ml-1 hover:underline cursor-pointer'>
                  Regístrate
                </span>
              </p>

            </div>
          </div>

        </div>
      </section>
    </main >)
}
