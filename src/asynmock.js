const products = [
    {
        id: 1,
        name: 'Polera Niños del Cerro',
        price: '12000',
        category: 'merchandising',
        color: 'negro',
        img: './images/polerandc.jpeg',
        color1: 'negro',
        color2: 'blanco',
        talla1: 'S',
        talla2: 'M',
        talla3: 'L',
        stock: 25,
        description: 'Polera blanca con logo Niños del Cerro'
    },
    {
        id: 2,
        name: 'Bolsa Niños del Cerro',
        price: '8000',
        category: 'merchandising',
        color1: 'blanco',
        img: './images/totendc.jpeg',
        stock: 20,
        description: 'Bolsa blanca con logo Niños del Cerro'
    }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}