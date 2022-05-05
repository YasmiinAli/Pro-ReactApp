import React from "react";
import Progressbar  from './progressBar'

export class Skills extends React.Component{

  render(){
    let textStyle = {
      position:'absolute',
          borderBottom:'3px solid white'
    }
    return(
        <>
        <div className=" bg-black text-center ">
            <h3 className=" text-white ">Skills</h3>
            <p className=" offset-3 col-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illo modi ullam eveniet rerum omnis nemo tenetur alias, animi sed tempora, officia blanditiis, autem impedit pariatur placeat vel assumenda veniam!</p>
        <div className="">
                      <div className=" text-white col-3 offset-3">
                      <h4 style={textStyle}>MY FOCUS</h4>
                      <p>UI/UX DESIGN</p>
                      <p>Responsive Design</p>
                      <p>Web Design</p>
                      <p>Mobile App Design</p>
                  </div>
        <div className="offset-2 ">
          <Progressbar className="mt-2" width="80" />
        <Progressbar className="mt-2" width="70"/>
        <Progressbar className="mt-2" width="85"/>
        <Progressbar className="mt-2" width="90"/>
        <Progressbar className="mt-2" width="93"/>
        </div>
        </div>
  </div>
        </>
        
    )
  }
}

export default Skills;