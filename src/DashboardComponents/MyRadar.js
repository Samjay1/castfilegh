import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';
  
  const data = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];
  
const MyPie = ({data1}) => {
    //   return(
    //     <PieChart width={330} height={250} >
    //         <Tooltip />   
    //         <CartesianGrid strokeDasharray="5 6" />
    //         <Legend payload={[{ value: 'Nominees', type: 'circle', color: "#F44336", id: 'amt' },/*{ value: 'Payments(GHS)', type: 'circle', color: "#448AFF", id: 'name' }*/]}/>
    //         {/* <Pie data={data} dataKey={'nominee_count'} nameKey={xValue} cx="50%" cy="50%" outerRadius={80} fill="#F44336" /> */}
    //         <Pie data={data2} dataKey={'form_count'} nameKey={'name'} cx="50%" cy="50%" innerRadius={50} outerRadius={70} fill="#E91E63" paddingAngle={5}/>
    //     </PieChart>
    //   )
    return (
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            <Scatter dataKey="cnt" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      );
};


export default MyPie;