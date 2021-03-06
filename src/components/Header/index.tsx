import { useState } from "react";
import Modal from "react-modal";

import logoImg from "../../assets/logo.png";
import { Container, Content } from "./styles";

interface HeaderProps {
    onOpenTransactionModal: () => void;
}

export function Header({ onOpenTransactionModal }: HeaderProps){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="financial manager" />
                <h3>Financial Manager</h3>
                <button type="button" onClick={onOpenTransactionModal}> 
                    Nova transação 
                </button>
            </Content>
        </Container>
    )
}