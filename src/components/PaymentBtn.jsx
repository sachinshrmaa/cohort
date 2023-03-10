"use client"

import Script from "next/script";
import {useEffect} from "react";

const PaymentBtn = () => {
    

    useEffect(()=>{
        const Script = document.createElement("script");
        //id should be same as given to form element
        const Form = document.getElementById('donateForm');
        Script.setAttribute('src','https://checkout.razorpay.com/v1/payment-button.js')
        Script.setAttribute('data-payment_button_id','pl_LN5Z9W4StbJJOk')
        Form.appendChild(Script);
    },[])
 

    return (  
        <form id="donateForm"></form>
    );
}
 
export default PaymentBtn;