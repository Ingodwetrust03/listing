import Item from "../models";
import Items from "../models";



export default function Listing ({items}: Items) {

    const sliceTitle: Function = (title: string) => {
        let limit = 50
        return title.slice( 0, limit) + "..."
    }


    const itemElement: Function = (item: Item) => <div className="item" key={item.listing_id}>
        <div className="item-image">
            <a href={item.url}>
                <img src={item.MainImage["url_170x135"]} alt={item.title}/>
            </a>
        </div>
        <div className="item-details">
            <p className="item-title">{sliceTitle(item.title)}</p>
            <p className="item-price">{item.currency_code}{item.price}</p>
            <p className={`item-quantity ${item.level}`}>{item.quantity} left</p>
        </div>
    </div>


    return (
        <div className="item-list" >
            {items.map(item => itemElement(item))}
        </div>
    )
}