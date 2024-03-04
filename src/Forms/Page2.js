import Header from '../components/header';
import Footer from '../components/footer';
import '../logo.png';
import { Link } from 'react-router-dom';

const Page2 = ()=>{
   
    const banner_image = window.sessionStorage.getItem('banner_image')
    const title = window.sessionStorage.getItem('title');
    const paymentState = window.sessionStorage.getItem('payment')===1 ? true:false;
    const messageState = window.sessionStorage.getItem('messageState')
    const q_id = window.sessionStorage.getItem('q_id')
    
    console.log(banner_image, title,'paymentstate', paymentState, )
    return(
        <div className='lg:w-2/3 lg:m-auto py-5 mx-4'>
            <div>
                <img className='h-24 m-auto' src={process.env.PUBLIC_URL+"/logo.png"} alt="" />
            </div>
            <Header image={banner_image}/>
            {/* DESCRIPTION */}
            <div className='bg-gray-100 border shadow-lg rounded-xl my-4 px-4 py-3 text-justify'>
                <p className='text-center lg:text-4xl text-xl font-bold'>{title}  <span className='text-blue-800'>Nomination form</span></p>
                {messageState? <div className='lg:text-3xl text-lg font-bold text-green-700 my-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24 mx-auto ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <p className='text-center '>Form submitted</p>
            </div>
                :
                <div className='text-center py-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24 mx-auto text-red-600 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <p className='text-center lg:text-3xl text-lg font-normal text-red-600 my-0'> <span className='text-gray-600'>Try Again Later!! </span></p>

                    <div className='my-3'>
                    <Link to={`${process.env.PUBLIC_URL}/${q_id}`} className='bg-blue-700 hover:bg-blue-800 py-3 px-4 text-lg text-center text-white rounded-3xl'>Go back</Link>
                    </div>
                </div>
                
                }
                
            </div>
            {/* DESCRIPTION */}

            {/* <Text question={'Phone number'}/>
            <Dropdown question={'Payment method'} answers={['Mobile Money', 'Card']}/>
            <Text question={'Email'}/> */}

            {paymentState&&messageState&&
                <Footer key={'footer'} title={'Make payment'}  back_button='false' page={'Thank you'}></Footer>
                }

            <div className='m-3'>
                <p className="text-base text-center text-gray-500">&copy; Copyrights 2024 <a className='hover:text-red-500' href="https://castvotegh.com/">Castvote</a> All rights reserved.</p>
            </div>
        </div>
    )
}

export default Page2