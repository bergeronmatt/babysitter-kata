import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js"
import Stripe from './Stripe';

// Stripe public publishable key
const PUBLIC_KEY = 'pk_test_51IR3ItGoEhcHp2VRDjKKBdzHKCAGqsRF6Ki4mIW9HzK7TOIUAPDowkt73UFTRLmQIXQxmLTyeBeKir9iBZ9GpSsy00qLITBnqK';
// Set public key to a stripe test promise object
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <div className = 'container'>
            <Elements stripe={stripeTestPromise}>
                <Stripe />
            </Elements>
        </div>
    )
}
