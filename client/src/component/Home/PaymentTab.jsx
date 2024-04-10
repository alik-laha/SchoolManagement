

import qr from '../Home/qr_img_new.jpg'




const PaymentTab=()=>{
    

    return(
       <div className="payment-tab-main">
        <span className="payment-header">Donation / Pay  </span>
        <img src={qr} alt='logo image' className='qr-pay-img'/> 
       </div>
    )
}
export default PaymentTab