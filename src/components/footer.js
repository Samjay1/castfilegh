// import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer  = ({onTap, back_button,title, load, page}) => {

    let navigate = useNavigate()
    let button ;
    if (back_button==='true'){
       button =  <button  onClick={() => navigate(-1)} className="bg-red-700 text-white  rounded-2xl px-5 py-1">
                   Back
                </button>
    };


    return (
        <>
             <div>
                  {/* <!-- NAVIGATOR AND PROGRESS --> */}
                    <div className="flex justify-between flex-wrap mt-3 mb-5 pb-3">
                        <div className="flex space-x-2">
                            {button}
                            <button onClick={()=>{onTap()}}  className="bg-gray-900 text-white rounded-2xl px-5 py-1">
                            {title}
                            </button>
                        </div>
                        <div className="mt-1 text-sm">Page {page}</div>
                    </div>
                    {/* <!-- END NAVIGATOR AND PROGRESS --> */}
             </div>
        </>
      );
}
 

export default Footer;