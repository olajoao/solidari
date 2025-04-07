import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="p-5 gap-5 flex items-center justify-between">
            <h1 className="font-bold text-2xl">Solidari</h1>
            <nav className="flex items-center gap-5">
                <Link to="/doacoes">Doações</Link>
                <Link to="/doar">Doar</Link>
                <Link to="/pedir">Pedir</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
        </header>
    )
}
