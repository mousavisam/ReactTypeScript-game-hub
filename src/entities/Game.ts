import  Genre  from "./Genre";
import Platform  from "./Platform";
import  Publisher  from "./publisher";


export default interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  genres: Genre[];
  publishers: Publisher[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
}
