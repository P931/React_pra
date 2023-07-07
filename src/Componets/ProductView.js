import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import axios from 'axios';
import { Button, Card, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
  main: {
    display: "flex"
  },
  productDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    "&>div": {
      margin: "0px 52px",
      fontWeight: " bold",
    }
  }
})

const ProductView = () => {

  const { userID } = useParams()
  const location = useLocation()
  const classes = useStyle()

  const navigate = useNavigate()
  const individualUserData = location.state.user

  const handlGoToHomePage = () => {
    navigate('/')
  }

  return (
    <>
      <Carousel>
        {
          individualUserData.images.map((user, id) => {
            console.log("user is : -", user)
            return (
              <>
                <Card className={classes.main}>
                  <img src={user} />
                  <Grid className={classes.productDetails}>
                    <Grid>
                      <Grid>Title</Grid>
                      <Grid>Brand</Grid>
                      <Grid>Category</Grid>
                      <Grid>Price</Grid>
                      <Grid>Rating</Grid>
                      <Grid>Stock</Grid>
                    </Grid>
                    <Grid>
                      <Grid>{individualUserData.title}</Grid>
                      <Grid>{individualUserData.brand}</Grid>
                      <Grid>{individualUserData.category}</Grid>
                      <Grid>{individualUserData.price}</Grid>
                      <Grid>{individualUserData.rating}</Grid>
                      <Grid>{individualUserData.stock}</Grid>
                    </Grid>
                  </Grid>
                </Card>
              </>
            )
          })
        }
      </Carousel>
      <Button onClick={() => handlGoToHomePage()}>BACK</Button>
    </>
  )
}

export default ProductView