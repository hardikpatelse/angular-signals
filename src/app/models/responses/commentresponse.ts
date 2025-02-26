import { Comment } from '../entities/comment'

export class CommentResponse {
    comments: Comment[]
    total: number
    skip: number
    limit: number

    constructor(data: any) {
        this.comments = data.comments.map((comment: any) => new Comment(comment))
        this.total = data.total
        this.skip = data.skip
        this.limit = data.limit
    }
}
