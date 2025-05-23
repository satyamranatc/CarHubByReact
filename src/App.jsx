import React,{useState} from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import NavBar from "./Components/NavBar.jsx"

import Home from "./Pages/Home.jsx"
import Brands from "./Pages/Brands.jsx"
import Models from "./Pages/Models.jsx"
import Cars from "./Pages/Cars.jsx"


export default function App() {

let [allCars, setCars] = useState({
    Audi: {
        Suv: [
            {
                name: "Audi Q3",
                price: "Rs. 50,000",
                image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D",
                description: "Compact and stylish SUV with great fuel efficiency."
            },
            {
                name: "Audi Q5",
                price: "Rs. 70,000",
                image: "https://www.audiusa.com/content/dam/audi/us/en/models/suv-models/audi-q5/2025/audi-q5-2025-hero.jpg",
                description: "Mid-size SUV with a perfect balance of performance and comfort."
            },
            {
                name: "Audi Q7",
                price: "Rs. 1,00,000",
                image: "https://images.unsplash.com/photo-1600185365483-26d7e39f9ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaQl8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                description: "Large family SUV with a luxurious interior and advanced technology."
            },
            {
                name: "Audi Q8",
                price: "Rs. 1,20,000",
                image: "https://www.audiusa.com/content/dam/audi/us/en/models/suv-models/audi-q8/2025/audi-q8-2025-hero.jpg",
                description: "Premium SUV with a sleek design and powerful performance."
            }
        ],
        Sedan: [
            {
                name: "Audi A4",
                price: "Rs. 60,000",
                image: "https://www.edmunds.com/gateway/gm/2024/audi/a4/2024-audi-a4-hero.jpg",
                description: "Compact sedan with a sporty design and advanced features."
            },
            {
                name: "Audi A6",
                price: "Rs. 90,000",
                image: "https://www.audiusa.com/content/dam/audi/us/en/models/sedan-models/audi-a6/2025/audi-a6-2025-hero.jpg",
                description: "Full-size sedan with a powerful engine and advanced technology."
            },
            {
                name: "Audi A8",
                price: "Rs. 1,20,000",
                image: "https://www.audiusa.com/content/dam/audi/us/en/models/sedan-models/audi-a8/2025/audi-a8-2025-hero.jpg",
                description: "Luxury sedan with a luxurious interior and advanced technology."
            }
        ]
    },
    BMW: {
        Suv: [
            {
                name: "BMW X3",
                price: "Rs. 65,000",
                image: "https://www.bmwusa.com/content/dam/bmw-mobilityservices/us/en/models/x3/2025/hero.jpg",
                description: "Compact SUV with a sporty design and advanced features."
            },
            {
                name: "BMW X5",
                price: "Rs. 90,000",
                image: "https://www.bmwusa.com/content/dam/bmw-mobilityservices/us/en/models/x5/2025/hero.jpg",
                description: "Mid-size SUV with a powerful engine and advanced technology."
            },
            {
                name: "BMW X7",
                price: "Rs. 1,20,000",
                image: "https://www.bmwusa.com/content/dam/bmw-mobilityservices/us/en/models/x7/2025/hero.jpg",
                description: "Full-size SUV with a luxurious interior and advanced technology."
            }
        ],
        Sedan: [
            {
                name: "BMW 3 Series",
                price: "Rs. 60,000",
                image: "https://www.bmwusa.com/content/dam/bmw-mobilityservices/us/en/models/3-series/2025/hero.jpg",
                description: "Compact sedan with a sporty design and advanced features."
            },
            {
                name: "BMW 5 Series",
                price: "Rs. 90,000",
                image: "https://www.bmwusa.com/content/dam/bmw-mobilityservices/us/en/models/5-series/2025/hero.jpg",
                description: "Mid-size sedan with a powerful engine and advanced technology."
            },
            {
                name: "BMW 7 Series",
                price: "Rs. 1,20,000",
                image: "https://www.bmwusa.com/content/dam/bmw-mobilityservices/us/en/models/7-series/2025/hero.jpg",
                description: "Full-size sedan with a luxurious interior and advanced technology."
            }
        ],
        Hatchback: [
            {
                name: "BMW 2 Series Gran Coupe",
                price: "Rs. 50,000",
                image: "https://www.bmwusa.com/content/dam/bmw-mobilityservices/us/en/models/2-series-gran-coupe/2025/hero.jpg",
                description: "Compact hatchback with a sporty design and efficient performance."
            }
        ]
    },
    Mercedes: {
        Suv: [
            {
                name: "Mercedes-Benz GLC",
                price: "Rs. 70,000",
                image: "https://www.mercedes-benz.com/content/dam/mercedes-benz/production/models/glc/2025/hero.jpg",
                description: "Compact SUV with a luxurious interior and advanced technology."
            },
            {
                name: "Mercedes-Benz GLE",
                price: "Rs. 1,00,000",
                image: "https://www.mercedes-benz.com/content/dam/mercedes-benz/production/models/gle/2025/hero.jpg",
                description: "Mid-size SUV with a powerful engine and advanced technology."
            },
            {
                name: "Mercedes-Benz GLS",
                price: "Rs. 1,20,000",
                image: "https://www.mercedes-benz.com/content/dam/mercedes-benz/production/models/gls/2025/hero.jpg",
                description: "Full-size SUV with a luxurious interior and advanced technology."
            }
        ],
        Sedan: [
            {
                name: "Mercedes-Benz C-Class",
                price: "Rs. 60,000",
                image: "https://www.mercedes-benz.com/content/dam/mercedes-benz/production/models/c-class/2025/hero.jpg",
                description: "Compact sedan with a sporty design and advanced features."
            },
            {
                name: "Mercedes-Benz E-Class",
                price: "Rs. 90,000",
                image: "https://www.mercedes-benz.com/content/dam/mercedes-benz/production/models/e-class/2025/hero.jpg",
                description: "Mid-size sedan with a powerful engine and advanced technology."
            },
            {
                name: "Mercedes-Benz S-Class",
                price: "Rs. 1,20,000",
                image: "https://www.mercedes-benz.com/content/dam/mercedes-benz/production/models/s-class/2025/hero.jpg",
                description: "Full-size sedan with a luxurious interior and advanced technology."
            }
        ],
        Hatchback: [
            {
                name: "Mercedes-Benz A-Class",
                price: "Rs. 40,000",
                image: "https://www.mercedes-benz.com/content/dam/mercedes-benz/production/models/a-class/2025/hero.jpg",
                description: "Compact hatchback with a sporty design and efficient performance."
            }
        ]
    },
    Ferrari: {
        Suv: [
            {
                name: "Ferrari Purosangue",
                price: "Rs. 2,00,000",
                image: "https://www.ferrari.com/content/dam/ferrari/en/models/purosangue/2025/hero.jpg",
                description: "Luxury SUV with a powerful engine and advanced technology."
            }
        ],
        Sedan: [
            {
                name: "Ferrari Portofino",
                price: "Rs. 1,50,000",
                image: "https://www.ferrari.com/content/dam/ferrari/en/models/portofino/2025/hero.jpg",
                description: "Convertible sedan with a powerful engine and advanced technology."
            }
        ],
        Hatchback: []
    },
    Lamborghini: {
        Suv: [
            {
                name: "Lamborghini Urus",
                price: "Rs. 1,80,000",
                image: "https://www.lamborghini.com/content/dam/lamborghini/en/models/urus/2025/hero.jpg",
                description: "High-performance SUV with a powerful engine and advanced technology."
            }
        ],
        Sedan: [],
        Hatchback: [
            {
                name: "Lamborghini Huracán",
                price: "Rs. 1,50,000",
                image: "https://www.lamborghini.com/content/dam/lamborghini/en/models/huracan/2025/hero.jpg",
                description: "High-performance hatchback with a powerful engine and advanced technology."
            }
        ]
    },
    Porsche: {
        Suv: [
            {
                name: "Porsche Cayenne",
                price: "Rs. 1,20,000",
                image: "https://www.porsche.com/content/dam/porsche/en/models/cayenne/2025/hero.jpg",
                description: "High-performance SUV with a powerful engine and advanced technology."
            }
        ],
        Sedan: [
            {
                name: "Porsche Panamera",
                price: "Rs. 1,50,000",
                image: "https://www.porsche.com/content/dam/porsche/en/models/panamera/2025/hero.jpg",
                description: "High-performance sedan with a powerful engine and advanced technology."
            }
        ],
        Hatchback: [
            {
                name: "Porsche 911",
                price: "Rs. 1,80,000",
                image: "https://www.porsche.com/content/dam/porsche/en/models/911/2025/hero.jpg",
                description: "High-performance hatchback with a powerful engine and advanced technology."
            }
        ]
    },
    Bugatti: {
        Suv: [],
        Sedan: [],
        Hatchback: [
            {
                name: "Bugatti Chiron",
                price: "Rs. 3,00,000",
                image: "https://www.bugatti.com/content/dam/bugatti/en/models/chiron/2025/hero.jpg",
                description: "High-performance hatchback with a powerful engine and advanced technology."
            }
        ]
    },
    RollsRoyce: {
        Suv: [
            {
                name: "Rolls-Royce Cullinan",
                price: "Rs. 2,50,000",
                image: "https://www.rollsroyce.com/content/dam/rollsroyce/en/models/cullinan/2025/hero.jpg",
                description: "Luxury SUV with a powerful engine and advanced technology."
            }
        ],
        Sedan: [
            {
                name: "Rolls-Royce Phantom",
                price: "Rs. 2,00,000",
                image: "https://www.rollsroyce.com/content/dam/rollsroyce/en/models/phantom/2025/hero.jpg",
                description: "Luxury sedan with a powerful engine and advanced technology."
            }
        ],
        Hatchback: []
    },
    Maserati: {
        Suv: [
            {
                name: "Maserati Levante",
                price: "Rs. 1,20,000",
                image: "https://www.maserati.com/content/dam/maserati/en/models/levante/2025/hero.jpg",
                description: "High-performance SUV with a powerful engine and advanced technology."
            }
        ],
        Sedan: [
            {
                name: "Maserati Ghibli",
                price: "Rs. 1,00,000",
                image: "https://www.maserati.com/content/dam/maserati/en/models/ghibli/2025/hero.jpg",
                description: "High-performance sedan with a powerful engine and advanced technology."
            }
        ],
        Hatchback: []
    }
});


  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>

          <Route path='/' element = {<Home/>} />
          <Route path='/brands' element ={<Brands allCars = {allCars}/>} />
          <Route path='/brands/:brandName/models' element = {<Models allCars = {allCars}/>} />
          <Route path='/cars/:brandName/:modelName' element = {<Cars allCars = {allCars}/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
