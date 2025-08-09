export interface ILeague {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
}

export type AllLeagueApiResponse = {
  leagues: ILeague[];
};
