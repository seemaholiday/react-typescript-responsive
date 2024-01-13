import React, { useState } from 'react'
import Inputcom from '../component/input.tsx'
import '../style.css'
function Formcom() {
    const [data, setData] = useState<any>({username:"", age:"", contact:"", email:""})
   
    const onChangeEvent=(e:any)=>{
        setData({...data, [e.target.name]:e.target.value})
    }
    const onSubmitEvent=(e:any)=>{
        e.preventDefault();
        console.log("final data", data)
        alert("Api Call")
    }
    return (
        <div className='wrapper'>
            <h1>React+Typescript Responsive Form</h1>
            <form onSubmit={onSubmitEvent}>
                <div className='one-row'>
                    
                    <div className='one-row-wrapper'>
                        <div className='width-cls'>
                            <label>User name</label>
                            <Inputcom type="text" value={data.username} name="username" placeholder="username" onChange={onChangeEvent}/>
                        </div>
                        <div className='width-cls'>
                            <label>Email</label>
                            <Inputcom type="email" value={data.email} name="email" placeholder="email" onChange={onChangeEvent}/>
                        </div>
                    </div>
                    <div className='one-row-wrapper'>
                        <div className='width-cls'>
                            <label>Age</label>
                            <Inputcom type="number" value={data.age} name="age" placeholder="age" onChange={onChangeEvent}/>
                        </div>
                        <div className='width-cls'>
                            <label>Contact</label>
                            <Inputcom type="text" value={data.contact} name="contact" placeholder="contact" onChange={onChangeEvent}/>
                        </div>
                        
                    </div>
                </div>
                <div className='one-row-wrapper'>
                    <button type="submit">Submit</button>
                    <button type='reset' onClick={()=>setData({})}>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default Formcom