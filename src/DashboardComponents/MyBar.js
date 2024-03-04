import { BarChart,Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend } from 'recharts';

const MyBar = ({data, xValue, barData}) => {
    // const datak = [
    //     {
    //       name: "Jan",
    //       nominees: 4000,
    //       amt: 2400
    //     },
    //     {
    //       name: "Feb",
    //       nominees: 3000,
    //       amt: 2210
    //     },
    //     {
    //       name: "Mar",
    //       nominees: 2000,
    //       amt: 2290
    //     },
    //     {
    //       name: "Apr",
    //       nominees: 2780,
    //       amt: 2000
    //     },
    //     {
    //       name: "May",
    //       nominees: 1890,
    //       amt: 2181
    //     },
    //     {
    //       name: "Jun",
    //       nominees: 2390,
    //       amt: 2500,
    //       y:'count'
    //     },
    //     {
    //       name: "Jul",
    //       nominees: 3490,
    //       amt: 2100
    //     }
    //   ];
    // return (
    //     <LineChart
    //       width={500}
    //       height={300}
    //       data={data}
    //       margin={{
    //         top: 5,
    //         right: 30,
    //         left: 20,
    //         bottom: 5
    //       }}
    //     >
    //       <CartesianGrid strokeDasharray="3 3" />
    //       <XAxis dataKey="name" />
    //       <YAxis />
    //       <Tooltip />
    //       <Legend />
    //       <Line
    //         type="monotone"
    //         dataKey="pv"
    //         stroke="#8884d8"
    //         activeDot={{ r: 8 }}
    //       />
    //       <Line type="monotone" dataKey="nominees" stroke="#82ca9d" />
    //     </LineChart>
    //   );

      return(
        <BarChart width={630} height={250} data={data}  barSize={60}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xValue} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={barData} fill="#7B1FA2" />
        </BarChart>
      )
};


export default MyBar;