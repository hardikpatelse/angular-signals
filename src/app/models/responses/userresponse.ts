import { User } from "../entities/user"

export class UserResponse {
    users: User[]
    total: number
    skip: number
    limit: number

    constructor(users: User[] = [], total: number = 0, skip: number = 0, limit: number = 0) {
        this.users = users
        this.total = total
        this.skip = skip
        this.limit = limit
    }
}
