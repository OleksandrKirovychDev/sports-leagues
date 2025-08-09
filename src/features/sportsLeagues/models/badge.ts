export interface ILeagueBadge {
  strSeason: string;
  strBadge: string;
}

export type ILeagueBadgeApiResponse = {
  seasons: ILeagueBadge[];
};
