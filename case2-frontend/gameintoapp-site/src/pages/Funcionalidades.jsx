import ListaFuncionalidades from "../components/ListaFuncionalidades"
import Container from 'react-bootstrap/Container'
import Banners from "../components/Banners"
import { useEffect, useState } from "react"
import CmsApi from '../api/CmsApi'

function Funcionalidades() {
    const [funcionalidades, setFuncionalidades] = useState([])

    useEffect(() => {
        async function fetchFuncionalidades() {
            const response = await CmsApi().getFuncionalidades()
            if(!response.ok) {
                alert('Erro ao carregar funcionalidades')
                return
            }
            const funcionalidades = await response.json()
            setFuncionalidades(funcionalidades.data)
        }

        fetchFuncionalidades()
    }, [])

    return (
        <div style={{backgroundImage:'url(/public/fundo.png)',backgroundSize:'cover'}}>
        <Banners />
        <Container className="conteudo-margin">
            <h1 style={{fontFamily:'Climate Crisis'}}>Funcionalidades</h1>
            <ListaFuncionalidades funcionalidades={funcionalidades} />
        </Container>
        </div>
    );
}

export default Funcionalidades