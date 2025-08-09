import type { ILeague } from 'features/sportsLeagues/models/leagues';
import { useGetAllLeaguesQuery } from 'features/sportsLeagues/store/api';
import { useMemo } from 'react';

export const useFilteredLeagues = (
  searchTerm: string,
  selectedSport: string
) => {
  const { data: leaguesData, isLoading, isError } = useGetAllLeaguesQuery();

  const sportsOptions = useMemo(() => {
    const sports = leaguesData?.leagues?.map((l) => l.strSport) || [];
    return Array.from(new Set(sports)).sort();
  }, [leaguesData]);

  const filteredLeagues: ILeague[] = useMemo(() => {
    let leagues = leaguesData?.leagues || [];

    if (searchTerm.trim()) {
      leagues = leagues.filter((l) =>
        l.strLeague.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSport) {
      leagues = leagues.filter((l) => l.strSport === selectedSport);
    }

    return leagues;
  }, [leaguesData, searchTerm, selectedSport]);

  return {
    data: filteredLeagues,
    sportsOptions,
    isLoading,
    isError,
  };
};
