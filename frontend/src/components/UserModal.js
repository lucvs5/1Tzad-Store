// frontend/src/components/UserModal.js - PORTUGUÊS BRASIL
import React, { useState } from 'react';

const UserModal = ({ isOpen, onClose }) => {
    // Estado para saber qual aba está ativa (Igual ao seu projeto antigo)
    const [abaAtiva, setAbaAtiva] = useState('carrinho');

    if (!isOpen) return null;

    return (
        <div className="modal-overlay-tzad" onClick={onClose}>
            <div className="modal-content-tzad" onClick={e => e.stopPropagation()}>
                
                {/* CABEÇALHO DO PAINEL */}
                <div className="painel-header">
                    <button className="voltar-btn" onClick={onClose}>✕ FECHAR</button>
                    <div className="perfil-resumo">
                        <img src="/img/avatar-padrao.png" alt="User" />
                        <span>Olá, Cliente Tzad</span>
                    </div>
                </div>

                {/* MENU DE NAVEGAÇÃO (As abas que você enviou) */}
                <nav className="painel-nav">
                    <button onClick={() => setAbaAtiva('carrinho')} className={abaAtiva === 'carrinho' ? 'active' : ''}>CARRINHO</button>
                    <button onClick={() => setAbaAtiva('enderecos')} className={abaAtiva === 'enderecos' ? 'active' : ''}>ENDEREÇOS</button>
                    <button onClick={() => setAbaAtiva('mensagens')} className={abaAtiva === 'mensagens' ? 'active' : ''}>MENSAGENS</button>
                    <button onClick={() => setAbaAtiva('rastrear')} className={abaAtiva === 'rastrear' ? 'active' : ''}>RASTREAR</button>
                </nav>

                {/* CONTEÚDO DINÂMICO DAS ABAS */}
                <div className="painel-corpo">
                    
                    {abaAtiva === 'carrinho' && (
                        <div id="aba-carrinho">
                            <h3>Seu Carrinho</h3>
                            <div className="lista-itens-carrinho">
                                {/* Aqui o JS vai listar os produtos adicionados */}
                                <p>O carrinho está vazio.</p>
                            </div>
                            <button className="btn-finalizar-telegram">FINALIZAR NO TELEGRAM</button>
                        </div>
                    )}

                    {abaAtiva === 'mensagens' && (
                        <div id="aba-mensagens">
                            <h3>Minhas Mensagens</h3>
                            <div className="chat-container">
                                <p className="msg-aviso">Aqui aparecerão as respostas do nosso time via Telegram.</p>
                                {/* Onde as mensagens do bot serão renderizadas */}
                            </div>
                        </div>
                    )}

                    {/* Adicionar as outras abas conforme necessário... */}
                </div>

            </div>
        </div>
    );
};

export default UserModal;
