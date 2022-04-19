const products = [
    {
        id: '1',
        name: 'Polera Niños del Cerro',
        price: '12000',
        category: 'polera',
        color: 'negro',
        img: '/images/polerandc.jpeg',
        color1: 'negro',
        color2: 'blanco',
        talla1: 'S',
        talla2: 'M',
        talla3: 'L',
        stock: 25,
        description: 'Polera blanca con logo Niños del Cerro'
    },
    {
        id: '2',
        name: 'Bolsa Niños del Cerro',
        price: '8000',
        category: 'tote',
        color1: 'blanco',
        img: '/images/totendc.jpeg',
        stock: 20,
        description: 'Bolsa blanca con logo Niños del Cerro'
    }
]

const category = [
    {id: 'polera', description: 'Polera'},
    {id: 'tote', description: 'Bolsa Tote'},
]

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id == id))
        }, 500)
    })
}



export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(category)
        }, 500)
    })
}