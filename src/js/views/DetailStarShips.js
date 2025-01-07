import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../store/appContext";

export const DetailStarShips = () => {
    const { store, actions } = useContext(AppContext);
    const { id } = useParams();

    useEffect(() => {
        actions.fetchStarshipDetails(id);
    }, [id, actions]);

    
    if (!store.selectedStarship) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

   
    const {
        name,
        model,
        manufacturer,
        cost_in_credits,
        crew,
        passengers,
        starship_class,
    } = store.selectedStarship;

    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: "600px" }}>
                <img
                    src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                    className="card-img-top"
                    alt={name || "Starship"}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Available";
                    }}
                />
                <div className="card-body">
                    <h1 className="card-title text-center">{name}</h1>
                    <div className="row mt-4">
                        <div className="col-6">
                            <h5>Model:</h5>
                            <p>{model}</p>
                        </div>
                        <div className="col-6">
                            <h5>Manufacturer:</h5>
                            <p>{manufacturer}</p>
                        </div>
                        <div className="col-6">
                            <h5>Cost:</h5>
                            <p>{cost_in_credits} credits</p>
                        </div>
                        <div className="col-6">
                            <h5>Crew:</h5>
                            <p>{crew}</p>
                        </div>
                        <div className="col-6">
                            <h5>Passengers:</h5>
                            <p>{passengers}</p>
                        </div>
                        <div className="col-6">
                            <h5>Class:</h5>
                            <p>{starship_class}</p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/" className="btn btn-primary">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};





