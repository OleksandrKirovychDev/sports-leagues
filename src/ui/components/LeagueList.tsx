import { List } from '@mui/material';
import type { ILeague } from 'features/sportsLeagues/models/leagues';
import { LeagueItem } from './LeagueItem';

interface Props {
  leagues: ILeague[];
  selectedLeagueId: string | null;
  onSelectLeague: (id: string) => void;
}

export const LeagueList = ({
  leagues,
  selectedLeagueId,
  onSelectLeague,
}: Props) => {
  return (
    <List>
      {leagues.map((league) => (
        <LeagueItem
          key={league.idLeague}
          league={league}
          isSelected={league.idLeague === selectedLeagueId}
          onClick={() => onSelectLeague(league.idLeague)}
        />
      ))}
    </List>
  );
};
