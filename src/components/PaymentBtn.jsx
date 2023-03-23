"use client"

import {useEffect} from "react";
import styles from '../styles/CourseCard.module.css'

const PaymentBtn = () => {
    

    useEffect(()=>{
        const Script = document.createElement("script");
        //id should be same as given to form element
        const Form = document.getElementById('paymentForm');
        Script.setAttribute('src','https://checkout.razorpay.com/v1/payment-button.js')
        Script.setAttribute('data-payment_button_id','pl_LN5Z9W4StbJJOk')
        Form.appendChild(Script);
    },[])
 

    return (
        <form id="paymentForm" className="text-center"></form> 
    );
}
 
export default PaymentBtn;
