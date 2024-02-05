import { useState } from "react";
import "./NewPaymentMethod.scss";

import { FcSimCardChip } from "react-icons/fc";

export default function NewPaymentMethod(){

    //FORM STATES
    const [fullName, setFullName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cvvCode, setCvvCode] = useState("");

    const checkCardNumber = (value) => {

        let fixedCardNumber = value.replace(/[^a-zA-Z0-9]|[a-zA-Z]+/g, "");
        fixedCardNumber = fixedCardNumber.replace(/(\d{4})/g, "$1 ");
        fixedCardNumber = fixedCardNumber.replace(/\ $/, "");
        fixedCardNumber = fixedCardNumber.substring(0, 19);

        setCardNumber(fixedCardNumber);
    }

    const checkExpirationDate = (value) => {
        let fixedDate = value.replace(/[^a-zA-Z0-9]|[a-zA-Z]+/g, "");
        fixedDate = fixedDate.replace(/(\d{2})/g, "$1/");
        fixedDate = fixedDate.replace(/\/$/, "");
        fixedDate = fixedDate.substring(0, 5);

        setExpirationDate(fixedDate);
    }

    return (
        <main>
            <div className="container">
                <h2 className="section-title">New Payment Method</h2>

                <div className="new-payment-form-container">
                    <form className="new-payment-form">
                        <div className="input-box">
                            <label htmlFor="full-name">Full Name</label>
                            <input type="text" name="full-name" id="full-name" onChange={(e) => setFullName(e.target.value)} value={fullName}/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="card-number">Card Number</label>
                            <input type="text" name="card-number" id="card-number" onChange={(e) => checkCardNumber(e.target.value)} value={cardNumber} placeholder=""/>
                        </div>
                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="card-date">Expiration Date</label>
                                <input type="text" name="card-date" id="card-date" onChange={(e) => checkExpirationDate(e.target.value)} value={expirationDate} placeholder="MM/YY"/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="card-cvv">CVV Code</label>
                                <input type="password" name="card-cvv" id="card-cvv" onChange={(e) => setCvvCode(e.target.value)} value={cvvCode}/>
                            </div>
                        </div>
                        <div className="form-actions">
                            <input type="submit" value="Add New Method" className="btn btn-more"/>
                            <button className="btn btn-blank" id="clear-form">Clear Form</button>
                        </div>
                    </form>

                    <div className="card-reference">
                        <div className="card-chip"><FcSimCardChip /></div>
                        <div className="card-infos-container">
                            <p className="card-number-reference">{cardNumber != "" ? cardNumber : "XXXX XXXX XXXX XXXX"}</p>
                            <div className="card-infos">
                                <div className="info-box">
                                    <p>Person Name</p>
                                    <p className="info-box-info">{fullName != "" ? fullName : "Full Name"}</p>
                                </div>
                                <div className="info-box">
                                    <p>Expiration</p>
                                    <p className="info-box-info">{expirationDate != "" ? expirationDate : "MM/YY"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}