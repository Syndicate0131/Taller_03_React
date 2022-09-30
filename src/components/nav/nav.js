import logo from '../../assets/img/Hotelia horizontal blanco.svg';

function Nav() {
    return (
        <nav>
        <div class="index-logo">
            <img src={logo}/>
            <i class="fa-solid fa-bars"></i>
        </div>
        <div class="expandable">
        <div class="index-menu">
            <a href="../features/features" class="index-item">Inicio</a>
            <a href="ubicanos.html" class="index-item">Ubícanos</a>
            <a href="opiniones.html" class="index-item">Opiniones</a> 
            <hr class="index-menu-hr" noshade="" />
            <a href="Login" class="index-item"><button class="index-navbar-button"><i class="fa-solid fa-user"></i> Iniciar Sesión</button></a>
        </div>
        </div>
    </nav>
    );
  }
  
  export default Nav;
