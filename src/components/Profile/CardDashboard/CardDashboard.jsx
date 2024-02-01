//Styles
import "./CardDashboard.scss";

export default function CardDashboard({title, icon, quantity}) {
    return(
        <div className="profile-dashboard-card">
            <p className="card-title">{title}</p>
            <div className="card-quantity">
                <div className="dashboard-card-icon"><span className="icon">{icon}</span></div>
                <div className="quantity">{quantity}</div>
            </div>
        </div>
    )
}