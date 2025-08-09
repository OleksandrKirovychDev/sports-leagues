import { Avatar, Typography } from '@mui/material';
import type { ILeagueBadge } from 'features/sportsLeagues/models/badge';

interface Props {
  badges: ILeagueBadge[];
}

export const LeagueBadge = ({ badges }: Props) => {
  const lastSeason = badges[badges.length - 1];
  const badgeUrl = lastSeason?.strBadge;

  return (
    <>
      <Typography variant="h5" fontWeight={700}>
        Badge
      </Typography>
      {badgeUrl ? (
        <Avatar
          src={badgeUrl}
          alt="League Badge"
          sx={{ width: 120, height: 120 }}
        />
      ) : (
        <Typography>No badge found</Typography>
      )}
    </>
  );
};
