import React from 'react'

 const Result = (props) => {

    // const {colors}=props;

    return (
        
        <div>
        { props.colors.map((item,i)=>
        <div key ={i} style={{backgroundColor:item ,height:"100px",width:"200px",display:"inline-block" ,margin:"5px"}}></div>
                
            )}
            
        </div>
    )
}
export default Result;
