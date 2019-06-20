import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import './App.css';

function ItemDetail({ match }) {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const token = '7ed8157727323faec95fa35f148f1397';
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`, {
            headers: {
                Authorization: `${token}`
            }
        });
        const item = await data.json();
        console.log(item.data.item);
        setItem(item.data.item);
    }

    return (
        <Fragment>
            <h1>{item.name}</h1>
            <img src={item.images.icon} alt="images" />
            {/* <ul>
                {items.map(item => <li key={item.itemId}><Link to={`/shop/${item.itemId}`} >{item.item.name}</Link></li>)}
            </ul> */}
        </Fragment>
    );
}

export default ItemDetail;
