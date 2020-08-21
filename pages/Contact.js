import React, { Component } from 'react'
import simplewallpaper from './assests/simplewallpaper.png'
import '../App.css'


class Contact extends Component {
    render () {
        return (
        <div className="contacts">
            <div container>
            <img src={simplewallpaper} alt="pic" className="back" style={{width: '100%', height: '50%'}}/>
                <div className="centered"> 
                    <h1 className="heading">Contact Us</h1>
                    <p className="contact-contents">
                            We're happy to answer questions or help you with returns.<br/><br/>

                            If you'd like to speak with us directly, please give us a call at (021) 843-6889.<br/><br/>

                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-open-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 
                            6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"/>
                            </svg>    Email:  flokkiesflock@gmail.com<br/><br/>

                            Questions for Saadiq<br/>
                            Email:  saadiqcode@gmail.com<br/>
                            Office Hours: 8:30 am to 4:30 pm GMT.<br/>

                            For any inquiries, please call: 123-456-7890
                    </p>
                </div>
            </div>
        </div>
        )
    }
}


export default Contact;
