import * as React from 'react'
type modalprops={
    close:(state:Boolean)=>void
}
export default function Modalcontact({close}:modalprops) {
     return (
    <div  className='adnccont1'>
        <form className='mnform'>
       <div className='formheader'>
       <p>Add new Contact</p>
       <i onClick={()=>close(false)} className='fa-solid fa-close'></i>
       </div>
            <input type="email" placeholder='Email'/>
            <input type="text" placeholder='Username'/>
            <button className='mnbtn' type='submit'>Add contact</button>
        </form>
    </div>
  )
}
