import foto from '../../assets/img/FotoDashboard.jpg';


function dashco() {
    return (
<div class="dash-dashmain">
<div class="dash-dashcont">
    <div class="dash-tittle">
        <h2>Bienvenido, Angie Vargas</h2>
    </div>
    <div class="dash-cont">
        <div class="dash-cont1">
            <img src={foto}/>
            <div>
               <h1><i class="fa-solid fa-file-arrow-up"></i></h1>
               <h1><i class="fa-solid fa-upload"></i></h1>
            </div>
            <a><h2>Cambiar Contraseña</h2> </a>
        </div>
        <div class="dash-cont2">
            <label for="tipdoc"><h2>Tipo de documento</h2></label>
            <select id="tipdoc" name="tipdoc">
              <option value="cc">Cedula Ciudadania</option>
              <option value="ti">Tarjeta Identidad</option>
              <option value="ext">Cedula Extrangeria</option>
            </select>
                  <label for="name"><h2 >Nombres</h2></label>
                  <input type="text" id="name" placeholder="Digite su nombre"/>
                  <label for="date"><h2 >Fecha Nacimiento</h2></label>
                  <input type="date" id="date" />
                  <h2 class="dash-gener">Genero</h2>
                  <div class="dash-gen">
                  <input type="radio"  value="1"/><h2>Mujer</h2>
                  <input type="radio"  value="2"/><h2>Hombre</h2>
                  <input type="radio"  value="3"/><h2>Otro</h2>
                </div>
                <br/>
                  <label for="email"><h2 >Email</h2></label>
                  <input type="email" id="email" placeholder="ejemplo@correo.com"/>
                  <br/>
                  <a><h2>Actualizar</h2> </a>
                  <br/>
                  <label for="password"><h2 >Contraseña</h2></label>
                  <br/>
                  <input type="password" id="password"/>
                  <br/>
                  <a><h2>Cambiar</h2> </a>
        </div>
        <div class="dash-cont3">
            <label for="numdoc"><h2 >Numero Documento</h2></label>
            <input type="text" id="numdoc" placeholder="Ej.1234567890"/>
            <br/>
            <label for="ape"><h2 >Apellido</h2></label>
            <input type="text" id="ape" placeholder="Digite sus apellidos"/>
            <br/>
            <label for="pais"><h2 >Pais de Origen</h2></label>
            <input type="text" id="pais" placeholder="Ej. Colombia"/>
            <br/>
            <label for="number"><h2 >Numero de Contacto</h2></label>
            <input type="text" id="number" placeholder="Ej. 3100000000"/>
            <label  class="dash-confirm" for="password"><h2 >Confirmar Contraseña</h2></label>
            <br/>
            <input type="password" id="password"/>
        </div>
            </div>
    </div>

    <div class="dash-dashcontv2">
        <div class="dash-tittle">
            <h2>Bienvenido, Angie Vargas</h2>
        </div>
        <div class="dash-cont">
            <div class="dash-cont1">
                <img src={foto}/>
                <div>
                   <h1><i class="fa-solid fa-upload"></i></h1>
                </div>
            </div>
            <div class="dash-cont2">
                <label for="tipdoc"><h2>Tipo de documento</h2></label>
                <select id="tipdoc" name="tipdoc">
                  <option value="cc">Cedula Ciudadania</option>
                  <option value="ti">Tarjeta Identidad</option>
                  <option value="ext">Cedula Extrangeria</option>
                </select>
                      <label for="name"><h2 >Nombres</h2></label>
                      <input type="text" id="name" placeholder="Digite su nombre"/>
                      <label for="date"><h2 >Fecha Nacimiento</h2></label>
                      <input type="date" id="date" />
                      <h2 class="dash-gener">Genero</h2>
                      <div class="dash-gen">
                      <input type="radio"  value="1"/><h2>Mujer</h2>
                      <input type="radio"  value="2"/><h2>Hombre</h2>
                      <input type="radio"  value="3"/><h2>Otro</h2>
                    </div>
                    <br/>
                      <label for="email"><h2 >Email</h2></label>
                      <input type="email" id="email" placeholder="ejemplo@correo.com"/>
                      <br/>
                      <label for="numdoc"><h2 >Numero Documento</h2></label>
                      <input type="text" id="numdoc" placeholder="Ej.1234567890"/>
                      <br/>
                      <label for="ape"><h2 >Apellido</h2></label>
                      <input type="text" id="ape" placeholder="Digite sus apellidos"/>
                      <br/>
                      <label for="pais"><h2 >Pais de Origen</h2></label>
                      <input type="text" id="pais" placeholder="Ej. Colombia"/>
                      <br/>
                      <label for="number"><h2 >Numero de Contacto</h2></label>
                      <input type="text" id="number" placeholder="Ej. 3100000000"/>
                      <label  class="dash-confirm" for="password"><h2 >Confirmar Contraseña</h2></label>
                      <br/>
                      <a><h2>Actualizar</h2> </a>
                      <br/>
            </div>
            <div class="dash-cont3">

                <label for="password"><h2 >Contraseña</h2></label>
                <br/>
                <input type="password" id="password"/>
                <br/>
                <label  class="dash-confirm" for="password"><h2 >Confirmar Contraseña</h2></label>
                <br/>
                <input type="password" id="password"/>
                <br/>
                <a><h2>Cambiar</h2> </a>
            </div>
                </div>
        </div>
    </div>
)
}
export default dashco;
