export class Post {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: {
        likes: number
        dislikes: number
    }
    views: number
    userId: number

    constructor(data: any) {
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.tags = data.tags
        this.reactions = {
            likes: data.reactions.likes,
            dislikes: data.reactions.dislikes
        }
        this.views = data.views
        this.userId = data.userId
    }
}
