import Navbar from "../components/NavBar"
import '../components/HomeCss.css'

const HomePage = () => {
    return (
        <div className="Container">
            <div> <Navbar /></div>
            <div className="IntroContainer">
                <div>
                    <p className="PrimaryText">SHADRACK MAKAU</p>
                    <p className="SecondaryText">Architecting Distributed Futures: Scalable, Resilient, Secure</p>
                    <button className="ViewProject">View Projects</button>
                    <button className="LearnMore">LearnMore</button>
                </div>
                <div>
                    <img className="image" src="https://i.pinimg.com/1200x/00/08/06/0008069a050ade9ecf214d6ddd18021d.jpg"></img>
                </div>
            </div>

            <div className="FeaturedProject">
                <h1 className="headingFP">FEATURED PROJECT</h1>
                <div className="SecondFDContainer">
                    <img className="FPImage" src="https://i.pinimg.com/1200x/00/08/06/0008069a050ade9ecf214d6ddd18021d.jpg"></img>
                    <p className="FPPrimaryText">Quantum Ledger: Distributed Transaction System</p>
                    <p className="FPSecondaryText">Designed and implemented a high-throughput,
                        fault-tolerant distributed ledger for secure, real-time financial transactions,
                        leveraging event-sourcing and polyglot persistence. Achieved 99.999% uptime and processed over
                        10,000 transactions per second.
                    </p>
                    <button className="Explore">Explore Project</button>
                </div>
            </div>
            <div id="skills"></div>
            <div id="ContactCTA"></div>
            <div id="footer"></div>
        </div>
    )
}

export default HomePage