import React, { useState } from 'react'

export default function Brands() {

    let [allCars, setCars] = useState({
        Audi: {
            Suv:[
                {
                    name:"Audi Q7",
                    price:"Rs. 1,00,000",
                    image:"https://images.unsplash.com/photo-1600185365483-26d7e39f9ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaQl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                }
            ],
            Sedan:[],
            Hatchback:[],
        },
        BMW: {
            Suv: [],
            Sedan: [],
            Hatchback: []
        },
        Sedan: {
            Suv: [],
            Sedan: [],
            Hatchback: []
        },
        Hatchback: {
            Suv: [],
            Sedan: [],
            Hatchback: []
        },
        Mercedes: {
            Suv: [],
            Sedan: [],
            Hatchback: []
        },
        Ferrari: {
            Suv: [],
            Sedan: [],
            Hatchback: []
        },
        Lamborghini: {
            Suv: [],
            Sedan: [],
            Hatchback: []
        },
        Porsche: {
            Suv: [],
            Sedan: [],
            Hatchback: []
        },
        Bugatti: {
            Suv: [],
            Sedan: [],
            Hatchback: []
        },
        RollsRoyce: {
            Suv: [],
        Sedan: [],
        Hatchback: []
    },
        Maserati: {
            Suv: [],
        Sedan: [],
        Hatchback: []
    },

  })


return (
    <div>Brands</div>
)
}
