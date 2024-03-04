import Footer from '../DashboardComponents/Footer'
import { Link,useNavigate } from "react-router-dom";
import Nav from "../DashboardComponents/Nav";
import { Component } from 'react';
import axios from 'axios';
import Login from './Login';

const Forms = ()=>{
    const navigator = useNavigate();
    return <Formclass navigator={navigator}/>
}

class Formclass extends Component{
    constructor(){
        super();
        this.state = {
            BASE_URL: 'https://apicastfilegh.votellaverify.com/organiser',
            // BASE_URL: 'http://localhost:7001/organiser',
            response:null,
            message:'',
            statee:null,
            searchList:[],
            searchState:false,
            customComponent:null,
            org_id:window.sessionStorage.getItem('org_id')||null,
        }
        this.deleteFormBtn = this.deleteFormBtn.bind(this)
        this.toggleState = this.toggleState.bind(this)
        this.OnSearching = this.OnSearching.bind(this)
    }
        
    componentDidMount(){
        let getResponse = ()=>{ 
            fetch(`${this.state.BASE_URL}/formlist/${this.state.org_id}`)
            .then((response) => response.json())
            .then((response)=>{
                if(response.status){
                    // console.log('FORMLIST :>> ', response.response);
                    this.setState({
                        response:response.response,
                        statee: response.response.state
                    })  
                }else{
                    this.setState({
                        response:[]
                    })  
                }
            }).catch((error)=>{
                this.setState({
                    response:[]
                })  
            })
        } 
        getResponse() 
    }

    deleteFormBtn = (id)=>{
        // console.log('id deleting :>> ', id);
        axios.get(`${this.state.BASE_URL}/deleteform/${id}`)
        .then((response)=>{
            if(response.data.status){
                // console.log('response.response :>> ', response.data);
                this.setState({
                    message: 'Form deleting...'
                })
                setTimeout(() => {
                    this.setState({
                        message:''
                    })
                    this.props.navigator(`${process.env.PUBLIC_URL}/dashboard`)
                }, 3000); 
            }
        }).catch((error)=>{
            this.setState({
                message:'No forms available'
            })
            // console.log('error :>> ', error);
        })
    } 

    toggleState = (form_id,state)=>{
        // console.log('toggle :>> ',form_id,state);

        axios.post(`${this.state.BASE_URL}/toggle`, {form_id,state})
        .then((response)=>{
            if(response.data.status){
                // console.log('response.response :>> ', response.data);
                this.setState({
                    message: 'Form state updated Successfully. NB: DEACTIVATED forms can\'t be accessed by people',
                    statee: state, 
                })
                
                setTimeout(() => {
                    this.setState({
                        message:''
                    })
                    this.props.navigator(`${process.env.PUBLIC_URL}/nominees`)
                    // this.props.navigator(`${process.env.PUBLIC_URL}/forms`)
                }, 500);
                
            }
        }).catch((error)=>{
            this.setState({
                message:'No forms available'
            })
            // console.log('error :>> ', error.response.data);
        })
    }
     
    OnSearching= (e)=>{
        let search_value = e.target.value.toLowerCase()
        if(search_value.length === 0){
            this.setState({
                searchState:false,
                searchList: [],
            })
        }else{
            let res = this.state.response.filter((value,index)=>{
                let searchMatch = value.title?.toLowerCase().includes(search_value)
                // console.log('value match',searchMatch,index)
                if(searchMatch){
                    return value
                } else{
                    return null;
                }
            })
            this.setState({
                searchList: res,
                searchState:true
            })
        }
    }

