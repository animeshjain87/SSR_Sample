import { Post } from "../model/posts.model";

export interface PostState {
    posts: Post[];
}

export const initalState: PostState = {
    posts: [
        { id: '1', title: 'Sample title 1', description: 'Sample description 1' }
    ]
}