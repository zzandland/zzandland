import striptags from 'striptags';
import Sep10 from './assets/articles/2020-09-10.md';

export const projects: Project[] = [
  {
    title: 'pyqt-sort',
    imgUrl: 'https://s3-us-west-1.amazonaws.com/zzandland.io/assets/previews/pyqt_sort_preview.gif',
    description: 'Built using PyQt5, the program visualizes 10 sorting algorithms.',
    ghUrl: 'https://github.com/zzandland/pyqt-sort',
  },
];

export const articles: Article[] = [];

export const path2html: { [path: string]: [string, string] } = {};

const raw: { [name: string]: string } = {
  '09-10-2020': Sep10,
};

Object.entries(raw).forEach(([date, html]: [string, string]) => {
  const titleIndex: number = html.indexOf('</h1>');
  const subtitleIndex: number = html.indexOf('<hr>');
  const title: string = striptags(html.slice(0, titleIndex));
  const subtitle: string = striptags(html.slice(titleIndex + 5, subtitleIndex));
  const path: string = title.replaceAll(' ', '-').toLowerCase();
  articles.push({
    title,
    subtitle,
    path,
    date,
  });

  path2html[path] = [date, html];
});