    render(){
        // console.log('this.state.response :>> ', this.state.response);
        let org_id = window.sessionStorage.getItem('org_id') 
        if(!org_id){
            return <Login/>
        }else{
            return (
                <>
                    <div className="relative min-h-screen md:flex">
                        <Nav form={true} />
                        <main className="lg:mx-5 my-5 w-full px-5">
                        {/* <!-- BASIC PROFILE INFO --> */}
                        {this.state.message? <p className='p-3 bg-green-100 text-base'>{this.state.message}</p>: null}
                        
                        <div className='grid lg:grid-cols-7 '> 
                            <div className="col-span-5 my-2">
                                <p className="text-3xl font-bold text-gray-800">Nominee Forms</p>
                            </div>
                            <div className="col-span-1  my-2">
                                <input onChange={this.OnSearching}  type={'text'} className=" border border-gray-400 rounded-3xl p-2 pl-5 focus:outline-none focus:border-blue-300 text-input rounded-0 pb-2 px-2 hover:bg-blue-50"  placeholder="Search title..."/>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                            {/* {this.state.customComponent ? this.state.customComponent :  <p className="text-xl">No data available yet</p>} */}
                        
                           {this.state.searchList ? this.state.searchList?.map((value,index)=>{ 
                        return (
                            <div key={index}>
                                <div className="space-y-4 py-4 text-gray-200">
                                    {/* <!-- Enrolled courses card --> */}
                                    <div className="bg-blue-100 text-blue-700 shadow-lg   text-sm rounded-xl">
                                        <div className="flex justify-between rounded-t-xl px-4 py-2 bg-blue-600 font-bold text-white transition duration-200">
                                        <p className='text-lg mt-1 truncate'>{value.title}</p>
                                            <div className='flex space-x-1'>
                                                <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/admin/edit/${value.id}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </Link>
                                                <button onClick={()=>{
                                                    this.deleteFormBtn(value.id)
                                                }} className="flex p-1 px-2 hover:text-gray-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                                <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/fill/${value.id}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg> 
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p>Total Nominees</p>
                                            <p className="text-3xl">{value.total_nominees}</p>

                                            {
                                                value.state==='ACTIVATED'?
                                                <button onClick={()=>{this.toggleState(value.id,'DEACTIVATED')}} className="flex p-1 text-white px-4 hover:bg-blue-900 bg-blue-700 rounded-3xl">
                                                    ACTIVATED
                                                </button>
                                            :
                                                <button onClick={()=>{this.toggleState(value.id,'ACTIVATED')}}  className="flex p-1 text-white px-4 hover:bg-red-900 bg-red-700 rounded-3xl">
                                                    DEACTIVATED
                                                </button>
                                            }

                                            {/* <button onClick={()=>{
                                                this.toggleState(value.id, value.state === 'DEACTIVATED' ? 'ACTIVATED': 'DEACTIVATED')
                                                return <Formclass/>
                                            }} className="bg-blue-600 text-white p-1 px-2 rounded mt-4 hover:bg-blue-800">{value.state==null?'CLOSE/OPEN': value.state}</button> */}
                                        </div>
                                        <div className="rounded-b-xl px-4 py-2 bg-blue-200 text-blue-800 hover:bg-blue-300 transition duration-200">
                                            <Link className="flex" to={`${process.env.PUBLIC_URL}/admin/nomineestable/${value.id}`}>See Nominees <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1 ml-3 " viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg> 
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }): null}

                        {this.state.searchState ? null : 
                        
                        this.state.response===null ?   <p className='font-bold text-2xl text-blue-900 lg:text-left text-center lg:mt-0 mt-1 ml-5'>kjLoading...</p>
                        : 
                        this.state.response.length!==0 ?

                         this.state.response?.map((value,index)=>{ 
                            return (
                                <div key={index}>
                                    <div className="space-y-4 py-4 text-gray-200">
                                        {/* <!-- Enrolled courses card --> */}
                                        <div className="bg-blue-100 text-blue-700 shadow-lg   text-sm rounded-xl">
                                            <div className="flex justify-between rounded-t-xl px-4 py-2 bg-blue-600 font-bold text-white transition duration-200">
                                            <p className='text-lg mt-1 truncate'>{value.title}</p>
                                                <div className='flex space-x-1'>
                                                    <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/edit/${value.id}`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </Link>
                                                    <button onClick={()=>{
                                                        this.deleteFormBtn(value.id)
                                                    }} className="flex p-1 px-2 hover:text-gray-700">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                    <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/fill/${value.id}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg> 
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <p>Total Nominees</p>
                                                <p className="text-3xl">{value.total_nominees}</p>

                                                {
                                                    value.state==='ACTIVATED'?
                                                    <button onClick={()=>{this.toggleState(value.id,'DEACTIVATED')}} className="flex p-1 text-white px-4 hover:bg-blue-900 bg-blue-700 rounded-3xl">
                                                        ACTIVATED
                                                    </button>
                                                :
                                                    <button onClick={()=>{this.toggleState(value.id,'ACTIVATED')}}  className="flex p-1 text-white px-4 hover:bg-red-900 bg-red-700 rounded-3xl">
                                                        DEACTIVATED
                                                    </button>
                                                }

                                                {/* <button onClick={()=>{
                                                    this.toggleState(value.id, value.state === 'DEACTIVATED' ? 'ACTIVATED': 'DEACTIVATED')
                                                    return <Formclass/>
                                                }} className="bg-blue-600 text-white p-1 px-2 rounded mt-4 hover:bg-blue-800">{value.state==null?'CLOSE/OPEN': value.state}</button> */}
                                            </div>
                                            <div className="rounded-b-xl px-4 py-2 bg-blue-200 text-blue-800 hover:bg-blue-300 transition duration-200">
                                                <Link className="flex" to={`${process.env.PUBLIC_URL}/admin/nomineestable/${value.id}`}>See Nominees <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1 ml-3 " viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg> 
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ); 
                        })
                        :
                        <p className="text-xl">No data available yet</p>}
                        </div>
                        
                        </main>
                </div>
                <Footer/>
                </>
            )
        }
    }
}

export default Forms;