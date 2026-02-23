import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import { editUserSchema } from '../schemas/edit-user.schema'
import type { User } from '../interfaces/users'
import { X } from 'lucide-react'
import { useEditUser } from '../hooks/use-edit-user'
import type { EditUser } from '../interfaces/edit-user'
import { toast } from 'sonner'

interface EditUserFormProps {
  user: User
  onClose?: () => void
}

export const EditUserForm = ({ user, onClose }: EditUserFormProps) => {

  const { handleEditUser } = useEditUser()

  const form = useForm({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      firstName: user.name.first,
      lastName: user.name.last,
      email: user.email,
      phone: user.phone,
      city: user.location.city,
      state: user.location.state,
    }
  })

  const handleSave = (data: EditUser) => {
    handleEditUser(user.sha256, data)
    toast.success('User updated successfully')
    onClose?.()
  }

  return (
    <div className='fixed bg-black/60 inset-0 z-10 flex items-center justify-center p-4'>
      <form onSubmit={form.handleSubmit(handleSave)} className="flex max-h-[90dvh] overflow-y-auto flex-col gap-3 p-4 border border-stone-600 rounded-md bg-stone-800 w-full max-w-md relative">
        <button className='text-white absolute top-3 right-3 cursor-pointer' type="button" onClick={onClose}>
          <X size={20} />
        </button>
        <h4 className='font-bold text-xl'>Edit User</h4>
        <div className="grid gap-2">
          <label htmlFor="firstName">First Name</label>
          <input className="border border-gray-300 rounded-md p-2" type="text" id="firstName" {...form.register("firstName")} />
          {form.formState.errors.firstName && <span className="text-red-500 text-sm">{form.formState.errors.firstName.message}</span>}
        </div>
        <div className="grid gap-2">
          <label htmlFor="lastName">Last Name</label>
          <input className="border border-gray-300 rounded-md p-2" type="text" id="lastName" {...form.register("lastName")} />
          {form.formState.errors.lastName && <span className="text-red-500 text-sm">{form.formState.errors.lastName.message}</span>}
        </div>
        <div className="grid gap-2">
          <label htmlFor="email">Email</label>
          <input className="border border-gray-300 rounded-md p-2" type="email" id="email" {...form.register("email")} />
          {form.formState.errors.email && <span className="text-red-500 text-sm">{form.formState.errors.email.message}</span>}
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone">Phone</label>
          <input className="border border-gray-300 rounded-md p-2" type="tel" id="phone" {...form.register("phone")} />
          {form.formState.errors.phone && <span className="text-red-500 text-sm">{form.formState.errors.phone.message}</span>}
        </div>
        <div className="grid gap-2">
          <label htmlFor="city">City</label>
          <input className="border border-gray-300 rounded-md p-2" type="text" id="city" {...form.register("city")} />
          {form.formState.errors.city && <span className="text-red-500 text-sm">{form.formState.errors.city.message}</span>}
        </div>
        <div className="grid gap-2">
          <label htmlFor="state">State</label>
          <input className="border border-gray-300 rounded-md p-2" type="text" id="state" {...form.register("state")} />
          {form.formState.errors.state && <span className="text-red-500 text-sm">{form.formState.errors.state.message}</span>}
        </div>

        <div>
          <button type="submit" className="button w-full mt-4">Save Changes</button>
        </div>
      </form>
    </div>
  )
}
