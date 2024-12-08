import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
    return (
        <header className="p-4 bg-primaryBg text-textLight flex justify-between items-center">
            <Link
                to="/"
                className="text-2xl font-bold no-underline hover:no-underline focus:no-underline"
            >
                Mirasol Davila
            </Link>
            <Navigation />
        </header>
    );
}

export default Header;
