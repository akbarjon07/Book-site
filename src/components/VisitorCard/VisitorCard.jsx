import "./visitorCard.css"

export const VisitorCard = (props) => {
    return (
        <div className="card">
            <p className="card__desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

            <div className="card__wrapper">
                <img className="card__wrapper-img" src={props.pic} alt="Avatar" width={80} height={80}/>

                <div className="card__wrapper-wrapper">
                    <h5 className="card__wrapper-title">{props.heading}</h5>

                    <p className="card__wrapper-desc">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}