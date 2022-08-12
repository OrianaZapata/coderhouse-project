const irAlRestaurante = () =>{
    return 'Llegar al restaurante';
}

const sentarme = () => {
    return 'Me senté';
}

const pidoComida = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve( 'Me traen la comida'); //resolve es una función, viene de instanciar una promesa (resolverla y pasarla al string)
        }, 3000); //después de tres segundos esta función pasa a estar completada.
    }) 
}

const comer = () => {
    return 'Termino de comer';
}

const pago = () => {
    return 'Termino de pagar';
}

const meVoy = () =>{
    return 'Llegué a casa';
}

console.log(irAlRestaurante());
console.log(sentarme());
pidoComida().then(()=>{
    console.log(comer())
    console.log(pago());
    console.log(meVoy());
}).catch(error => {
    console.log(error)
})