import { useAuth } from "../modules/auth/hooks/use-login"
import { UsersView } from "../modules/users/containers/UsersView"

export const Home = () => {
  const { handleLogout } = useAuth()
  return (
    <>
      <header className="flex items-center justify-between mb-6 p-4 border-b border-stone-600">
        <h1 className=" font-bold text-xl">Users List</h1>
        <button className="button py-2 px-4 rounded-md" onClick={handleLogout}>
          Log Out
        </button>
      </header>
      <main className="p-4">
        <UsersView />
      </main>
    </>
  )
}
