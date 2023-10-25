import React from 'react'
import './FooterStyle.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='top'>
                <div>
                    <h2>Vista</h2>
                    <p>Choose your favourite destination</p>
                </div>
                <div>
                    <a href='https://www.facebook.com/irshad.valiyattil'> <i className='fa-brands fa-facebook-square'></i> </a>
                    <a href='https://www.instagram.com/invites/contact/?i=n52po5zezuxw&utm_content=9ihb06h'> <i className='fa-brands fa-instagram-square'></i> </a>
                    <a href='/'> <i className='fa-brands fa-twitter-square'></i> </a>
                    <a href='https://wa.me/+919526388849'> <i className='fa-brands fa-whatsapp-square'></i> </a>
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <h4>Project</h4>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All Versions</a> 
                </div>
                <div>
                    <h4>Community</h4>
                    <a href='/'>GitHub</a>
                    <a href='/'>Issues</a>
                    <a href='/'>Project</a>
                    <a href='/'>Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href='/'>Support</a>
                    <a href='/'>
                        Troubleshooting
                    </a>
                    <a href='/'>Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href='/'>Terms of Service</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>License</a>

                </div>


            </div>

        </div>
    )
}

export default Footer
