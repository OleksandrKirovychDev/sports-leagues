import { useState } from 'react';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { useGetBadgeForLeagueQuery } from 'features/sportsLeagues/store/api';
import { LeagueBadge } from 'ui/components/LeagueBadge';
import { LeagueFilters } from 'ui/components/LeagueFilters';
import { LeagueList } from 'ui/components/LeagueList';
import { useFilteredLeagues } from '../../hooks/useFilteredLeagues';

export const AllLeagues = () => {
  const [selectedLeagueId, setSelectedLeagueId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('');

  const {
    data: leagues,
    sportsOptions,
    isLoading: isLoadingLeagues,
    isError: isErrorFetchingLeagues,
  } = useFilteredLeagues(searchTerm, selectedSport);

  const { data: badgeData, isLoading: isLoadingBadge } =
    useGetBadgeForLeagueQuery(
      { id: selectedLeagueId! },
      { skip: !selectedLeagueId }
    );

  if (isLoadingLeagues) {
    return (
      <Box p={2} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (isErrorFetchingLeagues) {
    return (
      <Typography color="error" variant="h5" fontWeight={700}>
        Error getting leagues, please try again later
      </Typography>
    );
  }

  return (
    <Stack direction="row" spacing={4} p={2}>
      <Box flex={1}>
        <Typography variant="h5" fontWeight={700}>
          Leagues
        </Typography>

        <LeagueFilters
          searchTerm={searchTerm}
          selectedSport={selectedSport}
          sportsOptions={sportsOptions}
          onSearchChange={setSearchTerm}
          onSportChange={setSelectedSport}
        />

        <LeagueList
          leagues={leagues}
          selectedLeagueId={selectedLeagueId}
          onSelectLeague={setSelectedLeagueId}
        />
      </Box>

      <Box flex={1}>
        {selectedLeagueId &&
          (isLoadingBadge ? (
            <CircularProgress />
          ) : (
            <LeagueBadge badges={badgeData?.seasons ?? []} />
          ))}
      </Box>
    </Stack>
  );
};
