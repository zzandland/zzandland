import React from 'react';
import { initializeBlog } from '../actions';
import Wrapper from '../components/Wrapper';
import Blog from '../containers/Blog/Blog';

const routes = [
  {
    path: '/',
    exact: true,
    component: Wrapper,
  },
  {
    path: '/blog',
    component: Blog,
    getInitialData: (store) => store.dispatch(initializeBlog()),
  },
]

export default routes;
