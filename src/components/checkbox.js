import { useState } from 'react';

const Checkbox = ({onValueChange,errorState,question, answers, questionName})=>{

    let [mylist, setList] = useState([]);
    let handleOnChanged = (e)=>{
        if(e.target.checked){
            mylist.push({name: e.target.name, value: e.target.value})
            onValueChange(e,mylist)
            console.log(e.target.value) 
        }else if(e.target.checked === false){ 
            let finalList = mylist.filter((item)=> item.value!==e.target.value) || mylist;
            setList(finalList)
            onValueChange(e,mylist) 
            // console.log('222 remove from mylist',finalList)
        } 
    }

    const answerList = answers.map((answer)=> {
        let value = answer;

           return (
                <div key={answer} className="answer-item">
                    <label>
                        <input 
                            name={questionName}
                            onChange={ handleOnChanged } 
                            value={value} 
                            type="checkbox" 
                            className="mr-2"/>

                        <span className="ml-2">{value}</span>
                    </label>
                </div>
           )
    })
    return(
        <>
              {/* <!-- QUESTION-CHECKBOX --> */}
             <div className="rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg"  style={ errorState ? {border:"1px solid red"} : {border: "1px solid #d2d4d4"}} >
                <p>{question} <span className="text-red-500">*</span></p>
                <div className="answers">
                    {answerList}
                    
                </div>
            </div>
            {errorState && <div className="border bg-white pl-4 border-red-500 rounded-lg p-1 mt-1 flex text-red-500"> <span className="icon  mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
           <span className="text-red-500 font-weight-bold">This is a required question</span>
       </div>}
            {/* <!-- QUESTION-CHECKBOX --> */}
        </>
    )
}

export default Checkbox;