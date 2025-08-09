import { ListItemButton, ListItemText, Typography, Stack } from '@mui/material';
import type { ILeague } from 'features/sportsLeagues/models/leagues';

interface Props {
  league: ILeague;
  isSelected: boolean;
  onClick: () => void;
}

export const LeagueItem = ({ league, isSelected, onClick }: Props) => {
  return (
    <ListItemButton selected={isSelected} onClick={onClick}>
      <ListItemText
        primary={
          <Stack>
            <Typography fontWeight={600}>{league.strLeague}</Typography>
            <Typography variant="body2" color="text.secondary">
              Sport: {league.strSport}
            </Typography>
            {league.strLeagueAlternate && (
              <Typography variant="body2" color="text.secondary">
                Alternate: {league.strLeagueAlternate}
              </Typography>
            )}
          </Stack>
        }
      />
    </ListItemButton>
  );
};
