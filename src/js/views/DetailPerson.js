import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../store/appContext";

export const DetailPerson = () => {
    const { store, actions } = useContext(AppContext);
    const { id } = useParams();

    useEffect(() => {
        actions.fetchPersonDetails(id);
    }, [id, actions]);

   
    if (!store.selectedPerson) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    
    const { name, height, mass, gender, eye_color, hair_color } = store.selectedPerson;

    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: "600px" }}>
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    className="card-img-top"
                    alt={name || "Character"}
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
                            <p>{height}</p>
                        </div>
                        <div className="col-6">
                            <h5>Mass:</h5>
                            <p>{mass}</p>
                        </div>
                        <div className="col-6">
                            <h5>Gender:</h5>
                            <p>{gender}</p>
                        </div>
                        <div className="col-6">
                            <h5>Eye Color:</h5>
                            <p>{eye_color}</p>
                        </div>
                        <div className="col-6">
                            <h5>Hair Color:</h5>
                            <p>{hair_color}</p>
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




