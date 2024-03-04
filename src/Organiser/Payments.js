import Footer from '../DashboardComponents/Footer'
import Nav from "../DashboardComponents/Nav";
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
    
    const label = ['Form Title', 'Amount', 'Created Date']
    let result = [
        { title: 'Form one', amount: '200', date: '12/09/2023' },
        { title: 'Form two', amount: '400', date: '12/09/2023' },
        { title: 'Form three', amount:'600', date:'12/09/2023' }
    ]
     
    return (
        <>
            <div className="relative min-h-screen md:flex">
                <Nav payment={true} />
                <main className="lg:mx-5 my-5 w-full px-5">
                {/* <!-- BASIC PROFILE INFO --> */}
                <p className="text-2xl font-bold text-gray-800">Payments</p>
                <div>
                        <Table table_name={'Payments table'} table_label={label}
                            table_data={result} OriginalData={result} date={false} download={false} />
                 </div>
                </main>
           </div>
           <Footer/>
        </>
    )
}

export default Payments;