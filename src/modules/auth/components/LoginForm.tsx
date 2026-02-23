import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../hooks/use-login"
import { loginSchema } from "../schemas/login.schema"
import { useUsersContext } from "../../../contexts/users-context"


export const LoginForm = () => {
  const { handleLogin } = useAuth()
  const { users } = useUsersContext()
  const defaultUser = users[0]?.user

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: defaultUser?.email || '',
      password: defaultUser?.password || '',
    },
    values: {
      email: defaultUser?.email || '',
      password: defaultUser?.password || '',
    },
    mode: 'onSubmit'
  })

  return (
    <div className="h-dvh w-full flex justify-center items-center">
      <form onSubmit={form.handleSubmit(handleLogin)} className="flex flex-col gap-4 w-full max-w-sm">
        <div>
          <h1 className="text-2xl font-bold text-center">Login</h1>
        </div>
        <div className="grid gap-2">
          <label htmlFor="username">Email</label>
          <input className="border border-gray-300 rounded-md p-2" type="email" id="email" {...form.register('email')} />
          {form.formState.errors.email && <span className="text-red-500 text-sm">{form.formState.errors.email.message}</span>}
        </div>
        <div className="grid gap-2">
          <label htmlFor="password">Password</label>
          <input className="border border-gray-300 rounded-md p-2" type="password" id="password" {...form.register('password')} />
          {form.formState.errors.password && <span className="text-red-500 text-sm">{form.formState.errors.password.message}</span>}
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  )
}
