import * as React from 'react'
import Contact from '../components/Contact'
import Inbox from '../components/Chatroom'
//import Alert from '../components/Alert'
//import IncommingCall from '../components/IncommingCall'
// import AudioCall from '../components/AudioCall'
import Modalcontact from '../components/Modalcontact'
export default function Home() {
   const userchecked:Boolean=true
    const [addcontactbtn,setaddcontactbtn]=React.useState<Boolean>(false);
    const btnopenclose=(state:Boolean):void=>{
            setaddcontactbtn(state);
    }
  return (
    <div className='homecont1'>
        {
            addcontactbtn?
            <Modalcontact close={btnopenclose}/>
            :null
        }
        <section className='homecont2'>
            <div className='homecontactlist'>
            <div className='homeheader'>
            <div className='homelogo'>
            <img src={require('../Assets/images/favicon.png')} alt='logo'/>
            <h1>
                Connector
            </h1>
            </div>
            <div className='notification mnbtn' onClick={()=>setaddcontactbtn(true)}>
            <span className="badge">+</span>
            </div>
        </div>
                {
                    [1,2,3,4,5,6,7,8,9,10,21,3,4,5,6].map((item,i)=>(
                            <Contact/>
                    ))
                }
            </div>
            <div className='hminbox'>
               {
                userchecked?
                <Inbox/>
                :
                <div className='hmemptyinbox'>
                    <span> Welcome to Connector</span> 
               </div>
               }
               
            </div>
        </section>
    </div>
  )
}
