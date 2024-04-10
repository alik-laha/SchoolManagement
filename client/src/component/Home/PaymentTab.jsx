

import qr from '../Home/qr_img_new.jpg'




const PaymentTab=()=>{
    

    return(
       <div className="payment-tab-main">
        <span className="payment-header">Donation / Pay  </span>
        <span className='payment-bank-txt'><b>Account Number :</b> 82940200001404<br/>
            <b>Branch Name :</b> KADAMBAGACHI<br/>
            <b>IFSC :</b> BARBOVJKADA<br/>
            <b>MICR :</b> 700012195<br/>
            </span>
        <img src={qr} alt='logo image' className='qr-pay-img'/> 
       </div>
    )
}
export default PaymentTab