

function Track(props){
    console.log(props)
    let cardStyle = {
        backgroundColor:props.backgroundColor,
        color:"white",
        height:"30vh",
        position:'relative'
    }
    let textStyle = {
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:`translate(-50%,-50%)`,
        borderBottom:'3px solid white'
    }

    return(
        <div style={cardStyle} className="col-3 mx-5 my-3 text-center ">
            <div style={textStyle}>
                <h3 >{props.name}</h3>
                
            </div>
        </div>

    )
}
export default Track