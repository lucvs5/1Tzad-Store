// frontend/src/pages/Home.js - PORTUGUÊS BRASIL
import React, { useState } from 'react';
import '../styles/global.css'; // Estilos que faremos a seguir

const Home = () => {
    const [carrinho, setCarrinho] = useState([]);

    // Lista simulada de produtos (Pode ser movida para /models futuramente)
    const produtos = [
        { id: 1, name: "Conjunto Bape Laranja", price: 280, img: "url_da_foto.jpg" },
        { id: 2, name: "Nocta Tech Fleece", price: 450, img: "url_da_foto.jpg" },
        // ... adicione os outros 4 aqui
    ];

    const adicionarAoCarrinho = (p) => {
        setCarrinho([...carrinho, { ...p, qty: 1 }]);
        alert("Produto adicionado ao carrinho!");
    };

    return (
        <div className="tzad-container">
            {/* Header seguindo suas fotos */}
            <header className="header-pro">
                <div className="menu-btn">☰</div>
                <h1 className="logo-texto">TZAD STORE</h1>
                <div className="cart-btn">🛒 <span>{carrinho.length}</span></div>
            </header>

            {/* Vitrine de Produtos */}
            <main className="vitrine-grid">
                {produtos.map(p => (
                    <div key={p.id} className="card-luxo">
                        <div className="tag-promo">PROMO</div>
                        <img src={p.img} alt={p.name} />
                        <h3>{p.name}</h3>
                        <p className="preco">R$ {p.price}</p>
                        <button onClick={() => adicionarAoCarrinho(p)}>ADICIONAR</button>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Home;
