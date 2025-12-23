import './footer.css'

const footer = () => {
    return (
        <div className="FooterSection">
            <div className="FooterContainer">

                {/* <!-- Left --> */}
                <div className="FooterLeft">
                    <div className="FooterLogo"></div>
                    <p className="FooterCopyright">
                        © 2024 Architect's Canvas. All rights reserved.
                    </p>
                </div>

                {/* <!-- Middle --> */}
                <div className="FooterNav">
                    <h4 className="FooterTitle">Navigation</h4>
                    <ul className="FooterLinks">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* <!-- Right --> */}
                <div className="FooterConnect">
                    <h4 className="FooterTitle">Connect</h4>
                    <div className="FooterSocials">
                        <a href="#" aria-label="GitHub"></a>
                        <a href="#" aria-label="LinkedIn"></a>
                        <a href="#" aria-label="Twitter"></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default footer
