import Footer from '../DashboardComponents/Footer'
import { Link,useNavigate } from "react-router-dom";
import Nav from "../DashboardComponents/Nav";
import useFetch from '../Network/UseFetch';
import { useState } from 'react';

const Nominee = ()=>{
    const BASE_URL= 'https://apicastfilegh.votellaverify.com/organiser';
    // const BASE_URL= 'http://localhost:7001/organiser';

    const navigator = useNavigate();
        const org_id = window.sessionStorage.getItem('org_id')
        const {response} = useFetch(`${BASE_URL}/formlist/${org_id}`)
        console.log('response :>> ', response);

        const singleForm = response?.map((value,index)=>{
            return (
                <div key={index}>
                    <div className="space-y-4 py-4 text-gray-200">
                        {/* <!-- Enrolled courses card --> */}
                        <div className="bg-purple-100 text-purple-700 shadow-lg   text-sm rounded-xl">
                            <div className="flex justify-between px-4 py-2 bg-purple-600 shadow-lg rounded-t-xl font-bold text-white transition duration-200">
                               <p className='text-lg mt-1 truncate'>{value.title}</p>  
                               <Link className="flex hover:text-purple-800 hover:bg-gray-200 px-3 py-2 rounded transition duration-100" to={`${process.env.PUBLIC_URL}/fill/${value.id}`}>
                                Preview 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                </Link>
                            </div>
                            <img className="h-24 w-full object-cover  " src={value?.banner_image? `https://apicastfilegh.votellaverify.com/${value?.banner_image}` :"https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944_1280.jpg"} alt="" />
                        
                            <div className="p-4">
                                <p>Total Nominees</p>
                                <p  className="text-3xl">{value.total_nominees}</p>
                            </div>
                            <div className="rounded-b-xl px-4 py-2 bg-purple-200 text-purple-800 hover:bg-purple-300 transition duration-200">
                                <Link className="flex" to={`${process.env.PUBLIC_URL}/nomineestable/${value.id}`}>See Nominees <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1 ml-3 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg> 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
       
        const [search, setSearch] = useState('');
        let [searchList,setSearchList] = useState([])
        const OnSearching= (e)=>{
            let search_value = e.target.value.toLowerCase();
            // console.log('value :>> ', search_value);
            setSearch(search_value) 
            searchList = response?.map((value,index)=>{
                let searchMatch = value.title?.toLowerCase().includes(search_value)
                let searchMatch2 = value.state?.toLowerCase().includes(search_value)
                // console.log('value match',searchMatch)
                if(searchMatch || searchMatch2){
                    return (
                        <div key={index}>
                            <div className="space-y-4 py-4 text-gray-200">
                                {/* <!-- Enrolled courses card --> */}
                                <div className="bg-purple-100 text-purple-700 shadow-lg   text-sm rounded-xl">
                                    <div className="flex justify-between px-4 py-2 bg-purple-600 shadow-lg rounded-t-xl font-bold text-white transition duration-200">
                                       <p className='text-lg mt-1 truncate'>{value.title}</p>  
                                       <Link className="flex hover:text-purple-800 hover:bg-gray-200 px-3 py-2 rounded transition duration-100" to={`${process.env.PUBLIC_URL}/fill/${value.id}`}>
                                        Preview 
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <img className="h-24 w-full object-cover  " src={value?.banner_image? `https://apicastfilegh.votellaverify.com/${value?.banner_image}` :"https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944_1280.jpg"} alt="" />
                                
                                    <div className="p-4">
                                        <p>Total Nominees</p>
                                        <p  className="text-3xl">{value.total_nominees}</p>
                                    </div>
                                    <div className="rounded-b-xl px-4 py-2 bg-purple-200 text-purple-800 hover:bg-purple-300 transition duration-200">
                                        <Link className="flex" to={`${process.env.PUBLIC_URL}/nomineestable/${value.id}`}>See Nominees <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1 ml-3 " viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg> 
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                } else{
                    return null;
                } 
            })
            setSearchList(searchList)
        }


        if(!org_id){
            console.log('nominee org_id null:>> ', org_id);
            navigator(`${process.env.PUBLIC_URL}/login`)
        }else{
            return (
                <>
                    <div className="relative min-h-screen md:flex">
                        <Nav nominee={true} />
                        <main className="lg:mx-5 my-5 w-full px-5">
                        {/* <!-- BASIC PROFILE INFO --> */}
                        <div className='grid lg:grid-cols-7 '> 
                            <div className="col-span-5 my-2">
                                <p className="text-3xl font-bold text-gray-800">Nominee Forms</p>
                            </div>
                            <div className="col-span-1  my-2">
                                <input onChange={OnSearching}  type={'text'} className=" border border-gray-400 rounded-3xl p-2 pl-5 focus:outline-none focus:border-blue-300 text-input rounded-0 pb-2 px-2 hover:bg-blue-50"  placeholder="Search title..."/>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                            
                            {/* {singleForm ? singleForm :  <p className="text-xl">No data available yet</p>} */}
                            
                            {response===null?
                            <p className='font-bold text-2xl text-blue-900 lg:text-left text-center lg:mt-0 mt-1 ml-5'>Loading...</p>
                            : response?.length===0?
                            <p className='font-bold text-3xl text-blue-900 lg:text-left text-center lg:mt-0 mt-1 ml-5'>Empty List</p>
                            : search.length!==0? 
                            searchList
                            :
                            singleForm}
                        </div>
                        
                        </main>
                </div>
                <Footer/>
                </>
            )
        }
}

export default Nominee;