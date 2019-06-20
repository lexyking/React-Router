import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function Weapons() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const token = '7ed8157727323faec95fa35f148f1397';
        const data = await fetch('https://fortnite-api.theapinetwork.com/weapons/get', {
            headers: {
                Authorization: `${token}`
            }
        });
        const items = await data.json();
        console.log(items.data.entries);
        setItems(items.data.entries);
    }

    return (
        <Fragment>
            <h1>Welcome to Fortnite Weapons</h1>
            <ul className="result">
                {items.map(item =>
                    <li key={item.identifier}><Link to={`#`} className="nameLinks" >
                        {item.name}
                        <div>
                            <img src={item.image} />
                        </div>
                    </Link></li>)}
            </ul>
        </Fragment>
    );
}

export default Weapons;
