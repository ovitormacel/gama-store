//Styles
import { Link } from "react-router-dom";
import "./ProfileRecentsItem.scss";
import { FaEye } from "react-icons/fa";

export function ProfileRecentsItem({background, name, date, id}) {
    return (
        <div className="profile-recents-item">
            <div className="item-image" style={{backgroundImage : 'url("/src/assets/God of War.jpeg")'}}></div>
            <div className="item-infos">
                <p className="item-title">Spider Man Miles Morales</p>
                <p className="item-date">Acquired in: February 9, 2023</p>
                <Link to={'/product/25465'} className="btn btn-more"><FaEye /> Ver Mais</Link>
            </div>
        </div>
    )
}