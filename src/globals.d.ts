declare module '*.md';

declare type Project = {
  title: string;
  imgUrl: string;
  description: string;
  ghUrl: string;
}

declare type Article = {
  title: string;
  date: string;
  text: string;
  path: string;
}
