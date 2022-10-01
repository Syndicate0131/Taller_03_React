
function form() {

    return (
        
            <section className="dashboardg">
                <div className="bienvenido">
                    <h1>Regístrate</h1>
                </div>
                <div className="columnas">
                    <form className="registrar" action="login.html" method="post">
                        <div className="col">
                            <div className="col-1">
                                <div>
                                    <label for="tipo">Tipo de documento</label>
                                    <input type="text" name="tipo" />
                                </div>
                                <div>
                                    <label for="nombre">Nombre</label>
                                    <input type="text" name="nombre" id="nombre" />
                                </div>
                                <div>
                                    <label for="fecha">Fecha de nacimiento</label>
                                    <input type="date" name="fecha" />
                                </div>

                                <div>
                                    <label for="email">Email</label>
                                    <input type="email" placeholder="e-mail" />
                                </div>
                                <div>
                                    <label for="pais">País de origen</label>
                                    <input type="text" name="pais" id="pais" />
                                </div>
                                <div>
                                    <label for="password">contraseña</label>
                                    <input type="password" name="password" id="password" />
                                </div>
                            </div>
                            <div className="col-1">
                                <div>
                                    <label for="doc">Número de documento</label>
                                    <input type="number" name="doc" id="doc" />
                                </div>
                                <div>
                                    <label for="apellido">Apellido</label>
                                    <input type="text" name="apellido" id="apellido" />
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
                                    <label for="telefono">Telefono</label>
                                    <input type="number" name="telefono" id="telefono" />
                                </div>
                                <div>
                                    <label for="foto">Foto</label>
                                    <input type="file" name="foto" id="foto" />
                                </div>
                                <div>
                                    <label for="truepassword">Confirmar contraseña</label>
                                    <input type="password" name="truepassword" id="truepassword" />
                                </div>
                            </div>
                        </div>
                        <div className="botonesr">
                            <div>
                                <input type="checkbox" name="check" id="check" value="1" />
                                <label for="check">Acepta Terminos y Condiciones</label>
                            </div>
                            <button type="submit"><a href="/login" style={{ color: 'white' }}>Ingresar</a></button>
                        </div>
                    </form>
                </div>
                <div id="modal" style={{ display: 'none' }}>
                    <div class="titulo">
                        <h2>Términos y Condiciones</h2>
                    </div>
                    <div class="texto">
                        <p>Estos Términos del Servicio reflejan la forma de trabajar de Google como empresa, las leyes por las que nos regimos y determinados aspectos que siempre hemos creído que son ciertas. Por ello, estos Términos del Servicio ayudan a definir las relación que tiene Google contigo cuando interactúas con nuestros servicios. Por ejemplo, estos términos incluyen las siguientes secciones: <br /> Qué puedes esperar de nosotros, donde se describe comó proporcionamos i desarrollamos nuestros servicios. Lo que esperamos de ti, donde se establecen ciertas reglas para utilizar nuestros servicios.</p>
                    </div>
                    <input type="checkbox" name="x" id="x" value="1" />
                    <button><label for="x">Aceptar</label></button>
                </div>
            </section>

    )
}
export default form;