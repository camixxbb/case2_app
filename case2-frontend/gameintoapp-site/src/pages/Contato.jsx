import {Container, Button, Form} from 'react-bootstrap'
import Depoimentos from '../components/Depoimentos'

function Contato() {

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Mensagem enviada com sucesso!')
        event.target.reset()
    }

    return (
        <Container className='conteudo-margin'>
            <h1>Fala com a gente!</h1>
            <p>Achou o GameInto interessante para você? Entre em contato!</p>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome completo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Mensagem">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Você se interessa em fazer parceria?</option>
                    <option value="1">Sim! Gostaria de me tornar um parceiro.</option>
                    <option value="1">Não, obrigada.</option>
                    </select>
                    <br />
                <Button variant="dark" type="submit">
                    Enviar
                </Button>
            </Form>

            <Depoimentos />
        </Container>
    );
}

export default Contato;