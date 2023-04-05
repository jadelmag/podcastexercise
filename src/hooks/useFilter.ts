import { useState } from 'react';

const useFilter = () => {
  const [filter, setFilter] = useState<string>('');

  const updateFilter = (value: string) => setFilter(value);

  return {
    filter,
    updateFilter,
  };
};

export default useFilter;
