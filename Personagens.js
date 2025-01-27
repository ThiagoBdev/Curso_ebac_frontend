function Personagem(nome) {
    this.nome = nome;
    this.saudação = function() {
        console.log("Prazer, eu sou a " + this.nome);
    }
    this.falas = function () {
        console.log("Minha rota favorita é a " + this.rota);
    } 
}

function Campeao(nome, rota, item, danoAtual) {
    this.rota = rota;
    this.item = item;
    let _danoAtual = danoAtual;

    this.getDanoAtual = function() {
        return _danoAtual;  // Retorna apenas o valor do dano
    }

    this.setDano = function(dano) {
        if (typeof dano === "number") {
            _danoAtual = dano;
        }
    }

    Personagem.call(this, nome);  // Chama o construtor da classe Personagem

    this.aumentaDano = function() {
        const novoDano = _danoAtual * 1.1;
        _danoAtual = Math.round(novoDano);
    }
}

function Hipercarry(nome) {
    Campeao.call(this, nome, "hipercarry", "Botlane", 140);  // Passa todos os parâmetros corretos

    this.aumentaDano = function() {
        const danoAtual = this.getDanoAtual();  // Usando o getter para pegar o valor de _danoAtual
        const novoDano = danoAtual * 1.15;
        this.setDano(novoDano);
    }
}

const caitlyn = new Campeao("caitlyn", "Botlane", "gume do infinito", 120);
const lucian = new Campeao("lucian", "botlane", "coletora", 110);
const vayne = new Hipercarry("Vayne");

// Testando os aumentos de dano
caitlyn.aumentaDano();
console.log(caitlyn.getDanoAtual()); 

lucian.aumentaDano();
console.log(lucian.getDanoAtual()); 

vayne.aumentaDano();
console.log(vayne.getDanoAtual()); 
