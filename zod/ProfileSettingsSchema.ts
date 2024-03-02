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


export const AddSocialLinkValidationSchema = z.object({

    link_name: z.string().min(1, "You have to select the social media"),

    the_link: z.string().min(1, 'Link is required')
})

export const CertificatesValidationSchema = z.object({

    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, 'Description is required'),
    start_date: z.string().min(1, 'Date is required'),
    end_date: z.string().min(1, 'Date is required'),
    location: z.string().min(1, 'Location is required'),
})
export const ProjectsValidationSchema = z.object({

    title: z.string().min(1, "Title is required"),
    subtitle: z.string().min(1, "Subtitle is required"),
    description: z.string().min(1, 'Description is required'),
    start_date: z.string().min(1, 'Date is required'),
    end_date: z.string().min(1, 'Date is required'),
    location: z.string().min(1, 'Location is required'),
    link: z.string().min(1, 'Link is required'),
    client: z.string().min(1, 'Client is required'),
    skills: z.array(z.string()).min(1, 'At least one skill is required'),
})


export const EducationsValidationSchema = z.object({

    title: z.string().min(1, "Title is required"),
    school: z.string().min(1, 'School name is required'),
    start_date: z.string().min(1, 'Date is required'),
    end_date: z.string().min(1, 'Date is required'),
    location: z.string().min(1, 'Location is required'),
})
