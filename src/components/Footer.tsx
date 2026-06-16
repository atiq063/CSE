import { footerGroups } from '../data/siteData';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <h2>Follow us</h2>
          <div className="socials">
            {['LinkedIn', 'Facebook', 'X', 'Instagram', 'Edx'].map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
        </div>
        <form className="subscribe">
          <label htmlFor="newsletter">Subscribe to the official HBKU newsletter WAMDHA</label>
          <div>
            <input id="newsletter" type="email" placeholder="Your Email Address" />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
      <div className="container footer-links">
        {footerGroups.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <h3>{group.heading}</h3>
            {group.links.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <div className="container footer-bottom">
        <p>© 2026 All rights reserved to Hamad Bin Khalifa University.</p>
        <nav aria-label="Legal links">
          <a href="#">Report an Issue</a>
          <a href="#">Cookies Policy</a>
          <a href="#">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}
