import { z } from 'zod'

export const GeneralValidationSchema = z.object({
    first_name: z.string({
        invalid_type_error: "Please enter a valid name",
    })
        .min(3, " Name should be atleast 3 letters"),
    last_name: z.string({
        invalid_type_error: "Please enter a valid name",
    })
        .min(3, " Name should be atleast 3 letters"),
    date_of_birth: z.string().min(1, "Date is required"),
    profession: z.string({
        invalid_type_error: "Please enter a valid profession",
    })
        .min(3, " Profession should be atleast 3 letters"),
    location: z.string({
        invalid_type_error: "Please enter a valid name",
    })
        .min(3, " Location should be atleast 3 letters"),

    phone_number: z.string().min(10, "Phone number should be 10 digits").max(10, "Phone number should be 10 digits"),

    work_email: z.string().email('Please insert a valid Email'),
    work_place: z.string().min(1, "Work place is required"),
    bio: z.string().min(15, 'Bio must contain atleast have 15 letters')
})