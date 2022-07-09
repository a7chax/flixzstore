import type { NextPage } from "next";
import {useState} from 'react'
import Head from "next/head";
import Image from "next/image";
import { Box, Container, Divider, Fab, Grid, Stack, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Link from "next/link";
import styles from '../../styles/Home.module.css'
import { dataGame } from "../../data/game";
import { ListTopUpMobileLegend } from "../../data/price/mlbb";
import { iItemTopUp } from "../../data/interface";


const TopUp : NextPage = () => {

  const [selected, setSelected] = useState<iItemTopUp>()

  const data =() => {
    return ListTopUpMobileLegend
  }


  const ContentListTopUp = () =>{
    return (
      <Grid container spacing={{ xs: 2, sm : 4,md: 2,lg : 2,  xl : 2 }} columns={{ xs: 12, sm: 16, md: 20,lg : 20,xl :20 }}>
      {data().map((item, index) => (
      <Link href={"/Topup"} key={index}>
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={item == selected ? {  maxWidth : 260, maxHeight : 330,borderRadius : 5, border : 1} : {  maxWidth : 260, maxHeight : 330,borderRadius : 5}} onClick={() => setSelected(item)}>
              <CardActionArea>
                <CardContent sx={{maxHeight : 330 }}>
                  <Grid container justifyContent={"center"}>
                    <Stack>


                    <Typography gutterBottom variant="body1" component="p" align='center' >
                        {item.amount}
                      </Typography>

                      <Typography gutterBottom variant="body1" component="p" align='center' >
                        {item.currencyName}
                      </Typography>
                      

                      <Typography gutterBottom variant="body1" component="p" align='center'  fontWeight={"bold"}>
                        Rp. {item.price}
                      </Typography>
                    </Stack>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
        </Grid>
      </Link>
      ))}
    </Grid>
    )
  }

  return (
    <div>
      <Head>
        <title>Flixzstore Topup</title>
        <meta name="description" content="Flixzstore Topup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>

      <CssBaseline />


      <Box sx={{backgroundColor : "#121212"}}>
        <Grid container justifyContent={"center"}>
          <Image   
            width={40}
            height={40}
            src={"/images/flixzstore.jpeg"}
            alt={"logo"}
          /> 
        </Grid>
      </Box>

      <Container maxWidth="md" >
          <Image
            width={1000}
            height={400}
            src={"/images/cover/mlbb.jpg"}
            alt={"cover"}

          />


      <Box
       sx={{
        backgroundColor: '#121212',
        paddingLeft : 5,
        paddingRight : 5,
        paddingTop : 1,
        paddingBottom : 5,
        marginTop :5
      }}
      borderRadius={2}
      >

        <Typography gutterBottom variant="body1" component="p" align='center' sx={{margin : 1}}  fontWeight={"bold"}>
            Data Akun
        </Typography>

        <Grid container columns={{ xs: 8, sm: 12, md: 16,lg : 20,xl :50 }} width={{md : "40%",lg : "40%",xl : "40%"}}>
          <TextField fullWidth sx={{marginBottom : 2}} label="ID Game" id="fullWidth" />
        </Grid>
        <Typography gutterBottom variant="caption" component="p" fontFamily={'Open Sans'} fontWeight={"bold"}>
          Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh : 12345678(1234).

        </Typography>
      </Box>






      <Box sx={{backgroundColor : "#121212", paddingRight : 5, paddingLeft : 5,paddingBottom : 5,paddingTop : 1, marginTop : 5, marginBottom : 5}} borderRadius={2}>
      <Typography gutterBottom variant="body1" component="p" align='center' sx={{margin : 3}} fontWeight={"bold"}>
          Pilih Nominal Topup
      </Typography>
      
      {ContentListTopUp()}

      </Box>





      </Container>
      </main>
    </div>
  )
}

export default TopUp