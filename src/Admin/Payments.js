import Footer from '../DashboardComponents/Footer'
import Nav from "../DashboardComponents/AdminNav";
import Table from "../DashboardComponents/Table"; 

const Payments = ()=>{
    const data2=[
        {q1:'John',
         q2:'Manu',
         q3:'200', 
         q4:'12/02/2022',
         q5:'Active',
         q6:'John',
         q7:'Manu',
         q8:'200', 
         q9:'12/02/2022',
         q10:null},
         {q1:'make',
         q2:'Manu',
         q3:'200', 
         q4:'12/02/2022',
         q5:'Active',
         q6:'John',
         q7:'Manu',
         q8:'200', 
         q9:'12/02/2022',
         q10: null},
         {q1:'ben',
         q2:'Manu',
         q3:'200', 
         q4:'12/02/2022',
         q5:'Active',
         q6:'John',
         q7:'Manu',
         q8:'200', 
         q9:'12/02/2022',
         q10:null},
         {q1:'ken',
         q2:'Manu',
         q3:'200', 
         q4:'12/02/2022',
         q5:'Active',
         q6:'John',
         q7:'Manu',
         q8:'200', 
         q9:'12/02/2022',
         q10:null}
        ]
    
    const label = ['Firstname','lastname','paid', 'date','status','question6','more7','question8','more9']
     
    return (
        <>
            <div className="relative min-h-screen md:flex">
                <Nav payment={true} />
                <main className="lg:mx-5 my-5 w-full px-5">
                {/* <!-- BASIC PROFILE INFO --> */}
                <p className="text-2xl font-bold text-gray-800">Payments </p>
                <div>
                    <Table table_name={'Payments table'} table_label={label}
                    table_data={data2} />
                 </div>
                </main>
           </div>
           <Footer/>
        </>
    )
}

export default Payments;