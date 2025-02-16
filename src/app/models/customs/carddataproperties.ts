export class CardDataProperties {
    id: number
    image: string
    title: string
    bodies: string[]

    constructor(id: number, image: string, title: string, bodies: string[]) {
        this.id = id
        this.image = image
        this.title = title
        this.bodies = bodies
    }
}
