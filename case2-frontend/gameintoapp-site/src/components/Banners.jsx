import Carousel from 'react-bootstrap/Carousel'

function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../public/ban1.png"
                        alt="Slide incrível"
                    />
                    <Carousel.Caption>
                        <h5 style={{fontFamily:'Comfortaa'}}>Conheça o GameInto</h5>
                        <p style={{
                        color: "#FF66C4",
                        fontFamily:'Climate Crisis'
                }}>Um app pensado para os gamers</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../public/ban2.png"
                        alt="Outro slide incrível"
                    />
                    <Carousel.Caption>
                        <h5 style={{fontFamily:'Comfortaa'}}>Isso mesmo que você leu!</h5>
                        <p style={{
                        color: "#FF66C4",
                        fontFamily:'Climate Crisis'
                }}>O app te acompanha no PC, celular ou tablet</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../public/ban3.png"
                        alt="Último slide"
                    />
                    <Carousel.Caption>
                        <h5 style={{fontFamily:'Comfortaa'}}>Contato para parcerias?</h5>
                        <p style={{
                        color: "#FF66C4",
                        fontFamily:'Climate Crisis'
                }}>
                            Entre em contato com a nossa equipe para conversar sobre oportunidades de parceria
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Banners