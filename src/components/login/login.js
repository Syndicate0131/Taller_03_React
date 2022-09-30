import wabe from '../../assets/img/Wabelogin.png';

function ini() {
    return (
      <div class="loginbody">
      <div class="login-main">
          <img src={wabe}/>
          <div class="login-icon">
              <i class="fa-solid fa-circle-user"></i>
          </div>
          <div class="login-form">
              <form class="login-form1">
                  <label for="user"><h2 >Usuario</h2></label>
                  <input type="text" id="user"/>
            <br/>
            <label for="password"><h2 >Contraseña</h2></label>
            <input type="password" id="password"/>
            <br/>
            <a href="/Dashboard"><h2>Ingresar</h2></a>
              </form>
          </div>
          <div class="login-msg">
              <h3>¿No tienes cuenta?</h3>
              <a href="/Formulario"><h3 class="login-msg1">Registrate Aquí</h3></a>
          </div>
      </div>
      </div>
    );
  }
  
  export default ini;
