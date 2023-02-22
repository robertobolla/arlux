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
                links: '/lona-impresa'
            },
            {
                id: 3,
                sub: 'Chapa Calada',
                links: '/chapa-calada'
            },  
            {
                id: 4,
                sub: 'Corpóreas de Chapa',
                links: '/corporea-chapa'
            },     
            {
                id: 5,
                sub: 'Corpóreas de Polifán',
                links: '/corporea-polifan'
            },
            {
                id: 6,
                sub: 'Ploteo en Vinilo',
                links: '/ploteo-vinilo'
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