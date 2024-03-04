
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../logo.png';

const Nav = ({dash=false,form=false,addform=false,nominee=false,payment=false,settings=false})=>{
  let [menuShow, setMenuShow]  = useState();
  const onMenuTap = ()=>{
    setMenuShow(true)  //show for small screens
    if(menuShow === true){
      setMenuShow(false) //hide for small screens
    }else{
      setMenuShow(true)
    }
  }
    return(
        <>
        {/* <!-- mobile view --> */}
        <div className="md:hidden flex justify-between border-l-8 border-red-600 bg-white text-white">
        
              <Link className=""  to={`${process.env.PUBLIC_URL}/dashboard`}>
                <img className="h-16 bg-white p-2 m-3 rounded-b-3xl mb-0" src={process.env.PUBLIC_URL+"/logo.png"} alt=""/>
            </Link>

            <div className="flex"> 
                <button onClick={onMenuTap} className="focus:outline-none border border-white focus:border-red-600 mobile-menu-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 self-center text-red-600 m-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                </button>
            </div> 
        </div> 
        {/* <!-- sidebar --> */}
        <div className={menuShow? "sidebar z-10 bg-gray-100 border border-gray-100 text-white lg:w-72 absolute md:relative inset-y-0 left-0 transform sm:-translate-x-full md:translate-x-0 transition duration-300 ease-in-out": "sidebar bg-gray-100 border border-gray-100 text-white w-72 absolute md:relative inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-300 ease-in-out"}>
           {/* <!-- logo --> */}
          <Link className=""  to={`${process.env.PUBLIC_URL}/dashboard`}>
            <img className="h-16 bg-gray-100 p-2 m-3 rounded-b-3xl mb-0 m-auto" src={process.env.PUBLIC_URL+"/logo.png"} alt=""/>
        </Link> 
            {/* <!-- nav --> */}
             <nav className="mt-5 text-black">
                <Link  to={`${process.env.PUBLIC_URL}/dashboard`} className={dash?" my-2 py-2 px-5 flex rounded-md mx-2 bg-red-700  text-white  hover:text-white hover:bg-red-700 transition duration-400": "flex my-2 py-2 px-5 rounded-md mx-2 hover:text-white hover:bg-red-700 transition duration-400"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    <span className="px-4">Dashboard</span></Link>
                <hr className="mx-5"/>
                <Link  to={`${process.env.PUBLIC_URL}/forms`} className={form?" my-2 py-2 px-5 flex rounded-md mx-2 bg-red-700  text-white  hover:text-white hover:bg-red-700 transition duration-400": "flex  my-2 py-2 px-5 rounded-md mx-2 hover:text-white hover:bg-red-700 transition duration-400"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                      <span className="px-4">Forms</span></Link>
                <hr className="mx-5"/>
                <Link  to={`${process.env.PUBLIC_URL}/add`} className={addform?" my-2 py-2 px-5 flex rounded-md mx-2 bg-red-700  text-white  hover:text-white hover:bg-red-700 transition duration-400": "flex  my-2 py-2 px-5 rounded-md mx-2 hover:text-white hover:bg-red-700 transition duration-400"}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="px-4">Add Form</span></Link>
                <hr className="mx-5"/>
                <Link to={`${process.env.PUBLIC_URL}/nominees`} className={nominee?" my-2 py-2 px-5 flex rounded-md mx-2 bg-red-700  text-white  hover:text-white hover:bg-red-700 transition duration-400": "flex  my-2  py-2 px-5 rounded-md mx-2 hover:text-white hover:bg-red-700 transition duration-400"}>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                      <span className="px-4 flex-1">Nominees</span>
                </Link>
                <hr className="mx-5"/>
                <Link  to={`${process.env.PUBLIC_URL}/payments`} className={payment?"py-2 px-5 flex rounded-md mx-2 bg-red-700  text-white  hover:text-white hover:bg-red-700 transition duration-400": "flex mt-2 py-2 px-5 rounded-md mx-2 hover:text-white hover:bg-red-700 transition duration-400"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="px-4 flex-1">Payments</span>
                </Link>
              <hr className="mx-5"/>
               
                {/* <Link  to={`${process.env.PUBLIC_URL}/settings`} className={settings?"py-2 px-5 flex rounded-md mx-2 bg-red-700  text-white  hover:text-white hover:bg-red-700 transition duration-400": "flex mt-2 py-2 px-5 rounded-md mx-2 hover:text-white hover:bg-red-700 transition duration-400"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="px-4"> Settings</span>
                </Link> */}
                <hr className="mx-5"/>
                <Link  to={`${process.env.PUBLIC_URL}/login`} className="py-2 mt-2 px-5 flex rounded-md mx-2 hover:text-white hover:bg-red-700 transition duration-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg> 
                    <span className="px-4">Logout</span>
                </Link>
                <hr className="mx-5"/>
            </nav>
        </div>
        </>
    )
}

export default Nav;