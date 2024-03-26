import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein, group) {
  return { name, calories, fat, carbs, protein, group };
}

const rows = [
  createData('Zeplin', 159.00, 'Active', 24321, 'October', 'Design '),
  createData('Figma', 237.00, 'Pending', 37533, 'June', 'Finance'),
  createData('Angular', 262.00, 'Cancelled', 24122, 'March', 'Coding'),
  createData('Meta', 305.00, 'Active', 67986, 'February', "Marketing"),
  createData('Vue', 356.00, 'Active', 49111, 'October', 'finance'),
];

export default function BasicTable() {
  return (
    <div>
    <div className='mt-10 ml-6'>
        <p><b>Installed Apps</b></p>
    </div>
    <TableContainer component={Paper} className=''>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className=''>
        <TableHead>
          <TableRow>
            <TableCell>Source</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">UserID</TableCell>
            <TableCell align="right">Joined</TableCell>
            <TableCell align="right">Group</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.group}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
}