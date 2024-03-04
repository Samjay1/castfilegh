import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../DashboardComponents/AdminNav";
import Footer from "../DashboardComponents/Footer";
import MyBar from "../DashboardComponents/MyBar";
import MyPie from "../DashboardComponents/MyPie";
import Table from "../DashboardComponents/Table"; 
import Login from '../Admin/Login';


class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            BASE_URL: 'https://apicastfilegh.votellaverify.com/admin',
            // TEST_URL: 'http://localhost:7001/admin',
            message:null,
            totals:{},
            charts:{}
        }
    }
    componentDidMount(){
        axios.all([
            axios.get(`${this.state.BASE_URL}/charts`),
            axios.get(`${this.state.BASE_URL}/totals`),
        ]).then(axios.spread((chartData,totalData)=>{
            let chartsdata = chartData.data.response
            let totaldata  = totalData.data.response
            // console.log('chartData,totalData :>> ', chartsdata,totaldata);
            this.setState({
                totals:totaldata,
                charts:chartsdata
            })
        }))
    }
    render(){
        
        const label = ['Name','Email','Used', 'Date','Status']
        let admin_id = window.sessionStorage.getItem('admin_id') 
        console.log('admin_id :>> ', admin_id);
        if(!admin_id){
            return <Login/>
        }else{
            return (
            <>
            <div className="relative min-h-screen md:flex">
                    <Nav dash={true}/>
                    <main className="lg:mx-5 my-5 w-full px-5">
                    {/* <!-- BASIC PROFILE INFO --> */}
                    <p className="text-2xl font-normal text-gray-500">Welcome back,</p>
                    <div className="flex space-x-2">
                        <div>
                            <p className="text-xl font-normal">Castvote Admin</p>
                        </div>
                    </div>

                    
                    {/* <!-- DASHBOARD CARDS --> */}
                        <div className="grid grid-cols-1 gap-3 font-normal  md:grid-cols-4 py-4 text-gray-200">
                            {/* <!-- Active referrals  card --> */}
                            <div className="bg-pink-100 shadow-lg text-pink-800  text-sm rounded-xl">
                                <div className="p-4">
                                    <p>Organisers</p>
                                    <p  className="text-3xl"> {this.state.totals.total_organisers}</p>
                                </div>
                                <div className="rounded-b-xl px-4 py-2 bg-pink-700 text-white hover:bg-pink-800 transition duration-200">
                                    <Link className="flex" to={`${process.env.PUBLIC_URL}/admin/organisers`}>see more <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1 ml-3 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg> 
                                    </Link>
                                </div>
                            </div>

                            {/* <!-- Enrolled courses card --> */}
                            <div className="bg-purple-100 text-purple-700 shadow-lg   text-sm rounded-xl">
                                <div className="p-4">
                                    <p>Nominee Forms</p>
                                    <p  className="text-3xl">{this.state.totals.total_forms}</p>
                                </div>
                                <div className="rounded-b-xl px-4 py-2 bg-purple-500 text-white hover:bg-purple-600 transition duration-200">
                                    <Link className="flex" to={`${process.env.PUBLIC_URL}/admin/forms`}>see more <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1 ml-3 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg> 
                                    </Link>
                                </div>
                            </div>

                            {/* <!-- Completed course card --> */}
                            
                            <div className="bg-blue-100 text-blue-700 shadow-lg text-sm rounded-xl">
                                <div className="p-4">
                                    <p>Nominees</p>
                                    <p  className="text-3xl">{this.state.totals.total_nominees}</p>
                                </div>
                                <div className="rounded-b-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition duration-200">
                                    <Link className="flex" to={`${process.env.PUBLIC_URL}/admin/nominees`}>see more <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1 ml-3 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg> 
                                    </Link>
                                </div>
                            </div>

                            {/* <!-- Referrals card --> */}
                            {/* <div className="bg-blue-100 shadow-lg text-blue-700  text-sm rounded-xl">
                                <div className="p-4">
                                    <p>Payments</p>
                                    <p  className="text-3xl">GHS 2,000</p>
                                </div>
                                <div className="rounded-b-xl px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-200">
                                    <Link className="flex" to={`${process.env.PUBLIC_URL}/admin/payments`}>see more <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1 ml-3 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg> 
                                    </Link>
                                </div>
                            </div> */}

                            
                        </div>
                        <div className="flex flex-wrap space-y-5 lg:space-y-0 w-full my-4  shadow-lg lg:p-4 p-2 border rounded-xl">
                        <div className="overflow-auto relative ">
                                {this.state.charts.nominees?<MyBar data={this.state.charts.nominees.filter((value,index)=>index<=5)} barData={'nominee_count'} xValue={'name'}/> :  <p className="text-2xl mx-auto text-center">No data available yet</p> }
                            
                            </div>
                            <div className="m-auto overflow-auto -z-10">
                                <MyPie data={this.state.charts.nominees}  data2={this.state.charts.forms} xValue={'nomi'} label={['as','ad','ad','ad','ads','ad']}/>
                            </div>
                            
                        </div>
                        {/* <BarChart /> */}

                        <div className="">
                            <Table table_name={'Recent Organisers'} table_label={label}
                            table_data={this.state.charts.forms?.filter((value,index)=> index<=25)} date={false} download={false}/>
                        </div>
                    </main>
            </div>
            <Footer/>
            </>
            
            )
        }
    }

}

export default Dashboard;