export const projects: Project[] = [
  {
    title: 'pyqt-sort',
    imgUrl: 'https://s3-us-west-1.amazonaws.com/zzandland.io/assets/previews/pyqt_sort_preview.gif',
    description: 'Built using PyQt5, the program visualizes 10 sorting algorithms.',
    ghUrl: 'https://github.com/zzandland/pyqt-sort',
  },
];

const url = 'assets/articles/';

export const articles: { [date: string]: string } = {
  '10-28-2020': `${url}2020-10-28.md`,
  '10-20-2020': `${url}2020-10-20.md`,
  '10-13-2020': `${url}2020-10-13.md`,
  '10-07-2020': `${url}2020-10-07.md`,
  '09-15-2020': `${url}2020-09-15.md`,
  '09-10-2020': `${url}2020-09-10.md`,
};
