import api from "./api-config";
import { z } from 'zod';

const registerPostResponseSchema = z.object({
    message: z.string()
})

type User = {
    email: string;
    password: string;
    name: string;
}

export async function register(user: User) {
    try {
        const data = await api.post('/none/register', user)
        const parsedData = registerPostResponseSchema.parse(data.data)
        return parsedData.message
    } catch (error) {
        return "Error al registrar el usuario"
    }
}