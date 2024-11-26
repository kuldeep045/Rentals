import house_1 from './house_1.jpg'
import house_2 from './house_2.jpg'
import house_3 from  './house_3.png'

import client_1 from './family-1.jpg'
import client_2 from './family-2.jpg'
import client_3 from './family-3.jpg'

import facebook from './facebook-icon.png'
import tiktok from './tiktok-icon.png'
import insta from './insta-icon.webp'



export const houses = [
    {
        id: 1,
        name: "Avila apartments",
        image: house_1,
        address:{
            address1: '1269, springwood lane',
            address2: 'fairborn, Ohio'

        },
        numbeds: '1-3 beds',
        price: '$1000 - $2000',
        area: '1000 sqft',
        owner: 'Avila Corp.',
        status: 'rent',
        available: true
    },
    {
        id: 2,
        name: "Meadowrun apartments",
        image: house_2,
        address:{
            address1: '1124, springwood lane',
            address2: 'dayton, Ohio'

        },
        numbeds: '2-3 beds',
        price: '$1200 - $2000',
        area: '1500 sqft',
        owner: 'Meadowrun Corp.',
        status: 'rent',
        available: true
    },
    {
        id: 3,
        name: "Apps apartments",
        image: house_3,
        address:{
            address1: '1265, springwood lane',
            address2: 'columbus, Ohio'

        },
        numbeds: '1-4 beds',
        price: '$1500 - $2000',
        area: '1700 sqft',
        owner: 'Apps Corp.',
        status: 'rent',
        available: true
    },

]


export const icons = {
    facebook,
    tiktok,
    insta
}

export const clientOpinion = [
    {
        clientId: "001",
        image:client_1,
        clientName: "Salah L. Dallas, Tx",
        comment: "Finding the perfect apartment was a breeze! the website made it easy to filter my preferences and choose my dream home."
    },
    {
        clientId: "002",
        image: client_2,
        clientName: "— Emily K., Fort Worth, TX",
        comment: '"A seamless experience from start to finish! I highly recommend this site for anyone looking for their ideal apartment."'
    },
    {
        clientId: "003",
        image: client_3,
        clientName: "— Aisha B., Austin, TX",
        comment: "The site’s search tools saved me time and effort. I found an affordable apartment with all the amenities I wanted within minutes!"

    }
]