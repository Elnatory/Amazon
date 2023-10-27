import React from 'react'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottom'

export default function Footer(props) {
    return (
        <>
            <div className="font-titleFont">
                <FooterTop />
                <FooterMiddle />
                <FooterBottom />
            </div>
        </>
    )
}
