import { FieldError } from "react-hook-form"
import { motion } from 'framer-motion'

type FieldErrorType = FieldError['type']

type Input = 'email' | 'password' | 'text'

type props = {
    error: FieldError | undefined
    inputType: Input
}

function message(errorType: FieldErrorType, inputType: Input) {
    if (errorType === 'required') {
        return "Este campo es requerido"
    } else if (errorType === 'pattern') {
        if (inputType === 'email') {
            return "El email no es valido"
        }
    } else if (errorType === 'minLength') {
        if (inputType === 'password') {
            return "La contraseña debe tener al menos 6 caracteres"
        }
    }
}

function ErrorMessage(props: props) {
    const { error, inputType } = props
    if (!error) return null
    return <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        exit={{opacity:0}} className='text-red-500 text-xs font-semibold'>
        {message(error.type, inputType)}
    </motion.span>
}

export default ErrorMessage

