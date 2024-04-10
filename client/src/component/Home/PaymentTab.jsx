

import qr from '../Home/qr-ahm-final.png'




const PaymentTab=()=>{
    

    return(
       <div className="payment-tab-main">
        <span className="payment-header">Donation / Pay  </span>
        <span className='payment-bank-txt'><b>Account Number :</b> 82940200001404<br/>
            <b>Branch Name :</b> KADAMBAGACHI<br/>
            <b>IFSC :</b> BARBOVJKADA<br/>
            <b>MICR :</b> 700012195<br/>
            
            <span className='payment-merchant'>
            <img src={qr} alt='logo image' className='qr-pay-img'/> <p className='payment-merchant-name'><b>Merchant Name :</b><br/>Kadambagachi Al-Hilal Mission</p></span>
            <p className='payment-vpa'>vpa : kadam99037@barodampay </p></span>
        
       </div>
    )
}
export default PaymentTab