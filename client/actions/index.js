import axios from 'axios';

export const changeRoleTitle = roleTitle => ({
  type: 'CHANGE_ROLE_TITLE',
  roleTitle,
});

export const showModal = (modalType, modalProps) => ({
  type: 'SHOW_MODAL',
  modalType,
  modalProps,
});

export const hideModal = () => ({
  type: 'HIDE_MODAL',
});

export const changeActiveItem = item => ({
  type: 'CHANGE_ACTIVE_ITEM',
  item,
});

export const getBlogPosts = (posts) => ({
  type: 'GET_BLOG_POSTS',
  posts,
});

export const initializeBlog = () => {
  return dispatch => {
    return axios.get('/api/blogPosts')
      .then(data => dispatch(getBlogPosts(data.data.rows)))
      .catch(err => console.log(err))
  }
}
