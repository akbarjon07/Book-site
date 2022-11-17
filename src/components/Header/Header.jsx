import "./header.css"
import Logo from "../../assets/images/logo.png"

export const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <a className="header__logo-link" href="./">
                    <img className="header__logo" src={Logo} alt="Logo" />
                </a>

                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="./">Beranda</a>
                        </li>

                        <li className="header__nav-item">
                            <a className="header__nav-link" href="./">Koleksi</a>
                        </li>

                        <li className="header__nav-item">
                            <a className="header__nav-link" href="./">Syarat dan Ketentuan</a>
                        </li>

                        <li className="header__nav-item">
                            <a className="header__nav-link" href="./">Kontak</a>
                        </li>
                    </ul>
                </nav>

                <button className="header__btn">Masuk</button>
            </div>
        </header>
    )
}