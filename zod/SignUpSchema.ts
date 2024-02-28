import { z } from 'zod'

export const SignUpValidationSchema = z.object({
    beeer_name: z.string({
        invalid_type_error: "Please enter a valid Beeer name",
    })
        .min(3, "Beeer name should be atleast 3 letters"),
    email: z.string().email('Please insert a valid Email'),
    password: z.string().min(5, 'Password must atleast have 5 letters')

})