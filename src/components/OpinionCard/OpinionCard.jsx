import "./opinionCard.css"

export const OpinionCard = (props) => {
    return (
        <div className="opinion-section__card">
            <blockquote className="opinion-section__quote">{props.quote}</blockquote>

            <div className="opinion-section__card-wrapper">
                <img src={props.img} alt="avatar" className="opinion-section__img" />

                <div className="wrapper">
                    <h5 className="wrapper-title">{props.title}</h5>
                    <p className="wrapper-desc">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}