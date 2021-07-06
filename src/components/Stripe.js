import React, {useState, useEffect} from 'react'
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
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
    const [success, setSuccess] = useState(false);

    // set stripe object
    const stripe = useStripe();

    // set up stripe elements object
    const elements = useElements();

    // set the wage object to the value stored in localstorage
    let totalWages = localStorage.getItem('totalWages');
    // console.log('wages: ', totalWages); 


    // conditional CSS for thank you message


    // handle payment submission

    const handleSubmit = async () => {

      // prevent default component refresh
      

      // create Stripe Payment Method
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)
      })

      // if there is no error in the method creation, post payment to the backend
      // and set success to true
      // if there is an error, console log error
      if(!error){
        const {id} = paymentMethod;
        try {
          const response = await axios.post('http://localhost:4000/api/payment', {
            amount: (totalWages * 100),
            id: id,
          });

          if(response.data.success) {
            console.log('Successful Payment');
            setSuccess(true);
            localStorage.clear();
          }
        } catch (error) {
          console.log('Payment could not be processed.', error);
        }
      } else {
        console.log('Error: ', error.message);
      }
    };

    return (
        <div className='container'>
            <fieldset className='FormGroup'>
                <div className='FormRow'>
                    <CardElement options={CARD_OPTIONS} />
                </div>
            </fieldset>
            <button type='submit' onClick = {() => handleSubmit()} className="stripe-button">
                Pay ${totalWages}
            </button>
            <div className={(success ? 'visible' : 'hidden')}>
              <h1>Thank you for your Payment</h1>
            </div>
        </div>
    )
}
