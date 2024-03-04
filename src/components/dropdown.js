const Dropdown = ({defaultValue,onValueChange,errorState,question,questionName, answers})=>{

    const answerList = answers.map((answer,index)=> {
        let value = answer;
        // console.log('value, defaultValue :>> ', value, defaultValue);
           return <option  key={index} value={value} >{value}</option>
           
    })
     
    return(
        <>
             {/* <!-- QUESTION-OPTION --> */}
             <div className="rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg"  style={ errorState ? {border:"1px solid red"} : {border: "1px solid #d2d4d4"}} >
                <p>{question}<span className="text-red-500">*</span></p>
                <div className="answers">
                    <div className="answer-item">
                        <select name={questionName} onChange={onValueChange} className="border focus:outline-none lg:w-1/2 w-full focus:border-black text-input bg-red-50 rounded py-2" id="inputGroupSelect01">
                            <option disabled  selected defaultValue={'Choose'}>Choose...</option>
                            {answerList}
                        </select>
                    </div>
                </div>
            </div>
            {errorState && <div className="border bg-white pl-4 border-red-500 rounded-lg p-1 mt-1 flex text-red-500"> <span className="icon  mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
           <span className="text-red-500 font-weight-bold">This is a required question</span>
       </div>}
            {/* <!-- QUESTION-OPTION --> */}
        </>
    );
}

export default Dropdown;