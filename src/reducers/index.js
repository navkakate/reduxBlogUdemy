import { combineReducers } from 'redux';
import PostsReduser from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReduser,
  form: formReducer
});

export default rootReducer;
