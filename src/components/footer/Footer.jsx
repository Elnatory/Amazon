import React from 'react'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottom'
import FooterBackToTop from './FooterBackToTop'

export default function Footer(props) {
    return (
        <>
            <div className="font-titleFont">
                <FooterTop />
                <FooterBackToTop />
                <FooterMiddle />
                <FooterBottom />
            </div>
        </>
    )
}
