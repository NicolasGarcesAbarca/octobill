import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getApp } from 'firebase/app'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import ErrorMessage from "./errors/errorsMessage";
import { regexEmail } from "./validation/email";
import { useState,useContext } from "react";
import { OverlayContext } from "@/context/Overlay";

type IFormValues = {
    email: string,
    password: string,
}

function FormLogin() {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>();
    const {hide,show}= useContext(OverlayContext)
    
    const onSubmit: SubmitHandler<IFormValues> = async (data) => {
        const app = getApp()
        const auth = getAuth(app)
        show()
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            toast.success("Bienvenido a Octobill")
            router.push('/')
        } catch (e) {
            toast.error("Error al iniciar sesión")
        }finally{
            hide()
        }
    }

    return (<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center '>
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
                <label htmlFor='email'>
                    <p className='text-gray-700 text-base font-medium'>Email</p>
                </label>
                <input {...register("email", { required: true ,pattern: regexEmail})} name='email' type="email" className='bg-gray-50 w-full h-8 pl-2 border rounded-lg' />
                <ErrorMessage error={errors.email} inputType="email" />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='password'>
                    <p className='text-gray-700 text-base font-medium'>Clave</p>
                </label>
                <input {...register("password", { required: true })} name='password' type="password" className='bg-gray-50 w-full h-8 pl-2 border rounded-lg' />
                <ErrorMessage error={errors.password} inputType="password" />
            </div>
            <div className='mt-3'>
                <button type="submit" className='w-full bg-orange-700 px-4 py-2 rounded-lg hover:bg-orange-600'>
                    <p className='text-white font-semibold'>Entrar</p>
                </button>
            </div>
        </div>
    </form>)
}

export default FormLogin;