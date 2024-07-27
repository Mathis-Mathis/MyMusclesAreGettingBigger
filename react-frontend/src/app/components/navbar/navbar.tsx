
export default function NavigationBar() {
            return (
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid justify-content-center p-3">
                        <a className="navbar-brand" href="add">
                            <img src="/add-button.png" alt="Logo" width="50" height="50"
                                 className="d-inline-block m-2"></img>
                            Ajouter
                        </a>
                        <a className="navbar-brand" href="#">
                            <img src="/statistics.png" alt="Logo" width="50" height="50"
                                 className="d-inline-block m-2"></img>
                            Voir les statistiques
                        </a>
                    </div>
                </nav>
            );
}