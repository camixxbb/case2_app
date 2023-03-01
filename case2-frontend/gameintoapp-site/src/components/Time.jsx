import {Row, Col, Card, Button} from 'react-bootstrap';

function Time() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card style={{width: 200}}>
                    <Card.Img variant="top" src="../public/camila.png" />
                    <Card.Body>
                        <Card.Title>App Creator Developer</Card.Title>
                        <Card.Text>
                            Camilla Rodrigues
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card style={{width: 200}}>
                    <Card.Img variant="top" src="../public/cassia.png" />
                    <Card.Body>
                        <Card.Title>FrontEnd Director Developer</Card.Title>
                        <Card.Text>
                           Cassia Aguiar
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card style={{width: 200}}>
                    <Card.Img variant="top" src="../public/kemilly.png" />
                    <Card.Body>
                        <Card.Title>FrontEnd Assistent Developer</Card.Title>
                        <Card.Text>
                            Kemilly Correa
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card style={{width: 200}}>
                    <Card.Img variant="top" src="../public/luana.png" />
                    <Card.Body>
                        <Card.Title>BackEnd Director Developer</Card.Title>
                        <Card.Text>
                            Luana Dias
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>             
            <Col className='mt-2' sm="12" md="4">
                <Card style={{width: 200}}>
                    <Card.Img variant="top" src="../public/allana.png" />
                    <Card.Body>
                        <Card.Title>BackEnd Assistent Developer</Card.Title>
                        <Card.Text>
                            Allana Silva
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>                                     
        </Row>
    );
}

export default Time;