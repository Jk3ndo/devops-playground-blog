export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: string | number;
  title: string;
  slug?: any;
  metadata?: string;
  body: any;
  mainImage?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
};
