import { Stack, TextField, MenuItem } from '@mui/material';

interface LeagueFiltersProps {
  searchTerm: string;
  selectedSport: string;
  sportsOptions: string[];
  onSearchChange: (value: string) => void;
  onSportChange: (value: string) => void;
}

export const LeagueFilters = ({
  searchTerm,
  selectedSport,
  sportsOptions,
  onSearchChange,
  onSportChange,
}: LeagueFiltersProps) => {
  return (
    <Stack direction="column" spacing={1} mb={1} mt={1}>
      <TextField
        label="Name"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        fullWidth
      />

      <TextField
        label="Sport"
        select
        variant="outlined"
        size="small"
        value={selectedSport}
        onChange={(e) => onSportChange(e.target.value)}
        sx={{ minWidth: 150 }}
      >
        <MenuItem value="">All Sports</MenuItem>
        {sportsOptions.map((sport) => (
          <MenuItem key={sport} value={sport}>
            {sport}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
};
