import React from 'react';

import Wrapper from '../components/Wrapper';
import Blog from '../components/Blog/Index';

const routes = [
  {
    path: '/',
    exact: true,
    component: Wrapper,
  },
  {
    path: '/blog',
    component: Blog,
  },
]

export default routes;
