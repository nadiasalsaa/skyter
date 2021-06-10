
import React, { Component } from 'react'
import './asset/HomePages.css'
import logo from'./asset/image/shazam.png'
import sl2 from './asset/image/sl2.jpg'
import a4 from './asset/image/a4.jpg'
import a2 from './asset/image/a2.jpg'
import a3 from './asset/image/a3.jpg'
import bell from './asset/image/bell.svg'
import Card from '../pages/Card'


export default class HomePages extends Component {
    state = {
        caption: "What's on your mind, Paul?",
        name1: "Thomas Ben", 
        time1: "45 min ago",
        capt1: "Being a father is sometimes my hardest but always my most rewarding job.  Happy Father's Day to all dads out there.",
        name2:"Miranda Shaffer", 
        time2: "June 21, 12:45 pm",
        capt2:"Having fun while cooking and eating variety of foods with @Sarah",
        name3:"David Cox",
        time3: "June 21, 11:30 am",
        
        

    }
    
    render() {
        return (
            <div>
                <header className="container">
                    <div >
                        <img src={logo} alt="" className="logo"/>
                        <img src={bell} alt="" className="bell"/>
                        <img src={a4} alt="" className="apro"/>
                    </div>
                </header>
                <div>
                        <div>

                        <Card
                            
                            caption={this.state.caption}
                        />
                        </div>
                        <Card 
                            img={a4}
                            name={this.state.name1}
                            time={this.state.time1}
                            capt={this.state.capt1}
                            acom={a3}
                            
                        />
                        
                        <Card 
                            img={a2}
                            name={this.state.name2}
                            time={this.state.time2}
                            capt={this.state.capt2}
                            icapt={sl2}
                            acom={a3}
                            coname={this.state.coname1}
                            comment={this.state.comment1}
                            acom={a3}
                            coname={this.state.coname2}
                            comment={this.state.comment2}
                            acom={a3}
                            coname={this.state.coname3}
                            comment={this.state.comment3}
                        />

                        <Card
                             img={a3}
                             name={this.state.name3}
                             time={this.state.time3}
                        /> 
                        {/* <div>
                            <Card
                    
                            />
                            <ReactRoundedImage 
                            image={p}
                            roundedColor="#FFFFFF"
                            imageWidth="200"
                            imageHeight="200"
                            roundedSize="2"
                            borderRadius="70"
                            />
                        </div> */}
                        
                </div>
                
                

            </div>
           
        )
    }
}
