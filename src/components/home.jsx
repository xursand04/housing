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
        <img style={{width:'100%', height:'800px'}} src="https://img3.goodfon.ru/original/2560x1440/4/ed/vecher-villa-basseyn-4690.jpg" onDragStart={handleDragStart} role="presentation"  />,
        <img style={{width:'100%', height:'800px'}} src="https://www.akvillas.com/-/media/akvillas/properties/france/cote-d-azur/villa-lilas/01_villa-lilas.jpg?la=en&hash=75DBB994ABD44551B4C8D04CE7D8B626350DAD6A" onDragStart={handleDragStart} role="presentation" />,
        <img style={{width:'100%', height:'800px'}} src="https://w-dog.ru/wallpapers/2/16/558457053321289/vneshnij-vid-interer-dom-glavnaya-bassejn-villa-eksterer-trava-kresla-divany-stol-stulya-barbekyu.jpg" onDragStart={handleDragStart} role="presentation" />,
      ];

    return(
        <>
        <AliceCarousel items={items} autoPlay infinite/>
        <Box sx={{textAlign:'center',marginTop:'100px 0'}}>
            <Typography variant="h2">Recommended</Typography>
            <Typography sx={{color:'gray'}} variant="h5">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Typography>
        </Box>
       <center>
        <Grid container>
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
        <Box sx={{textAlign:'center',margin:'100px 0'}}>
            <Typography variant="h2">Category</Typography>
            <Typography sx={{color:'gray'}} variant="h5">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Typography>
        </Box>
        <Box>
            <Box sx={{display:'flex',justifyContent:'space-around'}}>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
            </Box>
        </Box>
        <Box sx={{margin:'130px 0'}}>
            <img src="https://img2.goodfon.ru/original/5304x2614/b/bb/dom-villa-basseyn-3982.jpg" width='100%' height={800} alt="" />
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-around',margin:'80px'}}>
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
        </Box>
        <Box sx={{background:'#F5F7FC',padding:'50px 20px'}}>
        <Box sx={{textAlign:'center',marginTop:'50px'}}>
                <Typography variant="h2">Testimonials</Typography>
                <Typography sx={{color:'gray'}} variant="h5">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Typography>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-around',margin:'50px 0'}}>
            <Box sx={{ boxShadow:'0px 0px 10px crimson',  width:'240px',textAlign:'center' , padding:'20px',background:'#fff'}}>
            <Typography>“ I believe in lifelong learning and Skola is a great place 
                to learn from experts. I've learned a lot and recommend it to all my friends “</Typography>
            </Box>
            <Box sx={{ boxShadow:'0px 0px 10px crimson',  width:'240px',textAlign:'center' , padding:'20px',background:'#fff'}}>
            <Typography>“ I believe in lifelong learning and Skola is a great place 
                to learn from experts. I've learned a lot and recommend it to all my friends “</Typography>
            </Box>
            <Box sx={{ boxShadow:'0px 0px 10px crimson', width:'240px',textAlign:'center' , padding:'20px',background:'#fff'}}>
               <Typography>“ I believe in lifelong learning and Skola is a great place 
                to learn from experts. I've learned a lot and recommend it to all my friends “</Typography>
            </Box>
        </Box>

        </Box>
        </>
    )
}
export default Home