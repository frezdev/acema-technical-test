import { useState } from "react"
import type { User } from "../interfaces/users"
import { SquarePen, Trash } from 'lucide-react'
import { EditUserForm } from "../containers/EditUserForm"
import { ConfirmDeleteUser } from "../containers/ConfirmDeleteUser"

interface UserItemProps {
  user: User
}
export const UserItem = ({ user }: UserItemProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  return (
    <>
      <article className="flex flex-col gap-4 items-center justify-center px-4 py-6 border border-stone-600 shadow rounded-md relative">
        <figure>
          <img src={user.picture.medium} className="rounded-full w-24 h-24 aspect-square object-cover" />
        </figure>
        <div className="grid justify-items-center text-center">
          <h3 className="capitalize font-semibold">{user.name.first} {user.name.last}</h3>
          <div className="text-gray-400 text-sm">
            <p className="text-base mb-1">{user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Location:</b> {user.location.city}, {user.location.state}</p>
          </div>
        </div>
        <hr className=" w-full border-stone-600" />
        <div className="flex gap-4">
          <button title="Editar" className="cursor-pointer" onClick={() => setIsEditing(true)}>
            <SquarePen size={16} />
          </button>
          <button className="text-red-400 cursor-pointer" title="Eliminar" onClick={() => setIsDeleting(true)}>
            <Trash size={16} />
          </button>
        </div>
      </article>

      {isEditing && (
        <EditUserForm user={user} onClose={() => setIsEditing(false)} />
      )}
      {isDeleting && (
        <ConfirmDeleteUser user={user} onClose={() => setIsDeleting(false)} />
      )}
    </>
  )
}
