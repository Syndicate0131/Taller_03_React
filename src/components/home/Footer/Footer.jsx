
function Footer(props){

    return (
        <footer>
        <div className="div">
            <p className="into">{props.texto1}</p>
        </div>
        <div className="div icons">
            <div className="into ">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>
        </div>
        
        <hr />
        <div className="div">
            <div className="into">
                <i className="fa-solid fa-location-dot"></i>
                <p>{props.direccion}</p>
            </div>
            <div className="into">
                <i className="fa-solid fa-phone"></i>
                <p>{props.telefono}</p>
            </div>
        </div>
        <hr />
        <div className="div">
            <p className="into">{props.politica}</p>
        </div>
        <hr />
    </footer>
    );
}

export default Footer;