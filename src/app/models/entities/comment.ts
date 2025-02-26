export class Comment {
    id: number
    body: string
    postId: number
    likes: number
    user: {
        id: number
        username: string
        fullName: string
    }

    constructor(data: any) {
        this.id = data.id
        this.body = data.body
        this.postId = data.postId
        this.likes = data.likes
        this.user = {
            id: data.user.id,
            username: data.user.username,
            fullName: data.user.fullName
        }
    }
}
