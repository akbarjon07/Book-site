import "./stat.css"

export const Stat = (props) => {
    return (
        <section className="stat-section">
            <div className="container stat-section__container">
                <ul className="stat-section__list">
                    {props.children}
                </ul>
            </div>
        </section>
    )
}