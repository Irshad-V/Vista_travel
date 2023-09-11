import React from 'react'
import './ContactFormStyle.css'

function ContactForm() {
    return (
        <div className='form-container'>
            <h1> Send a message to us!</h1>
            <form action="mailto:irshadvtl272@gmail.com" method="post" enctype="text/plain">
                <input placeholder='Name' />
                <input placeholder='Email' />
                <input placeholder='Subject' />
                <textarea placeholder='Message' rows='4'></textarea>
                <button type='submit'>Send Message</button>
            </form>

        </div>
    )
}

export default ContactForm
