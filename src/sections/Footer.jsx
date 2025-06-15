import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; {new Date().getFullYear()} QuickFix. All rights reserved.</p>
      </div>
    </footer>
  );
}
