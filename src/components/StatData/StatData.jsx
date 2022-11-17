import "./statData.css"
import img from "../../assets/images/img.png"

export const StatData = (props) => {
    return (
        <li className="stat-section__item">
            <img className="stat-section__img" src={img} alt="img" />

            <div className="stat-section__wrapper">
                <h3 className="stat-section__wrapper-title">{props.name}</h3>
                <p className="stat-section__wrapper-desc">{props.desc}</p>
            </div>

        </li>
    )
}