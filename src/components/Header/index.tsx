import logoImg from "../../assets/logo.png"
import { Container, Content } from './styles'

export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="financial manager" />
                <h3>Financial Manager</h3>
                <button type="button"> Nova transação </button>
            </Content>
        </Container>
    )
}