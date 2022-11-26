import * as React from 'react'

export default function Alert() {
    const [close,setclose]=React.useState<Boolean>(false);
  return (
    <div style={{display:close?"none":"flex"}} className='alertbox'>
        <p>
            Operation done Sucessfully.
        </p>
        <i onClick={()=>setclose(true)} className="fa-solid fa-close customicon mnbtn"></i>
    </div>
  )
}
