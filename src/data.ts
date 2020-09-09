import striptags from 'striptags';
import Sep7 from './assets/articles/2020-09-07.md';

export const projects: Project[] = [
  {
    title: 'Sort Visualizer',
    imgUrl: 'https://s3-us-west-1.amazonaws.com/zzandland.io/assets/previews/pyqt_sort_preview.gif',
    description: 'Built using PyQt5, the program visualizes 9 different sorting algorithms.',
    ghUrl: 'https://github.com/zzandland/pyqt-sort',
  },
];

export const articles: Article[] = [Sep7].map((html: string) => {
  const stripped: string = striptags(html);
  const index: number = stripped.indexOf('\n');
  const title: string = stripped.slice(0, index);
  return {
    title,
    date: '09-07-2020',
    text: stripped.slice(index + 1, 200),
    path: title.replaceAll(' ', '-').toLowerCase(),
  };
});
