import React, {useState, useEffect} from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

// stripe card options styling
const CARD_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

export default function Stripe() {

    // set the state of the success trigger
    const [success, setSuccess] = useState('false');
    const stripe = useStripe();

    return (
        <div className='container'>
            <fieldset className='FormGroup'>
                <div className='FormRow'>
                    <CardElement options={CARD_OPTIONS} />
                </div>
            </fieldset>
            <button type='submit' className="stripe-button">
                Pay $Total 
            </button>
        </div>
    )
}
