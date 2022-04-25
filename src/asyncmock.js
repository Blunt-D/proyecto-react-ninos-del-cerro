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
    },
    {
        id: '3',
        name: 'Disco Nonato Coo',
        price: '8000',
        category: 'Compact Disc',
        img: '/images/nonatocoo.jpg',
        stock: 20,
        description: 'Primer Largaduración de Niños del Cerro'
    },
    {
        id: '4',
        name: 'Disco Lance',
        price: '8000',
        category: 'Compact Disc',
        img: '/images/lance.jpg',
        stock: 20,
        description: 'Segundo Largaduración de Niños del Cerro'
    },
    {
        id: '5',
        name: 'Disco Cuauhtemoc',
        price: '8000',
        category: 'Compact Disc',
        img: '/images/ndc-cuautemoc.png',
        stock: 20,
        description: 'Primer EP de Niños del Cerro'
    },
    {
        id: '6',
        name: 'Disco No va a pasar el Tiempo en Vano',
        price: '8000',
        category: 'Compact Disc',
        img: '/images/no_va_a_pasar_el_tiempo_en_vano.jpg',
        stock: 20,
        description: 'Primer Disco en vivo de Niños del Cerro'
    },
]

const category = [
    {id: 'polera', description: 'Polera'},
    {id: 'tote', description: 'Bolsa Tote'},
    {id: 'Compact Disc', description: 'Disco compacto en su JewelCase'},
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