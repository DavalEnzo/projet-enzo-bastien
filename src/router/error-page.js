import { Link, useLocation as UseLocation } from "react-router-dom";

const removeSlash = () => {
    const path = UseLocation().pathname;
    return path.replace("/", "");
}

export default function ErrorPage() {
    return (
        <div className="error" style={{margin: "auto", width: "20%"}}>
            <h2 style={{textAlign: "center"}}>Erreur 404</h2>
            <p>La page <strong>{removeSlash()}</strong> n'existe pas</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    )
}
