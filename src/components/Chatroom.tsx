import * as React from 'react'

export default function Chatroom() {
  return (
    <div className='inbmncont1'>
        <section className='inbheader'>
            <div className='inbhfc'>  
               <ul>
               <li className='inbnameit'>
                Muhammad Salah
              </li>
              <li className='inbonlineit'>
                last active 9h
              </li>
                </ul>
              </div>
              <div>
              <i className="fa-sharp fa-solid fa-phone customicon"></i>
              <i className="fa-solid fa-camera customicon"></i>
              </div>
        </section>
        <section className='inbchatsec'>
              <div className='inbmessages'>
                {
                  [1,2,3,4,5,6,7].map((item,i)=>(
                    <>
                    <div className='inbincomming'>
                    <div className='msg'>
                    <p>Hi What up ali</p>
                    <span>9:30 am</span>
                    </div>
                </div>
                <div  className='inboutgoing'>
                <div className='msg'>
                    <p>Hi What up ali</p>
                    <span>9:30 am</span>
                    </div>
                </div>
                    </>
                  ))
                }
              </div>
              <div className='inbtype'>
                <input type="text" placeholder="Message"></input>
                <button className='mnbtn'>Send</button>
              </div>
        </section>
    </div>
  )
}
