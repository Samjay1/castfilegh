import Footer from '../DashboardComponents/Footer'
import { Link} from "react-router-dom";
import Nav from "../DashboardComponents/AdminNav";
import Login from '../Admin/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Forms = ()=>{
    const [forms,setForms] = useState(null)
    const [nominees,setNominees] = useState([])
    const [message,setMessage] = useState(null);

    const BASE_URL= 'https://apicastfilegh.votellaverify.com/admin';
    // const TEST_URL= 'http://localhost:7001/admin';


    useEffect(()=>{
        axios.get(`${BASE_URL}/charts`)
        .then((response)=>{ 
            setForms(response.data.response.forms)
            setNominees(response.data.response.nominees)

        }).catch((error)=>{
            setForms([])
            setNominees([])
        })
    },[message])


    let toggleState = (org_id,status)=>{
        // console.log('toggle :>> ',org_id,status);

        axios.post(`${BASE_URL}/toggle_org`, {org_id,status})
        .then((response)=>{
            if(response.data.status){ 
                setMessage('Updated Successfully. NB: DEACTIVATED organisers can\'t be access accounts ') 
                setTimeout(() => {
                    setMessage("")
                    // navigator(`${process.env.PUBLIC_URL}/admin/nominees`) 
                }, 2000);
            }
        }).catch((error)=>{
            setMessage('No forms available')
            // console.log('error :>> ', error.response.data);
        })
    }

    // let deleteOrg = (org_id)=>{
    //     // console.log('toggle :>> ',org_id,status);

    //     axios.get(`${BASE_URL}/delete_org/${org_id}`)
    //     .then((response)=>{
    //         if(response.data.status){ 
    //             setMessage('Organiser DELETED') 
    //             setTimeout(() => {
    //                 setMessage("")
    //                 // navigator(`${process.env.PUBLIC_URL}/admin/nominees`) 
    //             }, 2000);
    //         }
    //     }).catch((error)=>{
    //         setMessage('No forms available')
    //         // console.log('error :>> ', error.response.data);
    //     })
    // }

    let list = forms?.map((value,index)=>{ 
        return (
            <div key={index} className="space-y-4 py-4 text-gray-200">
            {/* <!-- Enrolled courses card --> */}
            <div className="bg-gray-100 text-gray-900 shadow-xl   text-sm rounded-xl">
            <div className="flex justify-between rounded-t-xl px-4 py-2 bg-gray-800 font-bold text-white transition duration-200">
                   <p className='text-lg mt-1 truncate'>{value.name} (ID: {value.id})</p>
                    <div className='flex space-x-1'> 

                        {/* <button onClick={()=>{deleteOrg(value.id)}} className="flex p-1 px-4 hover:bg-blue-900 bg-red-700 rounded-3xl">
                            DELETE
                        </button> */}

                        {
                            value.status==='ACTIVE'?
                            <button onClick={()=>{toggleState(value.id,'DEACTIVE')}} className="flex p-1 px-4 hover:bg-blue-900 bg-blue-700 rounded-3xl">
                                Active
                            </button>
                        :
                            <button onClick={()=>{toggleState(value.id,'ACTIVE')}}  className="flex p-1 px-4 hover:bg-red-900 bg-red-700 rounded-3xl">
                                Deactive
                            </button>
                        }
                        
                        <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/admin/preview/${value.id}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg> 
                        </Link>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className="p-4">
                        <p>Nominee Forms</p>
                        <p  className="text-3xl">{value.form_count}</p>
                    </div>
                    <div className="p-4">
                        <p>Total Nominees</p>
                        <p  className="text-3xl">{nominees[index].nominee_count}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    })

    const [search, setSearch] = useState('');
    let [searchList,setSearchList] = useState([])
    const OnSearching= (e)=>{
        let search_value = e.target.value.toLowerCase();
        // console.log('value :>> ', search_value);
        setSearch(search_value) 
        searchList = forms?.map((value,index)=>{
            let searchMatch = value.name?.toLowerCase().includes(search_value)
            let searchMatch2 = value.email?.toLowerCase().includes(search_value)
            // console.log('value match',searchMatch)
            if(searchMatch || searchMatch2){
                  return (
                        <div key={index} className="space-y-4 py-4 text-gray-200">
                            {/* <!-- Enrolled courses card --> */}
                            <div className="bg-gray-100 text-gray-900 shadow-xl   text-sm rounded-xl">
                            <div className="flex justify-between rounded-t-xl px-4 py-2 bg-gray-800 font-bold text-white transition duration-200">
                                <p className='text-lg mt-1 truncate'>{value.name} (ID: {value.id})</p>
                                    <div className='flex space-x-1'>
                                        
                                        {
                                            value.status==='ACTIVE'?
                                            <button onClick={()=>{toggleState(value.id,'DEACTIVE')}} className="flex p-1 px-4 hover:bg-blue-900 bg-blue-700 rounded-3xl">
                                                Active
                                            </button>
                                        :
                                            <button onClick={()=>{toggleState(value.id,'ACTIVE')}}  className="flex p-1 px-4 hover:bg-red-900 bg-red-700 rounded-3xl">
                                                Deactive
                                            </button>
                                        }
                                        
                                        <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/admin/preview/${value.id}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg> 
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className="p-4">
                                        <p>Nominee Forms</p>
                                        <p  className="text-3xl">{value.form_count}</p>
                                    </div>
                                    <div className="p-4">
                                        <p>Total Nominees</p>
                                        <p  className="text-3xl">{nominees[index].nominee_count}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
            } else{
                return null;
            } 
        })
        setSearchList(searchList)
    }

   
    let admin_id = window.sessionStorage.getItem('admin_id') 
    if(!admin_id){
        return <Login/>
    }else{
    return (
        <>
            <div className="relative min-h-screen md:flex">
                <Nav organisers={true} />
                <main className="lg:mx-5 my-5 w-full px-5">
                {message? <p className='p-3 bg-green-100 text-base'>{message}</p>: null}
                {/* <!-- BASIC PROFILE INFO --> */}
                <div className='grid lg:grid-cols-7 '> 
                    <div className="col-span-5 my-2">
                        <p className="text-3xl font-bold text-gray-800">Organisers</p>
                    </div>
                    <div className="col-span-1  my-2">
                        <input onChange={OnSearching}  type={'text'} className=" border border-gray-400 rounded-3xl p-2 pl-5 focus:outline-none focus:border-blue-300 text-input rounded-0 pb-2 px-2 hover:bg-blue-50"  placeholder="Search title..."/>
                    </div>
                </div>

                <div className='grid lg:grid-cols-2 gap-6'>
                    {/* <!-- Organisers CARDS --> */}
                  
                    
                 {forms===null?
                    <p className='font-bold text-2xl text-blue-900 lg:text-left text-center lg:mt-0 mt-1 ml-5'>Loading...</p>
                    : forms.length===0?
                    <p className='font-bold text-3xl text-blue-900 lg:text-left text-center lg:mt-0 mt-1 ml-5'>Empty List</p>
                    : search.length!==0? 
                    searchList
                    :
                    list}

                   
                </div>
                   
                </main>
           </div>
           <Footer/>
        </>
    )}
}

export default Forms;