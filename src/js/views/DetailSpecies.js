import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../store/appContext";

export const DetailSpecies = () => {
    const { store, actions } = useContext(AppContext);
    const { id } = useParams();

    useEffect(() => {
        actions.fetchSpeciesDetails(id);
    }, [id, actions]);

   
    if (!store.selectedSpecies) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    
    const { name, average_height, average_lifespan, classification, designation, language } = store.selectedSpecies;

    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: "600px" }}>
                <img
                    src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}
                    className="card-img-top"
                    alt={name || "Species"}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Available";
                    }}
                />
                <div className="card-body">
                    <h1 className="card-title text-center">{name}</h1>
                    <div className="row mt-4">
                        <div className="col-6">
                            <h5>Height:</h5>
                            <p>{average_height}</p>
                        </div>
                        <div className="col-6">
                            <h5>Lifespan:</h5>
                            <p>{average_lifespan}</p>
                        </div>
                        <div className="col-6">
                            <h5>Classification:</h5>
                            <p>{classification}</p>
                        </div>
                        <div className="col-6">
                            <h5>Designation:</h5>
                            <p>{designation}</p>
                        </div>
                        <div className="col-6">
                            <h5>Language:</h5>
                            <p>{language}</p>
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




