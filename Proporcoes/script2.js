alert("Seja bem-vindo!")
function calcular() {
    var altura1= document.getElementById("altura_1")
    var largura1= document.getElementById("largura_1")
    var novovalor= document.getElementById("novo_valor")
    var novolado = document.getElementById("lado_escolhido")
    let alt1= Number(altura1.value)
    let larg1= Number(largura1.value)
    let valor2= Number(novovalor.value)
    let res = document.getElementById("result")
    let img = document.getElementById("imagem")

    if(altura1.value.length==0 || largura1.value.length==0){
        alert("Sinto muito, mas não posso calcular isso!")
    }
    else{
        var imagem = document.createElement("img")
        if(novolado.value=="Largura"){
            res.innerHTML = ''
            var alt2= (alt1*valor2)/larg1
            res.innerHTML =`A nova altura será de: ${alt2}px`
            res.innerHTML += `<p><img src="baby.jpg" width="${valor2}px" height="${alt2}px"></p>`
        }
        else if(novolado.value == "Altura"){
            res.innerHTML = ''
            var larg2= (larg1*valor2)/alt1
            res.innerHTML =`A nova largura será de: ${larg2}px`
            res.innerHTML +=`<p><img src="baby.jpg" width="${larg2}px" height="${valor2}px"></p>`
        }
    }
}