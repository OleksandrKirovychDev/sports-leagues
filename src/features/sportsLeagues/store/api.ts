import { baseApi } from 'core/store/api/api';
import type { AllLeagueApiResponse } from '../models/leagues';
import type { ILeagueBadgeApiResponse } from '../models/badge';

const ALL_LEAGUES = 'AllLeagues' as const;
const BADGES = 'Badges' as const;

export const leaguesApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [ALL_LEAGUES, BADGES],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllLeagues: builder.query<AllLeagueApiResponse, void>({
        query: () => '/all_leagues.php',
        providesTags: [{ type: ALL_LEAGUES }],
      }),
      getBadgeForLeague: builder.query<ILeagueBadgeApiResponse, { id: string }>(
        {
          query: ({ id }) => `search_all_seasons.php?badge=1&id=${id}`,
          providesTags: [{ type: BADGES }],
        }
      ),
    }),
  });

export const { useGetAllLeaguesQuery, useGetBadgeForLeagueQuery } = leaguesApi;
