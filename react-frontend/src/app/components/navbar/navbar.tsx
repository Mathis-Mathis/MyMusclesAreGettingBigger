
export default function NavigationBar() {
            return (
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid justify-content-center">
                        <a className="navbar-brand" href="#">
                            <img src="/add-button.png" alt="Logo" width="50" height="50"
                                 className="d-inline-block"></img>
                            Ajouter
                        </a>
                        <a className="navbar-brand" href="#">
                            <img src="/add-button.png" alt="Logo" width="50" height="50"
                                 className="d-inline-block"></img>
                            Voir les statistiques
                        </a>
                    </div>
                </nav>
            );
}