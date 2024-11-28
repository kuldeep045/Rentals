import house_1 from './house_1.jpg'
import house_2 from './house_2.jpg'
import house_3 from  './house_3.png'

import client_1 from './family-1.jpg'
import client_2 from './family-2.jpg'
import client_3 from './family-3.jpg'

import facebook from './facebook-icon.png'
import tiktok from './tiktok-icon.png'
import insta from './insta-icon.webp'
import user_icon from './profile-user.png'


import h_1 from './houses/house_1.jpg'
import h_2 from './houses/house_2.jpg'
import h_3 from './houses/house_3.jpg'
import h_4 from './houses/house_4.jpg'
import h_5 from './houses/house_5.jpg'
import h_6 from './houses/house_6.jpg'
import h_7 from './houses/house_7.png'

export const hou = [
    {
        id: "h_1",
        image: h_1,
        price: "150,000.00",
        numbeds: 4,
        numBaths: 3,
        area: "2000 sq ft",
        status: "sale",
        address: {
            address1: "143 Rolling Meadows",
            address2: "Jackson, MS39211",
        },
        owner: "CPA Real Estate ICC"
    },
    {
        id: "h_2",
        image: h_2,
        price: "175,000.00",
        numbeds: 3,
        numBaths: 2,
        area: "1800 sq ft",
        status: "sale",
        address: {
            address1: "22 Oakwood Drive",
            address2: "Baton Rouge, LA70806",
        },
        owner: "Prestige Realty Group"
    },
    {
        id: "h_3",
        image: h_3,
        price: "220,000.00",
        numbeds: 5,
        numBaths: 4,
        area: "3000 sq ft",
        status: "sale",
        address: {
            address1: "78 Creekside Lane",
            address2: "Austin, TX78745",
        },
        owner: "Elite Properties"
    },
    {
        id: "h_4",
        image: h_4,
        price: "135,000.00",
        numbeds: 2,
        numBaths: 1,
        area: "1200 sq ft",
        status: "sale",
        address: {
            address1: "9 Maple Street",
            address2: "Nashville, TN37203",
        },
        owner: "Prime Realty Inc."
    },
    {
        id: "h_5",
        image: h_5,
        price: "310,000.00",
        numbeds: 4,
        numBaths: 3,
        area: "2800 sq ft",
        status: "sale",
        address: {
            address1: "55 Riverwalk Avenue",
            address2: "Charleston, SC29401",
        },
        owner: "Luxury Homes Co."
    },
    {
        id: "h_6",
        image: h_6,
        price: "400,000.00",
        numbeds: 6,
        numBaths: 5,
        area: "4500 sq ft",
        status: "Rent",
        address: {
            address1: "301 Lakeshore Drive",
            address2: "Orlando, FL32803",
        },
        owner: "Dream Homes Realty"
    },
    {
        id: "h_7",
        image: h_7,
        price: "95,000.00",
        numbeds: 2,
        numBaths: 1,
        area: "900 sq ft",
        status: "sale",
        address: {
            address1: "123 Sunrise Avenue",
            address2: "Columbus, OH43215",
        },
        owner: "Affordable Housing LLC"
    }
];

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
    insta,
    user_icon
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