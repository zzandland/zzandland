import React from 'react';
import { initializeBlog, initializeBio } from '../actions';
import Wrapper from '../containers/Wrapper';
import Blog from '../containers/Blog/Blog';

const routes = [
  {
    path: '/',
    exact: true,
    component: Wrapper,
    getInitialData: (store) => store.dispatch(initializeBio()),
  },
  {
    path: '/blog',
    component: Blog,
    getInitialData: (store) => store.dispatch(initializeBlog()),
  },
]

export default routes;
