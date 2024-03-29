import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Divider, Grid, Paper, Stack } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import styles from '../../styles/Home.module.css'
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { minWidth } from '@mui/system';
import { dataGame } from '../../data/game';
import { NextSeo } from "next-seo";

import Carousel from 'react-material-ui-carousel'
import { dataTopUpPage } from '../../data/topup';


const Home: NextPage = () => {
  return (
    <div>
      <NextSeo
        title="Flixzstore TopUp"
        description="Topup game terpercaya"
        openGraph={{
          url: "https://flixzstore.xyz/",
          title: "Flixzstore topup",
          description:
            "Topup game terpercaya",
          images: [
            {
              url: "",
            },
          ],
          site_name: "Flixzstore",
        }}      
      />      
      <Head>
        <meta name="google-site-verification" content="N6A9_RM7XYgLSEaTzIwIasRegqrLnC4qR_i-VWwrANY" />
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
          <Typography  variant="h4" component="p" align='center' fontWeight={"bold"} sx={{ marginLeft : 2}}>Flixzstore</Typography>
          </Stack>
        </Grid>
      </Box>

    
      <Container maxWidth="md"sx={{paddingTop : 3, paddingBottom : 5}}>

        
        <Grid >
          <Stack direction={"column"}>

          <Carousel
          indicators={false}
          sx={{marginBottom : 3, borderRadius : 5}}
          autoPlay={true}
          >
            {dataTopUpPage.map((i, index) =>
                  <Paper key={index}>
                    <img src={i.image} width={"100%"} height={"100%"}/>
                  </Paper>
            )}

            </Carousel>

            <Typography gutterBottom variant="body1" component="p" align='center' sx={{marginBottom : 3}} fontWeight={"bold"}>Game Populer ( Manual 24 Jam )</Typography>
          </Stack>
        </Grid>
        <Grid style={{marginBottom : 64}} container spacing={{ xs: 2, sm : 4,md: 2,lg : 2,  xl : 2 }} columns={{ xs: 12, sm: 12, md: 24,lg : 24,xl :24 }}>
          {dataGame.map((item, index) => (
          <Link href={`/Topup/${item.name}`} key={index}>
            <Grid item xs={4} sm={4} md={4}>
              <Card sx={{  maxWidth : 260, maxHeight : 330,borderRadius : 5}}>
                  <CardActionArea>
                    <CardMedia
                      sx={{borderRadius : 5}}
                      component="img"
                      image={item.logo}
                      alt="AOV"
                    />
                    <CardContent sx={{height : 70 }}>
                      <Grid container justifyContent={"center"}>
                      <Typography 
                        gutterBottom 
                        variant="body2" 
                        component="p" 
                        align='center' 
                        fontFamily={'Open Sans'} 
                        fontWeight={"bold"}>
                        {item.name}
                      </Typography>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
          </Link>
          ))}
      </Grid>

      <Grid container justifyContent={"center"}  >
        <Stack direction={"column"} alignItems={"center"} >
        <Typography gutterBottom variant="body1" component="p" align='center' sx={{marginBottom : 3}} fontWeight={"bold"}>Follow our social media</Typography>
        <a href='https://www.instagram.com/flixzstore/'>
          <img
            src={"/images/icon/ig.png"}
            width={50}
            height={50}
          />
        </a>
        <Typography gutterBottom variant="body1" component="p" align='center' sx={{marginBottom : 3}} fontWeight={"bold"}>@flixzstore</Typography>

        </Stack>
      </Grid>

      </Container>

            
        
      </main>
    </div>
  )
}

export default Home
