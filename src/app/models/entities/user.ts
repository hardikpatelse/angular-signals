export class User {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: string
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    profilepicture: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: {
        color: string
        type: string
    }
    ip: string
    address: {
        address: string
        city: string
        state: string
        stateCode: string
        postalCode: string
        coordinates: {
            lat: number
            lng: number
        }
        country: string
    }
    macAddress: string
    university: string
    bank: {
        cardExpire: string
        cardNumber: string
        cardType: string
        currency: string
        iban: string
    }
    company: {
        department: string
        name: string
        title: string
        address: {
            address: string
            city: string
            state: string
            stateCode: string
            postalCode: string
            coordinates: {
                lat: number
                lng: number
            }
            country: string
        }
    }
    ein: string
    ssn: string
    userAgent: string
    crypto: {
        coin: string
        wallet: string
        network: string
    }
    role: string

    constructor(data: any) {
        this.id = data.id
        this.firstName = data.firstName
        this.lastName = data.lastName
        this.maidenName = data.maidenName
        this.age = data.age
        this.gender = data.gender
        this.email = data.email
        this.phone = data.phone
        this.username = data.username
        this.password = data.password
        this.birthDate = data.birthDate
        this.profilepicture = data.gender === 'male'
            ? './assets/images/man.png'
            : './assets/images/woman.png'
        this.image = data.image
        this.bloodGroup = data.bloodGroup
        this.height = data.height
        this.weight = data.weight
        this.eyeColor = data.eyeColor
        this.hair = {
            color: data.hair.color,
            type: data.hair.type
        }
        this.ip = data.ip
        this.address = {
            address: data.address.address,
            city: data.address.city,
            state: data.address.state,
            stateCode: data.address.stateCode,
            postalCode: data.address.postalCode,
            coordinates: {
                lat: data.address.coordinates.lat,
                lng: data.address.coordinates.lng
            },
            country: data.address.country
        }
        this.macAddress = data.macAddress
        this.university = data.university
        this.bank = {
            cardExpire: data.bank.cardExpire,
            cardNumber: data.bank.cardNumber,
            cardType: data.bank.cardType,
            currency: data.bank.currency,
            iban: data.bank.iban
        }
        this.company = {
            department: data.company.department,
            name: data.company.name,
            title: data.company.title,
            address: {
                address: data.company.address.address,
                city: data.company.address.city,
                state: data.company.address.state,
                stateCode: data.company.address.stateCode,
                postalCode: data.company.address.postalCode,
                coordinates: {
                    lat: data.company.address.coordinates.lat,
                    lng: data.company.address.coordinates.lng
                },
                country: data.company.address.country
            }
        }
        this.ein = data.ein
        this.ssn = data.ssn
        this.userAgent = data.userAgent
        this.crypto = {
            coin: data.crypto.coin,
            wallet: data.crypto.wallet,
            network: data.crypto.network
        }
        this.role = data.role
    }
}