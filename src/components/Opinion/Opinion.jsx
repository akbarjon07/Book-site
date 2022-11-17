import "./opinion.css"

export const Opinion = (props) => {
    return (
        <section className="opinion-section">
            <div className="container">
                <h2 className="opinion-section__title">Kenapa Kita <span className="opinion-section__title-span">Harus</span> Membaca Buku?</h2>

                <div className="opinion-section__wrapper">
                    {props.children}
                </div>
            </div>
        </section>
    )
}