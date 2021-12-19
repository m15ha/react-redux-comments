import { createStore, combineReducers, applyMiddleware } from 'redux';
import { likesReducer } from './likesReducer';
import { appReducer } from './appReducer';
import { commentsReducer } from './commentsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    likesReducer: likesReducer,
    commentsReducer: commentsReducer,
    appReducer: appReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);