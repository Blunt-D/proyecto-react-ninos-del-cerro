const products = [
    {
        id: 1,
        name: 'Polera Niños del Cerro',
        price: '12000',
        category: 'merchandising',
        img: './images/polerandc.jpeg',
        stock: 25,
        description: 'Polera blanca con logo Niños del Cerro'
    },
    {
        id: 2,
        name: 'Bolsa Niños del Cerro',
        price: '8000',
        category: 'merchandising',
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