import type { UsersResult } from "../interfaces/users"
import { UserItem } from "./UserItem"

// foto, nombre, email, teléfono, ubicación

interface UsersListProps {
  users: UsersResult[]
}
export const UsersList = ({ users }: UsersListProps) => {

  return (
    <>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 w-full">
        {users.map(({ user }) => (
          <UserItem key={user.sha256} user={user} />
        ))}
      </section>
    </>
  )
}
