import React from "react";
import ReactExport from "react-export-excel-xlsx-fix";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Download extends React.Component {
   render() {
    // console.log('EXPORT')
    // console.log('this.props.table_label :>> ', this.props.table_label);
    // console.log('this.props.table_data :>> ', this.props.table_data);
    // const data2=[
    //     {q1:'John',
    //      q2:'Manu',
    //      q3:'200', 
    //      q4:'12/02/2022',
    //      q5:'Active',
    //      q6:'John',
    //      q7:'Manu',
    //      q8:'200', 
    //      q9:'12/02/2022',
    //      q10:null},
    //      {q1:'make',
    //      q2:'Manu',
    //      q3:'200', 
    //      q4:'12/02/2022',
    //      q5:'Active',
    //      q6:'John',
    //      q7:'Manu',
    //      q8:'200', 
    //      q9:'12/02/2022',
    //      q10: null},
    //      {q1:'ben',
    //      q2:'Manu',
    //      q3:'200', 
    //      q4:'12/02/2022',
    //      q5:'Active',
    //      q6:'John',
    //      q7:'Manu',
    //      q8:'200', 
    //      q9:'12/02/2022',
    //      q10:null},
    //      {q1:'ken',
    //      q2:'Manu',
    //      q3:'200', 
    //      q4:'12/02/2022',
    //      q5:'Active',
    //      q6:'John',
    //      q7:'Manu',
    //      q8:'200', 
    //      q9:'12/02/2022',
    //      q10:null}
    //     ]

        // const table_label = ['Firstname','lastname','paid', 'date','status','question6','more7','question8','more9']

        // let keyss = 
        
        let keyss = Object.keys(this.props.table_data[0])
        // console.log('keyss :>> ', keyss);
        let columns = this.props.table_label.map((value,index)=>{
            return  <ExcelColumn label={this.props?.table_label[index]} value={keyss[index]}/>
        })

        
        return (
            <ExcelFile element={<button>Export</button>}>
                <ExcelSheet data={this.props.table_data} name={this.props.table_name}>
                    {columns}
                </ExcelSheet>
            </ExcelFile> 
        );


    //    return (
    //         <ExcelFile element={<button>Export</button>}>
    //             <ExcelSheet data={this.props.table_data} name={this.props.table_name}>
    //                 <ExcelColumn label={this.props?.table_label[0]} value="a1"/>
    //                 <ExcelColumn label={this.props?.table_label[1]} value="a2"/> 
    //                 <ExcelColumn label={this.props?.table_label[2]} value="a3"/>
    //                 <ExcelColumn label={this.props?.table_label[3]} value="a4"/>
    //                 <ExcelColumn label={this.props?.table_label[4]} value="a5"/>
    //                 <ExcelColumn label={this.props?.table_label[5]} value="a6"/>
    //                 <ExcelColumn label={this.props?.table_label[6]} value="a7"/>
    //                 <ExcelColumn label={this.props?.table_label[7]} value="a8"/>
    //                 <ExcelColumn label={this.props?.table_label[8]} value="a9"/>
    //                 <ExcelColumn label={this.props?.table_label[9]} value="a10"/>
    //                 <ExcelColumn label={this.props?.table_label[10]} value="a11"/>
    //                 <ExcelColumn label={this.props?.table_label[11]} value="a12"/>
    //                 <ExcelColumn label={this.props?.table_label[12]} value="a13"/>
    //                 <ExcelColumn label={this.props?.table_label[13]} value="a14"/>
    //                 <ExcelColumn label={this.props?.table_label[14]} value="a15"/>
    //             </ExcelSheet>
    //         </ExcelFile> 
    //     );
    }
}

export default Download;