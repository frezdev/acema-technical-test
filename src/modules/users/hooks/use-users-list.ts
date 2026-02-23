import { useState } from 'react'
import { useUsersContext } from '../../../contexts/users-context';
import { useSearchParams } from 'react-router-dom';

export const useUsersList = () => {
  const { users } = useUsersContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(1);
  const [limit] = useState(10);


  const totalPages = Math.ceil(users.length / limit);


  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const handleSearch = (query: string) => {

    if (query === '') {
      searchParams.delete('search');
      setSearchParams(searchParams);
      return;
    }
    setSearchParams({ search: query });
    setPage(1);
  }

  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const sliceUsers = searchQuery === ''
    ? users.slice((page - 1) * limit, page * limit)
    : users.filter(user => {
      return user.user.name.first.toLowerCase().includes(searchQuery) ||
        user.user.name.last.toLowerCase().includes(searchQuery) ||
        user.user.email.toLowerCase().includes(searchQuery)
    });

  return {
    sliceUsers,
    page,
    totalPages,
    handleNextPage,
    handleSearch,
    handlePreviousPage
  }
}
