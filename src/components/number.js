import { useState } from "react";


const Numbers = ({onValueChange,errorState,question,questionName,})=>{

    let [value, setValue] = useState(0);
    let [myError, setMyerror] = useState(false)
    const onValueDiff= (e)=>{
        let myvalue = e.target.value;
        console.log('Testin :>> ', typeof parseInt(myvalue),myvalue,"outside value", value);

        if(parseInt(myvalue) >= 1){
            setValue(myvalue)
            setMyerror(false);
            onValueChange(e)
             console.log('-------------------numbers only :>> ', value);
        }else{
            onValueChange(e)
            setMyerror(true);
            console.log('-------------------String only :>> ', value);
            setValue('')
        }

    }
    return(
        <>
             {/* <!-- QUESTION-TEXT-INPUT --> */}
            <div  key={1}  className="rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg"  style={!myError?  errorState ? {border:"1px solid red"} : {border: "1px solid #d2d4d4"} : {border:"1px solid red"} } >
                <p>{question} <span className="text-red-500">*</span></p>
                <div className="answers">
                    <div className="answer-item">
                        <label >
                            <input name={questionName} onChange={onValueDiff} type={'number'} max={200} step={1} className="border-b focus:outline-none px-2 hover:bg-red-50 focus:border-black text-input rounded-0 pb-2" value={value} />
                        </label>
                    </div>
                </div>
            </div>
            {/* {errorState && <div className="border bg-white pl-4 border-danger rounded p-1 mt-1 animate__animated animate__bounce"> <span className="icon  mr-1">!</span>
           <span className="text-red-500 font-weight-bold">This is a required question</span>
       </div>} */}
       {errorState && <div className="border bg-white pl-4 border-red-500 rounded-lg p-1 mt-1 flex text-red-500"> <span className="icon  mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
           <span className="text-red-500 font-weight-bold">This is a required question</span>
       </div>}
            {/* <!-- QUESTION-TEXT-INPUT --> */}

        </>
    );
}

export default Numbers;