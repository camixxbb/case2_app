import Container from 'react-bootstrap/Container'
import Destaques from '../components/Destaques'
import Depoimentos from '../components/Depoimentos'
import Banners from '../components/Banners'

function Home() {
    return (
        <div style={{backgroundImage:'url(/public/fundo.png)',backgroundSize:'cover'}}>
            <Banners />
            <Container>
                <Destaques />
                <Depoimentos />
            </Container>
        </div>
    );
}

export default Home;