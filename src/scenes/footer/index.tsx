import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="Evogym logo" src={Logo} />
          <p className="my-5">
            Transform your fitness journey with us. At Evogym, we provide 
            the best facilities and training programs to help you achieve 
            your health goals. Our community is dedicated to supporting 
            you every step of the way.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <p className="my-5">Programs</p>
          <p className="my-5">Membership</p>
          <p>Contact Us</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">We're here to help you with any questions or concerns you may have.</p>
          <p>(+383) 049-533-132</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
