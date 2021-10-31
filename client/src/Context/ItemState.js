import React, { useState } from 'react';
import ItemContext from './ItemContext';

const ItemState = (props) => {
    const host = require("../config.json").API_URL;

    const itemsInitial = [];
    const [items, setItems] = useState(itemsInitial);
    
    // Get all the items
    const getItems = async () => {
        // API CALL
        const response = await fetch(`${host}/items/get`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        setItems(json);
    }

    return (
        <ItemContext.Provider value={{ items, getItems }}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemState;
