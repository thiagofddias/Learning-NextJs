export async function getServerSideProps() {
    console.log('[Server] Gerando props para o componente...');
    const resp = await fetch('http://localhost:3000/api/produtos');
    const produtos = await resp.json();

    return {
        props: {
            produtos
        }
    }
}

export default function Dinamico2(props) {
    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return (
                <li key={produto.id}>
                    {produto.id} - {produto.nome} tem preco de R${produto.preco}
                </li>
            )
        })
    }

    return (
        <div>
            <h1>Dinamico #02</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}