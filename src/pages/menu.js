const menus = [  
    {
        id: 1,
        name: 'Nosotros',
        links: '/about'
    }, 
    {
        id: 2,
        name: 'Servicios',        
        namesub: [
            {
                id: 1,
                sub: 'Carteles Circulares',
                links: '/carteles-circulares'
            },
            {
                id: 2,
                sub: 'Lona Impresa',
                links: '/service-web'
            },
            {
                id: 3,
                sub: 'Chapa Calada',
                links: '/service-ecommerce'
            },  
            {
                id: 4,
                sub: 'Corpóreas de Chapa',
                links: '/service-ecommerce'
            },     
            {
                id: 5,
                sub: 'Corpóreas de Polifán',
                links: '/service-ecommerce'
            },
            {
                id: 6,
                sub: 'Ploteo en Vinilo',
                links: '/service-ecommerce'
            },          
        ],
    },
    {
        id: 3,
        name: 'Contacto',
        links: '/contact'
    },
   
  
    
]

export default menus;