class Gnomo {
    constructor(name) {this.name = name}
    running() {console.log(`${this.name} está se movendo!`)}
    #tropeçar() {
        let tropeço = Math.floor(Math.random() * 10)
        if (tropeço < this.speed) {
            console.log(`${this.name} tropeçou!`)
        }
    }
}

class Chapeu extends Gnomo {
    constructor(name,color) {super(name); this.color = color}
}

class GnomoRapido extends Chapeu {
    constructor(name,color) {super(name,color); this.speed = 4;}
    running() {console.log(`${this.name} está correndo muito!!`)}
}

class GnomoNormal extends Chapeu {
    constructor(name,color) {super(name,color); this.speed = 3;}
    running() {console.log(`${this.name} está correndo!`)}
}

class GnomoLento extends Chapeu {
    constructor(name,color) {super(name,color); this.speed = 1;}
    running() {console.log(`${this.name} está andando`)}
}

class GnomoDorminhoco extends Chapeu {
    constructor(name,color) {super(name,color); this.speed = 0;}
    running() {console.log(`${this.name} está dormindo`)}
}

const gnomo1 = new GnomoRapido      ("Gnomo Rapidinho");
const gnomo2 = new GnomoNormal      ("Gnomo Normalzinho");
const gnomo3 = new GnomoLento       ("Gnomo Lentinho");
const gnomo4 = new GnomoDorminhoco  ("Gnomo Soninho");