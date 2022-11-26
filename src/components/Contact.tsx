import * as React from 'react'

export default function Contact() {
  const[btnactive,setbtnactive]=React.useState<Boolean>(false)
    return (
    <div onClick={()=>setbtnactive(!btnactive)} className={btnactive?"activebtncn contactcont1":"contactcont1"}>
        <div className='proflogo'>
        <div className='profile'>
            <span>S</span>
        </div>
        </div>
        <section className='parentcont2'>
        <div className='cncont2' >
            <span className='cnname'>
                Muhammad Salah
            </span>
            <span className='cntime'>9:15 am</span>    
        </div>
        <span className='cnlm'>
            Whats up man?
        </span>
        </section>
    </div>
  )
}

