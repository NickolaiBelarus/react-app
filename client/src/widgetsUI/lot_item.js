import React from 'react';
import { Link } from 'react-router-dom';

const LotItem = (item) => {
    return (
        <Link to={`/lots/${item._id}`} className="lot_item">
            <div className="lot_header">
                <h2>{item.name}</h2>
            </div>
            <div className="lot_items">
                <div className="lot_author">{item.author}</div>
               
                <div className="lot_bubble">
                    <strong>Price</strong> $ {item.price}
                </div>

                <div className="lot_bubble">
                    <strong>Pages</strong>  {item.pages}
                </div>

                <div className="lot_bubble rating">
                    <strong>Rating</strong>  {item.rating}
                </div>

            </div>
        </Link>
    );
};

export default LotItem;