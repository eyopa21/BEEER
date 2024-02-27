import { z } from 'zod'

export const LoginValidationSchema = z.object({

    email: z.string().email('Please insert a valid Email'),
    password: z.string().min(5, 'Password must atleast have 5 letters')

})