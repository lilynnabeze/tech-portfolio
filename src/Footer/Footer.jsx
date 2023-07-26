import "../Footer/Footer.css"

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <p className="copyright">Copyright &copy; 2023 AsonwaNnabeze.</p>
      </div>
      <div className="footer-right">
        <a href="https://www.linkedin.com/in/asonwa-nnabeze/" target="_blank" rel="noopener noreferrer">
        <img
            src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-z5dvl47c.png"
            alt="LinkedIn-icon"
            className="social-icon"
          />
        </a>
        <a href="https://wa.me/+2348161191127"  target="_blank" rel="noopener noreferrer">
        <img
            src="https://icons.veryicon.com/png/o/internet--web/color-social-media-icon/whatsapp-11.png"
            alt="Whatsapp-icon"
            className="social-icon"
          />
        </a>
        <a href="https://github.com/lilynnabeze" target="_blank" rel="noopener noreferrer">
        <img
            src="https://icones.pro/wp-content/uploads/2021/06/icone-github-bleu.png"
            alt="GitHub-icon"
            className="social-icon"
          />
        </a>
      </div>
    </footer>
  );
}