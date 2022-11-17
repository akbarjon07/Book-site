import "./footer.css"
import Logo from "../../assets/images/logo.png"
import sm1 from "../../assets/images/ins.svg"
import sm2 from "../../assets/images/face.svg"
import sm3 from "../../assets/images/tube.svg"


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo-wrapper">
                        <div className="footer__logo-wrapper2">
                            <img src={Logo} alt="Logo" width={52} height={42}/>

                            <p>Pojok Baca Probolinggo</p>
                        </div>

                        <ul className="footer-list">
                            <li className="footer-item"><img src={sm1} alt="" width={32} height={32}/></li>
                            <li className="footer-item"><img src={sm2} alt="" width={32} height={32}/></li>
                            <li className="footer-item"><img src={sm3} alt="" width={32} height={32}/></li>
                        </ul>
                    </div>

                    <ul className="footer__contact-list">
                        <li className="bold">Kontak</li>
                        <li className="footer__contact-item">Email</li>
                        <li className="footer__contact-item">Alamat</li>
                        <li className="footer__contact-item">No. Rekening</li>
                    </ul>

                    <ul className="footer__kami-list">
                        <li className="bold">Tentang Kami</li>
                        <li className="footer__kami-item">Email</li>
                    </ul>

                    <ul className="footer__galery-list">
                        <li className="bold">Galery</li>
                        <li className="footer__galery-item">Kegiatan 2018</li>
                        <li className="footer__galery-item">Kegiatan 2019</li>
                        <li className="footer__galery-item">Kegiatan 2020</li>
                    </ul>
                </div>


            </div>

            <p className="footer__footer-desc">Pojok Baca Probolinggo 2022</p>
        </footer>
    )
}