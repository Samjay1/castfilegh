import { useEffect, useState } from 'react';
import Footer from '../DashboardComponents/Footer'
import Nav from "../DashboardComponents/AdminNav";
import Table from "../DashboardComponents/Table"; 
import Login from '../Admin/Login';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NomineeTable = ()=>{
    const BASE_URL= 'https://apicastfilegh.votellaverify.com/organiser';
    // const TEST_URL= 'http://localhost:7001/organiser';

    const {id} = useParams(); 

    const [tableHead, setTableHead] = useState(null)
    const [tableBody, setTableBody] = useState(null)

    useEffect(()=>{
        axios.all([
            axios.get(`${BASE_URL}/formnominee/${id}`), 
            axios.get(`${BASE_URL}/question/${id}`)
          ])
          .then(axios.spread((answers, questions) => {
            // output of req.
            let Answers = answers.data.response
            let Questions  = questions.data.response
            
            let QuestionList =  Object.keys(Questions).map((key)=>{
                return Questions[key]
            })
            setTableBody(Answers)
            setTableHead(QuestionList)
            // console.log('answers', Answers, 'questions', Questions, QuestionList)
          }));
    },[id])


    const [search, setSearch] = useState('');
    let [searchList,setSearchList] = useState([])
    const OnSearching= (e)=>{
        let search_value = e.target.value.toLowerCase()
        setSearch(search_value)
        searchList = tableBody?.map((value,index)=>{
            // console.log(tableBody)
            let searchMatch = value.a1?.toLowerCase().includes(search_value)
            let searchMatch2 = value.a2?.toLowerCase().includes(search_value) 
            if(searchMatch || searchMatch2){
                // console.log('value :>> ', value);
                return  value
            } else{
                return {key:null};
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
                    <Nav form={true} />
                    <main className="lg:mx-5 my-5 w-full px-5">
                    {/* <!-- BASIC PROFILE INFO --> */}
                    <div className='grid lg:grid-cols-7 '> 
                        <div className="col-span-5 my-2">
                            <p className="text-3xl font-bold text-gray-800">Nominee</p>
                        </div>
                        <div className="col-span-1  my-2">
                            <input onChange={OnSearching}  type={'text'} className=" border border-gray-400 rounded-3xl p-2 pl-5 focus:outline-none focus:border-blue-300 text-input rounded-0 pb-2 px-2 hover:bg-blue-50"  placeholder="Search title..."/>
                        </div>
                    </div>
                    <div className='overflow-auto relative w-full'>
                        {/* <Table table_name={'Nominee table'} table_label={tableHead}
                        table_data={tableBody} /> */}

                {tableBody===null?
                    <p className='font-bold text-2xl text-blue-900 lg:text-left text-center lg:mt-0 mt-1 ml-5'>Loading...</p>
                    : tableBody.length===0?
                    <p className='font-bold text-3xl text-blue-900 lg:text-left text-center lg:mt-0 mt-1 ml-5'>Empty List</p>
                    : search.length!==0?
                    
                    <Table table_name={'Organisers table'} table_label={tableHead} OriginalData={tableBody}
                    table_data={searchList?.map((value)=>{ 
                        if(!value){
                            return value
                        }
                        return value
                    })} date={false}  preview={true}  download={true} />
                    :
                    <Table table_name={'Nominee table'} table_label={tableHead} OriginalData={tableBody}
                    table_data={tableBody} />
                    }
                    </div>
                    </main>
            </div>
            <Footer/>
            </>
        )
    }
}

export default NomineeTable;