import { z } from 'zod'

export const BlogValidationSchema = z.object({

    email: z.string().email('Please insert a valid Email'),
    password: z.string().min(5, 'Password must atleast have 5 letters'),


    title: z.string().min(1, "Title is required"),
    subtitle: z.string().min(1, "Subtitle is required"),
    description: z.string().min(50, 'At least 50 chars is needed'),
    category: z.string().min(1, 'Date is required'),
    tags: z.array(z.string()).min(1, 'At least one tag is required'),


})