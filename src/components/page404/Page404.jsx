import '../../assets/css/404.css';
function Page404() {

    return (
        <div>
            <h1>404</h1>
            <div className="cloak__wrapper">
                <div className="cloak__container">
                    <div className="cloak"></div>
                </div>
            </div>
            <div className="info">
                <h2>Pagina no encontrada...</h2>
                <p>Por favor no cambie las rutas...</p><a href="/home" target="_blank" rel="noreferrer noopener">Home</a>
            </div>
        </div>

    )
}
export default Page404;