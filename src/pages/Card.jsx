import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp , faArrowUp, faEllipsisH, faCommentAlt, faShareAlt} from "@fortawesome/free-solid-svg-icons";
import Comment from './Comment'


const Card = (props) => {
    return (
        <div>
        <header className="hcapt">
            <p className="caption">
                {props.caption}
                <FontAwesomeIcon icon={faArrowUp} className="iccapt"/>
            </p>
            

        </header>

        <div className="card">
            <div className="profile">
                <img src={props.img} alt="" height="10px" className="ava" />
                <p className="npro">
                    {props.name}    
                </p>
                <FontAwesomeIcon icon={faEllipsisH} className="tbut"/>


            </div>
            <a className="time">{props.time}</a>
            <p className="capt">{props.capt}</p>
            <img src={props.icapt} alt="" className="icapt"/>
            <div className="lcs">
                <FontAwesomeIcon icon={faThumbsUp} className="like"/>
                
                <FontAwesomeIcon icon={faCommentAlt} className="com" />
                <FontAwesomeIcon icon={faShareAlt} className="share"/>
                
                <img src={props.com} alt="" />
                <img src={props.share} alt="" />
            </div>
            <Comment/>
            
            

        </div>
        </div>
    )
}

export default Card
