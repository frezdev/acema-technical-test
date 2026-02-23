import { Routes, Route, Navigate } from "react-router";
import { Home, Login } from "../pages";
import { useAppSelector } from "../redux/hooks";

export const AppRouter = () => {
  const token = useAppSelector(state => state.authReducer.token)
  return (
    <Routes>
      <Route index element={token ? <Home /> : <Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
