function logMessage(gnomoId, message) {
    const div = document.getElementById(gnomoId);
    div.textContent = message;
}

class Gnomo {
    constructor(name) {
        this.name = name;
        this.id = id;
        this.speed = 0;
    }
    running() {
        console.log(`${this.name} está se movendo!`);
        this.#tropeçar();
    }
    #tropeçar() {
        let tropeço = Math.floor(Math.random() * 10)
        if (tropeço < this.speed) {
            console.log(`${this.name} tropeçou em um obstaculo`)
        }
    }
}

class Chapeu extends Gnomo {
    constructor(name,color) {super(name); this.color = color}
}

class GnomoRapido extends Chapeu {
    constructor(name,color) {super(name,color); this.speed = 6;}
    running() {
        console.log(`${this.name} está correndo muito!!`)
        super.running();
    }
}

class GnomoNormal extends Chapeu {
    constructor(name,color) {super(name,color); this.speed = 4;}
    running() {
        console.log(`${this.name} está correndo!`)
        super.running();
    }
}

class GnomoLento extends Chapeu {
    constructor(name,color) {super(name,color); this.speed = 2;}
    running() {
        console.log(`${this.name} está andando`)
        super.running();
    }
}

class GnomoDorminhoco extends Chapeu {
    constructor(name,color) {super(name,color); this.speed = 0;}
    running() {
        console.log(`${this.name} está dormindo`)
        super.running();
    }
}

const gnomo1 = new GnomoRapido("Gnomo Rapidinho", "Vermelho", "gnomo1");
const gnomo2 = new GnomoNormal("Gnomo Normalzinho", "Amarelo", "gnomo2");
const gnomo3 = new GnomoLento("Gnomo Lentinho", "Verde", "gnomo3");
const gnomo4 = new GnomoDorminhoco("Gnomo Soninho", "Azul", "gnomo4");

const btnStart = document.getElementById('btnStart')

btnStart.addEventListener("click",() => {
    gnomo1.running();
    gnomo2.running();
    gnomo3.running();
    gnomo4.running();
});