import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const CheckoutStripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishKey = 'pk_test_VFzNHaygDTPy79Z0OXPx255g';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Shop"
      billingAddress
      shippingAdress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`The Price is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default CheckoutStripeButton;
