
import polaroid from "../src/assets/polaroid.jpeg"
import canon from "../src/assets/canon.jpeg"
import sigma from "../src/assets/lente.jpeg"
import tamron from "../src/assets/tamron.jpeg"
import tripode from "../src/assets/tripode.jpeg"
import bolso from "../src/assets/bolso.jpeg"

const products = [ 
    {
        id: '1',
        name: 'Cámara Retro Polaroid',
        price: 49000,
        categoria: 'camaras',
        img: polaroid,
        stock: 7,
        descripcion: 'La Retro Polaroid es una cámara portátil para que puedas tomar e imprimir fotos donde quiera que vayas'
    },
    {
        id: '2',
        name: 'Cámara Canon Reflex',
        price: 79000,
        categoria: 'camaras',
        img: canon,
        stock: 10,
        descripcion: 'La Canon Reflex EOS es una cámara semi-pro perfecta para inicarse en tomas con alta calidad fotográfica de ajustes manuales'
    },
    {
        id: '3',
        name: 'Sigma 50mm f1.8',
        price: 59000,
        categoria: 'lentes',
        img: sigma,
        stock: 7,
        descripcion: 'Si buscas fotos de retrato con un alto desenfoque, este lente es para ti. Este lente tiene montura Sony E e incluye tapa en ambos lados'
    },
    {
        id: '4',
        name: 'Tamron 17-70mm F/2.8',
        price: 140000,
        categoria: 'lentes',
        img: tamron,
        stock: 3,
        descripcion: 'Con este lente multifuncional es posible conseguir la toma perfecta en cada ocasión. Partiendo en 17mm y finalizando en 50mm, sirve para todo propósito.'
    },
    {
        id: '5',
        name: 'Trípode carbono ranger',
        price: 35000,
        categoria: 'accesorios',
        img: tripode,
        stock: 10,
        descripcion: 'El trípode ranger XT alcanza 1.6m de altura y es de los más livianos del mercado'
    },
    {
        id: '6',
        name: 'Bolso Lens BG Superior',
        price: 29000,
        categoria: 'accesorios',
        img: bolso,
        stock: 7,
        descripcion: 'Con este bolso podrás transportar los lentes de una manera segura, es imperbeable y acolchado anti golpes'
    },
]


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}


export const getProductsById = (productoId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productoId))
        }, 500);
    })
}

export const getProductsByCategory = (productoCat) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === productoCat))
        }, 500);
    })
}