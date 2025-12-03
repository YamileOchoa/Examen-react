import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full bg-gray-900 text-white">
            <nav className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">Json Placeholder</h1>
                <ul className="flex space-x-6">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/entities">Entities</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;