import { Post } from '../entities/post'

export class PostResponse {
    posts: Post[]
    total: number
    skip: number
    limit: number

    constructor(data: any) {
        this.posts = data.posts.map((post: any) => new Post(post))
        this.total = data.total
        this.skip = data.skip
        this.limit = data.limit
    }
}
