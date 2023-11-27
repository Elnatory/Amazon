import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js';

const PaypalButton = (props) => {
    const {product} = props;
  return (
    <PayPalButtons/>
  )
}

export default PaypalButton