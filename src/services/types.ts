/* lastfm-service */
interface DataItem {
  id: string; // mbid есть не у всех
  category: string;
  artist: string;
  title: string;
  price: number;
  playcount: string;
  text: string;
  imageSmall: string;
  imageBig: string;
}

export { DataItem };
