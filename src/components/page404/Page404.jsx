import '../../assets/css/404.css';
function Error() {

    return (
        <div className="error-prin">
            
            <div className="cloak__wrapper">
                
                <div className="cloak__container">
                    
                    <div className="cloak"></div>
                    
                </div>
                <div className="info">
            <h1>404</h1>
                <h2>Pagina no encontrada...</h2>
                <p>Por favor no cambie las rutas...</p><a href="/" target="_blank" rel="noreferrer noopener">Home</a>
            </div>
            </div>
        </div>

    )
}
export default Error;