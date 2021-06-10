import React from 'react'
import './asset/HomePages.css'

export default function Comment() {
    const com = [
        {
            coname: "Mary Jane Watson",
            comment: "Itu gimana cara masaknya gan?"
        },
        {
            coname: "Bibi May",
            comment: "Kayanya gampang deh..cek dulu di youtube"
        },
        {
            coname: "Miles Morales",
            comment: "Ikutan dong, mau buat juga!"
        }
    ]
    return (
        <div>
            <div className="comments">
                <img src={com.acom} alt="" className="acom"/>
                <div className="ccard">
                    <p className="coname">
                        {com.coname}    
                    </p>
                    <p className="comment">{com.comment}</p>
                    
                </div>
            </div>
        </div>
    )
}
