import "./activity.css"

export const Activity = (props) => {
    return (
        <section className="activity-section">
            <div className="container">
                <div className="activity-section__wrapper">
                    <h2 className="activity-section__title">Kegiatan Pojok Baca Probolinggo</h2>
                    <p className="activity-section__desc">Selengkapnya</p>
                </div>

                <p className="activity-section__desc2">Intip kegiatan yang telah kami selenggarakan </p>

                <div className="activity-section__card-wrapper">{props.children}</div>
            </div>
        </section>
    )
}