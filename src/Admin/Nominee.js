import Footer from '../DashboardComponents/Footer'
import Nav from "../DashboardComponents/AdminNav";
import Table from "../DashboardComponents/Table"; 
import Login from '../Admin/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Nominee = ()=>{
    const BASE_URL = 'https://apicastfilegh.votellaverify.com/admin';
    // const TEST_URL = 'http://localhost:7001/admin';
    const [form,setForm] = useState(null);
    const [nominee,setNominee] = useState(null);
    // const [totals,setTotals] = useState(null);

    useEffect(()=>{
        axios.all([
            axios.get(`${BASE_URL}/charts`),
            axios.get(`${BASE_URL}/totals`),
        ]).then(axios.spread((Data,totalData)=>{
            let data = Data.data.response
            // let totaldata  = totalData.data.response 
            // setTotals(totaldata)
            // console.log('data :>> ', data);
            setForm(data.forms)
            setNominee(data.nominees)
        }))
    },[])

    const [search, setSearch] = useState('');
    let [searchList,setSearchList] = useState([])
    const OnSearching= (e)=>{
        let search_value = e.target.value.toLowerCase()
        setSearch(search_value) 
        searchList = form.map((value,index)=>{
            let searchMatch = value.name?.toLowerCase().includes(search_value)
            let searchMatch2 = value.email?.toLowerCase().includes(search_value) 
            // console.log('value match',searchMatch)
            if(searchMatch || searchMatch2){
                return  value
            } else{
                return null;
            } 
        })
        setSearchList(searchList) 
    }

    
    
    const label = ['Org.Name','Email','Used','Total Nominees','Status','Date']
     
    let admin_id = window.sessionStorage.getItem('admin_id') 
    if(!admin_id){
        return <Login/>
    }else{
        return (
            <>
                <div className="relative min-h-screen md:flex">
                    <Nav nominee={true} />
                    <main className="lg:mx-5 my-5 w-full px-5">
                    {/* <!-- BASIC PROFILE INFO --> */}
                    <div className='grid lg:grid-cols-7 '> 
                        <div className="col-span-5 my-2">
                            <p className="text-3xl font-bold text-gray-800">Organiser Accounts</p>
                        </div>
                        <div className="col-span-1  my-2">
                            <input onChange={OnSearching}  type={'text'} className=" border border-gray-400 rounded-3xl p-2 pl-5 focus:outline-none focus:border-blue-300 text-input rounded-0 pb-2 px-2 hover:bg-blue-50"  placeholder="Search title..."/>
                        </div>
                    </div>
                    <div>

                    {form===null?
                    <p className='font-bold text-2xl text-blue-900 lg:text-left text-center lg:mt-0 mt-1 ml-5'>Loading...</p>
                    : form.length===0?
                    <p className='font-bold text-3xl text-blue-900 lg:text-left text-center lg:mt-0 mt-1 ml-5'>Empty List</p>
                    : search.length!==0? 
                    
                    <Table table_name={'Organisers table'} table_label={label}
                    table_data={searchList?.map((value,index)=>{
                        if(!value){
                            return {key: null}
                        }
                        return ({
                            name:value.name,
                            email:value.email,
                            used:value.form_count,
                            nominee:nominee[index].nominee_count,
                            status:value.status,
                            date:value.date,
                            preview: value.id
                        })
                    })} date={false}  preview={true}  download={false} />
                    :
                    <Table table_name={'Organisers table'} table_label={label}
                    table_data={form?.map((value,index)=>{
                        return ({
                            name:value.name,
                            email:value.email,
                            used:value.form_count,
                            nominee:nominee[index].nominee_count,
                            status:value.status,
                            date:value.date,
                            preview: value.id
                        })
                    })} date={false}  preview={true}  download={false} />
                    }
                
                    </div>
                    </main>
            </div>
            <Footer/>
            </>
        )
    }
}

export default Nominee;