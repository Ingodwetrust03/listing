import './App.css'
import Listing from "./components/Listing";
import {useEffect, useState} from "react";





function App() {

    const [itemsList, setItems] = useState([])


    const getData: Function = () => {
        try {
            fetch('/src/etsy.json')
                .then(response => response.json())
                .then((json) => {
                    const jsonData: Array<any> = JSON.parse(JSON.stringify(json))
                    let itemsArr: Array<any> = [];

                    jsonData.map(elem => {
                        if (elem.MainImage !== undefined && elem.state === "active") {
                            if (elem.quantity < 10) {
                                elem.level = "level-low"
                            }
                            if (elem.quantity < 20 && elem.quantity > 10) {
                                elem.level = "level-medium"
                            }
                            if (elem.quantity > 20) {
                                elem.level = "level-high"
                            }

                            itemsArr.push(elem)
                            setItems(itemsArr)

                        }
                    })
                })
        } catch (e) {
            console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack)
        }
    }

    useEffect(() => {
        getData()
    },[])



    return (
        <>
            <Listing items={itemsList}/>
        </>
    )
}

export default App
