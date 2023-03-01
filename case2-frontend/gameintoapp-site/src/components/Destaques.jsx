import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../public/facilidade.png" />
                    <Card.Body>
                        <Card.Title>Fácil de usar</Card.Title>
                        <Card.Text>
                            O GameInto é muito fácil de usar! O aplicativo foi pensado como um acessório diário do gamer, trazendo praticidade e conforto.
                        </Card.Text>
                        <br />
                        <LinkContainer to="/sobre">
                            <Button variant="dark">Conheça o GameInto</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../public/confiança.png" />
                    <Card.Body>
                        <Card.Title>Rápido e confiável</Card.Title>
                        <Card.Text>
                            O GameInto conta com uma equipe especializada e preparada. Seus dados são armazenados em servidores seguros e confiáveis, monitorados 24 horas por dia.
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="dark">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../public/suporte.png" />
                    <Card.Body>
                        <Card.Title>Suporte personalizado</Card.Title>
                        <Card.Text>
                            O GameInto oferece suporte personalizado para você, com exclusividades para quem for parceiro! Entre em contato conosco e fique por dentro de tudo.
                        </Card.Text>
                        <br />
                        <LinkContainer to="/contato">
                        <Button variant="dark">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;