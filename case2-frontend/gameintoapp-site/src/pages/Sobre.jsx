import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
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
        <Container className='conteudo-margin'>
            <h1 style={{fontFamily:'Comfortaa'}}>Saiba mais sobre o GameInto</h1>
            <p>{sobre.text}</p>
            <img src='../public/disponivel.png' className='img-fluid shadow-4'/>
            <h3 style={{fontFamily:'Comfortaa'}}>Isso mesmo que você leu! O GameInto está disponível para ser utilizado em qualquer plataforma!</h3>
            <Depoimentos />
        </Container>
    );
}

export default Sobre