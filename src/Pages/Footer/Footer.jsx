import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#202020] text-base-content text-white">
  <aside>
    <Link>
        <img src={logo} alt="" />
    </Link>
    <p>Edwin Diaz is a software and web technologies engineer, <br /> a life coach trainer who is also a serial .</p>
  </aside> 
  <nav>
    <header className="footer-title">About</header> 
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">Service</a> 
    <a className="link link-hover">Contact</a> 
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Why Car Doctor</a>
  </nav> 
  <nav>
    <header className="footer-title">Support</header> 
    <a className="link link-hover">Support Center</a> 
    <a className="link link-hover">Feedback</a> 
    <a className="link link-hover">Accessibility</a>
  </nav>
</footer>
    );
};

export default Footer;