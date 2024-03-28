import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getReadBooks } from "../../utility/localStorage";
import PropTypes from 'prop-types';



const colors = ['#006D77', '#0088FE', '#FF6B6B', '#FFD700', '#001F3F', 'pink'];


const Read = () => {
    const readData = useLoaderData();
    const [bookSelect, setBookSelect] = useState([]);

    useEffect(() => {
        const storedReadBookId = getReadBooks();
        if(readData.length > 0){
            const selectBook = readData.filter(book => storedReadBookId.includes(book.id))
            setBookSelect(selectBook);
        }
    }, [])


    
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };


    return (
       <div className="md:mt-20 mt-12">
         <ResponsiveContainer width='100%' height={400}>
         <BarChart
            width={1200}
            height={700}
            data={bookSelect}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 50,
            }}
        >
             <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis dataKey="totalPages"/>
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {bookSelect.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
        </BarChart>
         </ResponsiveContainer>
       </div>
    );
};



Read.propTypes = {
    fill: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number

}

export default Read;