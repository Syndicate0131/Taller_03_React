
function Opinion() {

    return (
        <section className="opinion">
            <div className="titulo">
                <h1>Nuestros usuarios dicen...</h1>
            </div>
            <div className="opiniones">
                <div className="carrusel">
                    <figure className="icon-cards">
                        <div className="icon-cards__content">
                        <Tarjeta nombre="Marcos Rincón" opinion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis distinctio mollitia ducimus veniam quaerat voluptatibus odio facilis, architecto eos nam!" />
                        <Tarjeta nombre="Juan Quitian" opinion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis distinctio mollitia ducimus veniam quaerat voluptatibus odio facilis, architecto eos nam!" />
                        <Tarjeta nombre="Tatiana Cabrera" opinion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis distinctio mollitia ducimus veniam quaerat voluptatibus odio facilis, architecto eos nam!" />
                        </div>
                    </figure>
                </div>
            </div>
            <div className="vacio"></div>
        </section>
    );
}

function Tarjeta(props) {
    return (
        <div className="icon-cards__item">
            <div className="tarjeta">
                <div className="usuario">
                    <div className="img">
                        <div></div>
                    </div>
                    <div className="user">
                        <h3>{props.nombre}</h3>
                        <div className="star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <p>{props.opinion}</p>
                </div>
            </div>
        </div>
    )
}

export {Opinion, Tarjeta};