document.body.style.background = '#333'

//------------------------------------------div
const div1 = document.createElement('div')
// document.getElementsByTagName('div')
document.body.appendChild(div1)
div1.style.background = '#222'
div1.style.height = '100px'
// div1.style.padding = "0"


//----------------------------------------h1
const h1 = document.createElement('h1')
// h1.classList = "titulo"
h1.textContent = "Site exemplo"
// document.querySelector(".titulo")
div1.appendChild(h1)
h1.style.color = "#fff"
h1.style.textAlign = "center"
h1.style.paddingTop = "25px"

//-------------------------------------------ul
const ul = document.createElement('ul')
document.body.appendChild(ul)

function addLi(item) {
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML = item
    li.style.color = '#fff'
    li.style.listStyle = 'none'
    li.style.display
    li.style.flex
    li.style.flexDirection = "row"

}

addLi('Home')
addLi('Serviços')
addLi('Contato')


















// document.body.style = "blue"


// function createP() {
//     const h2 = document.createElement('h2')
//     document.body.appendChild(h2)
//     h2.textContent = 'meu segundo título'
// }

// const btnRemove = document.createElement('button')
// document.body.appendChild(btnRemove)
// btnRemove.textContent = 'Remover botão'



// const btn = document.createElement('button')
// document.body.appendChild(btn)
// btn.textContent = 'Meu segundo head'

// function remover(){
//     console.log('removendo')
// }

// //Eventos

// btn.addEventListener('click', () => {
//     createP()
//     const pt = document.querySelector('.pt')
//     pt.style.color ='red'

//     const ptColor = document.querySelector(".pt")
//     ptColor.style.background = 'orange'

// })

// //-----------------------------------***--------
// // const h1= document.createElement('h1')
// // h1.textContent= 'Sou um H1 '
// // document.body.appendChild(h1)

// // const p1 = document.createElement('p')
// // p1.textContent = 'Boa noite aqui é um parágrafo exemplo criado através do js, DOM.'
// // document.body.appendChild(p1)

 
// // const btn = document.createElement("button")
// // document.body.appendChild(btn)
// // btn.textContent = "Clique aqui"
// // btn.addEventListener("click",()=>{
// //   document.body.style.background= "#222222"
// //   h1.style.color = "white"
// //   p1.style.color = "white"
// // })

