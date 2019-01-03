import { combineReducers } from 'redux';
import Modal from './Modal';
import Rendering from './Rendering';
import Self from './Self';
import Blog from './Blog';
import Comment from './Comment';

export default combineReducers({
  Modal,
  Rendering,
  Self,
  Blog,
  Comment,
});
