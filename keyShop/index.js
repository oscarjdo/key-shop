let container = document.querySelector(".flex-container");

const crearLlaves = (numero,modelo,precio)=>{
    let img = `<img src="llave.png"/>`;
    let num = `<h2>${numero}</h2>`;
    let model = `<h3>${modelo}</h3>`;
    let price = `<p>${precio}</p>`;
    return [img,num,model,price];
}

let fragmento = document.createDocumentFragment();

for (i = 0; i < 20; i++){
    let modeloRandom = Math.round(Math.random()*1000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlaves(`Llave ${i+1}`,`modelo ${modeloRandom}`,`Precio ${precioRandom}`);
    let div = document.createElement("DIV");
    div.classList.add(`flex-item`);
    div.innerHTML = llave.join("");
    fragmento.appendChild(div);
}

console.log(fragmento);
container.appendChild(fragmento);