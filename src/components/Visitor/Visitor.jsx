import "./visitor.css"

export const Visitor = (props) => {
    return (
        <section className="visitor-section">
            <div className="container">
                <div className="visitor-section__wrapper">
                    <h2 className="visitor-section__title">Apa Kata Mereka?</h2>
                    <p className="visitor-section__desc">Selengkapnya</p>
                </div>

                <p className="visitor-section__desc2">Mereka yang telah menjadi pengunjung tetap kami</p>

                <div className="visitor-section__card-wrapper">{props.children}</div>
            </div>
        </section>
    )
}