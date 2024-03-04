import Footer from '../DashboardComponents/Footer'
import Nav from "../DashboardComponents/Nav";
import Text from '../components/text';
import Upload from '../components/upload';
import Dropdown from '../components/dropdown';
import React from 'react';
import axios from 'axios';
import Radio from '../components/radio';
import Login from './Login';
import * as XLSX from 'xlsx';
import { useNavigate } from 'react-router-dom';


const Forms = ()=>{
    const navigator = useNavigate();
    return <Formclass navigator={navigator}/>
}
class Formclass extends React.Component{
    constructor(){
        super()
        this.state={ 
            BASE_URL: 'https://apicastfilegh.votellaverify.com/organiser',
            // BASE_URL: 'http://localhost:7001/organiser',
            message:null,
            title:null,
            description:null,
            bannerImage:null,
            question1:'',question2:'',question3:'Category',question4:'',question5:'',question6:'',question7:'',question8:'',question9:'',question10:'',
            resType1:null,resType2:null,resType3:null,resType4:null,resType5:null,resType6:null,resType7:null,resType8:null,resType9:null,resType10:null,
            checkState1:false,checkState2:false,checkState3:false,checkState4:false,checkState5:false,checkState6:false,checkState7:false,checkState8:false,checkState9:false,checkState10:false,
            resValue1:null,resValue2:null,resValue3:null,resValue4:null,resValue5:null,resValue6:null,resValue7:null,resValue8:null,resValue9:null,

            fileUploadState:false,
        }
        this.submitForm = this.submitForm.bind(this)
        this.onChecking = this.onChecking.bind(this)
        this.onChangeValue = this.onChangeValue.bind(this)
        this.onChangeRes = this.onChangeRes.bind(this)
        this.onUploadChange = this.onUploadChange.bind(this)
        this.endmessage = this.endmessage.bind(this)
        this.readUploadFile = this.readUploadFile.bind(this)
        this.onChangeResValue = this.onChangeResValue.bind(this)
    }

    onUploadChange = (e)=>{
        console.log(e.target.files[0])
        this.setState({
            bannerImage: e.target.files[0]
        })
    }
    onChangeValue =(e)=>{
        console.log('Question',e.target.name,e.target.value)
         
        switch(e.target.name){
            case 'q1':
                this.setState({
                    question1: e.target.value
                })
                break;
            case 'q2':
                this.setState({
                    question2: e.target.value
                })
                break;
            case 'q3':
                this.setState({
                    question3: e.target.value
                })
                break;
            case 'q4':
                this.setState({
                    question4: e.target.value
                })
                break;
            case 'q5':
                this.setState({
                    question5: e.target.value
                })
                break;
            case 'q6':
                this.setState({
                    question6: e.target.value
                })
                break;
            case 'q7':
                this.setState({
                    question7: e.target.value
                })
                break;
            case 'q8':
                this.setState({
                    question8: e.target.value
                })
                break;
            case 'q9':
                this.setState({
                    question9: e.target.value
                })
                break;
            case 'q10':
                this.setState({
                    question10: e.target.value,
                    fileUploadState: e.target.value==='YES'? true:false
                })
                break;
            default:
                break;
    }
    }

    onChangeRes =(e)=>{
        console.log('respTYpe:',e.target.name,e.target.value)
        
        switch(e.target.name){
            case 'resp1':
                this.setState({
                    resType1: e.target.value
                })
                break;
            case 'resp2':
                this.setState({
                    resType2: e.target.value
                })
                break;
            case 'resp3':
                this.setState({
                    resType3: e.target.value
                })
                break;
            case 'resp4':
                this.setState({
                    resType4: e.target.value
                })
                break;
            case 'resp5':
                this.setState({
                    resType5: e.target.value
                })
                break;
            case 'resp6':
                this.setState({
                    resType6: e.target.value
                })
                break;
            case 'resp7':
                this.setState({
                    resType7: e.target.value
                })
                break;
            case 'resp8':
                this.setState({
                    resType8: e.target.value
                })
                break;
            case 'resp9':
                this.setState({
                    resType9: e.target.value
                })
                break;
            case 'resp10':
                this.setState({
                    resType10: e.target.value
                })
                break;
            default:
                break;
    }
    }

