import React from "react";
import AddButton from "../../assets/add-button.png";
import Statistics from "../../assets/statistics.png";

export default function NavigationBar() {
            return (
                <nav className="navbar bg-info-subtle">
                    <div className="container-fluid justify-content-lg-start p-3">
                        <a className="navbar-brand" href="#">
                            <img src={Statistics} alt="Logo" width="50" height="50"
                                 className="d-inline-block m-2"></img>
                            Voir les statistiques
                        </a>
                        <a className="navbar-brand" href="/exercices">
                            <img src={AddButton} alt="Logo" width="50" height="50"
                                 className="d-inline-block m-2"></img>
                            Ajouter
                        </a>
                        <a className="navbar-brand" href="#">
                            <img src={Statistics} alt="Logo" width="50" height="50"
                                 className="d-inline-block m-2"></img>
                            Profil
                        </a>
                    </div>
                </nav>
            );
}