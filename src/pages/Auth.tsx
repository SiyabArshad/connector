import * as React from 'react'

export default function Auth(){
  const[authstate,setauthstate]=React.useState<string>("")
  const buttonchange=(state:string)=>{
    setauthstate(state)
  }
    return (
    <div className='authmncont'>
        <div className='authheader'>
            <img src={require('../Assets/images/favicon.png')} alt='logo'/>
            <h1>
                Connector
            </h1>
        </div>
        <div className='authcont2'>
                <div className='authcat'>
                <span onClick={()=>buttonchange("signup")} className={authstate!=='login'?'authchecked mnbtn':'authunchecked mnbtn'}>
                    Signup
                </span>
                <span onClick={()=>buttonchange("login")} className={authstate!=='signup'?'authchecked mnbtn':'authunchecked mnbtn'}>
                    Login
                </span>
                </div>
                <div className='authbtns'>
                <button className='cwg mnbtn'>
                    Continue with Google
                </button>
                </div>
            </div>
    </div>  
  )
}
