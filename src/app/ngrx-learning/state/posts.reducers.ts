import { Action, createReducer, on } from "@ngrx/store";
import { addPost } from "./posts.actions";
import { initalState, PostState } from "./posts.state";


const _postsReducers = createReducer(
    initalState, on(addPost, (state, action) => {
        let post = { ...action.post };
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post],
        }
    })
);


export function postsReducer(state: PostState | undefined, action: Action) {
    return _postsReducers(state, action);
}