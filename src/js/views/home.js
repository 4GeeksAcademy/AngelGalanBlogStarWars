import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(AppContext);

   
    const renderSection = (title, items, type, imgPath) => (
        <div className="section my-5">
            <h1 className="text-center">{title}</h1>
            <div className="carousel-container mx-auto">
                <div className="d-flex flex-wrap justify-content-center">
                    {items && items.length > 0 ? (
                        items.map((item) => (
                            <div key={item.uid} className="card m-3" style={{ width: "18rem" }}>
                                <img
                                    src={`${imgPath}/${item.uid}.jpg`}
                                    className="card-img-top"
                                    alt={item.name || "Item Image"}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Available";
                                    }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <div className="d-flex justify-content-between mt-3">
                                        <Link to={`/${type}/${item.uid}`} className="btn btn-primary">
                                            Learn more!
                                        </Link>
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={() =>
                                                actions.addToFavorites({
                                                    uid: item.uid,
                                                    name: item.name,
                                                    type: type
                                                })
                                            }
                                        >
                                            <i className="fa-regular fa-heart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Loading {title.toLowerCase()}...</p>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="container mt-5">
            {renderSection("Characters", store.peopleList, "people", "https://starwars-visualguide.com/assets/img/characters")}
            {renderSection("Star Ships", store.starshipList, "starships", "https://starwars-visualguide.com/assets/img/starships")}
            {renderSection("Species", store.speciesList, "species", "https://starwars-visualguide.com/assets/img/species")}
        </div>
    );
};






