const Footer = () => {
    return (
        <div id="footer">
            <div id="footer-links-container">
                <div id="footer-links">
                    <p>For appointments, please call Heiden Orthopedics during business hours</p>
                    <p>PHONE: <a href="tel:+43561588222">435-615-8822</a></p>
                    <p>HOURS: 8:30am - 5pm MST, Monday - Friday</p>
                    <a href='/info-for-physical-therapists'>Info for Physical Therapists</a>
                </div>
                <div className="fll-wrapper">
                <div className='footer-logo-links'>
                    <a rel="noreferrer" target="_blank" href='https://heidenortho.com/doctors/mark-scholl/'>
                        <img alt="Heiden Orthopedics Logo" src='https://scholl-static-images.s3.us-west-2.amazonaws.com/heidenlogow.png' />
                    </a>
                    
                </div>
                <div className='footer-logo-links'>
                    <p>If you're seeing Dr. Scholl through Salt Lake Surgical, please call <a href="tel:+8013043274">801-304-3274</a> </p>
                        <a href="https://www.saltlakesurgical.com/">
                        <img id="slsurgical" alt="Salt Lake Surgical Logo" src='https://scholl-static-images.s3.us-west-2.amazonaws.com/slslogow.png' />
                    </a>
                </div>
                </div>
            </div>
            <div id='footer-copyright'>
                <h1>&copy;Copyright 2022 Mark D Scholl, M.D., P.C All rights reserved.</h1>
            </div>
        </div>
    )
}

export default Footer;
