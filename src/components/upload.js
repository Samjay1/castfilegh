
const upload = ({question,errorState, onValueChange,fileName,questionName})=>{
 
    return(
        <>
            <div  key={1}  className="rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg"  style={ errorState ? {border:"1px solid red"} : {border: "1px solid #d2d4d4"}} >
                <p>{question} <span className="text-red-500">*</span></p>
                <label className="block mt-2 font-normal">
                        <span className="sr-only">Choose profile photo</span>
                        <input name="upload" onChange={onValueChange} accept="image/*" type="file" className="block w-full text-sm text-slate-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border
                          file:text-sm file:font-semibold
                          file:bg-blue-50 file:border-blue-900
                           file:text-blue-900
                          hover:file:bg-blue-100
                          text-blue-900
                        "/>
                      </label>
            </div>
            {errorState && <div className="border bg-white pl-4 border-red-500 rounded-lg p-1 mt-1 flex text-red-500"> <span className="icon  mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
           <span className="text-red-500 font-weight-bold">This is a required question</span>
       </div>}
        </>
    )
}

export default upload