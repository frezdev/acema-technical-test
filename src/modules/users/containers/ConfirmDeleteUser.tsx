import { X } from "lucide-react";
import type { User } from "../interfaces/users";
import { useDeleteUser } from "../hooks/use-delete-user";
import { toast } from "sonner";

interface Props {
  onClose?: () => void
  user: User
}

export const ConfirmDeleteUser = ({ onClose, user }: Props) => {
  const { handleDeleteUser } = useDeleteUser()

  const handleDelete = () => {
    handleDeleteUser(user.sha256)
    toast.success('User deleted successfully')
    onClose?.()
  }
  return (
    <div className="fixed bg-black/60 inset-0 z-10 flex items-center justify-center p-4">
      <div className="flex max-h-[90dvh] overflow-y-auto flex-col gap-4 p-4 border border-stone-600 rounded-md bg-stone-800 w-full max-w-md relative">
        <button
          className="text-white absolute top-3 right-3 cursor-pointer"
          type="button"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <h4 className="font-bold text-xl text-center">Delete User</h4>
        <p className="text-center">Are you sure you want to delete this user?</p>

        <div className="flex w-full gap-4 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="button py-2 px-4 rounded-md"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
