// frontend/src/pages/Categorias.js - PORTUGUÊS BRASIL
import React from 'react';
import Vitrine from '../components/Vitrine';

const dadosProdutos = {
    nocta: [
        { id: 101, nome: "Conjunto Nocta Black Gold", preco: 350.00, imagem: "img/nocta-1.jpg" },
        { id: 102, nome: "Jaqueta Nocta Tech", preco: 420.00, imagem: "img/nocta-2.jpg" }
    ],
    stussy: [
        { id: 201, nome: "Camiseta Stussy 8-Ball", preco: 180.00, imagem: "img/stussy-1.jpg" },
        { id: 202, nome: "Moletom Stussy Basic", preco: 290.00, imagem: "img/stussy-2.jpg" }
    ],
    bape: [ /* itens bape */ ],
    nike: [ /* itens nike */ ],
    acessorios: [ /* itens acessorios */ ],
    promocoes: [ /* itens promo */ ]
};

const PaginaCategoria = ({ categoriaSelecionada }) => {
    const produtos = dadosProdutos[categoriaSelecionada] || [];

    return (
        <div className="pagina-categoria">
            <header className="titulo-secao">
                <h1 style={{ color: '#DAA520', textAlign: 'center', padding: '20px' }}>
                    {categoriaSelecionada.toUpperCase()}
                </h1>
            </header>
            
            <Vitrine produtos={produtos} categoriaNome={categoriaSelecionada} />
        </div>
    );
};

export default PaginaCategoria;
