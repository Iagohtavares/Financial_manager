import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { TransactionModal } from "./components/TransactionModal";
import { TransactionsProvider } from "./TransactionsContexts";

import Modal from "react-modal";
import { useState } from "react";


Modal.setAppElement('#root')

export function App() {

  const [isTransactionModalOpen, setIsTransactionModaOpen] = useState(false);

  function handleOpenTransactionModal(){
      setIsTransactionModaOpen(true);
  }

  function handleCloseTransactionModal(){
      setIsTransactionModaOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenTransactionModal={handleOpenTransactionModal}/>
      <Dashboard />
      <TransactionModal isOpen={isTransactionModalOpen} onRequestClose={handleCloseTransactionModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}