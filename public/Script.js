
// const paypalCreateOrder = window.firebase.functions().httpsCallable("paypalCreateOrder");
// const paypalHandleOrder = window.firebase.functions().httpsCallable("paypalHandleOrder");


// window.paypal.Buttons({
// createOrder: (data,action)=> paypalCreateOrder().then(response=>response.data.id),

// onApprove: (data, action)=> {paypalHandleOrder({orderId: data.orderId})
// alert("THANKS FOR SHOPPING WITH US!");
// }
// }).render('#paypal-button-container')