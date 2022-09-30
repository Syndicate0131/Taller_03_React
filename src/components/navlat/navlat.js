import hlb from '../../assets/img/Hotelia horizontal blanco.svg';
import hc from '../../assets/img/hotelia campana.svg';
import f2d from '../../assets/img/Foto2Dashboard.png';

function navlat() {
    return (
        <div>
<nav class="dash-navvert">
<div class="dash-navvert1">
    <img src={hlb}/>
    <h2>Angie Vargas</h2>
    <p>angievargas2@gmail.com</p>
</div>
<div class="dash-navvert2">
<h2> <i class="fa-solid fa-bed"></i> Habitaciones</h2>
<h2 class="dash-navd1"><i class="fa-solid fa-bell-concierge"></i> Reservas</h2>
<h2> <i class="fa-solid fa-bed"></i> Habitaciones</h2>
<h2><i class="fa-solid fa-bell-concierge"></i> Habitaciones</h2>
</div>
<div class="dash-navvert3">
    <a href="/"><h2 class="dash-navd2"><i class="fa-solid fa-arrow-right-from-bracket"></i> Cerrar Sesión</h2></a>
</div>
</nav>
<nav class="dash-navvertv2">
    <div class="dash-navvert1">
        <img src={hc}/>
        <img src={f2d}/>
    </div>
    <div class="dash-navvert2">
    <h2> <i class="fa-solid fa-bed"></i> </h2>
    <h2 class="dash-navd1"><i class="fa-solid fa-bell-concierge"></i></h2>
    <h2> <i class="fa-solid fa-bed"></i> </h2>
    <h2><i class="fa-solid fa-bell-concierge"></i> </h2>
    </div>
    <div class="dash-navvert3">
        <a href="../index.html"><h2 class="dash-navd2"><i class="fa-solid fa-arrow-right-from-bracket"></i></h2></a>
    </div>
</nav>
</div>
)
}
export default navlat;
