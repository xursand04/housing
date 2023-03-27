import { Box, Grid, Typography } from "@mui/material"
import Uy from '../assets/imgs/uy.png'
import AliceCarousel from "react-alice-carousel"
import { ReactComponent as Garage} from '../assets/icons/garaje.svg'
import { ReactComponent as LeftIcon} from '../assets/icons/left_icon.svg'
import { ReactComponent as Home2} from '../assets/icons/home 2.svg'
import { ReactComponent as Category} from '../assets/icons/category.svg'
import '../css/style.css'




const Home = () => {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <img className="img-fluid , banner" src="https://kartinkin.net/pics/uploads/posts/2022-08/1660425771_55-kartinkin-net-p-villa-v-brazilii-krasivo-foto-55.jpg" onDragStart={handleDragStart} role="presentation" width='87%' height='auto' />,
        <img className="img-fluid , banner" src="https://www.akvillas.com/-/media/akvillas/properties/france/cote-d-azur/villa-lilas/01_villa-lilas.jpg?la=en&hash=75DBB994ABD44551B4C8D04CE7D8B626350DAD6A" onDragStart={handleDragStart} role="presentation"  width='87%' height='auto' />,
        <img className="img-fluid , banner" src="https://kartinkin.net/pics/uploads/posts/2022-08/1660384198_55-kartinkin-net-p-krasivie-villi-krasivo-foto-55.jpg" onDragStart={handleDragStart} role="presentation"  width='87%' height='auto' />,
      ];

    return(
        <>
        <center>
            <Box >

        <AliceCarousel  className="banner" items={items} autoPlay infinite/>
            </Box>
        </center>
        <Box sx={{textAlign:'center',marginTop:'40px 0'}}>
            <Typography variant="h2">Recommended</Typography>
            <Typography sx={{color:'gray'}} variant="h5">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Typography>
        </Box>
       <center>
        <Grid container className="grid">
        <Grid item xs={12} lg={6} xl={4} sx={{margin:'50px 0'}}>
            <Box sx={{border:'1px solid gray',width:'380px',height:'495px',padding:'10px'}}>
            <img className="img-fluid" src={Uy} alt="" />
            <Typography variant="h5" sx={{color:'blue',margin:'15px'}}>New Apartment Nice Wiew</Typography>
            <Typography variant="h6" sx={{color:'gray',margin:'15px'}}>Quincy St, Brooklyn, NY, USA</Typography>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Garage/>
                <Garage/>
                <Garage/>
                <Garage/>
             </Box><br/><hr/>
             <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box>
                <Typography variant="h6" sx={{color:'gray'}}>$2,800/mo</Typography>
                <Typography variant="h6" >$7,500/mo</Typography>
                </Box>
                <Box>
            <LeftIcon/>
             </Box>
             </Box>
        </Box>
            </Grid>
            <Grid className="grid2" item xs={12} lg={6} xl={4}  sx={{margin:'50px 0'}}>
            <Box sx={{border:'1px solid gray',width:'380px',height:'495px',padding:'10px'}}>
            <img className="img-fluid" src={Uy} alt="" />
            <Typography variant="h5" sx={{color:'blue',margin:'15px'}}>New Apartment Nice Wiew</Typography>
            <Typography variant="h6" sx={{color:'gray',margin:'15px'}}>Quincy St, Brooklyn, NY, USA</Typography>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Garage/>
                <Garage/>
                <Garage/>
                <Garage/>
             </Box><br/><hr/>
             <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box>
                <Typography variant="h6" sx={{color:'gray'}}>$2,800/mo</Typography>
                <Typography variant="h6" >$7,500/mo</Typography>
                </Box>
                <Box>
            <LeftIcon/>
             </Box>
             </Box>
        </Box>
            </Grid>
            <Grid item xs={12} lg={6} xl={4}  sx={{margin:'50px 0'}}>
            <Box sx={{border:'1px solid gray',width:'380px',height:'495px',padding:'10px'}}>
            <img className="img-fluid" src={Uy} alt="" />
            <Typography variant="h5" sx={{color:'blue',margin:'15px'}}>New Apartment Nice Wiew</Typography>
            <Typography variant="h6" sx={{color:'gray',margin:'15px'}}>Quincy St, Brooklyn, NY, USA</Typography>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Garage/>
                <Garage/>
                <Garage/>
                <Garage/>
             </Box><br/><hr/>
             <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box>
                <Typography variant="h6" sx={{color:'gray'}}>$2,800/mo</Typography>
                <Typography variant="h6" >$7,500/mo</Typography>
                </Box>
                <Box>
            <LeftIcon/>
             </Box>
             </Box>
        </Box>
            </Grid>

        </Grid>
       </center>
        <Box sx={{background:'#F5F7FC',padding:'50px 20px'}}>
        <Box sx={{textAlign:'center',marginTop:'50px'}}>
                <Typography variant="h2">Why Choose Us ?</Typography>
                <Typography sx={{color:'gray'}} variant="h5">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Typography>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-around',margin:'50px 0'}}>
            <Box className="choose-info1" sx={{width:'240px',textAlign:'center' , padding:'20px'}}>
                <Home2/>
                <Typography sx={{color:'blue',margin:'15px 0'}}>Trusted By Thousands</Typography>
                <Typography sx={{color:'gray'}}>With over 1 million+ homes
                 for sale available on the website, 
                 Trulia can match you with a house 
                 you will want to call home.</Typography>
            </Box>
            <Box className="choose-info2" sx={{width:'240px',textAlign:'center' , padding:'20px'}}>
                <Home2/>
                <Typography sx={{color:'blue',margin:'15px 0'}}>Trusted By Thousands</Typography>
                <Typography sx={{color:'gray'}}>With over 1 million+ homes
                 for sale available on the website, 
                 Trulia can match you with a house 
                 you will want to call home.</Typography>
            </Box>
            <Box className="choose-info3" sx={{width:'240px',textAlign:'center' , padding:'20px'}}>
                <Home2/>
                <Typography sx={{color:'blue',margin:'15px 0'}}>Trusted By Thousands</Typography>
                <Typography sx={{color:'gray'}}>With over 1 million+ homes
                 for sale available on the website, 
                 Trulia can match you with a house 
                 you will want to call home.</Typography>
            </Box>
            <Box className="choose-info4" sx={{width:'240px',textAlign:'center' , padding:'20px'}}>
                <Home2/>
                <Typography sx={{color:'blue',margin:'15px 0'}}>Trusted By Thousands</Typography>
                <Typography sx={{color:'gray'}}>With over 1 million+ homes
                 for sale available on the website, 
                 Trulia can match you with a house 
                 you will want to call home.</Typography>
            </Box>
        </Box>

        </Box>
        <center>
        <Grid container className="grid">
        <Grid item xs={12} lg={6} xl={4} sx={{margin:'50px 0'}}>
            <Box sx={{border:'1px solid gray',width:'380px',height:'495px',padding:'10px'}}>
            <img className="img-fluid" src="https://barnes-moscow.com/upload/resize_cache/webp/upload/iblock/b30/33.webp"  width={320} alt="" />
            <Typography variant="h5" sx={{color:'blue',margin:'15px'}}>New Apartment Nice Wiew</Typography>
            <Typography variant="h6" sx={{color:'gray',margin:'15px'}}>Quincy St, Brooklyn, NY, USA</Typography>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Garage/>
                <Garage/>
                <Garage/>
                <Garage/>
             </Box><br/><hr/>
             <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box>
                <Typography variant="h6" sx={{color:'gray'}}>$2,800/mo</Typography>
                <Typography variant="h6" >$7,500/mo</Typography>
                </Box>
                <Box>
            <LeftIcon/>
             </Box>
             </Box>
        </Box>
            </Grid>
            <Grid className="grid2" item xs={12} lg={6} xl={4}  sx={{margin:'50px 0'}}>
            <Box sx={{border:'1px solid gray',width:'380px',height:'495px',padding:'10px'}}>
            <img className="img-fluid" src="https://barnes-moscow.com/upload/resize_cache/webp/upload/iblock/b30/33.webp"  width={320} alt="" />
            <Typography variant="h5" sx={{color:'blue',margin:'15px'}}>New Apartment Nice Wiew</Typography>
            <Typography variant="h6" sx={{color:'gray',margin:'15px'}}>Quincy St, Brooklyn, NY, USA</Typography>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Garage/>
                <Garage/>
                <Garage/>
                <Garage/>
             </Box><br/><hr/>
             <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box>
                <Typography variant="h6" sx={{color:'gray'}}>$2,800/mo</Typography>
                <Typography variant="h6" >$7,500/mo</Typography>
                </Box>
                <Box>
            <LeftIcon/>
             </Box>
             </Box>
        </Box>
            </Grid>
            <Grid item xs={12} lg={6} xl={4}  sx={{margin:'50px 0'}}>
            <Box sx={{border:'1px solid gray',width:'380px',height:'495px',padding:'10px'}}>
            <img className="img-fluid" src="https://barnes-moscow.com/upload/resize_cache/webp/upload/iblock/b30/33.webp" width={320} alt="" />
            <Typography variant="h5" sx={{color:'blue',margin:'15px'}}>New Apartment Nice Wiew</Typography>
            <Typography variant="h6" sx={{color:'gray',margin:'15px'}}>Quincy St, Brooklyn, NY, USA</Typography>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Garage/>
                <Garage/>
                <Garage/>
                <Garage/>
             </Box><br/><hr/>
             <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box>
                <Typography variant="h6" sx={{color:'gray'}}>$2,800/mo</Typography>
                <Typography variant="h6" >$7,500/mo</Typography>
                </Box>
                <Box>
            <LeftIcon/>
             </Box>
             </Box>
        </Box>
            </Grid>

        </Grid>
       </center>
        <Box sx={{margin:'130px 0'}}>
            <center>
            <img className="img-fluid banner" src="https://img2.goodfon.ru/original/5304x2614/b/bb/dom-villa-basseyn-3982.jpg" width='87%' height={800} alt="" />
            </center>
        </Box>
        <Box sx={{background:'#F5F7FC',padding:'50px 20px'}}>
        <Box sx={{textAlign:'center',marginTop:'50px'}}>
                <Typography variant="h2">Testimonials</Typography>
                <Typography sx={{color:'gray'}} variant="h5">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Typography>
        </Box>
        <Box className="cards" sx={{display:'flex',justifyContent:'space-around',margin:'50px 0'}}>
            <Box className="card-box" sx={{ boxShadow:'0px 0px 10px crimson',  width:'240px',textAlign:'center' , padding:'20px',background:'#fff'}}>
            <Typography>“ I believe in lifelong learning and Skola is a great place 
                to learn from experts. I've learned a lot and recommend it to all my friends “</Typography>
            </Box>
            <Box className="card-box"  sx={{ boxShadow:'0px 0px 10px crimson',  width:'240px',textAlign:'center' , padding:'20px',background:'#fff'}}>
            <Typography>“ I believe in lifelong learning and Skola is a great place 
                to learn from experts. I've learned a lot and recommend it to all my friends “</Typography>
            </Box>
            <Box className="card-box"  sx={{ boxShadow:'0px 0px 10px crimson', width:'240px',textAlign:'center' , padding:'20px',background:'#fff'}}>
               <Typography>“ I believe in lifelong learning and Skola is a great place 
                to learn from experts. I've learned a lot and recommend it to all my friends “</Typography>
            </Box>
        </Box>

        </Box>
        </>
    )
}
export default Home