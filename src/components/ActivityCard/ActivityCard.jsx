import "./activityCard.css"

export const ActivityCard = (props) => {
    return (
        <div className="activity-section__card">
            <img className="activity-section__card-img" src={props.bg} alt="Bg" width={380} height={340}/>

            {/* <p className="activity-section__card-year">{props.year}</p>

            <div className="activity-section__card-collection">
                <h6 className="activity-section__card-name">{props.nick}</h6>
                <p className="activity-section__card-meaning">{props.meaning}</p>
            </div> */}
        </div>

    )
}