import React, { Fragment, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
import '../App.css';

function WeaponsDetails({ match }) {
    useEffect(() => {
        console.log(match.params)
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
        console.log(item);
        setItem(item);
    }

    return (
        <Fragment>
            <h1>{item.name}</h1>
            <section className="sectionDetail">

                <article className="artDescription">
                    <h1>description</h1>
                    <h2>{item.stats}</h2></article>
                <article className="icon">
                    <img src={item.image} alt="images" /></article>
                <article className="artDescription">
                    <h1>Rarity</h1>
                    <h2>'{item.rarity}'</h2></article>

            </section>
            {/* <ul>
                {items.map(item => <li key={item.itemId}><Link to={`/shop/${item.itemId}`} >{item.item.name}</Link></li>)}
            </ul> */}
        </Fragment>
    );
}

export default WeaponsDetails;
