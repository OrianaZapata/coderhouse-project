const products = [
    {
        id: '1', name: 'Fish Oil', price:' $4000', category: 'adultos', img: '../images/fish-oil.png', stock: '20', description: 'Reducen los triglicéridos, un tipo de grasa en la sangre. Reducen el riesgo de desarrollar latidos cardíacos irregulares (arritmias).'
    },
    {
        id: '2', name: 'Vitamina C', price:' $3500', category: 'adultos', img: '../images/vitamina-c.png', stock: '10', description: 'Es una vitamina hidrosoluble. Es necesaria para el crecimiento y desarrollo normales.'
    },  
    {
        id: '3', name: 'Calcium', price:' $1500', category: 'adultos',  img: '../images/calcium.png', stock: '40', description: 'Es importante para la buena salud, el crecimiento de huesos fuertes y previniendo la osteoporosis.'
    }, {
        id: '4', name: 'Vit niños', price:' $6500', category: 'niños',  img: '../images/vitamin-kids.png', stock: '90', description: 'Es importante para la buena salud..'
    }
]

export const getProductsDeAlfredo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}
