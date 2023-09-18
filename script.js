class Livro {
    constructor(titulo, autor, paginas,) {
        this.titulo= titulo
        this.autor= autor
        this.paginas =  paginas
    }

     resenha(resenha) {
        return resenha
    }
}

const harryPotter = new Livro ("Harry Poder e o cálice de foto", "JK Rolling", 500)
// const resenhaHP = harryPotter.resenha("Um livro que conta história de um jovem bruxo lutando para sobreviver")

const janeEyre = new Livro ("Jane Eyre e o morro dos ventos uivantes", "Charlotte Bronte", 480)

// console.log(harryPotter.resenha("Um livro que conta história de um jovem bruxo lutando para sobreviver"))

// console.log(harryPotter.resenha("Romance de época do século XVIII clássico da literatura inglesa"))

console.log(harryPotter, harryPotter.resenha("Esta é uma resenha de teste"))
