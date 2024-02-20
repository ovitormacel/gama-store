import { useEffect, useState } from "react";
import "./NewPaymentMethod.scss";

import { FcSimCardChip } from "react-icons/fc";
import useAuth from "../../../../hooks/useAuth";
import { getDataProfile } from "../../../../hooks/useProfile";

import {v4 as uuidv4} from 'uuid';

export default function NewPaymentMethod(){
    //User States
    const [userData, setUserData] = useState({});
        
    //HOOK useAuth
    const {user} = useAuth();
    
    //Get Data Profile
    useEffect(() => {
        const data = getDataProfile(user);
        
        if(data){
            setUserData(data);
        }
    
    }, []);
    

    //FORM STATES
    const [cardName, setCardName] = useState("");
    const [fullName, setFullName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cvvCode, setCvvCode] = useState("");
    const [response, setResponse] = useState("");

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

    //Handle New Card Submit
    const handleNewCardSubmit = (e) => {
        e.preventDefault()

        const id = uuidv4();

        if(fullName && cardNumber && expirationDate && cvvCode){
            const newCard = {
                id: id,
                cardName,
                fullName,
                cardNumber,
                expirationDate,
                cvvCode
            }

            userData.payment_methods.push(newCard);
            
            const storage = JSON.parse(localStorage.getItem("users-local-db"));

            let userIndex;
            storage?.forEach((user, index) => {
                if(user.email === userData.email){
                    userIndex = index
                }
            })

            storage[userIndex] = userData;

            localStorage.setItem("users-local-db", JSON.stringify(storage));

            setResponse("Cartão cadastrado com sucesso.")
        } else{
            setResponse("Preencha todos os dados.");
        }
    }


    return (
        <main>
            <div className="container">
                <h2 className="section-title">Novo Cartão</h2>

                <div className="new-payment-form-container">
                    <form className="new-payment-form" onSubmit={handleNewCardSubmit}>
                        <div className="input-box">
                            <label htmlFor="full-name">Nome Completo *</label>
                            <input required type="text" name="full-name" id="full-name" onChange={(e) => setFullName(e.target.value)} value={fullName}/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="card-number">Número do Cartão *</label>
                            <input required type="text" name="card-number" id="card-number" onChange={(e) => checkCardNumber(e.target.value)} value={cardNumber} placeholder=""/>
                        </div>
                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="card-date">Data de Expiração *</label>
                                <input required type="text" name="card-date" id="card-date" onChange={(e) => checkExpirationDate(e.target.value)} value={expirationDate} placeholder="MM/AA"/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="card-cvv">CVV *</label>
                                <input required type="password" name="card-cvv" id="card-cvv" onChange={(e) => setCvvCode(e.target.value)} value={cvvCode}/>
                            </div>
                        </div>
                        <p className="response">{response}</p>
                        <div className="form-actions">
                            <input type="submit" value="Adicionar" className="btn btn-more"/>
                        </div>
                    </form>

                    <div className="card-reference">
                        <div className="card-chip"><FcSimCardChip /></div>
                        <div className="card-infos-container">
                            <p className="card-number-reference">{cardNumber != "" ? cardNumber : "XXXX XXXX XXXX XXXX"}</p>
                            <div className="card-infos">
                                <div className="info-box">
                                    <p>Nome Completo</p>
                                    <p className="info-box-info">{fullName != "" ? fullName : "Nome Completo"}</p>
                                </div>
                                <div className="info-box">
                                    <p>Expiração</p>
                                    <p className="info-box-info">{expirationDate != "" ? expirationDate : "MM/AA"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}