import { FaGithub, FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="p-4 bg-gradient-to-r  bg-primaryBg text-center text-textLight mt-0">
      <div className="flex justify-center space-x-4 text-2xl mb-2">
        <a href="https://github.com/mirasoldavila13" aria-label="GitHub" className="text-xl"><FaGithub /></a>
        <a href="https://linkedin.com/in/mirasoldavila/" aria-label="LinkedIn" className="text-xl"><FaLinkedin /></a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Mirasol Davila. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
