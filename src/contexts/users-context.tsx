/* eslint-disable react-refresh/only-export-components */
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, type PropsWithChildren } from "react";
import { getAllUsers } from "../modules/users/services/get-all-users";
import type { UsersResult } from "../modules/users/interfaces/users";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUsers } from "../modules/users/slices/users.slice";
import { toast } from "sonner";

interface UsersContextType {
  users: UsersResult[]
}
export const UsersContext = createContext({} as UsersContextType)

export const UsersProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.usersReducer.users)

  const { data, error } = useQuery({
    queryKey: ['users'],
    staleTime: Infinity,
    queryFn: () => getAllUsers({ results: 100 }),
  })


  useEffect(() => {
    if (data) {
      dispatch(setUsers(data.results))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    if (error) {
      toast.error('Error fetching users')
    }
  }, [error])

  return (
    <UsersContext.Provider value={{ users }}>
      {children}
    </UsersContext.Provider>
  )
}

export const useUsersContext = () => useContext(UsersContext)