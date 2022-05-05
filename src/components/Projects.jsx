import React from 'react'
import Track from './tracks'

export class Projects extends React.Component{


    render(){
        return(
                <>
                <h2 className=' my-4 mx-4 mt-4'>Portfolio</h2>
                <div className='d-flex'>
                <Track backgroundColor="#adb5bd" name="Web Design"></Track>
                <Track backgroundColor="#dee2e6" name="Logo Design"></Track>
                <Track backgroundColor="#adb5bd" name="Mobile Design"></Track>
                </div>
                <div className='d-flex'>
                <Track backgroundColor="#dee2e6" name="Mobile Application"></Track>
                <Track  backgroundColor="#adb5bd" name="Web Application"></Track>
                <Track backgroundColor="#dee2e6" name="Mobile Application"></Track>
                </div>
                </>
        )
    }
}

export default Projects