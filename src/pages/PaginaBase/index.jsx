import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

function PaginaBase() {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default PaginaBase