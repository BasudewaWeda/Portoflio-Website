import React from "react"
import emailjs from "@emailjs/browser"
import ContactItem from "./ContactItem"
import { contacts } from "./ContactData"

export default function Contact() {
    const form = React.useRef()
    
    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }

    const contactItem = contacts.map(contact => <ContactItem 
        link = {contact.link}
        logo = {contact.logo}
        text = {contact.text}
    />)
    
    return (
        <section className="h-screen flex flex-col justify-center" id="contact-section">
            <div className="p-5 lg:p-20">
                <h1 className="text-sky-500 font-bold text-3xl md:text-5xl text-center p-5 lg:mb-10">CONTACT</h1>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-auto my-2 md:my-0 mr-0 lg:mr-20">
                        <label className="text-sky-500 text-xl md:text-2xl py-2">Name</label>
                        <input type="text" name="user_name" className="text-zinc-50 text-2xl bg-sky-950 rounded-lg px-3 py-2 focus:bg-zinc-50 focus:text-sky-500 focus:-translate-y-1 focus:shadow-md focus:shadow-zinc-50 transition ease-in-out"/>
                        <label className="text-sky-500 text-xl md:text-2xl py-2">Email</label>
                        <input type="email" name="user_email" className="text-zinc-50 text-2xl bg-sky-950 rounded-lg px-3 py-2 focus:bg-zinc-50 focus:text-sky-500 focus:-translate-y-1 focus:shadow-md focus:shadow-zinc-50 transition ease-in-out"/>
                        <label className="text-sky-500 text-xl md:text-2xl py-2">Message</label>
                        <textarea name="message" className="mb-5 text-zinc-50 text-xl md:text-2xl bg-sky-950 rounded-lg px-3 py-2 focus:bg-zinc-50 focus:text-sky-500 focus:-translate-y-1 focus:shadow-md focus:shadow-zinc-50 transition ease-in-out"/>
                        <input type="submit" value="Send" className="text-zinc-50 text-xl md:text-2xl p-3 bg-sky-500 rounded-lg hover:bg-zinc-50 hover:-translate-y-1 hover:text-sky-500 hover:shadow-md hover:shadow-zinc-50 hover:cursor-pointer transition ease-in-out"/>
                    </form>
                    <div className="flex flex-col items-center">
                        {contactItem}
                    </div>
                </div>
            </div>
        </section>
    )
}