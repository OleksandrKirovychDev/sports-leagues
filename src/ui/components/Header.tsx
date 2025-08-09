import { Box, Typography, Stack } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

export const PageHeader = () => {
  return (
    <Box
      sx={{
        p: { xs: 2 },
        bgcolor: 'primary.main',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <SportsSoccerIcon color="info" sx={{ fontSize: 35 }} />
          <Box>
            <Typography
              color="primary.contrastText"
              variant="h4"
              fontWeight={700}
            >
              Sports Leagues
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
