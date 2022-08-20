const products = [
    {   id: '1', name: 'Fish Oil', price:4000, category: 'adultos', img: '../images/fish-oil.png', stock: '20', description: 'Reducen los triglicéridos, un tipo de grasa en la sangre. Reducen el riesgo de desarrollar latidos cardíacos irregulares (arritmias)'
    },
    {   id: '2', name: 'Vitamina C', price:3500, category: 'adultos', img: '../images/vitamina-c.png', stock: '10', description: 'Es una vitamina hidrosoluble. Es necesaria para el crecimiento y desarrollo normales'
    },  
    {   id: '3', name: 'Calcium', price:1500, category: 'adultos',  img: '../images/calcium.png', stock: '40', description: 'Es importante para la buena salud, el crecimiento de huesos fuertes y previniendo la osteoporosis'
    }, {
        id: '4', name: 'Kids Multivitamin Gummies', price:6500, category: 'niños',  img: '../images/vitamin-kids.png', stock: '90', description: 'Es importante para la buena salud'
    }, {
        id: '5', name: 'B-50', price:2000, category: 'adultos',  img: '../images/B-50.png.crdownload', stock: '90', description: 'B-50 es una excelente combinación del complejo esencial B, para ayudar a cubrir las necesidades diarias'
    }, {
        id: '6', name: 'Capilar Skala', price:3000, category: 'adultos',  img: '../images/Capilar-Skala.png.crdownload', stock: '90', description: 'Fórmula libre de sulfatos, parabenos, siliconas, petrolato y óleo mineral. Formulada con aceite de Rícino, Proteínas de origen vegetal , Vitamina A, Vitamina E, D-Panthenol. Nutrición y Hidratación con esta super crema capilar Skala'
    }, {
        id: '7', name: 'Green vitamin', price:2500, category: 'adultos',  img: '../images/Green-vitamin.jfif', stock: '90', description: 'es una completa fórmula de vitaminas y minerales combinados con extractos de frutas y verduras, en las cantidades apropiadas para complementar la dieta dentro de un estilo de vida saludable'
    }, {
        id: '8', name: 'Kid Cal', price:1000, category: 'niños',  img: '../images/KidCal.png', stock: '90', description: 'Suplemento nutricional de calcio y zinc. Deficiencia de calcio en niños y adolescentes en etapa de crecimiento, convalecencia y fracturas óseas. Raquitismo. Inmuno modulador'
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
