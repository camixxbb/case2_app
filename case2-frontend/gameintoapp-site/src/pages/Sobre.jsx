import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import Time from '../components/Time'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'

function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
        <div style={{backgroundImage:'url(/public/fundo.png)',backgroundSize:'cover'}}>
        <Container className='conteudo-margin'>
            <h1 style={{fontFamily:'Climate Crisis'}}>Saiba mais sobre o GameInto</h1>
            <p>{sobre.text}</p>
            <h3 style={{fontFamily:'Comfortaa'}}>Compactibilidade com qualquer plataforma</h3>
            <p>O GameInto tem o compromisso de trazer acessibilidade aos seus clientes e por isso conta com a disponibilidade em todas as plataformas mobile e desktop, trazendo um verdadeiro conforto e praticidade aos usuários do app!</p>
            <img src='../public/disponivel.png' className='img-fluid shadow-4'/>
            <br />
            <br />
             <h3 style={{fontFamily:'Comfortaa'}}>Nosso Time</h3>
            <p>Essa foi a equipe responsável pelo desenvolvimento do aplicativo</p>
            <Time />
            <Depoimentos />
        </Container>
        </div>
    );
}

export default Sobre