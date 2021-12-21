import {
    COMMENT_CREATE,
    COMMENTS_LOAD,
    COMMENT_UPDATE,
    COMMENT_DELETE,
} from './types';

const intialState = {
    comments: [],
};

export const commentsReducer = (state = intialState, action) => {
    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.payload],
            };

        case COMMENTS_LOAD:
            const commentsNew = action.data.map((res) => {
                return {
                    text: res.name,
                    id: res.id,
                };
            });
            return {
                ...state,
                comments: commentsNew,
            };

        case COMMENT_UPDATE:
            return () => {
                const { payload } = action;
                const { comments } = state;
                const itemIndex = comments.findIndex(
                    (res) => res.id === payload.id
                );

                const nextComments = [
                    ...comments.slice(0, itemIndex),
                    payload,
                    ...comments.slice(itemIndex + 1),
                ];

                return {
                    ...state,
                    comments: nextComments,
                };
            };

        case COMMENT_DELETE:
            return {
                ...state,
                comments: state.comments.filter(
                    (comment) => comment.id !== action.payload
                ),
            };

        default:
            return state;
    }
};
