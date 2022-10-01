import '../../assets/css/hotelia.css';
import Aside from '../../components/home/Aside/Aside';
import Footer from '../../components/home/Footer/Footer';
import Nav from '../../components/home/Nav/Nav';
import Ubicanos from '../../components/home/Ubicanos/Ubicanos';
import Texto from "../../components/home/text/Texto";
import {Feature} from "../../components/home/feature/Feature";
import {Opinion} from "../../components/home/Opinion/Opinion";

function Home() {
    return (

        <div>
            <Nav />
            <Aside titulo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, perspiciatis." />
            <section >
                <Texto texto="Estamos ubicados en el barrio La Cabrera al norte de Bogotá, en un contexto de
                    lujo donde interactúan los negocios, el ocio y el descanso, gracias a su
                    estratégica ubicación rodeada de bancos, restaurantes de alta cocina, centros
                    comerciales, almacenes de lujo y emblemáticos parques para aprovechar la
                    naturaleza entre la ciudad caminay y hacer un poco de deporte al aire libre están
                    el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño,
                    ponemos a tu disposición una oferta gastronómica tan sofisticada commo
                    saludable a base de productos locales, cargados de lo mejor de la tradición
                    colombiana."/>
                <Feature 
                
                />
                <Ubicanos 
                mapa="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.747080010259!2d-74.0706872724002!3d4.6391467327170135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3081295ccb%3A0xd4347f67e96f6d8b!2sSENA%20CGMLTI!5e0!3m2!1ses!2sco!4v1659210612974!5m2!1ses!2sco"
                direccion="AVENIDA CARRERA 8, #12A-42, BOGOTA DC, COLOMBIA"
                telefono="+57 601 4567899"
                />
            </section >
            <Opinion />
            <Footer 
            texto1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas laboriosam facere itaque dolorem atque accusamus provident dolore dignissimos consectetur?"
            direccion="Avenida carrera8, #12A-42, Bogotá DC, Colombia"
            telefono="+57 601 4567899"
            politica="Politicas de privacidad"
            />
        </div>
    )
    }
  export default Home;