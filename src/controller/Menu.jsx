import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import './menu.css'
function Menu() {
    return (
        <nav>
            <Link to="/"><Button variant="primary">Home</Button></Link>
            <Link to="/Actus7j"><Button variant="warning">Actus de votre choix</Button></Link>
            <Link to="/Actusa"><Button variant="success">Actus d'aujourd'hui</Button></Link>
        </nav>
    )
}

export default Menu