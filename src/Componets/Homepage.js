import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const useStyle = makeStyles({
  productHeader: {
    "&>th": {
      fontWeight: "bold"
    }
  }
})

const Homepage = () => {
  const classes = useStyle()
  const navigate = useNavigate();

  const [userData, setUserData] = useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const fetchApi = async () => {
    const response = await axios.get("https://dummyjson.com/products?limit=10&skip=10")
    console.log(response.data.products)
    setUserData(response.data.products)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    fetchApi()
  }, [])

  const handleUserProductView = (user, id) => {

    console.log(id)
    console.log(id)
    console.log(user)
    navigate(`/view/${id}`, { state: { user } })
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={classes.productHeader}>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Discount</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Brand</TableCell>
          </TableHead>
          <TableBody>
            {userData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, id) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={user.code} onClick={() => handleUserProductView(user, id)}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell> {user.title}</TableCell>
                    <TableCell> {user.category}</TableCell>
                    <TableCell> {user.price}</TableCell>
                    <TableCell> {user.discountPercentage}</TableCell>
                    <TableCell> {user.rating}</TableCell>
                    <TableCell> {user.stock}</TableCell>
                    <TableCell> {user.brand}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={userData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default Homepage