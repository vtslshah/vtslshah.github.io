import '../../styles/footer.css';

export default function Footer() {
  return (
    <footer className="site-footer section-separator">
      <div className="container">
        <div className="footer-content">
          <a href="#home" className="footer-logo">VATSAL SHAH</a>
          <p className="footer-copyright">
            © {new Date().getFullYear()}. All rights reserved by Vatsal Shah
          </p>
        </div>
      </div>
    </footer>
  );
}
