import { Converter } from 'showdown';
import striptags from 'striptags';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const converter = new Converter();
converter.setFlavor('github');

const processMd = (date: string, md: string) => {
  const html = converter.makeHtml(md)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
  const titleIndex: number = html.indexOf('</h1>');
  const subtitleIndex: number = html.indexOf('<hr>');
  const title: string = striptags(html.slice(0, titleIndex));
  const path: string = title.replaceAll(' ', '-').toLowerCase();

  return {
    title,
    date,
    html,
    path,
    subtitle: striptags(html.slice(titleIndex + 5, subtitleIndex)),
  } as Article;
};

export default new Vuex.Store({
  state: {
    path2Article: {} as { [path: string]: Article },
  },

  getters: {
    articles: ({ path2Article }) => Object.values(path2Article),
    html: ({ path2Article }) => (path: string) => path2Article[path],
  },

  mutations: {
    setPath2Article(state, path2Article) {
      state.path2Article = path2Article;
    },
  },

  actions: {
    fetchArticles({ commit }) {
      const res = require.context('./assets/articles')
        .keys()
        .map((fileName: string) => fileName.replace(/[^-\d]/g, ''))
        .sort((date1: string, date2: string) => (new Date(date1) < new Date(date2) ? 1 : -1))
        .reduce((acc: { [path: string]: Article }, date: string) => {
          const filePath = `./assets/articles/${date}.md`;
          const md = require(`${filePath}`);
          const obj = processMd(date, md);
          acc[obj.path] = obj;
          return acc;
        }, {});
      commit('setPath2Article', res);
    },
  },
});