    endmessage = (nextPage=false) => {
        setTimeout(() => {
            console.log('timeout called')
            this.setState({
                message:null
            })
            if(nextPage){
                this.props.navigator(`${process.env.PUBLIC_URL}/Forms`)
            }
        }, 2000);
    }

    submitForm = ()=>{
        let body ={
            org_id: 1,
            title:this.state.title,
            decription:this.state.decription,
            q1:this.state.question1,
            q2:this.state.question2,
            q3:this.state.question3,
            q4:this.state.question4,
            q5:this.state.question5,
            q6:this.state.question6,
            q7:this.state.question7,
            q8:this.state.question8,
            q9:this.state.question9,
            q10:this.state.question10,
            r1:this.state.resType1,
            r2:this.state.resType2,
            r3:this.state.resType3,
            r4:this.state.resType4,
            r5:this.state.resType5,
            r6:this.state.resType6,
            r7:this.state.resType7,
            r8:this.state.resType8,
            r9:this.state.resType9,
            r10:this.state.resType10,
            upload: new FormData().append('upload',this.state.bannerImage)
        }
        console.log('MY RESPONSE :>> ', this.state.bannerImage, body);
        let org_id = window.sessionStorage.getItem('org_id');
        console.log('Org id addup',org_id)

        let formdata = new FormData()
        formdata.append('file',this.state.bannerImage)
        formdata.append('org_id', org_id)
        formdata.append('title', this.state.title)
        formdata.append('description', this.state.description)
        formdata.append('q1', this.state.question1)
        formdata.append('q2', this.state.question2)
        formdata.append('q3', this.state.question3)
        formdata.append('q4', this.state.question4)
        formdata.append('q5', this.state.question5)
        formdata.append('q6', this.state.question6)
        formdata.append('q7', this.state.question7)
        formdata.append('q8', this.state.question8)
        formdata.append('q9', this.state.question9)
        formdata.append('q10', this.state.question10)
        formdata.append('r1', this.state.resType1)
        formdata.append('r2', this.state.resType2)
        formdata.append('r3', this.state.resType3)
        formdata.append('r4', this.state.resType4)
        formdata.append('r5', this.state.resType5)
        formdata.append('r6', this.state.resType6)
        formdata.append('r7', this.state.resType7)
        formdata.append('r8', this.state.resType8)
        formdata.append('r9', this.state.resType9)
        formdata.append('r10', this.state.resType10)
        formdata.append('rv1', this.state.resValue1)
        formdata.append('rv2', this.state.resValue2)
        formdata.append('rv3', this.state.resValue3)
        formdata.append('rv4', this.state.resValue4)
        formdata.append('rv5', this.state.resValue5)
        formdata.append('rv6', this.state.resValue6)
        formdata.append('rv7', this.state.resValue7)
        formdata.append('rv8', this.state.resValue8)
        formdata.append('rv9', this.state.resValue9)

        

        if(this.state.title?.length===0 || this.state.question1?.length===0){
            this.setState({
                message:'Please fill Title and Question(ATLEAST ONE) before submitting...'
            })
            this.endmessage();
            return;
        }else{
            axios.post(`${this.state.BASE_URL}/addform`, formdata)
            .then((response)=>{
                let message = response.data.message
                this.setState({
                    message:message
                })
                this.endmessage(true)
               
                console.log('response post:>>', response);
            }).catch((error)=>{
                let message = error.data?.message ? error.data?.message: 'Banner Image is too big (Please choose another one)'
                this.setState({
                    message:message
                })
                this.endmessage()
                console.log('error :>> ', error);
            })
        }
    }
    onChangeResValue =(data)=>{
        console.log('general--------resValue:',data)
        switch(data.name){
            case 'resValue1':
                console.log('--------resValue1:',data)
                this.setState({
                    resValue1: data.value
                })
                break;
            case 'resValue2':
                console.log('---------resValue2:',data)
                this.setState({
                    resValue2: data.value
                })
                break;
            case 'resValue3':
                this.setState({
                    resValue3: data.value
                })
                break;
            case 'resValue4':
                this.setState({
                    resValue4: data.value
                })
                break;
            case 'resValue5':
                this.setState({
                    resValue5: data.value
                })
                break;
            case 'resValue6':
                this.setState({
                    resValue6: data.value
                })
                break;
            case 'resValue7':
                this.setState({
                    resValue7: data.value
                })
                break;
            case 'resValue8':
                this.setState({
                    resValue8: data.value
                })
                break;
            case 'resValue9':
                this.setState({
                    resValue9: data.value
                })
                break;
            case 'resValue10':
                this.setState({
                    resValue10: data.value
                })
                break;
            case 'resValue11':
                this.setState({
                    resValue11: data.value
                })
                break;
            default:
                break;
    }
    }
    readUploadFile = (e, name)=>{
        console.log('readuploadfile :>>');
        e.preventDefault();
        if(e.target.files){
            const reader = new FileReader();
            reader.onload = (e)=>{
                const data = e.target.result;
                const workbook = XLSX.read(data, {type: 'array'});
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);
                console.log('json :>> ', json);
                let formatedList = '';
                json.map((value,index)=>{
                    if(index===0){
                       return formatedList = value.List
                    }else{
                        return formatedList += "="+ value.List
                    }
                })
                this.onChangeResValue({name:name, value:formatedList})
                console.log('formatedList :>> ', formatedList);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }

    }
    onChecking = (e)=>{
        console.log('e.target.name, :>> ', e.target.name, e.target.checked);
        switch(e.target.name){
            case 'checkState1':
                this.setState({
                    checkState1: e.target.checked
                })
                break;
            case 'checkState2':
                this.setState({
                    checkState2: e.target.checked
                })
                break;
            case 'checkState3':
                this.setState({
                    checkState3: e.target.checked
                })
                break;
            case 'checkState4':
                this.setState({
                    checkState4: e.target.checked
                })
                break;
            case 'checkState5':
                this.setState({
                    checkState5: e.target.checked
                })
                break;
            case 'checkState6':
                this.setState({
                    checkState6: e.target.checked
                })
                break;
            case 'checkState7':
                this.setState({
                    checkState7: e.target.checked
                })
                break;
            case 'checkState8':
                this.setState({
                    checkState8: e.target.checked
                })
                break;
            case 'checkState9':
                this.setState({
                    checkState9: e.target.checked
                })
                break;
            case 'checkState10':
                this.setState({
                    checkState10: e.target.checked
                })
                break;
            default:
                break;
        }

    }

