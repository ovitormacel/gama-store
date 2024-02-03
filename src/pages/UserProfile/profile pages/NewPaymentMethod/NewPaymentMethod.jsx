import "./NewPaymentMethod.scss";

import { FcSimCardChip } from "react-icons/fc";

export default function NewPaymentMethod(){
    return (
        <main>
            <div className="container">
                <h2 className="section-title">New Payment Method</h2>

                <div className="new-payment-form-container">
                    <form className="new-payment-form">
                        <div className="input-box">
                            <label htmlFor="full-name">Full Name</label>
                            <input type="text" name="full-name" id="full-name" />
                        </div>
                        <div className="input-box">
                            <label htmlFor="card-number">Card Number</label>
                            <input type="text" name="card-number" id="card-number" placeholder=""/>
                        </div>
                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="card-date">Expiration Date</label>
                                <input type="text" name="card-date" id="card-date" placeholder="MM/YY"/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="card-cvv">CVV Code</label>
                                <input type="password" name="card-cvv" id="card-cvv"/>
                            </div>
                        </div>
                        <input type="submit" value="Add New Method" className="btn btn-more"/>
                    </form>

                    <div className="card-reference">
                        <div className="card-chip"><FcSimCardChip /></div>
                        <div className="card-infos-container">
                            <p className="card-number-reference">5678 8762 9086 1234</p>
                            <div className="card-infos">
                                <div className="info-box">
                                    <p>Person Name</p>
                                    <p className="info-box-info">Marcos Holloway</p>
                                </div>
                                <div className="info-box">
                                    <p>Expiration</p>
                                    <p className="info-box-info">07/28</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}