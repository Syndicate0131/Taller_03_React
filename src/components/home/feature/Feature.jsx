
function Feature() {

    return (
        <article id="features">
            <h2 className="features-title">
                Razones por las que disfrutarás quedarte con nosotros
            </h2>
            <div className="features-description">
                <div className="dividir">
                    <Parte
                        color="blue"
                        icon="bell-concierge"
                        titulo="Lorem ipsum dolor"
                    />
                    <Parte
                        color="black"
                        icon="dumbbell"
                        titulo="Lorem ipsum dolor"
                    />
                </div>
                <div className="dividir">
                    <Parte
                        color="black"
                        icon="bed"
                        titulo="Lorem ipsum dolor"
                    />
                    <Parte
                        color="blue"
                        icon="wifi"
                        titulo="Lorem ipsum dolor"
                    />
                </div>

                <Parte
                    color="blue c"
                    icon="bell-concierge"
                    titulo="Lorem ipsum dolor"
                />
                <Parte
                    color="black c"
                    icon="dumbbell"
                    titulo="Lorem ipsum dolor"
                />
                <Parte
                    color="blue c"
                    icon="bed"
                    titulo="Lorem ipsum dolor"
                />
                <Parte
                    color="black c"
                    icon="wifi"
                    titulo="Lorem ipsum dolor"
                />
            </div>
        </article>
    );
}

function Parte(props) {
    return (
        <div className={"feature feature-" + props.color}>
            <i className={"fa-solid fa-" + props.icon}></i>
            <h3>{props.titulo}</h3>
        </div>
    )
}

export { Feature, Parte };