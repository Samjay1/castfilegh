import Header from '../components/header';
import Text from '../components/text';
import Numbers from '../components/number';
import Date from '../components/date';
import Dropdown from '../components/dropdown';
import Radio from '../components/radio';
import Textarea from '../components/textarea';
import Checkbox from '../components/checkbox';
import Upload from '../components/upload';
import Footer from '../components/footer';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../Network/UseFetch';
import axios from 'axios';

import '../logo.png';
import { useState } from 'react';

const Page1 = ()=>{
    const BASE_URL= 'https://apicastfilegh.votellaverify.com/organiser';
    // const BASE_URL= 'http://localhost:7001/organiser';

    const [errorMessage, setErrorMessage] = useState('');

    const {id} = useParams()

    const {response} = useFetch(`${BASE_URL}/previewform/${id}`)
    const navigate = useNavigate();
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');
    const [ans5, setAns5] = useState('');
    const [ans6, setAns6] = useState('');
    const [ans7, setAns7] = useState('');
    const [ans8, setAns8] = useState('');
    const [ans9, setAns9] = useState('');
    const [ans10, setAns10] = useState('');
    const [ans11, setAns11] = useState('');

    const [error1, setError1] = useState(true);
    const [error2, setError2] = useState(false);
    const [error3, setError3] = useState(false);
    const [error4, setError4] = useState(false);
    const [error5, setError5] = useState(false);
    const [error6, setError6] = useState(false);
    const [error7, setError7] = useState(false);
    const [error8, setError8] = useState(false);
    const [error9, setError9] = useState(false);
    const [error10, setError10] = useState(false);
    const [error11, setError11] = useState(false);

    console.log('response :>> ', response);
    window.sessionStorage.setItem('banner_image', response?.banner_image)
    window.sessionStorage.setItem('title', response?.title)
    window.sessionStorage.setItem('payment', response?.payment_state)

    window.sessionStorage.setItem('q_id', id)
    

  // error handling click event
//   const onTapped = ()=>{
//     if(true){
//       console.log(process.env.PUBLIC_URL)
//       navigate(process.env.PUBLIC_URL+`/next`)
//     }else{
//     //   setError1(true)
//     }
//   }

  const onSubmit = ()=>{ 
    if(response?.q1!==undefined && ans1.length === 0){
        // console.log('Question1:', response.q1, 'Answer:',ans1)
        setError1(true)
        // return; 
    }
    else if(response?.q2!==undefined && ans2 === ''){
        setError2(true)
        // return; 
    }
    else if((response?.q3!==undefined ) && ans3 === ''){
        setError3(true) 
        console.log('Question3:',response.q3,'Answer:',ans3)
    }
    else if(response?.q4!==undefined && ans4 === ''){
        setError4(true) 
        console.log('Question4:', response.q4, 'Answer:',ans4)
    }
    else if(response?.q5!==undefined && ans5 === ''){
        setError5(true) 
        console.log('Question5:', response.q1, 'Answer:',ans5)
    }
    else if(response?.q6!==undefined && ans6 === ''){
        setError6(true) 
        console.log('Question5:', response.q1, 'Answer:',ans6)
    }
    else if(response?.q7!==undefined && ans7 === ''){
        setError7(true) 
        console.log('Question7:', response.q1, 'Answer:',ans7)
    }
    else if(response?.q8!==undefined && ans8 === ''){
        setError8(true) 
        console.log('Question8:', response.q1, 'Answer:',ans8)
    }
    else if(response?.q9!==undefined && ans9 === ''){
        setError9(true) 
        console.log('Question9:', response.q1, 'Answer:',ans9)
    }
    else if(response?.q10!==undefined && ans10 === ''){
        setError10(true) 
        console.log('Question10:', response.q1, 'Answer:',ans10)
    }
    else if(response?.q11!==undefined && ans11 === ''){
        setError11(true) 
    }
    else{
        let data = {
            ans1,
            ans2,
            ans3,
            ans4,
            ans5,
            ans6,
            ans7,
            ans8,
            ans9,
            ans10,
            ans11
        }
        console.log('posting here',data) 
        let formdata = new FormData()
        formdata.append('org_id', response.org_id)
        formdata.append('q_id', id)
        formdata.append('r1', ans1)
        formdata.append('r2', ans2)
        formdata.append('r3', ans3)
        formdata.append('r4', ans4)
        formdata.append('r5', ans5)
        formdata.append('r6', ans6)
        formdata.append('r7', ans7)
        formdata.append('r8', ans8)
        formdata.append('r9', ans9)
        formdata.append('upload', ans10)
        formdata.append('r11', ans11)

        axios.post(`${BASE_URL}/submit`, formdata)
            .then((response)=>{
                console.log('status',response.data)

        console.log('all answers',error1,error2,error3,error4,error5,error6,error7,error8,error9,error10,error11)
                if(response.data.status){
                    window.sessionStorage.setItem('messageState',true)
                    navigate(process.env.PUBLIC_URL+`/next`)
                }else{
                    window.sessionStorage.setItem('messageState',false)
                    navigate(process.env.PUBLIC_URL+`/next`)
                }
            }).catch((error)=>{
                let message = error.response.data.message ? error.response.data.message: 'Image is too big (Please choose another one)'
                setErrorMessage(message)
                if(error.response.data.message === "Image too big, Please change to another"){
                    setError10(true)
                }
                console.log('error :>> ', error.response.data.message);
            })
    }
    
  }
  const onChangeValue =(e,mylist)=>{
    console.log('Question',e.target.name,e.target.value, mylist)
     let value = e.target.value
     let name = e.target.name
    switch(name){
        case 'q1':
            setAns1(value)
            value.length===0? setError1(true):setError1(false)
            break;
        case 'q2':
            setAns2(value)
            value.length===0? setError2(true):setError2(false)
            break;
        case 'q3':
            setAns3(value)
            value.length===0? setError3(true):setError3(false)
            break;
        case 'q4':
            setAns4(value)
            value.length===0? setError4(true):setError4(false)
            break;
        case 'q5':
            setAns5(value)
            value.length===0? setError5(true):setError5(false)
            break;
        case 'q6':
            setAns6(value)
            value.length===0? setError6(true):setError6(false)
            break;
        case 'q7':
            setAns7(value)
            value.length===0? setError7(true):setError7(false)
            break;
        case 'q8':
            setAns8(value)
            value.length===0? setError8(true):setError8(false)
            break;
        case 'q9':
            setAns9(value)
            value.length===0? setError9(true):setError9(false)
            break;
        case 'q11':
        setAns11(value)
        value.length===0? setError11(true):setError11(false)
            break;
        case 'upload':
            setAns10(e.target.files[0])
            console.log('upload :>> ', e.target.files[0]);
            setError10(false)
            break;
        default:
            break;
}
    }

    const CheckBoxOnChangeValue =(e,dataList)=>{
        console.log('Question',e.target.name,e.target.value, dataList)
            let value = e.target.value
            let name = e.target.name
            let mylist = dataList.map((value)=> value.value)
        switch(name){
            case 'q1':
                setAns1(mylist)
                value.length===0? setError1(true):setError1(false)
                break;
            case 'q2':
                setAns2(mylist)
                value.length===0? setError2(true):setError2(false)
                break;
            case 'q3':
                setAns3(mylist)
                value.length===0? setError3(true):setError3(false)
                break;
            case 'q4':
                setAns4(mylist)
                value.length===0? setError4(true):setError4(false)
                break;
            case 'q5':
                setAns5(mylist)
                value.length===0? setError5(true):setError5(false)
                break;
            case 'q6':
                setAns6(mylist)
                value.length===0? setError6(true):setError6(false)
                break;
            case 'q7':
                setAns7(mylist)
                value.length===0? setError7(true):setError7(false)
                break;
            case 'q8':
                setAns8(mylist)
                value.length===0? setError8(true):setError8(false)
                break;
            case 'q9':
                setAns9(mylist)
                value.length===0? setError9(true):setError9(false)
                break;
            case 'q11':
            setAns11(mylist)
            value.length===0? setError11(true):setError11(false)
                break;
            default:
                break;
        }
    }

  const getQuestionType = (respType, question, resValue, TagName, errorState=false)=>{
    switch(respType){
        case 'TEXT':
            return <Text questionName={TagName} errorState={errorState} question={question} OnChangeValue={onChangeValue}  />
            
        case 'NUMBER':
            return <Numbers questionName={TagName} errorState={errorState} question={question} onValueChange={onChangeValue}/>
            
        case 'TEXTAREA':
            return <Textarea questionName={TagName} errorState={errorState} question={question} onValueChange={onChangeValue}/>
            
        case 'Date':
            return <Date questionName={TagName} errorState={errorState} question={question} onValueChange={onChangeValue}/>
            
        case 'RADIO':
            return <Radio questionName={TagName} errorState={errorState} question={question} answers={resValue!==null?resValue:['Value1', 'Value2']} onValueChange={onChangeValue}/>
            
        case 'DROPDOWN':
            return <Dropdown questionName={TagName} errorState={errorState} question={question} answers={resValue!==null?resValue:['Great', 'Best', 'Better']} onValueChange={onChangeValue}/>
             
        case 'CHECKBOX':
            return <Checkbox questionName={TagName} errorState={errorState} question={question} answers={resValue.length!==0?resValue:['Great', 'Best', 'Better']} onValueChange={CheckBoxOnChangeValue}/>
            
        case 'File Upload':
            return <Upload questionName={TagName} errorState={errorState} question={'Picture Upload'} onValueChange={onChangeValue}/>  
        default:
            return     
    }
  }

  console.log('answers', ans1)
    return(
        <div className='lg:w-2/3 lg:m-auto py-5 mx-4'>
            <div>
                <img className='h-24 m-auto' src={process.env.PUBLIC_URL+"/logo.png"} alt="" />
            </div>
            <Header image={response?.banner_image} title={response?.title}/>
            {/* DESCRIPTION */}
            <div className='bg-gray-100 border shadow-lg rounded-xl my-4 px-4 py-3 text-justify'>
                <p className='text-center text-4xl font-bold'>{response?.title!=='null'?response?.title:'Currently Unavailable'} </p>

                {response === null 
                ? <p className='text-center text-4xl font-bold'>FORM LOADING...</p>
                : response.length === 0 ?
                    <div>
                        <p className='text-center text-4xl font-bold'>Form is Unavailable.</p>
                        <p className='text-xl text-center'>Contact the organiser for more information</p>
                    </div>
                : null
                } 
                <p className='text-base text-center'>{response?.description!=='null'?response?.description:'Contact the organiser for more information'} </p>
                   
               
            </div>
            {/* DESCRIPTION */}
            {response?.q1?
                 getQuestionType(response.r1,response.q1,response.rv1?.split('='), 'q1',error1): null
                }
            {response?.q2?
                 getQuestionType(response.r2,response.q2,response.rv2?.split('='), 'q2', error2): null
                }
            {response?.q3?
                 getQuestionType(response.r3,response.q3,response.rv3?.split('='), 'q3', error3): null
                }
            {response?.q4?
                 getQuestionType(response.r4,response.q4,response.rv4?.split('='), 'q4', error4): null
                }
            {response?.q5?
                 getQuestionType(response.r5,response.q5,response.rv5?.split('='), 'q5', error5): null
                }
            {response?.q6?
                 getQuestionType(response.r6,response.q6,response.rv6?.split('='), 'q6', error6): null
                }
            {response?.q7?
                 getQuestionType(response.r7,response.q7,response.rv7?.split('='), 'q7', error7): null
                }
            {response?.q8?
                 getQuestionType(response.r8,response.q8,response.rv8?.split('='), 'q8', error8): null
                }
            {response?.q9?
                 getQuestionType(response.r9,response.q9,response.rv9?.split('='), 'q9', error9): null
                }
            {response?.q10&&response?.q10 !=='NO'?
                 getQuestionType(response.r10,response.q10,[], 'upload', error10): null
                }
            {response?.q11?
                 getQuestionType(response.r11,response.q11,response.rv11?.split('='), 'q11', error11): null
                }

                {errorMessage!==''?
                     <div className='bg-red-50 p-4 my-4 font-bold text-xl border shadow-lg rounded-xl'>{errorMessage}</div>
                    : 
                    null}

            <Footer key={'footer'} title={'Submit'} onTap={onSubmit}  back_button='false' page={'1 of 1'}></Footer>
            {/* <Footer key={'footer'} title={'Next'} onTap={onTapped} back_button='true' page={1}></Footer> */}

            <div className='m-3'>
                <p className="text-base text-center text-gray-500">&copy; Copyrights 2024 <a className='hover:text-red-500' href="https://castvotegh.com/">Castvote</a> All rights reserved.</p>
            </div>
        </div>
    )
}

export default Page1