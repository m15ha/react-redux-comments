import {
    INCREMENT,
    DECREMENT,
    COMMENTS_LOAD,
    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF,
    ERROR_DISPLAY_ON,
    ERROR_DISPLAY_OFF,
    COMMENT_CREATE,
    COMMENT_UPDATE,
    COMMENT_DELETE,
} from './types';

export const addLikeAction = (payload) => ({ type: INCREMENT, payload });
export const removeLikeAction = (payload) => ({ type: DECREMENT, payload });
export const loaderOn = () => ({ type: LOADER_DISPLAY_ON });
export const loaderOff = () => ({ type: LOADER_DISPLAY_OFF });
export const errorOff = () => ({ type: ERROR_DISPLAY_OFF });
export const commentCreate = (payload) => ({ type: COMMENT_CREATE, payload });
export const commentUpdate = (payload) => ({ type: COMMENT_UPDATE, payload });
export const commentDelete = (id) => ({ type: COMMENT_DELETE, payload: id });

export function errorOn(text) {
    return (dispatch) => {
        dispatch({
            type: ERROR_DISPLAY_ON,
            text,
        });

        setTimeout(() => {
            dispatch(errorOff());
        }, 2000);
    };
}

export function commentsLoad() {
    return async (dispatch) => {
        try {
            dispatch(loaderOn());
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/comments?_limit=10'
            );
            const jsonData = await response.json();

            setTimeout(() => {
                dispatch({
                    type: COMMENTS_LOAD,
                    data: jsonData,
                });
                dispatch(loaderOff());
            }, 1);
        } catch (err) {
            dispatch(errorOn('API Error'));
            dispatch(loaderOff());
        }
    };
}
