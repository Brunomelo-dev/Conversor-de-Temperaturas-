function clicar(){
    let res = document.querySelector("div#resultado");
    let select1 = document.querySelector("select#s1").value;
    let select2 = document.querySelector("select#s2").value;
    let num = Number(document.querySelector("input#num").value);
    res.innerHTML = "" /* Deixa espaço vazio */
    if(isNaN(num) || num == ""){ /* Verifica se input não está vazio ou se difere de número */
        window.alert("Digite um valor!")
    }else{ /* Caso seja válido */
        let p = document.createElement("p")
        res.appendChild(p)
        p.innerHTML = `Resultado: ${converter(num, select1, select2)} ${unidadeFinal(select2)}` /* Imprime resultado calculado */
    }
}

function unidadeFinal(unidade){ /* Converte para notação adequada de medida */
    if(unidade == "Celcius"){
        return "°C"
    }else if(unidade == "Kelvin"){
        return "K"
    }else{
        return "°F"
    }
}

function converter(valor, select1, select2){ /* Converte valores */
    let resultado;
    if(select1 == "Celcius"){ /* Caso a primeira opção seja Celcius */
        if(select2 == "Celcius"){
            resultado = valor;
        }else if(select2 == "Fahrenheit"){
            resultado = valor * 9/5 + 32;
        }else{
            resultado = valor + 273.15;
        }
    }else if(select1 == "Kelvin"){ /* Caso a primeira opção seja Kelvin */
        if(select2 == "Celcius"){
            resultado = valor - 273.15;
        }else if(select2 == "Fahrenheit"){
            resultado = (valor - 273.15) * 9/5 + 32;
        }else{
            resultado = valor;
        }
    }else{ /* Caso a primeira opção seja Fahrenheit */
        if(select2 == "Celcius"){ 
            resultado = (valor - 32) * 5/9;
        }else if(select2 == "Fahrenheit"){
            resultado = valor;
        }else{
            resultado = (valor - 32) * 5/9 + 273.15;
        }
    }
    return resultado;
}
