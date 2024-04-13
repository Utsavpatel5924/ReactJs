import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



export default function DenseTable() {
    const [Row, setRow]=React.useState([]);
    
    
    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        // .then((Data)=>console.log(Data,"data"))
        .then((Data)=>setRow(Data))
        // .then(console.log(Data))
    },[])


    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">username</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">city</TableCell>
            <TableCell align="right">zipcode</TableCell>
          </TableRow>
          <TableBody>
          {Row.map((Row) => (
            <TableRow
              key={Row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {Row.name}
              </TableCell>
              <TableCell align="right">{Row.username}</TableCell>
              <TableCell align="right">{Row.email}</TableCell>
              <TableCell align="right">{Row.address.city}</TableCell>
              <TableCell align="right">{Row.address.zipcode}</TableCell>
            </TableRow>
          ))}
        </TableBody></TableHead>
        
      </Table>
    </TableContainer>
  );
}