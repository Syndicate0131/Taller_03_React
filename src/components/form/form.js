function form() {
    return (
<div class="form-dashcont">
    <div class="form-tittle">
        <h2>Regístrate</h2>
    </div>
        <div class="form-cont">
        <div class="form-cont1">
            <label for="tipdoc"><h2>Tipo de documento</h2></label>
            <select id="tipdoc" name="tipdoc">
              <option value="cc">Cedula Ciudadania</option>
              <option value="ti">Tarjeta Identidad</option>
              <option value="ext">Cedula Extrangeria</option>
            </select>
            <br/>
                  <label for="name"><h2 >Nombres</h2></label>
                  <input type="text" id="name" placeholder="Digite su nombre"/>
            <br/>
            <label for="date"><h2 >Fecha Nacimiento</h2></label>
            <input type="date" id="date" />
            <br/>
            <label for="email"><h2 >Email</h2></label>
            <input type="email" id="email" placeholder="ejemplo@correo.com"/>
            <br/>
            <label for="pais"><h2 >Pais de Origen</h2></label>
            <input type="text" id="pais" placeholder="Ej. Colombia"/>
            <br/>
            <label for="password"><h2 >Contraseña</h2></label>
            <input type="password" id="password"/>
            <br/>
        </div>
        <div class="form-cont2">
            <label for="numdoc"><h2 >Numero de Documento</h2></label>
            <input type="text" id="numdoc" placeholder="Ej.1234567890"/>
            <br/>
            <label for="ape"><h2 >Apellido</h2></label>
            <input type="text" id="ape" placeholder="Digite sus apellidos"/>
            <br/>
            <h2 class="form-gener">Genero</h2>
            <div class="form-gen">
            <input type="radio"  value="1"/><h2>Mujer</h2>
            <input type="radio"  value="2"/><h2>Hombre</h2>
            <input type="radio"  value="3"/><h2>Otro</h2>
            </div>
          <label for="number"><h2 >Numero de Contacto</h2></label>
          <input type="text" id="number" placeholder="Ej. 3100000000"/>
          <br/>
          <label for="foto"><h2 >Foto</h2></label>
          <input type="file" id="foto" class="form-foto"/>
          <label for="password"><h2 >Confirmar Contraseña</h2></label>
          <br/>
          <input type="password" id="password"/>
        </div>
        </div>
        <div class="form-tc">
            <a href="#miModal"><h1><input type="checkbox"/>Terminos y Condiciones</h1></a>
        </div>
        <div class="form-but">
            <a href="/Login"><h2>Ingresar</h2> </a>
        </div>

<div>
    <div id="miModal" class="form-modal">
        <div class="form-modal-contenido">
            <h2 class="form-top-modal">Términos y condiciones</h2>
            <div class="form-bottom-modal">

                <p>Estos Términos del Servicio reflejan la forma 
                    de trabajar de Google como empresa, las 
                    leyes por las que nos regimos y determinados 
                    aspectos que siempre hemos creído que son 
                    ciertos. Por ello, estos Términos del Servicio 
                    ayudan a definir la relación que tiene Google 
                    contigo cuando interactúas con nuestros 
                    servicios. Por ejemplo, estos términos 
                    incluyen las siguientes secciones: 
                    <br/>
                    Qué puedes esperar de nosotros, donde se 
                    describe cómo proporcionamos y 
                    desarrollamos nuestros servicios. 
                    <br/>
                    Lo que esperamos de ti, donde se establecen 
                    ciertas reglas para utilizar nuestros servicios. </p>
                </div>
                <a id="close-buttom" href="#">Aceptar</a>
        </div>
    </div>
    
    <div class="form-dashcontv2">
        <div class="form-tittle">
            <h2>Regístrate</h2>
        </div>
        <div class="form-cont">
                <label for="tipdoc"><h2>Tipo de documento</h2></label>
                <select id="tipdoc" name="tipdoc">
                  <option value="cc">Cedula Ciudadania</option>
                  <option value="ti">Tarjeta Identidad</option>
                  <option value="ext">Cedula Extrangeria</option>
                </select>
                <br/>
                <label for="numdoc"><h2 >Numero de Documento</h2></label>
                <input type="text" id="numdoc" placeholder="Ej.1234567890"/>
                <br/>
                      <label for="name"><h2 >Nombres</h2></label>
                      <input type="text" id="name" placeholder="Digite su nombre"/>
                <br/>
                <label for="ape"><h2 >Apellido</h2></label>
                <input type="text" id="ape" placeholder="Digite sus apellidos"/>
                <br/>
                <label for="date"><h2 >Fecha Nacimiento</h2></label>
                <input type="date" id="date" />
                <br/>
                <h2 class="form-gener">Genero</h2>
                <div class="form-gen">
                <input type="radio"  value="1"/><h2>Mujer</h2>
                <input type="radio"  value="2"/><h2>Hombre</h2>
                <input type="radio"  value="3"/><h2>Otro</h2>
              </div>
              <label for="email"><h2 >Email</h2></label>
              <input type="email" id="email" placeholder="ejemplo@correo.com"/>
              <br/>
              <label for="number"><h2 >Numero de Contacto</h2></label>
              <input type="text" id="number" placeholder="Ej. 3100000000"/>
              <br/>
              <label for="pais"><h2 >Pais de Origen</h2></label>
              <input type="text" id="pais" placeholder="Ej. Colombia"/>
              <br/>
              <label for="foto"><h2 >Foto</h2></label>
              <input type="file" id="foto" class="form-foto"/>
              <br/>
              <label for="password"><h2 >Contraseña</h2></label>
              <br/>
              <input type="password" id="password"/>
              <br/>
              <label for="password"><h2 >Confirmar Contraseña</h2></label>
              <br/>
              <input type="password" id="password"/>
        <div class="form-tc">
            <a href="#miModal"><h1><input type="checkbox"/>Terminos y Condiciones</h1></a>
            <div id="miModal" class="form-modal">
                <div class="form-modal-contenido">
                    <h2 class="form-top-modal">Términos y condiciones</h2>
                    <div class="form-bottom-modal">

                        <p>Estos Términos del Servicio reflejan la forma 
                            de trabajar de Google como empresa, las 
                            leyes por las que nos regimos y determinados 
                            aspectos que siempre hemos creído que son 
                            ciertos. Por ello, estos Términos del Servicio 
                            ayudan a definir la relación que tiene Google 
                            contigo cuando interactúas con nuestros 
                            servicios. Por ejemplo, estos términos 
                            incluyen las siguientes secciones: 
                            <br/>
                            Qué puedes esperar de nosotros, donde se 
                            describe cómo proporcionamos y 
                            desarrollamos nuestros servicios. 
                            <br/>
                            Lo que esperamos de ti, donde se establecen 
                            ciertas reglas para utilizar nuestros servicios. </p>
                        </div>
                        <a id="close-buttom" href="#">Aceptar</a>
                </div>
            </div>
    </div>

            <div class="form-but">
                <a href="/Login"><h2>Ingresar</h2> </a>
            </div>
        </div>
        </div>
</div>
</div>
)
}
export default form;