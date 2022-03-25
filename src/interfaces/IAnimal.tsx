export class Animal {
    constructor(
        public id: number,
        public imageUrl: string,
        public isFed: boolean,
        public lastFed: Date,
        public latinName: string,
        public longDescription: string,
        public medicine: string,
        public name: string,
        public shortDescription: string,
        public yearOfBirth: number
    ) {}
}