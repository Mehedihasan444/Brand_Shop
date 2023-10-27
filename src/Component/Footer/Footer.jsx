import logo from '../../assets/brandIMG/Logo.png'



const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer p-10  text-base-content max-w-7xl mx-auto">
        <nav>
          <div className="">
            <img src={logo} alt="" className="w-24" />
            <p className="">We care about you. This your trusted place.</p>
          </div>
          
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control lg:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="select-none rounded-lg bg-black py-4 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
