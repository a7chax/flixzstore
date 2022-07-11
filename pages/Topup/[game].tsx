import type { NextPage } from "next";
import React from 'react'
import Head from "next/head";
import Image from "next/image";
import { Box, Button, Container, Divider, Fab, Grid, Paper, Stack, TextField } from '@mui/material';
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
import { iItemTopUp, iTopUpPage } from "../../data/interface";
import { useRouter } from "next/router";
import { dataTopUpPage } from "../../data/topup";
import { ListTopUpFreeFire } from "../../data/price/ff";
import { ListTopUpPUBGM } from "../../data/price/pubg";
import { ListTopUpValo } from "../../data/price/valo";
import { ListTopUpCODM } from "../../data/price/codm";
import { ListTopUpApexm } from "../../data/price/apexm";
import { ListTopUpPB } from "../../data/price/pb";
import { ListTopUpWildRift } from "../../data/price/wildrift";
import { ListTopUpGenshin } from "../../data/price/genshin";
import { ListTopUpMLA } from "../../data/price/mla";
import { ListTopUpZepeto } from "../../data/price/zepeto";
import { ListTopUpSausageMan } from "../../data/price/sausageman";
import { ListTopUpAOV } from "../../data/price/aov";
import { ListTopUpHonkaiImpact } from "../../data/price/honkaiimpact";
import { ListTopUpDJSEA } from "../../data/price/dragonrajasea";
import { ListTopUpSuperSus } from "../../data/price/supersus";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TopUp : NextPage = () => {

  
  const router = useRouter()

  const {query, isReady} = router
  console.log(query)
  
    const [selectedTopup, setSelectedTopup] = React.useState<iItemTopUp>()
    const [textInput, setTextInput] = React.useState<String>()
    const [textInput2, setTextInput2] = React.useState<String>()
    const [textInput3, setTextInput3] = React.useState<String>()
    const [isDataTopUpReady, setIsDataTopUpReady] = React.useState<Boolean>(false)

    const selectDataTopUpPage = (gameName : String) : iTopUpPage[] =>{
      var data = dataTopUpPage.filter(i => {
        if(i.name === gameName){
          return i
        }
      })
      return data
    }  

    const topupPage = selectDataTopUpPage(query.game as string)[0]


    const formatMessage = (gameName : String) => {
      const formatMessageMlbb = `---Topup ${query.game}---%0aID : ${textInput}%0aServer : ${textInput2}%0aNickname : ${textInput3}%0aOrder : ${selectedTopup?.amount}%0aHarga: ${selectedTopup?.price}%0a(Wajib)Lampirkan SS Sisa ${selectedTopup?.currencyName} : `
      const formatIdAndServer = `---Topup ${query.game}---%0aID : ${textInput}%0aServer : ${textInput2}%0aNickname : ${textInput3}%0aOrder : ${selectedTopup?.amount}%0aHarga: ${selectedTopup?.price}%0a(Wajib)Lampirkan SS Sisa ${selectedTopup?.currencyName} : `
      const formatIdAndNickname = `---Topup ${query.game}---%0aID : ${textInput}%0aNickName : ${textInput2}%0aOrder : ${selectedTopup?.amount}%0aHarga: ${selectedTopup?.price}%0a(Wajib)Lampirkan SS Sisa ${selectedTopup?.currencyName} : `
      const formatOnlyID = `---Topup ${query.game}---%0aID : ${textInput}%0aOrder : ${selectedTopup?.amount}%0aHarga: ${selectedTopup?.price}%0a(Wajib)Lampirkan SS Sisa ${selectedTopup?.currencyName} : `



      if(gameName === 'Mobile Legend'){
        return formatMessageMlbb
      }

      if(gameName === "PUBG Mobile"){
        return formatIdAndNickname
      }

      if(gameName === "Genshin Impact" || "Mobile Legend Adventure" || "Garena Free Fire"){
        return formatIdAndServer
      }

      return formatOnlyID
    }

    const disabledButton = (gameName : String) : boolean =>  {

      if(gameName === 'Mobile Legend') {

        return !textInput || !textInput2 || !textInput3 || !selectedTopup
      }

      if(gameName === "PUBG Mobile"){
        return !textInput || !textInput2 && !selectedTopup
      }

      if(gameName === "Genshin Impact" || "Mobile Legend Adventure" || "Garena Free Fire"){
        return !textInput || !textInput2 || !selectedTopup
      }

      return !textInput ||  !selectedTopup
    }

    const linkWa = `https://api.whatsapp.com/send/?phone=%2B6289675905586&text=${formatMessage(query.name as string)}`
  

  const data =() => {
    var dataTemp 
    if(query.game === "Mobile Legend"){
      dataTemp = ListTopUpMobileLegend
    }

    if(query.game === "Garena Free Fire"){
      dataTemp = ListTopUpFreeFire
    }

    if(query.game === "PUBG Mobile"){
      dataTemp = ListTopUpPUBGM
    }

    if(query.game === "Valorant"){
      dataTemp = ListTopUpValo
    }

    if(query.game === "Call Of Duty Mobile"){
      dataTemp = ListTopUpCODM
    }

    if(query.game === "Apex Legend Mobile"){
      dataTemp = ListTopUpApexm
    }
    
    if(query.game === "Point Blank"){
      dataTemp = ListTopUpPB
    }
  
    if(query.game === "LOL : Wild Rift"){
      dataTemp = ListTopUpWildRift
    }

    if(query.game === "Genshin Impact"){
      dataTemp = ListTopUpGenshin
    }

    if(query.game === "Super Sus"){
      dataTemp = ListTopUpSuperSus
    }

    if(query.game === "Mobile Legend Adventure"){
      dataTemp = ListTopUpMLA
    }

    if(query.game === "ZEPETO"){
      dataTemp = ListTopUpZepeto
    }

    if(query.game === "Sausage Man"){
      dataTemp = ListTopUpSausageMan
    }

    if(query.game === "Arena Of Valor"){
      dataTemp = ListTopUpAOV
    }

    if(query.game === "Honkai Impact"){
      dataTemp = ListTopUpHonkaiImpact
    }

    if(query.game === "Dragon Raja SEA"){
      dataTemp = ListTopUpDJSEA
    }


    return dataTemp
  }


  const Header = () => {
    return (
      <div>
        <Image
          width={1000}
          height={400}
          src={topupPage.image}
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

            {InputDataAccount()}


          <Typography gutterBottom variant="caption" component="p" fontFamily={'Open Sans'} fontWeight={"bold"}>
            {topupPage.guide}
          </Typography>
        </Box>
      </div>
    )
  }


  const ContentListTopUp = () =>{
    return (
      <Grid container spacing={{ xs: 2, sm : 4,md: 2,lg : 2,  xl : 2 }} columns={{ xs: 8, sm: 16, md: 20,lg : 20,xl :20 }}>
      {isReady && data()?.map((item, index) => (
        <Grid item xs={4} sm={4} md={4} key={index}  onClick={() => setSelectedTopup(item)}>
          <Paper  sx={item == selectedTopup ? {  maxWidth : 260, maxHeight : 330,borderRadius : 3, backgroundColor : "#FEFA07"} : {  maxWidth : 260, maxHeight : 330,borderRadius : 3}}>
              <CardActionArea>
                <CardContent sx={{maxHeight : 330 }}>
                  <Grid container justifyContent={"center"}>
                    <Stack>

                      <Typography  variant="body1" component="p" align='center' fontWeight={"bold"} color={item == selectedTopup ? "black" : "white" } >
                      {item.amount}  {item.currencyName}
                      </Typography>
                      
                      <hr style={ item == selectedTopup ? 
                      {width : "100%", height : 2,backgroundColor : "black", display: "block",borderColor : "black"} : 
                      {width : "100%", height : 2,backgroundColor : "white", display: "block",borderColor : "white"}
                      }/>

                      <Typography gutterBottom variant="body1" component="p" align='center'  fontWeight={"bold"} color={item == selectedTopup ? "black" : "white" }>
                        Rp. {item.price}
                      </Typography>
                    </Stack>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Paper>
        </Grid>
  
      ))}
    </Grid>
    )
  }

  const InputDataAccount = () => {
    if(query.game === "Mobile Legend"){
      return(
      <Grid container spacing={2}>

        <Grid item xs={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth sx={{marginBottom : 2}} label="ID" id="fullWidth" />
        </Grid>

        <Grid item xs={6} md={4}>
          <TextField onChange={(e) => setTextInput2(e.target.value)} fullWidth sx={{marginBottom : 2}} label="Server" id="fullWidth" />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField onChange={(e) => setTextInput3(e.target.value)} fullWidth sx={{marginBottom : 2}} label="Nickname" id="fullWidth" />
        </Grid>

      </Grid>
      )
    }

    if(query.game === "Garena Free Fire"){
      return(
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth label="ID" id="fullWidth" />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextField onChange={(e) => setTextInput2(e.target.value)} fullWidth sx={{marginBottom : 2}} label="Server" id="fullWidth" />
        </Grid>

      </Grid>
      )
    }



    if(query.game === "PUBG Mobile"){
      return(
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth label="ID" id="fullWidth" />
        </Grid>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput2(e.target.value)} fullWidth sx={{marginBottom : 2}} label="NickName" id="fullWidth" />
        </Grid>

      </Grid>
      )
    }

    if(query.game === "Valorant"){
      return(
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth sx={{marginBottom : 2}} label="ID" id="fullWidth" />
        </Grid>

      </Grid>
      )
    }

    if(query.game === "Call Of Duty Mobile"){
      return(
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth sx={{marginBottom : 2}} label="ID" id="fullWidth" />
        </Grid>

      </Grid>
      )
    }

    if(query.game === "Apex Legend Mobile"){
      return(
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth sx={{marginBottom : 2}} label="ID" id="fullWidth" />
        </Grid>

      </Grid>
      )
    }

    if(query.game === "Point Blank"){
      return(
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth sx={{marginBottom : 2}} label="ID" id="fullWidth" />
        </Grid>

      </Grid>
      )
    }

    if(query.game === "LOL : Wild Rift"){
      return(
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth sx={{marginBottom : 2}} label="ID" id="fullWidth" />
        </Grid>

      </Grid>
      )
    }

    if(query.game === "Genshin Impact"){
      return(
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth  label="ID" id="fullWidth" />
        </Grid>


        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth sx={{marginBottom : 2}} label="Server" id="fullWidth" />
        </Grid>
      </Grid>
      )
    }

    if(query.game === "Arena Of Valor"){
      return(
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth sx={{marginBottom : 2}} label="ID" id="fullWidth" />
        </Grid>

      </Grid>
      )
    }

    if(query.game === "Super Sus"){
      return(
        <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth sx={{marginBottom : 2}} label="ID" id="fullWidth" />
        </Grid>

      </Grid>
      )
    }

    if(query.game === "Mobile Legend Adventure"){
      return(
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth  label="ID" id="fullWidth" />
        </Grid>


        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput2(e.target.value)} fullWidth sx={{marginBottom : 2}} label="Server" id="fullWidth" />
        </Grid>
      </Grid>
      )
    }

    if(query.game === "Sausage Man"){
      return(
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth sx={{marginBottom : 2}} label="ID" id="fullWidth" />
        </Grid>

      </Grid>
      )
    }

    if(query.game === "ZEPETO"){
      return(
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth sx={{marginBottom : 2}} label="ID" id="fullWidth" />
        </Grid>

      </Grid>
      )
    }

    if(query.game === "Dragon Raja SEA"){
      return(
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth sx={{marginBottom : 2}} label="ID" id="fullWidth" />
        </Grid>

      </Grid>
      )
    }

    if(query.game === "Honkai Impact"){
      return(
      <Grid container spacing={2}>

      <Grid item xs={12} sm={6} md={4} >
          <TextField onChange={(e) => setTextInput(e.target.value)} fullWidth sx={{marginBottom : 2}} label="ID" id="fullWidth" />
        </Grid>

      </Grid>
      )
    }
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
        <Stack direction={"row"} alignItems={"center"}>

          <Link href={"/"} >
          <a>
          <Image   
            style={{marginTop : 5}}
            width={60}
            height={60}
            src={"/images/flixzstore.jpeg"}
            alt={"logo"}
          /> 
          </a>
          </Link>
          <Typography  variant="h4" component="p" align='center' fontWeight={"bold"} sx={{ marginLeft : 2}}>Flixz store</Typography>
          </Stack>
        </Grid>
      </Box>
      <Container maxWidth="md" >


        {isReady && Header()}



      <Box sx={{backgroundColor : "#121212", paddingRight : 5, paddingLeft : 5,paddingBottom : 5,paddingTop : 1, marginTop : 5, marginBottom : 5}} borderRadius={2}>
      <Typography gutterBottom variant="body1" component="p" align='center' sx={{margin : 3}} fontWeight={"bold"}>
          Pilih Nominal Topup
      </Typography>
      
      {ContentListTopUp()}

      </Box>


      <Box sx={{backgroundColor : "#121212", paddingRight : 5, paddingLeft : 5,paddingBottom : 5,paddingTop : 1, marginTop : 5, marginBottom : 5}} borderRadius={2}>
      <Typography gutterBottom variant="body1" component="p" align='center' sx={{margin : 3}} fontWeight={"bold"}>
          Beli
      </Typography>
      
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Proses Topup</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              {`Nominal Topup dan data akun diatas akan di lanjutkan ke whatsapp`}
          </Typography>
          <img/>
        </AccordionDetails>
      </Accordion>

      <a target="_blank" href={linkWa} rel="noopener noreferrer">
      <Button sx={{marginTop : 4}} fullWidth color={"primary"}  variant="contained" disabled={disabledButton(query.game as string)}> 
            Beli Sekarang
      </Button>
      </a>
      <Typography gutterBottom variant="body2" component="p" sx={{marginTop : 2}} fontWeight={"bold"}>
          * Jika tombol pastikan data akun sudah terisi dan nominal top up sudah terpilih 
      </Typography>

      </Box>




      </Container>
      </main>
    </div>
  )
}

export default TopUp