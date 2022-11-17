import "./contact.css"

export const Contact = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="contact-section__title">Ingin <span className="contact-span">Membantu</span> Meningkatkan Literasi Anak-Anak Sekitar Kita?</h2>

                <p className="contact-section__desc">Percayakan melalui kegiatan kita</p>

                <button className="btn contact-section__btn">Donasi dengan Kami</button>

                <p className="contact-section__desc2">Atau</p>

                <button className="btn contact-section__btn2">Hubungi Kami</button>
            </div>
        </section>
    )
}