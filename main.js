class Chapeu {
    constructor(color) {
        this.color = color;
    }
}

class Gnomo {
    constructor(name, divElement, chapeu) {
        if (this.constructor === Gnomo) {
            throw new Error("Não é possível instanciar a classe Gnomo diretamente.");
        }            
        this.name = name;
        this.speed = 0;
        this.divElement = divElement;
        this.winCondition = true;
        this.chapeu = chapeu; // relação "tem-um"
    }

    running() {
        this.winCondition = true;
        this.divElement.innerText = `${this.name} está se movendo com chapéu ${this.chapeu.color}!`;
        this.#tropeçar();
    }

    #tropeçar() {
        let tropeço = Math.floor(Math.random() * 100);
        if (tropeço < this.speed) {
            this.divElement.innerText = `${this.name} tropeçou em um obstáculo`;
            this.winCondition = false;
        }
    }
}

class GnomoRapido extends Gnomo {
    constructor(name, chapeu, divElement) {
        super(name, divElement, chapeu);
        this.speed = 0;
    }

    running() {
        super.running();
        if (this.winCondition === true) {
            this.divElement.innerText = `${this.name} correu mais rápido que todos!!`;
        }
    }
}

class GnomoNormal extends Gnomo {
    constructor(name, chapeu, divElement) {
        super(name, divElement, chapeu);
        this.speed = 50;
    }

    running() {
        super.running();
        if (this.winCondition === true) {
            this.divElement.innerText = `${this.name} deu o melhor que pode!`;
        }
    }
}

class GnomoLento extends Gnomo {
    constructor(name, chapeu, divElement) {
        super(name, divElement, chapeu);
        this.speed = 35;
    }

    running() {
        super.running();
        if (this.winCondition === true) {
            this.divElement.innerText = `${this.name} caminhou até o final`;
        }
    }
}

class GnomoDorminhoco extends Gnomo {
    constructor(name, chapeu, divElement) {
        super(name, divElement, chapeu);
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

const btnDisplay = document.getElementById('btnDisplay');
const betDisplay = document.getElementById('betDisplay');
const betValor = document.getElementById('inputValor');
const betGnomo1 = document.getElementById('betGnomo1');
const betGnomo2 = document.getElementById('betGnomo2');
const betGnomo3 = document.getElementById('betGnomo3');
const betGnomo4 = document.getElementById('betGnomo4');
const output = document.getElementById('output');
const proximo = document.getElementById('proximo')

const cashText = document.getElementById('cash');
let cash = 100;
let aposta = 0;
let valorDeAposta = 0;
cashText.innerText = `${cash}$`

const gnomo1 = new GnomoRapido("Gnomo Rapidinho", new Chapeu("Vermelho"), divGnomo1);
const gnomo2 = new GnomoNormal("Gnomo Normalzinho", new Chapeu("Amarelo"), divGnomo2);
const gnomo3 = new GnomoLento("Gnomo Lentinho", new Chapeu("Verde"), divGnomo3);
const gnomo4 = new GnomoDorminhoco("Gnomo Soninho", new Chapeu("Azul"), divGnomo4);

betGnomo1.innerText = `${gnomo1.name} (3x)`
betGnomo2.innerText = `${gnomo2.name} (2.5x)`
betGnomo3.innerText = `${gnomo3.name} (2x)`
betGnomo4.innerText = `${gnomo4.name} (5X)`

output.style.display = "none"
proximo.style.display = "none";
betDisplay.style.display = "none";
betGnomo1.addEventListener("click", () => { aposta = 1; btnDisplay.style.display = "none"; betDisplay.style.display = "inline-block" });
betGnomo2.addEventListener("click", () => { aposta = 2; btnDisplay.style.display = "none"; betDisplay.style.display = "inline-block" });
betGnomo3.addEventListener("click", () => { aposta = 3; btnDisplay.style.display = "none"; betDisplay.style.display = "inline-block" });
betGnomo4.addEventListener("click", () => { aposta = 4; btnDisplay.style.display = "none"; betDisplay.style.display = "inline-block" });

btnStart.addEventListener("click", () => {

    output.style.display = "block";

    valorDeAposta = Number(betValor.value);
    cash -= valorDeAposta;
    cashText.innerText = `${cash}$`;

    betDisplay.style.display = "none";
    btnDisplay.style.display = "none";

    aribtro.innerText = "A corrida começou!!";
    resultado.innerText = "";

    for (let i = 0; i <= 40; i++) {
        setTimeout(() => {
            if (i * 3 <= 30) { divGnomo1.innerText = '--'.repeat(i * 3) + '🧙🏽' }
            if (i * 2 <= 30) { divGnomo2.innerText = '--'.repeat(i * 2) + '🧙🏿' }
            if (i <= 30) { divGnomo3.innerText = '--'.repeat(i) + '🧙🏻' }
            if (i <= 37) {
                const zString = Array.from({length: i}, (_, j) => j % 2 ? "Z" : "z").join('');
                divGnomo4.innerText = "🧙🏼‍♂️" + zString;
            }
        },i*300);            
    }

    setTimeout(() => {
        aribtro.innerText = "A corrida terminou!!";
        gnomo1.running();
        gnomo2.running();
        gnomo3.running();
        gnomo4.running();

        let vencedor = 0
        if (gnomo1.winCondition === true) {
            resultado.innerText = `${gnomo1.name} venceu a corrida!`;
            vencedor = 1
        } else if (gnomo2.winCondition === true) {
            resultado.innerText = `${gnomo2.name} venceu a corrida!`;
            vencedor = 2
        } else if (gnomo3.winCondition === true) {
            resultado.innerText = `${gnomo3.name} venceu a corrida!`;
            vencedor = 3
        } else {
            resultado.innerText = `${gnomo4.name} venceu a corrida! (afinal, ele foi o único que sobreviveu...)`;
            vencedor = 4
        }

        const pagamentos = { 1:3, 2:2.5, 3:2, 4:5 };

        if (vencedor === aposta) {
            cash += pagamentos[vencedor]*valorDeAposta;
        }

        cashText.innerText = `${cash}$`;

        if (cash <= 0) {
            aribtro.innerText = "VOCÊ CAIU NA MAIOR ARMADILHA DOS GNOMOS!!!\nAGORA VOCÊ DEVE SUA VIDA A ELES!!\nVOCÊ NUNCA CONSEGUIRA PAGAR A IMENSA DIVIDA QUE VOCÊ POSSUI!!!\nMUAHAHAHAHAHAHAHAHAHA!!!";
            output.style.display = "none"
            btnDisplay.style.display = "none"
            cashText.innerText = "-999999999$"
        }
        
        proximo.style.display = "inline-block"

    }, 11200)

    proximo.addEventListener("click", () => { 
        aposta = 0;
        valorDeAposta = 0;
        betValor.value = '';

        output.style.display = "none"
        divGnomo1.innerText = '';
        divGnomo2.innerText = '';
        divGnomo3.innerText = '';
        divGnomo4.innerText = '';
        resultado.innerText = '';
        aribtro.innerText = '';
        
        btnDisplay.style.display = "inline-block";
        betDisplay.style.display = "none";
        proximo.style.display = "none"; 
    });


});