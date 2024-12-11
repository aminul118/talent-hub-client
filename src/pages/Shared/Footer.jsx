import logo from '../../assets/logos/talenthub-logo.png'
const Footer = () => {
  return (
    <div className="bg-base-200 ">
      <div className="footer text-base-content p-10 container mx-auto">
        <aside>
          <img className='w-28' src={logo} alt="" />
          <p>
            Talent Hub.
            <br />
            Providing reliable Jobs since 2000
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
