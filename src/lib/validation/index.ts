import * as z from "zod"

// ============================================================
// USER
// ============================================================
export const SignupValidationSchema = z.object({
    // username: z.string().min(2).max(50),
    name: z.string().min(2, {
      message: "Too short",
    }),
    username:z.string().min(2, {
        message: "Too short",
    }),
    email: z.string().email(),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters",
    }),
  
})

export const SigninValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
      message: "Password must be at least 8 characters",
  }),

})

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string(),
});

// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string()
})