export default interface Data {
  id: number;
  imagePath: string;
  title: string;
  price: string;
  color?: string[];
  discount?: string;
  fastShipping?: boolean;
  offer?: string;
  video?:string
}
