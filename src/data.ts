import striptags from 'striptags';
import Sep10 from './assets/articles/2020-09-10.md';

export const projects: Project[] = [
  {
    title: 'Sort Visualizer',
    imgUrl: 'https://s3-us-west-1.amazonaws.com/zzandland.io/assets/previews/pyqt_sort_preview.gif',
    description: 'Built using PyQt5, the program visualizes 9 different sorting algorithms.',
    ghUrl: 'https://github.com/zzandland/pyqt-sort',
  },
];

export const articles: Article[] = [];

export const path2html: { [path: string]: [string, string] } = {};

const raw: { [name: string]: string } = {
  '09-10-2020': Sep10,
};

Object.entries(raw).forEach(([date, html]: [string, string]) => {
  const stripped: string = striptags(html);
  const index: number = stripped.indexOf('\n');
  const title: string = stripped.slice(0, index);
  const path: string = title.replaceAll(' ', '-').toLowerCase();
  articles.push({
    title,
    path,
    date,
    text: `${stripped.slice(index + 1, 200)}...`,
  });

  path2html[path] = [date, html];
});
