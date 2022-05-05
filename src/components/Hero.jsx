import React from "react";
import img from '../images/hero.jpg';
import {Image} from 'react-bootstrap'

export class Hero extends React.Component {

  render(){
  //  
   let background = {backgroundSize : 'cover' ,position:'relative'};
        let textStyle = {
          position: 'absolute', 
          top: '20%', 
          left: '15%',
        
        };

        return (
            <div >
                <Image className="col-12" height={'500vh'}
                  style={background} responsive 
                  src={img}>
                </Image>
                <div  style={textStyle} className="text-white text-center">
                <h1 className=" my-3">Yasmin Ali</h1>
                <h4 className=" my-4">Front-End Developer</h4>
                <button className=" btn btn-dark">CONTACT ME</button>
            </div>
            </div>
        );
    }
}

export default Hero;