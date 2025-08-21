

class Gnomo {
    constructor(name, divElement) {
        if (this.constructor === Gnomo) {
            throw new Error("Não é possível instanciar a classe Gnomo diretamente.");
        }            
        this.name = name;
        this.speed = 0;
        this.divElement = divElement;
        this.winCondition = true;
    }

    running() {
        this.divElement.innerText = `${this.name} está se movendo!`;
        this.#tropeçar();
    }

    #tropeçar() {
        let tropeço = Math.floor(Math.random() * 10);
        if (tropeço < this.speed) {
            this.divElement.innerText = `${this.name} tropeçou em um obstáculo`;
            this.winCondition = false;
        }
    }
}

class Chapeu extends Gnomo {
    constructor(name, color, divElement) {
        super(name, divElement);
        this.color = color;
    }
}

class GnomoRapido extends Chapeu {
    constructor(name, color, divElement) {
        super(name, color, divElement);
        this.speed = 6;
    }

    running() {
        super.running();
        if (this.winCondition === true) {
            this.divElement.innerText = `${this.name} está correndo muito!!`;
        }
    }
}

class GnomoNormal extends Chapeu {
    constructor(name, color, divElement) {
        super(name, color, divElement);
        this.speed = 4;
    }

    running() {
        super.running();
        if (this.winCondition === true) {
            this.divElement.innerText = `${this.name} está correndo!`;
        }
    }
}

class GnomoLento extends Chapeu {
    constructor(name, color, divElement) {
        super(name, color, divElement);
        this.speed = 2;
    }

    running() {
        super.running();
        if (this.winCondition === true) {
            this.divElement.innerText = `${this.name} está andando`;
        }
    }
}

class GnomoDorminhoco extends Chapeu {
    constructor(name, color, divElement) {
        super(name, color, divElement);
        this.speed = 0;
    }

    running() {
        super.running();
        if (this.winCondition === true) {
            this.divElement.innerText = `${this.name} está dormindo...`;
        }
    }
}

const aribtro = document.getElementById('arbitro');
const divGnomo1 = document.getElementById('gnomo1');
const divGnomo2 = document.getElementById('gnomo2');
const divGnomo3 = document.getElementById('gnomo3');
const divGnomo4 = document.getElementById('gnomo4');
const resultado = document.getElementById('resultado');
const btnStart = document.getElementById('btnStart');

const gnomo1 = new GnomoRapido("Gnomo Rapidinho", "Vermelho", divGnomo1);
const gnomo2 = new GnomoNormal("Gnomo Normalzinho", "Amarelo", divGnomo2);
const gnomo3 = new GnomoLento("Gnomo Lentinho", "Verde", divGnomo3);
const gnomo4 = new GnomoDorminhoco("Gnomo Soninho", "Azul", divGnomo4);

btnStart.addEventListener("click", () => {
    aribtro.innerText = "A corrida começou!!";
    divGnomo1.innerText = "";
    divGnomo2.innerText = "";
    divGnomo3.innerText = "";
    divGnomo4.innerText = "";
    resultado.innerText = "";

    for (let i = 0; i <= 3; i++) {
        setTimeout(() => {
            resultado.innerText += '.';
        }, (i + 1) * 1000);
    }

    resultado.innerText = "";

    setTimeout(() => {
        aribtro.innerText = "";
        aribtro.innerText = "A corrida terminou!!";
        gnomo1.running();
        gnomo2.running();
        gnomo3.running();
        gnomo4.running();

        if (gnomo1.winCondition === true) {
            resultado.innerText = `${gnomo1.name} venceu a corrida!`;
        } else if (gnomo2.winCondition === true) {
            resultado.innerText = `${gnomo2.name} venceu a corrida!`;
        } else if (gnomo3.winCondition === true) {
            resultado.innerText = `${gnomo3.name} venceu a corrida!`;
        } else {
            resultado.innerText = `${gnomo4.name} venceu a corrida! (afinal, ele foi o único que sobreviveu...)`;
        }
    }, 4000);
});

