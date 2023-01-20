export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_addr">
                <h1 className="footer_logo">Something</h1>
                <h2>Contact</h2>
                <address>
                        Somewhere In The World
                    <br/>
                    <a className="footer_btn"
                        href="mailto:example@gmail.com">
                            Email Us
                    </a>
                </address>
            </div>
            <ul className="footer_nav">
                <li className="nav_item">
                    <h2 className="nav_title">
                        Media
                    </h2>
                    <ul className="nav_ul">
                        <li>
                            <a href="#">Facebook</a>
                        </li>

                        <li>
                            <a href="#">Twitter</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li className="nav__item nav__item--extra">
                        <h2 className="nav__title">Pages</h2>

                        <ul className="nav__ul nav__ul--extra">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li>
                                <a href="#">Wishlist</a>
                            </li>
                            <li>
                                <a href="#">Cart</a>
                            </li>
                        </ul>
                    </li>
                        <li className="nav__item">
                            <h2 className="nav__title">
                                Legal
                            </h2>
                        <ul className="nav__ul">
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms of Use</a>
                            </li>
                            <li>
                                <a href="#">Sitemap</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                    <div className="legal">
                        <p>&copy; 2023 Something. All rights reserved.</p>
                        <div className="legal__links">
                            <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
                        </div>
                    </div>
                </li>
            </ul>
        </footer>
    )
}