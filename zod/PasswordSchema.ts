import { z } from 'zod'

export const ChnagePasswordValidationSchema = z.object({


    old_password: z.string().min(5, 'Password must atleast have 5 letters'),
    new_password: z.string().min(5, 'New password must atleast have 5 letters'),
    confirm_password: z.string().min(5, 'Password must atleast have 5 letters'),

}).superRefine(({ confirm_password, new_password }, ctx) => {
    if (confirm_password !== new_password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match"
        });
    }
});