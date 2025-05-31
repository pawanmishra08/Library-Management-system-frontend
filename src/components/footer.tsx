import { Mail, FileArchive, FolderArchive} from "lucide-react";
import "../components/footer.css"; // optional, if you want custom CSS

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-text">© 2025 Pawan Mishra. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <Mail className="icon" />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FileArchive className="icon" />
        </a>
        <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
          <FolderArchive className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
