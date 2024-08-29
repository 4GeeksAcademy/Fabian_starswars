import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Card = ({ item, category }) => {
    const { store, actions } = useContext(Context);

    const handleFavorite = () => {
        if (store.favorites.includes(item)) {
            actions.removeFavorite(item);
        } else {
            actions.addFavorite(item);
        }
    };

    return (
        <div className="card">
            <img
                src={`https://starwars-visualguide.com/assets/img/${category}/${item.uid}.jpg`}
                className="card-img-top"
                alt={item.name}
            />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Some description...</p>
                <button className="btn btn-primary" onClick={handleFavorite}>
                    {store.favorites.includes(item) ? "Remove from favorites" : "Add to favorites"}
                </button>
            </div>
        </div>
    );
};

export default Card;