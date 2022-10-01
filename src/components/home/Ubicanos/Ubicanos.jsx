import Iframe from 'react-iframe'
function Ubicanos(props){

    return (
        <article id="ubicanos">
            <div className="titulo">
                <h1>Ubícanos</h1>
            </div>
            <div className="mapa">
                <Iframe src={props.mapa} width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
            </div>
            <div className="texto direccion">
                <p>{props.direccion}</p>
            </div>
            <div className="texto telefono">
                <p>{props.telefono}</p>
            </div>
        </article>
    );
}

export default Ubicanos;