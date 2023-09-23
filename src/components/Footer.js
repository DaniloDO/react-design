import React from "react";

import './Footer.css'

export default function Footer() {

    const linkData = [
        {
            title: 'About us',
            first: 'How it works',
            second: 'Careers',
            third: 'Testimonials',
            fourth: 'Investors'
        },

        {
            title: 'Contact us',
            first: 'Contact',
            second: 'Support',
            third: 'Destinations',
            fourth: 'Sponsorship'
        },

        {
            title: 'Resources',
            first: 'Agencies',
            second: 'Maps',
            third: 'API',
            fourth: 'Investors'
        },

        {
            title: 'Social Media',
            first: 'Youtube',
            second: 'Instagram',
            third: 'Facebook',
            fourth: 'LinkedIn'
        }
    ]

    const links = linkData.map((val) => {
        return (
            <div>
                <ul className="ul-footer">
                    <li><h5>{val.title}</h5></li>
                    <li>{val.first}</li>
                    <li>{val.second}</li>
                    <li>{val.third}</li>
                    <li>{val.fourth}</li>
                </ul>
            </div>
        )
    })

    return (
        <div className="footer-container">
            <h3 className="footer-title">We're thrilled to support you in your professional and personal endeavors</h3>
            <section className="links-section">
                <div className="links-container">
                    {links}
                </div>
            </section>
            <div className="footer-copyright">
            © 2023 Copyright: Travelandmeet.com
            </div>
        </div>
    )
}