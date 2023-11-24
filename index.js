class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch(this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = ' ataque desconhecido';
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Testando a classe
let heroi = new Heroi('Link', 118, 'guerreiro');
heroi.atacar();  // SaÃ­da: o ninja atacou usando shuriken