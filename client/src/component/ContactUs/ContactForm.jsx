import { useState } from 'react'
import emailjs from '@emailjs/browser'

export const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [emailSent, setEmailSent] = useState('false')

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_yjmjno8'
            const templateId = 'template_hshxz6f'
            const templateParams = {
                name,
                email,
                message
            }

            emailjs.send(serviceId, templateId, templateParams)
                .then(response => console.log(response))
                .then(error => console.log(error))

            setName('')
            setEmail('')
            setMessage('')
            setEmailSent('true')
        } else {
            alert('Please fill in all fields.')
        }
    }

    return (
        <div id="contact-form" className="absolute mt-52 ml-48 w-80 float-left border-2 p-2 rounded-xl shadow-xl text-xl">
           <p className="text-2xl">Feedback & Queries</p>

            <div>
            <label className="text-sm">Name</label>
                    <br></br>
                    <input className="bg-gray-50 border border-gray-300 
                                        text-sm rounded-lg focus:border-blue-500
                                        w-full p-2.5"
                            type="email"
                            placeholder="Your Name" value={name} onChange={e => setName(e.target.value)}/>


                    <br></br> 
            <label className="text-sm">Email Address*</label>
                    <br></br>
                    <input className="bg-gray-50 border border-gray-300 
                                        text-sm rounded-lg focus:border-blue-500
                                        w-full p-2.5"
                            type="email"
                            placeholder="Your Email Address" value={email} onChange={e => setEmail(e.target.value)}/>


                    <br></br>
                    <label className="text-sm">
                        Drop Your Query 
                    </label>
                    <br></br>
                    <textarea className="bg-gray-50 border border-gray-300 
                                            text-sm rounded-lg 
                                            focus:border-blue-500 
                                            w-full p-2.5"
                                rows="4"
                                cols="25"
                                maxLength="300"
                                placeholder="Max Allowed Characters: 300" value={message} onChange={e => setMessage(e.target.value)}>
                    </textarea>

            </div>


            {/* <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} /> */}
            {/* <input type="email" placeholder="Your email address"  /> */}
            {/* <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea> */}
            <button className="bg-blue-500 hover:bg-blue-700 
                                        text-white font-bold 
                                        py-2 px-4 rounded" onClick={submit}>Send Message</button>

            <span className={emailSent ? 'visible' : undefined}>Thank you for your message, we will be in touch in no time!</span>
        </div>

        // indranil








    )
}