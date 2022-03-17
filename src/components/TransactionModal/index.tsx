import { useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface TransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal({ isOpen, onRequestClose}: TransactionModalProps){
    const [type, setType] = useState('deposit');

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-model-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar"/>
            </button>

            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder="Título" />
                <input placeholder="Valor" type="number" />

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button" 
                        onClick={()=> {setType('deposit')}}
                        isActive={type === 'deposit'}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    
                    <RadioBox 
                        type="button" 
                        onClick={()=> {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </ TransactionTypeContainer>

                <input placeholder="Categoria" />               
                <button type="submit"> Cadastrar </button>
            </Container>
        </Modal>
    );
}