    render(){
        let org_id = window.sessionStorage.getItem('org_id')
        console.log('resValue', this.state.resValue1)
        if(!org_id){
            return <Login/>
        }else{
        return (
        

<>
<div className="relative min-h-screen md:flex">
    <Nav addform={true} />
    <main className="lg:mx-5 my-5 w-full px-5">
    {this.state.message?
        <div className='bg-blue-50 p-4 my-3 text-xl font-bold border shadow-lg rounded-xl'>{this.state.message}</div>:
        null}
    {/* <!-- BASIC PROFILE INFO --> */}
    <p className="text-2xl font-bold text-gray-800">Add Nominee Form</p>


    <div className="border my-5 space-y-2  p-5 shadow-xl rounded-xl">
        <p className='pl-2 text-2xl'>Form Title</p>
        <label>
            <input name={'title'} onChange={(e)=>{this.setState({title:e.target.value})}} type="text" className=" border-b focus:outline-none w-full focus:border-black text-input rounded-0 pb-2 px-2 hover:bg-red-50"  placeholder="Enter the Title"/>
        </label>
    </div>

    <div className="border my-5 space-y-2  p-5 shadow-xl rounded-xl">
        <p className='pl-2 text-2xl'>Form Description</p>
        <label>
            <textarea name={'decription'} onChange={(e)=>{this.setState({description:e.target.value})}} className="border-b border-r  focus:outline-none w-full focus:border-black text-input rounded-b py-2 px-2 hover:bg-red-50"  placeholder="Type your response"></textarea>
        </label>
    </div>

    <div className='my-4'>
        <Upload question={'Upload Form Banner Image (Must be landscape 214x45)'} onValueChange={this.onUploadChange}/>
    </div>
    
    <div className='grid lg:grid-cols-2 gap-2 border lg:p-5 rounded-xl'>
         {/*     QUESTION FORMAT */}
         <div className='col-span-2 bg-blue-50 p-5 rounded-xl'>
            <div className='flex justify-between font-bold'>
                <p className='text-xl'> Nominee profile image</p>
                <div className='space-x-1'>
                    <label>Add</label> <input type="checkbox" checked={this.state.fileUploadState} readOnly/>
                </div>
            </div>
            <Radio question={`Do you want to accept Nominee profile image : ${this.state.fileUploadState?'YES':'NO'}`} questionName={'q10'} answers={['YES', 'NO']} onValueChange={this.onChangeValue}/>
        </div>

        {/*     QUESTION FORMAT */}
        <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
            <div className='flex justify-between font-bold'>
                <p className='text-xl'>Question 1</p>
                <div className='space-x-1'>
                    <label>Add</label> <input type="checkbox" name='checkState1' checked={this.state.question1?true:false} onChange={this.onChecking}/>
                </div>
            </div>
            <Text question={'Enter the question'} questionName={'q1'} OnChangeValue={this.onChangeValue}  myValue={this.state.question1}/>
            <Dropdown question={'Select Response type'} questionName={'resp1'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
            {/* for getting extra response values for checkbox, radio and dropdown res types */}
            {this.state.resType1==='DROPDOWN' || this.state.resType1==='RADIO' || this.state.resType1==='CHECKBOX'? 
            <div>
                <textarea onChange={(e)=>{this.setState({resValue1:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue1}></textarea>
                <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
               <div>
                    <form>
                        <label htmlFor='upload' className='font-bold'>Bulk upload</label> 
                        <input 
                        className={'mx-3'}
                        type="file"
                        name='upload'
                        id='upload'
                        onChange={(e)=>{ this.readUploadFile(e,'resValue1')}} />
                    </form>
                    <div className='py-2'>
                        <a className='bg-blue-100 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white p-1 px-2' href="https://apicastfilegh.votellaverify.com/public/List.xlsx">Download Sample</a>
                    </div>
               </div>
            </div>: null}
        
        </div>
        {/*     QUESTION FORMAT */}
        <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
            <div className='flex justify-between font-bold'>
                <p className='text-xl'>Question 2</p>
                <div className='space-x-1'>
                    <label>Add</label> <input type="checkbox" name='checkState2' checked={this.state.question2?true:false} onChange={this.onChecking}/>
                </div>
            </div>
            <Text question={'Enter the question'} questionName={'q2'} OnChangeValue={this.onChangeValue}  myValue={this.state.question2}/>
            <Dropdown question={'Select Response type'} questionName={'resp2'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
            {/* for getting extra response values for checkbox, radio and dropdown res types */}
            {this.state.resType2==='DROPDOWN' || this.state.resType2==='RADIO' || this.state.resType2==='CHECKBOX'? 
            <div>
                <textarea onChange={(e)=>{this.setState({resValue2:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue2}></textarea>
                <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                <div>
                    <form>
                        <label htmlFor='upload' className='font-bold'>Bulk upload</label> 
                        <input 
                        className={'mx-3'}
                        type="file"
                        name='upload'
                        id='upload'
                        onChange={(e)=>{this.readUploadFile(e,'resValue2')}} />
                    </form>
                    <div className='py-2'>
                        <a className='bg-blue-100 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white p-1 px-2' href="https://apicastfilegh.votellaverify.com/public/List.xlsx">Download Sample</a>
                    </div>
               </div>
            </div>: null}

        </div>

        {/*     QUESTION FORMAT */}
        <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
            <div className='flex justify-between font-bold'>
                <p className='text-xl'>Question 3</p>
                <div className='space-x-1'>
                    <label>Add</label> <input type="checkbox" name='checkState3' checked={this.state.question3?true:false} onChange={this.onChecking}/>
                </div>
            </div>
            <Text question={'Enter the question'} questionName={'q3'} OnChangeValue={this.onChangeValue}  myValue={this.state.question3}/>
            <Dropdown question={'Select Response type'} questionName={'resp3'} onValueChange={this.onChangeRes} answers={['CHECKBOX']} />
            {/* for getting extra response values for checkbox, radio and dropdown res types */}
            {true? 
            <div>
                <textarea onChange={(e)=>{this.setState({resValue3:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue3}></textarea>
                <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                <div>
                    <form>
                        <label htmlFor='upload' className='font-bold'>Bulk upload</label> 
                        <input 
                        className={'mx-3'}
                        type="file"
                        name='upload'
                        id='upload'
                        onChange={(e)=>{ this.readUploadFile(e,'resValue3')}} />
                    </form>
                    <div className='py-2'>
                        <a className='bg-blue-100 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white p-1 px-2' href="https://apicastfilegh.votellaverify.com/public/List.xlsx">Download Sample</a>
                    </div>
               </div>
            </div>: null}
            
        </div>

        {/*     QUESTION FORMAT */}
        <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
            <div className='flex justify-between font-bold'>
                <p className='text-xl'>Question 4</p>
                <div className='space-x-1'>
                    <label>Add</label> <input type="checkbox" name='checkState4' checked={this.state.question4?true:false} onChange={this.onChecking}/>
                </div>
            </div>
            <Text question={'Enter the question'} questionName={'q4'} OnChangeValue={this.onChangeValue}  myValue={this.state.question4}/>
            <Dropdown question={'Select Response type'} questionName={'resp4'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
            {/* for getting extra response values for checkbox, radio and dropdown res types */}
            {this.state.resType4==='DROPDOWN' || this.state.resType4==='RADIO' || this.state.resType4==='CHECKBOX'? 
            <div>
                <textarea onChange={(e)=>{this.setState({resValue4:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue4}></textarea>
                <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                <div>
                    <form>
                        <label htmlFor='upload' className='font-bold'>Bulk upload</label> 
                        <input 
                        className={'mx-3'}
                        type="file"
                        name='upload'
                        id='upload'
                        onChange={(e)=>{ this.readUploadFile(e,'resValue4')}} />
                    </form>
                    <div className='py-2'>
                        <a className='bg-blue-100 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white p-1 px-2' href="https://apicastfilegh.votellaverify.com/public/List.xlsx">Download Sample</a>
                    </div>
               </div>
            </div>: null}
            
        </div>
        
          {/*     QUESTION FORMAT */}
          <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
            <div className='flex justify-between font-bold'>
                <p className='text-xl'>Question 5</p>
                <div className='space-x-1'>
                    <label>Add</label> <input type="checkbox" name='checkState5' checked={this.state.question5?true:false} onChange={this.onChecking}/>
                </div>
            </div>
            <Text question={'Enter the question'} questionName={'q5'} OnChangeValue={this.onChangeValue}  myValue={this.state.question5}/>
            <Dropdown question={'Select Response type'} questionName={'resp5'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
            {/* for getting extra response values for checkbox, radio and dropdown res types */}
            {this.state.resType5==='DROPDOWN' || this.state.resType5==='RADIO' || this.state.resType5==='CHECKBOX'? 
            <div>
                <textarea onChange={(e)=>{this.setState({resValue5:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue5}></textarea>
                <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                <div>
                    <form>
                        <label htmlFor='upload' className='font-bold'>Bulk upload</label> 
                        <input 
                        className={'mx-3'}
                        type="file"
                        name='upload'
                        id='upload'
                        onChange={(e)=>{ this.readUploadFile(e,'resValue5')}} />
                    </form>
                    <div className='py-2'>
                        <a className='bg-blue-100 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white p-1 px-2' href="https://apicastfilegh.votellaverify.com/public/List.xlsx">Download Sample</a>
                    </div>
               </div>
            </div>: null}
            
        </div>
        

          {/*     QUESTION FORMAT */}
          <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
            <div className='flex justify-between font-bold'>
                <p className='text-xl'>Question 6</p>
                <div className='space-x-1'>
                    <label>Add</label> <input type="checkbox" name='checkState6' checked={this.state.question6?true:false} onChange={this.onChecking}/>
                </div>
            </div>
            <Text question={'Enter the question'} questionName={'q6'} OnChangeValue={this.onChangeValue}  myValue={this.state.question6}/>
            <Dropdown question={'Select Response type'} questionName={'resp6'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
             {/* for getting extra response values for checkbox, radio and dropdown res types */}
             {this.state.resType6==='DROPDOWN' || this.state.resType6==='RADIO' || this.state.resType6==='CHECKBOX'? 
            <div>
                <textarea onChange={(e)=>{this.setState({resValue6:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue6}></textarea>
                <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                <div>
                    <form>
                        <label htmlFor='upload' className='font-bold'>Bulk upload</label> 
                        <input 
                        className={'mx-3'}
                        type="file"
                        name='upload'
                        id='upload'
                        onChange={(e)=>{ this.readUploadFile(e,'resValue6')}} />
                    </form>
                    <div className='py-2'>
                        <a className='bg-blue-100 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white p-1 px-2' href="https://apicastfilegh.votellaverify.com/public/List.xlsx">Download Sample</a>
                    </div>
               </div>
            </div>: null}
            
        </div>
        

          {/*     QUESTION FORMAT */}
          <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
            <div className='flex justify-between font-bold'>
                <p className='text-xl'>Question 7</p>
                <div className='space-x-1'>
                    <label>Add</label> <input type="checkbox" name='checkState8' checked={this.state.question7?true:false} onChange={this.onChecking}/>
                </div>
            </div>
            <Text question={'Enter the question'} questionName={'q7'} OnChangeValue={this.onChangeValue}  myValue={this.state.question7}/>
            <Dropdown question={'Select Response type'} questionName={'resp7'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
             {/* for getting extra response values for checkbox, radio and dropdown res types */}
             {this.state.resType7==='DROPDOWN' || this.state.resType7==='RADIO' || this.state.resType7==='CHECKBOX'? 
            <div>
                <textarea onChange={(e)=>{this.setState({resValue7:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue7}></textarea>
                <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                <div>
                    <form>
                        <label htmlFor='upload' className='font-bold'>Bulk upload</label> 
                        <input 
                        className={'mx-3'}
                        type="file"
                        name='upload'
                        id='upload'
                        onChange={(e)=>{ this.readUploadFile(e,'resValue7')}} />
                    </form>
                    <div className='py-2'>
                        <a className='bg-blue-100 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white p-1 px-2' href="https://apicastfilegh.votellaverify.com/public/List.xlsx">Download Sample</a>
                    </div>
               </div>
            </div>: null}
        </div>

        {/*     QUESTION FORMAT */}
        <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
            <div className='flex justify-between font-bold'>
                <p className='text-xl'>Question 8</p>
                <div className='space-x-1'>
                    <label>Add</label> <input type="checkbox" name='checkState8' checked={this.state.question8?true:false} onChange={this.onChecking}/>
                </div>
            </div>
            <Text question={'Enter the question'} questionName={'q8'} OnChangeValue={this.onChangeValue}  myValue={this.state.question8}/>
            <Dropdown question={'Select Response type'} questionName={'resp8'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
             {/* for getting extra response values for checkbox, radio and dropdown res types */}
             {this.state.resType8==='DROPDOWN' || this.state.resType8==='RADIO' || this.state.resType8==='CHECKBOX'? 
            <div>
                <textarea onChange={(e)=>{this.setState({resValue8:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue8}></textarea>
                <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                <div>
                    <form>
                        <label htmlFor='upload' className='font-bold'>Bulk upload</label> 
                        <input 
                        className={'mx-3'}
                        type="file"
                        name='upload'
                        id='upload'
                        onChange={(e)=>{ this.readUploadFile(e,'resValue8')}} />
                    </form>
                    <div className='py-2'>
                        <a className='bg-blue-100 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white p-1 px-2' href="https://apicastfilegh.votellaverify.com/public/List.xlsx">Download Sample</a>
                    </div>
               </div>
            </div>: null}
        </div>


        {/*     QUESTION FORMAT */}
        <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
            <div className='flex justify-between font-bold'>
                <p className='text-xl'>Question 9</p>
                <div className='space-x-1'>
                    <label>Add</label> <input type="checkbox" name='checkState9' checked={this.state.question9?true:false} onChange={this.onChecking}/>
                </div>
            </div>
            <Text question={'Enter the question'} questionName={'q9'} OnChangeValue={this.onChangeValue}  myValue={this.state.question9}/>
            <Dropdown question={'Select Response type'} questionName={'resp9'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
             {/* for getting extra response values for checkbox, radio and dropdown res types */}
             {this.state.resType9==='DROPDOWN' || this.state.resType9==='RADIO' || this.state.resType9==='CHECKBOX'? 
            <div>
                <textarea onChange={(e)=>{this.setState({resValue9:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue9}></textarea>
                <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                <div>
                    <form>
                        <label htmlFor='upload' className='font-bold'>Bulk upload</label> 
                        <input 
                        className={'mx-3'}
                        type="file"
                        name='upload'
                        id='upload'
                        onChange={(e)=>{ this.readUploadFile(e,'resValue9')}} />
                    </form>
                    <div className='py-2'>
                        <a className='bg-blue-100 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white p-1 px-2' href="https://apicastfilegh.votellaverify.com/public/List.xlsx">Download Sample</a>
                    </div>
               </div>
            </div>: null}
        </div>

        {/*     QUESTION FORMAT */}
        <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
            <div className='flex justify-between font-bold'>
                <p className='text-xl'>Question 10</p>
                <div className='space-x-1'>
                    <label>Add</label> <input type="checkbox" name='checkState11' checked={this.state.question11?true:false} onChange={this.onChecking}/>
                </div>
            </div>
            <Text question={'Enter the question'} questionName={'q11'} OnChangeValue={this.onChangeValue}  myValue={this.state.question11}/>
            <Dropdown question={'Select Response type'} questionName={'resp11'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
             {/* for getting extra response values for checkbox, radio and dropdown res types */}
             {this.state.resType11==='DROPDOWN' || this.state.resType11==='RADIO' || this.state.resType11==='CHECKBOX'? 
            <div>
                <textarea onChange={(e)=>{this.setState({resValue11:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue11}></textarea>
                <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                <div>
                    <form>
                        <label htmlFor='upload' className='font-bold'>Bulk upload</label> 
                        <input 
                        className={'mx-3'}
                        type="file"
                        name='upload'
                        id='upload'
                        onChange={(e)=>{ this.readUploadFile(e,'resValue11')}} />
                    </form>
                    <div className='py-2'>
                        <a className='bg-blue-100 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white p-1 px-2' href="https://apicastfilegh.votellaverify.com/public/List.xlsx">Download Sample</a>
                    </div>
               </div>
            </div>: null}
        </div>
        
         
    </div>

    {this.state.message?
        <div className='bg-blue-50 p-4 my-3 text-xl font-bold border shadow-lg rounded-xl'>{this.state.message}</div>:
        null}
    
    <div className='text-center my-4'>
        <button onClick={this.submitForm} className='bg-blue-700 text-white rounded px-4 py-1 font-bold m-auto'>Create Form</button>
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