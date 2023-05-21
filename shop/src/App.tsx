import './App.css'
import Listing from "./components/Listing";
import {useEffect, useState} from "react";




function App() {
    const [items, setItems] = useState([])
    const itemsArr = []

    const getData = () => {
        fetch('/src/etsy.json')
            .then(response => response.json())
            .then((json) => {

                JSON.parse(JSON.stringify(json)).map(elem => {
                    if (elem.MainImage !== undefined && elem.state === "active") {
                        if(elem.quantity < 10) {
                            elem.level = "level-low"
                        }
                        if (elem.quantity < 20 && elem.quantity > 10) {
                            elem.level = "level-medium"
                        }
                        if(elem.quantity > 20){
                            elem.level = "level-high"
                        }

                        itemsArr.push(elem)
                    }

                })
                setItems(itemsArr)
            })

    }

    useEffect(() => {
        getData()
    },[])



  return (
    <>
      <Listing items={items}/>
    </>
  )
}

export default App
