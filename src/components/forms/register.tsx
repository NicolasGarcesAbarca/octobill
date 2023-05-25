import { useForm } from "react-hook-form";
import { register as registerUser } from "@/services/user";
import { regexEmail } from "./validation/email";
import ErrorMessage from "./errors/errorsMessage";
import toast from "react-hot-toast";

type FormData = {
    email: string;
    password: string;
    name: string;
};

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors}
    } = useForm<FormData>();
    const onSubmit = handleSubmit(async (data) => {
        const message = await registerUser(data);
        toast.success(message);
    });
    return (
        <div className="bg-white px-10 pb-10 rounded-lg">
            <h1 className="text-2xl text-gray-700 font-medium mt-8 mb-6">Crea tu cuenta</h1>
            <form onSubmit={onSubmit} className="">
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                        <label>
                            <p className='text-gray-700 text-base font-medium'>Nombre</p>
                        </label>
                        <input type="text" {...register("name", { required: "No olvides el nombre" })} className='bg-gray-50 w-full h-8 pl-2 border rounded-lg' />
                        <ErrorMessage error={errors.name} inputType="text"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>
                            <p className='text-gray-700 text-base font-medium'>Email</p>
                        </label>
                        <input type="email" {...register("email", { required: "Falta el email", pattern: regexEmail })} className='bg-gray-50 w-full h-8 pl-2 border rounded-lg' />
                        <ErrorMessage error={errors.email} inputType="email"/>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label>
                            <p className='text-gray-700 text-base font-medium'>Password</p>
                        </label>
                        <input type="password" {...register("password", { required: true, minLength: 6 })} className='bg-gray-50 w-full h-8 pl-2 border rounded-lg' />
                        <ErrorMessage error={errors.password} inputType="password"/>
                    </div>
                    <button type="submit" className='w-full bg-orange-700 px-4 py-2 rounded-lg mt-3  hover:bg-orange-600'>
                        <p className='text-white font-semibold'>Registrar</p>
                    </button>
                </div>
            </form>

        </div>
    );
}