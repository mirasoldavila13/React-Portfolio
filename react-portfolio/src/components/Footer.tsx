import { FaGithub, FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-center text-white">
      <div className="flex justify-center space-x-4 text-xl">
        <a href="https://github.com/mirasoldavila13" aria-label="GitHub" className="text-xl"><FaGithub /></a>
        <a href="https://linkedin.com/in/mirasoldavila/" aria-label="LinkedIn" className="text-xl"><FaLinkedin /></a>
      </div>
    </footer>
  );
}

export default Footer;
