import '../../assets/css/styles.css';
import Header from '../../components/nav/nav';
import Desc from '../../components/desc/desc';
import Msg from '../../components/msg/msg';
import Features from '../../components/features/features';
import Ubi from '../../components/ubi/ubi';
import Nues from '../../components/nues/nues';
import Footer from '../../components/footer/footer';


function Home() {
    return (

        <div>
        <Header />
        <Msg /> 
        <Desc />
        <Features />
        <Ubi />
        <Nues />
        <Footer />
        </div>
    )
    }
  export default Home;