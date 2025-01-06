function eletroDomesticos(marca, modelo, valor, tipo){
    this.marca = marca;
    this.modelo = modelo;
    this.valor = valor;
}

function toCold(marca, modelo, valor, tipo){
    eletroDomesticos.call(this, marca, modelo, valor);
    this.tipo = tipo;
}

function toHot(marca, modelo, valor, tipo){
    eletroDomesticos.call(this, marca, modelo, valor);
    this.tipo = tipo;
}

const frostFree = new toCold('Brastemp','frost free', 2500, 'geladeira');
const freezer = new toCold('Consul','freezer', 1500, 'freezer');
const micro = new toHot('Eletrolux','Multi função', 1000, 'microondas');
const forno = new toHot('Philco','Quatro bocas', 1200, 'Tradicional');

console.log(frostFree);
console.log(freezer);
console.log(micro);
console.log(forno);