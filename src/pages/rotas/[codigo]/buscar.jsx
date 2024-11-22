import { useRouter } from "next/router"

export default function buscar() {
    const router = useRouter()

    console.log(router.query)

    console.log(router.query.codigo)

    return (
        <div>
            <h1>Rotas - Id - Buscar</h1>
        </div>
    )
}