import logo from '../../../assets/img/Hotelia negro vertical.svg';

function Texto(props){

    return (
        <article id="text">
            <div className="texto">
                <p>{props.texto}</p>
            </div>
            <div className="img">
                <img src={logo} alt="" />
            </div>
        </article>
    );
}

export default Texto;