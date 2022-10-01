import '../../assets/css/hotelia.css';
import logo from '../../assets/img/hotelia campana.svg';
import foto from '../../assets/img/foto.jpg';
import logotipo from '../../assets/img/Hotelia horizontal blanco.svg';
function dashco(){

    return (
        <div className="dash">
    <nav className="navbar">
        <div className="logo">
            <img src={logotipo} alt="logotipo" />
            <div className="name">
                <h3>Marcos Rinćon</h3>
                <p>marcos.rincon1903@gmail.com</p>
            </div>
            <div className="mobile">
                <img src={logo} alt="logo"/>
                <img src={foto} alt="foto" />
            </div>
        </div>
        <div className="menu">
            <div className="item">
                <div><i className="fa-solid fa-bed"></i><a href="/">Habitaciones</a></div>
                <div><i className="fa-solid fa-bell-concierge"></i><a href="/">Reservas</a></div>
                <div className="color"> <i className="fa-solid fa-bed"></i><a href="/">Habitaciones</a></div>
                <div><i className="fa-solid fa-bell-concierge"></i><a href="/">Habitaciones</a></div>
            </div>
            
        </div>
        <div className="exit">
        <i href="/" className="fa-solid fa-right-from-bracket"></i><a href="/">Cerrar sesión</a>
        </div>
    </nav>
    <section className="dashboard">
        <div className="bienvenido">
            <h1>Bienvenido, Marcos Rincón</h1>
        </div>
        <div className="columnas">
            <div className="foto">
                <div className="img"><img src={foto} alt="foto" /></div>
                <div className="icon">
                    <i className="fa-solid fa-file-export"></i>
                    <i className="fa-solid fa-file-image"></i>
                </div>
                <a href="/">Cambiar contraseña</a>
            </div>
            <form className="actualizar" action="login.html" method="post">
                <div className="col">
                    <div className="col-1">
                        <div>
                            <label for="tipo">Tipo de documento</label>
                            <input type="text" name="nombre" placeholder="Nombre" value="Marcos Rinćon" />
                        </div>
                        <div>
                            <label for="fecha">Fecha de nacimiento</label>
                            <input type="date" name="fecha" value="2004-03-19" />
                        </div>
                        <div>
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre" value="Marcos Alexis" />
                        </div>
                        <div>
                            <label for="genero">Género</label>
                            <div id="genero">
                                <input type="radio" name="genero" id="mujer" /><label for="mujer">Mujer</label>
                                <input type="radio" name="genero" id="hombre" /><label for="hombre">Hombre</label>
                                <input type="radio" name="genero" id="otro" /><label for="otro">Otro</label>
                            </div>
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <input type="email" placeholder="e-mail" value="marcos.rincon1903@gmail.com" />
                        </div>
                    </div>
                    <div className="col-1">
                        <div>
                            <label for="doc">Número de documento</label>
                            <input type="number" name="doc" id="doc" value="1234567890" />
                        </div>
                        <div>
                            <label for="apellido">Apellido</label>
                            <input type="text" name="apellido" id="apellido" value="Rincón Buitrago" />
                        </div>
                        <div>
                            <label for="pais">País de origen</label>
                            <input type="text" name="pais" id="pais" value="Colombia" />
                        </div>
                        <div>
                            <label for="telefono">Telefono</label>
                            <input type="number" name="telefono" id="telefono" value="31065976903" />
                        </div>
                    </div>
                </div>
                <div className="botones">
                    <button type="submit">Actualizar</button>
                </div>
            </form>
            
        </div>
        <form className="password" action="dashboard.html" method="post">
            <div className="pass">
                <div>
                    <label for="password">contraseña</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <label for="truepassword">Confirmar contraseña</label>
                    <input type="password" name="truepassword" id="truepassword" />
                </div>
            </div>
            <div className="botones">
                <button type="submit">Cambiar</button>
            </div>
        </form>
    </section>
</div>
    );
}

export default dashco;