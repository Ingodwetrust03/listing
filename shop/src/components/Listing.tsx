/*import Item from "../models";
import SlicedString from "../models";

interface Props {
    item: Item,
    stringTitle: SlicedString
}*/


export default function Listing ({items}) {

    const sliceTitle = (title) => {
        let limit = 50
        let slicedString = title.slice( 0, limit)
        title = slicedString + "..."
        return title
    }


    const itemElement = (item) => <div className="item" key={item.listing_id}>
        <div className="item-image">
            <a href={item.url}>
                <img src={item.MainImage["url_170x135"]} alt={item.title}/>
            </a>
        </div>
        <div className="item-details">
            <p className="item-title">{sliceTitle(item.title)}</p>
            <p className="item-price">{item.currency_code}{item.price}</p>
            <p className={"item-quantity " + item.level}>{item.quantity} left</p>
        </div>
    </div>


    return (
        <div className="item-list" >
            {items.map(item => itemElement(item))}
        </div>
    )
}