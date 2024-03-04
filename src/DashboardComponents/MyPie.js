import { Pie, PieChart,
    CartesianGrid,
    Tooltip,
    Legend } from 'recharts';

const MyPie = ({data,data2, xValue, label}) => { 
      return(
        <PieChart width={330} height={250} >
            <Tooltip /> 
            <CartesianGrid strokeDasharray="5 6" />
            <Legend payload={[{ value: 'Organisers(Highest Nominee count)', type: 'circle', color: "#7B1FA2", id: 'name' },/*{ value: 'Payments(GHS)', type: 'circle', color: "#448AFF", id: 'name' }*/]}/>
            <Pie data={data} dataKey={'nominee_count'} nameKey={'nominee_count'} cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#7B1FA2" paddingAngle={5}  label/>
          
            <Pie data={data} dataKey={'nominee_count'} nameKey={'nominee_count'} cx="50%" cy="50%" innerRadius={35} outerRadius={60} fill="#E91E63" paddingAngle={0}/>
           
        </PieChart>
      )
};


export default MyPie;