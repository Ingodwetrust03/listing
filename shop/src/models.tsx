export default interface Item {
    listing_id: number;
    url?: string;
    MainImage: string;
    title?: string;
    currency_code: string;
    price?: string;
    quantity?: number;
    level: string;
}

export default interface SlicedString {
    StringTitle?: string;
}