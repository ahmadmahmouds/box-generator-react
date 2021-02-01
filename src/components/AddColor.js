import React from 'react'
import {useState} from 'react'


const AddColor = (props) => {
    const [color, setColor] = useState("");

    const ac=(e)=>{
        e.preventDefault();
        props.addNewColor(color);
    
        
    };
    return (
        <div>
            <form onSubmit={ac}>
                <div>
                    <label>Color</label>
                    <input type="text" onChange={(e)=> setColor(e.target.value)}/>
                </div>
                <input type="submit" value="Add"/>
            
            </form>
        </div>
    )
}
export default AddColor;

