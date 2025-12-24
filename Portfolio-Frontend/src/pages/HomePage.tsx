import Navbar from "../components/Navbar/NavBar"
import '../components/HomepageCss/HomeCss.css'
import '../components/HomepageCss/skillSection.css'
import '../components/HomepageCss/FeaturedProject.css'
import '../components/HomepageCss/CtaSection.css'
import Footer from '../components/Footer/footer'

const HomePage = () => {
    return (
        <div className="Container">
            <div> <Navbar /></div>
            <div className="IntroContainer">
                <div>
                    <p className="PrimaryText">SHADRACK MAKAU</p>
                    <p className="SecondaryText">Architecting Distributed Futures: Scalable, Resilient, Secure</p>
                    <div className="HeroButtons">
                        <button className="ViewProject">View Projects</button>
                        <button className="LearnMore">LearnMore</button>
                    </div>

                </div>
                <div>
                    <img className="image" src="https://i.pinimg.com/1200x/00/08/06/0008069a050ade9ecf214d6ddd18021d.jpg"></img>
                </div>
            </div>

            <div className="FeaturedProject">
                <h1 className="headingFP">FEATURED PROJECT</h1>
                <div className="SecondFPContainer">
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

            <div className="SkillsSection">
                <div className="SkillsContainer">

                    <h2 className="SkillsTitle">SKILLS &amp; EXPERTISE</h2>

                    <div className="SkillsGrid">

                        {/* Cloud Platforms */}
                        <div className="SkillsBlock">
                            <h3 className="SkillsBlockTitle">Cloud Platforms</h3>
                            <div className="SkillsTags">
                                <span>AWS</span>
                                <span>Azure</span>
                                <span>GCP</span>
                                <span>Cloudflare</span>
                            </div>
                        </div>

                        {/* Databases */}
                        <div className="SkillsBlock">
                            <h3 className="SkillsBlockTitle">Databases &amp; Storage</h3>
                            <div className="SkillsTags">
                                <span>PostgreSQL</span>
                                <span>MongoDB</span>
                                <span>Cassandra</span>
                                <span>Redis</span>
                                <span>Elasticsearch</span>
                            </div>
                        </div>

                        {/* <!-- DevOps --> */}
                        <div className="SkillsBlock">
                            <h3 className="SkillsBlockTitle">Orchestration &amp; DevOps</h3>
                            <div className="SkillsTags">
                                <span>Kubernetes</span>
                                <span>Docker</span>
                                <span>Nomad</span>
                                <span>Terraform</span>
                                <span>GitOps</span>
                            </div>
                        </div>

                        {/* <!-- Languages --> */}
                        <div className="SkillsBlock">
                            <h3 className="SkillsBlockTitle">Languages &amp; Frameworks</h3>
                            <div className="SkillsTags">
                                <span>Go</span>
                                <span>Python</span>
                                <span>Java</span>
                                <span>Rust</span>
                                <span>Node.js</span>
                                <span>Spring Boot</span>
                            </div>
                        </div>

                        {/* <!-- Messaging --> */}
                        <div className="SkillsBlock">
                            <h3 className="SkillsBlockTitle">Messaging &amp; APIs</h3>
                            <div className="SkillsTags">
                                <span>Kafka</span>
                                <span>RabbitMQ</span>
                                <span>gRPC</span>
                                <span>REST</span>
                                <span>GraphQL</span>
                                <span>WebSockets</span>
                            </div>
                        </div>

                        {/* <!-- Monitoring --> */}
                        <div className="SkillsBlock">
                            <h3 className="SkillsBlockTitle">Monitoring &amp; Security</h3>
                            <div className="SkillsTags">
                                <span>Prometheus</span>
                                <span>Grafana</span>
                                <span>Jaeger</span>
                                <span>Vault</span>
                                <span>OAuth2</span>
                                <span>JWT</span>
                            </div>
                        </div>

                    </div>

                    <button className="SkillsButton">View All Technologies</button>

                </div>
            </div>

            <section className="CtaSection">
                <div className="CtaContainer">
                    <h2 className="CtaTitle">Ready to Build the Future?</h2>

                    <p className="CtaSubtitle">
                        Let's connect and discuss how my expertise in scalable, resilient, and
                        secure backend systems can elevate your next project.
                    </p>
                    <div className="CtaButtonWrapper">
                        <button className="CtaButton">Get in Touch</button>
                    </div>

                </div>
            </section>

            <div>< Footer /></div>
        </div>
    )
}

export default HomePage