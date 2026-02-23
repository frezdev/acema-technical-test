import { UsersList } from "../components/UsersList";

import { useUsersList } from "../hooks/use-users-list";

export const UsersView = () => {
  const {
    sliceUsers,
    page,
    totalPages,
    handleNextPage,
    handlePreviousPage,
    handleSearch,
  } = useUsersList();

  return (
    <div className="flex justify-center flex-col items-center">
      <input
        type="text"
        placeholder="Search users..."
        className="border border-gray-300 rounded-lg px-3 py-2 mb-6 w-full max-w-xs"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <UsersList users={sliceUsers} />
      <div className="flex gap-3 mt-3 justify-center">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="button px-4 py-2 bg-stone-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="button px-4 py-2 bg-stone-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};
