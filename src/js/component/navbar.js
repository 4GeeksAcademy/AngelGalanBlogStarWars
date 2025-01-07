import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";
import { AppContext } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(AppContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
           
            <div className="navbar-brand">
                <Link to="/" className="d-flex align-items-center">
                    <img src={Logo} alt="Star Wars Logo" style={{ height: "50px" }} />
                </Link>
            </div>

            
            <div className="ms-auto">
                <div className="dropdown">
                    <button
                        className="btn btn-outline-light dropdown-toggle"
                        type="button"
                        id="favoritesDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fa-regular fa-heart"></i> Favorites
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="favoritesDropdown">
                        {store.favorites && store.favorites.length > 0 ? (
                            store.favorites.map((fav, index) => (
                                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                    <Link to={`/${fav.type}/${fav.uid}`} className="text-light text-decoration-none">
                                        {fav.name}
                                    </Link>
                                    <button
                                        className="btn btn-sm btn-danger ms-2"
                                        onClick={() => actions.removeFromFavorites(fav.uid)}
                                    >
                                        <i className="fa-solid fa-x"></i>
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className="dropdown-item text-center">No favorites added</li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};






