import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function Stores() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const token = '7ed8157727323faec95fa35f148f1397';
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get', {
            headers: {
                Authorization: `${token}`
            }
        });
        const items = await data.json();
        console.log(items.data);
        setItems(items.data);
    }

    return (
        <Fragment>
            <h1>Welcome to Fortnite Stores</h1>
            <ul className="result">
                {items.map(item =>
                    <li key={item.itemId}><Link to={`/Stores/${item.itemId}`} className="nameLinks" >
                        {item.item.name}
                        <div>
                            <img src={item.item.images.information} />
                        </div>
                    </Link></li>)}
            </ul>
        </Fragment>
    );
}

export default Stores;
