import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3' style={{fontFamily:'Climate Crisis'}}>Depoimentos</h2>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="../public/woony.png" alt="Foto do depoimento" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Woonyoung</strong>
                <p>
                    "Participei dos testes do aplicativo GameInto e estou impressionada com a facilidade do app! É simplesmente incrível! Eu nunca tinha conhecido qualquer aplicativo parecido, me diverti muito no fórum e conheci diversos jogos a partir de listas diferentes!"
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="../public/kylie.png" alt="Foto do depoimento 2" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Kylie Jenner</strong>
                <p>
                "Sou parceira do projeto desde do início. O que me deixa mais impressionada no aplicativo é a confiança que a API trás para o seu cliente. Existe um time gigante comprometido com o levantamento e observação da API e eu pude perceber o empenho. As atualizações funcionam direitinho. Não me arrependo de ser uma parceira."
                </p>
            </Col>
        </Row>        
        </>
    )
}

export default Depoimentos