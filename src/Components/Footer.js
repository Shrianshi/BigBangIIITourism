import './Footer.css';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
     
    return (

            <div class="container-fluid text-center text-lg-start bg-white text-muted">
                {/* <!-- Section: Social media --> */}
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* <!-- Left --> */}
                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div>
                        <a href="" class="me-4 link-secondary">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="me-4 link-secondary">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="me-4 link-secondary">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="" class="me-4 link-secondary">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="" class="me-4 link-secondary">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="" class="me-4 link-secondary">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div class="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3 text-secondary"></i>Kanini Travels
                                </h6>
                                <p>
                                    Rattha Tek Meadows, Tower-A, 1st Floor
                                    51, Rajiv Gandhi Salai (OMR)
                                    Sholinganallur, Chennai- 600119
                                    Tamil Nadu, India
                                    044 40098700
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Packages</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Hotels</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Guides</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Book now</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Images</a>
                                </p>
                               
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fas fa-home me-3 text-secondary"></i> Chennai, Tamil Nadu, India</p>
                                <p>
                                    <i class="fas fa-envelope me-3 text-secondary"></i>
                                    shri@gmail.com
                                </p>
                                <p><i class="fas fa-phone me-3 text-secondary"></i> + 91 987 008 956</p>
                                
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div class="text-center p-4">
                    © {getCurrentYear()} Copyright:
                    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">www.kaninitravels.com</a>
                </div>
                {/* <!-- Copyright --> */}
            </div>
        
    
    )
}
export default Footer;