import "./hero.css"

export const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <p className="hero-section__desc"><span className="desc-span">Pojok Baca</span> Probolinggo</p>

                <h1 className="hero-section__title">Pinjam Buku Secara <span className="title-span">Gratis</span> untuk Masyarakat</h1>

                <div className="hero-section__wrapper">
                    <button className="btn hero-section__btn">Cari Judul Buku</button>

                    <button className="btn hero-section__btn2">Donasi dengan Kami</button>
                </div>
            </div>
        </section>
    )
}