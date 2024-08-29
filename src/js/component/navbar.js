import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">StarWars Blog</a>
            <div className="ml-auto">
                <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                    Favorites ({store.favorites.length})
                </button>
                <div className="dropdown-menu">
                    {store.favorites.length > 0 ? (
                        store.favorites.map((fav, i) => (
                            <a key={i} className="dropdown-item" href={`/details/${fav.uid}`}>
                                {fav.name}
                            </a>
                        ))
                    ) : (
                        <span className="dropdown-item">No favorites yet</span>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
