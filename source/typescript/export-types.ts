export interface Options {
    name: string;
}

export function doThing(options:Options) {
    console.log('options', options);
}

export class Person {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.#name}`)
    }
}