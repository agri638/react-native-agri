export type MediaType = {
  id: number | string;
  url: string;
  fileExtension: "jpg" | "jpeg" | "png";
};

export type MediaList = Array<MediaType>;

export type IProductId = number | string;

export interface Product {
  id: IProductId;
  name: string;
  currency: "INR" | "USD";
  price: number;
  discount: number;
  media: MediaList;
}
