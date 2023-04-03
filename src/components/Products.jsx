import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import Banner from '../assets/imgs/unsplash.png'
import Banner2 from '../assets/imgs/unsplash1.png'
import Banner3 from '../assets/imgs/unsplash2.png'
import Banner4 from '../assets/imgs/unsplash3.png'
import Banner5 from '../assets/imgs/unsplash4.png'
import Map from '../assets/imgs/Map.png'
import { ReactComponent as Share} from'../assets/icons/share.svg'
import { ReactComponent as Like} from'../assets/icons/like.svg'
import { ReactComponent as Pdf} from'../assets/icons/pdf.svg'
import { ReactComponent as Volume} from'../assets/icons/volume.svg'
import { ReactComponent as Star} from'../assets/icons/star.svg'
import { ReactComponent as Garage} from '../assets/icons/garaje.svg'
import { ReactComponent as LeftIcon} from '../assets/icons/left_icon.svg'
import '../css/style.css'

const Products = () => {
  return (
    <>
    <Box sx={{display:'flex',gap:'50px',alignItems:'center',margin:'24px 0',padding:'0 10%',textAlign:'center',justifyContent:'center'}}>
      <Box>
        <img className="img-fluid" src={Banner} width={580} alt="" />
      </Box>
      <Box sx={{display:'grid',gridTemplateColumns:'50% 50%',gap:'20px'}}>
        <img className="img-fluid"  src={Banner2} alt="" />
        <img className="img-fluid" src={Banner3} alt="" />
        <img className="img-fluid" src={Banner4} alt="" />
        <img className="img-fluid" src={Banner5} alt="" />
      </Box>
    </Box><br/><hr style={{width:"86%",margin:'10px 7%'}}/>
      <Box sx={{margin:'24px 0',display:"flex",justifyContent:"space-between",padding:'0 7%'}}>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Typography variant='h4' sx={{fontFamily:'serif'}}>Luxury Family Loft by Victoria Park</Typography><br/>

          </Box>
          <Box sx={{display:"flex",alignItems:"center",gap:"30px"}}>
          <Box sx={{display:'flex',  alignItems:'center',gap:'10px'}}>
          <Share style={{width:'30px',height:"30px"}}/>
          <Typography variant='h5'>Share</Typography>
            </Box>
          <Box sx={{display:'flex',  alignItems:'center',gap:'10px'}}>
          <Like style={{width:'30px',height:"30px"}}/>
          <Typography variant='h5'>Save</Typography>
          </Box>
          </Box>
        </Box>
        <Typography variant='h6' sx={{color:"#696969",marginLeft:'7%'}}>Quincy St, Brooklyn, NY, USA</Typography>


        <Box sx={{display:'flex',alignItems:"center",justifyContent:'space-between',padding:'32px 7%',flexWrap:'wrap'}}>
          <Box sx={{display:"flex",gap:'50px',flexWrap:'wrap',marginBottom:'20px'}}>
            <Box sx={{display:'flex',alignItems:"center",gap:'10px'}}>
              <img src="https://previews.123rf.com/images/dxinerz/dxinerz1508/dxinerz150800862/43586351-bed-icon.jpg" width={50} alt="" />
              <Typography>4 Beds</Typography>
            </Box>
            <Box sx={{display:'flex',alignItems:"center",gap:'10px'}}>
              <img src="https://cdn-icons-png.flaticon.com/512/4539/4539922.png" width={40} alt="" />
              <Typography>5 Baths</Typography>
            </Box>
            <Box sx={{display:'flex',alignItems:"center",gap:'10px'}}>
              <img src="https://cdn-icons-png.flaticon.com/512/1186/1186712.png" width={35} alt="" />
              <Typography>1 Garage</Typography>
            </Box>
            <Box sx={{display:'flex',alignItems:"center",gap:'10px'}}>
              <img src="https://cdn-icons-png.flaticon.com/512/162/162679.png" width={35} alt="" />
              <Typography>1200 Sq Ft</Typography>
            </Box>
            <Box sx={{display:'flex',alignItems:"center",gap:'10px'}}>
              <img src="https://static.thenounproject.com/png/4066364-200.png" width={35} alt="" />
              <Typography>Year Built: 1800</Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={{textAlign:'center'}}>
              <Box sx={{display:'flex',alignItems:"center",gap:"20px"}}>
              <Typography sx={{textDecorationLine:'line-through'}}>$2,800/mo</Typography>
              <Typography variant='h5' sx={{color:'#0D263B'}}>$7,500/mo</Typography>
              </Box>
              <Box>
                <Typography>Est. Mortgage</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{padding:'32px 7%',color:"#030303"}}>
          <Typography variant='h4'>Description</Typography>
          <Box sx={{padding:'30px 0', color:'#878484'}}>
          Occupying over 8,000 square feet, perched over 1,100 feet
           in the air with absolutely breathtaking panoramic
            360-degree views of all of New York City and the
             surrounding tri-state area, The 82nd Floor at 432
              Park Avenue has been completely reimagined by
               one of the most sought-after design houses in
                London and represents an utterly unique opportunity
                 to own a globally significant property.
            The residence is comprised of 5 bedrooms, 2 master bathrooms,
             4 on-suite guest bathrooms, 2 powder rooms, 2 offices,
              2 dressing rooms, a media room, an oversized eat-in gourmet
               chef's kitchen, and a sprawling 1,100 square-foot Great Room 
               perfectly situated in the prime southwest corner of the floor.
               Occupying over 8,000 square feet, perched over 1,100 feet
           in the air with absolutely breathtaking panoramic
            360-degree views of all of New York City and the
             surrounding tri-state area, The 82nd Floor at 432
              Park Avenue has been completely reimagined by
               one of the most sought-after design houses in
                London and represents an utterly unique opportunity
                 to own a globally significant property.
            The residence is comprised of 5 bedrooms, 2 master bathrooms,
             4 on-suite guest bathrooms, 2 powder rooms, 2 offices,
              2 dressing rooms, a media room, an oversized eat-in gourmet
               chef's kitchen, and a sprawling 1,100 square-foot Great Room 
               perfectly situated in the prime southwest corner of the floor.
               <br/><br/>
               <a href="#">Show more</a>
          </Box>
        </Box>
          <Typography variant='h4' sx={{margin:'0 7%',fontFamily:'serif'}}>Documents</Typography>
        <Box sx={{padding:'32px 7%',display:"flex",justifyContent:"space-between",flexWrap:'wrap'}}>
          <Box sx={{display:'flex' , alignItems:'center',gap:'15px'}}>
            <Pdf/>
            <Typography sx={{color:'#878484'}}>test_property.pdf</Typography>
            <a href="#">Download</a>
          </Box>
          <Box sx={{display:'flex' , alignItems:'center',gap:'15px'}}>
            <Pdf/>
            <Typography sx={{color:'#878484'}}>test_property.pdf</Typography>
            <a href="#">Download</a>
          </Box>
          <Box sx={{display:'flex' , alignItems:'center',gap:'15px'}}>
            <Pdf/>
            <Typography sx={{color:'#878484'}}>test_property.pdf</Typography>
            <a href="#">Download</a>
          </Box>
          <Box sx={{display:'flex' , alignItems:'center',gap:'15px'}}>
            <Pdf/>
            <Typography sx={{color:'#878484'}}>test_property.pdf</Typography>
            <a href="#">Download</a>
          </Box>
          <Box sx={{display:'flex' , alignItems:'center',gap:'15px'}}>
            <Pdf/>
            <Typography sx={{color:'#878484'}}>test_property.pdf</Typography>
            <a href="#">Download</a>
          </Box>
        </Box>
        <Typography variant='h4' sx={{margin:'30px 7%'}}>Location</Typography>
        <Box sx={{display:'flex',justifyContent:'space-between',padding:'30px 7%'}}>
          <Box>
            <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
              <Typography variant='h5'sx={{color:'#030303'}}>Address :</Typography>
              <Typography variant='h5' color={'gray'}>329 Queensberry Street</Typography>
            </Box><br />
            <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
              <Typography  variant='h5'sx={{color:'#030303'}}>State/County : </Typography>
              <Typography variant='h5' color={'gray'}>Washington</Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
              <Typography variant='h5'sx={{color:'#030303'}}>City :</Typography>
              <Typography variant='h5' color={'gray'}>Jersey City</Typography>
            </Box><br />
            <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
              <Typography  variant='h5'sx={{color:'#030303'}}>Zip : </Typography>
              <Typography variant='h5' color={'gray'}>365448</Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
              <Typography variant='h5'sx={{color:'#030303'}}>Area :</Typography>
              <Typography variant='h5' color={'gray'}>Greenville</Typography>
            </Box><br />
            <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
              <Typography  variant='h5'sx={{color:'#030303'}}>Country : </Typography>
              <Typography variant='h5' color={'gray'}>United States</Typography>
            </Box>
          </Box>
        </Box>
        <img src={Map} width="86%" style={{margin:'20px 7%'}} alt="" />
        <hr style={{width:"86%",margin:'10px 7%'}}/>


        <Typography variant='h4' sx={{margin:'30px 7%',fontFamily:'serif'}}>Property Details</Typography>

        <Box sx={{padding:'20px 7%',display:'flex',justifyContent:'space-between',gap:'10px'}}>
          <Box>
            <Typography variant='h5'>Property ID : HZ27</Typography><br />
            <Typography variant='h5'>Price : $130.000</Typography><br />
            <Typography variant='h5'>Property Size : 1560 Sq Ft</Typography><br />
            <Typography variant='h5'>Year Bulit : 2021-01-09</Typography><br />
          </Box>
          <Box>
            <Typography variant='h5'>Bedrooms : 8</Typography><br />
            <Typography variant='h5'>Bathrooms : 6</Typography><br />
            <Typography variant='h5'>Garage : 4</Typography><br />
            <Typography variant='h5'>Garage size : 200 SqFt</Typography><br />
          </Box>
          <Box>
            <Typography variant='h5'>Property Type : Apartment</Typography><br />
            <Typography variant='h5'>Property Status : For Sale</Typography><br />
          </Box>
        </Box> <hr style={{width:"86%",margin:'10px 7%'}}/>

        <Typography variant='h4' sx={{margin:'30px 7%',fontFamily:'serif'}}>Schedule A Tour</Typography>
        <Box sx={{margin:'30px 7%'}}>
          <TextField variant='standard' sx={{width:'430px'}} label="Date"/>
          <TextField variant='standard' sx={{width:'430px',marginLeft:'10%'}} label="Time"/>
        </Box>
        <Typography variant='h4' sx={{margin:'100px 7%'}}>Your Information</Typography>
        <Box sx={{margin:'30px 7%'}}>
        <TextField variant='standard' sx={{width:'430px'}} label="Name"/>
        <TextField variant='standard' sx={{width:'430px',marginLeft:'10%'}} label="Phone"/>
        <TextField variant='standard' sx={{width:'430px',marginLeft:'10%'}} label="Email"/>
        <Box sx={{margin:'130px 0'}}>
          <textarea style={{height:'200px',width:'100%',margin:"50px 0",borderTop:'none',borderLeft:'none',borderRight:'none'}} placeholder="  Enter Your Message">
            </textarea>
            <Button variant='contained' sx={{float:'right',background:'#0061DF',paddingX:'30px'}}>Submit a tour request</Button>
        </Box>
        </Box>
        <hr style={{width:"86%",margin:'10px 7%'}}/>

        <Typography variant='h4' sx={{margin:'30px 7%',fontFamily:'serif'}}>4.67 (14 reviews)</Typography>

        
          <Grid container spacing={3} sx={{padding:' 50px 7% ',display:'flex',justifyContent:"space-between"}}>
            <Grid item xs={12} lg={6} xl={3} sx={{marginTop:'50px'}}>
              <Box sx={{width:'380px',padding:'10px',alignItems:'center'}}>
               <Box sx={{display:'flex',justifyContent:"space-between"}}>
                <Box>
                  <Typography>Cleanliness</Typography>
                  <Typography>Communication</Typography>
                  <Typography>Check-in</Typography>
                </Box>
                <Box>
                  <Volume/>4.7<br/>
                  <Volume/>4.9<br/>
                  <Volume/>4.9<br/>
                </Box>
               </Box>
                <img style={{marginTop:'27px'}} src="https://www.svgrepo.com/show/295402/user-profile.svg" width={52} alt="" />   
                <Box>
                  <Typography variant='h5' color={'#0D263B'}>Jane Cooper</Typography>
                  </Box>
                  <Box sx={{display:'flex',justifyContent:"space-between",marginBottom:"20px"}}>
                  <Typography color={"#696969"}>April 6, 2021 at 3:21 AM</Typography>
                  <Star/>
                    </Box> 
                    <Typography color={'#696969'}>Every single thing we tried with John was delicious! Found some awesome places
                       we would definitely go back to on our trip.
                        friendly and passionate about Beşiktaş and Istanbul. </Typography>            
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} xl={3} sx={{marginTop:'50px'}}>
              <Box sx={{width:'380px',padding:'10px',alignItems:'center'}}>
               <Box sx={{display:'flex',justifyContent:"space-between"}}>
                <Box>
                  <Typography>Cleanliness</Typography>
                  <Typography>Communication</Typography>
                  <Typography>Check-in</Typography>
                </Box>
                <Box>
                  <Volume/>4.7<br/>
                  <Volume/>4.9<br/>
                  <Volume/>4.9<br/>
                </Box>
               </Box>
                <img style={{marginTop:'27px'}} src="https://www.svgrepo.com/show/295402/user-profile.svg" width={52} alt="" />   
                <Box>
                  <Typography variant='h5' color={'#0D263B'}>Jane Cooper</Typography>
                  </Box>
                  <Box sx={{display:'flex',justifyContent:"space-between",marginBottom:"20px"}}>
                  <Typography color={"#696969"}>April 6, 2021 at 3:21 AM</Typography>
                  <Star/>
                    </Box> 
                    <Typography color={'#696969'}>Every single thing we tried with John was delicious! Found some awesome places
                       we would definitely go back to on our trip.
                        friendly and passionate about Beşiktaş and Istanbul. </Typography>            
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} xl={3} sx={{marginTop:'50px'}}>
              <Box sx={{width:'380px',padding:'10px',alignItems:'center'}}>
               <Box sx={{display:'flex',justifyContent:"space-between"}}>
                <Box>
                  <Typography>Cleanliness</Typography>
                  <Typography>Communication</Typography>
                  <Typography>Check-in</Typography>
                </Box>
                <Box>
                  <Volume/>4.7<br/>
                  <Volume/>4.9<br/>
                  <Volume/>4.9<br/>
                </Box>
               </Box>
                <img style={{marginTop:'27px'}} src="https://www.svgrepo.com/show/295402/user-profile.svg" width={52} alt="" />   
                <Box>
                  <Typography variant='h5' color={'#0D263B'}>Jane Cooper</Typography>
                  </Box>
                  <Box sx={{display:'flex',justifyContent:"space-between",marginBottom:"20px"}}>
                  <Typography color={"#696969"}>April 6, 2021 at 3:21 AM</Typography>
                  <Star/>
                    </Box> 
                    <Typography color={'#696969'}>Every single thing we tried with John was delicious! Found some awesome places
                       we would definitely go back to on our trip.
                        friendly and passionate about Beşiktaş and Istanbul. </Typography>            
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} xl={3} sx={{marginTop:'50px'}}>
              <Box sx={{width:'380px',padding:'10px',alignItems:'center'}}>
               <Box sx={{display:'flex',justifyContent:"space-between"}}>
                <Box>
                  <Typography>Cleanliness</Typography>
                  <Typography>Communication</Typography>
                  <Typography>Check-in</Typography>
                </Box>
                <Box>
                  <Volume/>4.7<br/>
                  <Volume/>4.9<br/>
                  <Volume/>4.9<br/>
                </Box>
               </Box>
                <img style={{marginTop:'27px'}} src="https://www.svgrepo.com/show/295402/user-profile.svg" width={52} alt="" />   
                <Box>
                  <Typography variant='h5' color={'#0D263B'}>Jane Cooper</Typography>
                  </Box>
                  <Box sx={{display:'flex',justifyContent:"space-between",marginBottom:"20px"}}>
                  <Typography color={"#696969"}>April 6, 2021 at 3:21 AM</Typography>
                  <Star/>
                    </Box> 
                    <Typography color={'#696969'}>Every single thing we tried with John was delicious! Found some awesome places
                       we would definitely go back to on our trip.
                        friendly and passionate about Beşiktaş and Istanbul. </Typography>            
              </Box>
            </Grid>
          </Grid>    <hr style={{width:"86%",margin:'10px 7%'}}/>

          <Typography variant='h4' sx={{margin:'30px 7%',fontFamily:'serif'}}>Write a Review</Typography>

          <Box sx={{margin:'34px 7%',display:"flex",justifyContent:'space-between'}}>
            <Box sx={{width:'300px'}}>
              <Box sx={{display:'flex',justifyContent:"space-between"}}>
                <Typography>Cleanliness</Typography>
                <Star/>
              </Box>
              <Box sx={{display:'flex',justifyContent:"space-between",margin:'20px 0'}}>
                <Typography>Communication</Typography>
                <Star/>
              </Box>
              <Box sx={{display:'flex',justifyContent:"space-between"}}>
                <Typography>Check-in</Typography>
                <Star/>
              </Box>
              <Box sx={{display:'flex',justifyContent:"space-between",margin:'20px 0'}}>
                <Typography>Communication</Typography>
                <Star/>
              </Box>
              <Box sx={{display:'flex',justifyContent:"space-between"}}>
                <Typography>Cleanliness</Typography>
                <Star/>
              </Box>
            </Box>
            <Box sx={{width:'300px'}}>
              <Box sx={{display:'flex',justifyContent:"space-between"}}>
                <Typography>Cleanliness</Typography>
                <Star/>
              </Box>
              <Box sx={{display:'flex',justifyContent:"space-between",margin:'20px 0'}}>
                <Typography>Communication</Typography>
                <Star/>
              </Box>
              <Box sx={{display:'flex',justifyContent:"space-between"}}>
                <Typography>Check-in</Typography>
                <Star/>
              </Box>
              <Box sx={{display:'flex',justifyContent:"space-between",margin:'20px 0'}}>
                <Typography>Communication</Typography>
                <Star/>
              </Box>
              <Box sx={{display:'flex',justifyContent:"space-between"}}>
                <Typography>Cleanliness</Typography>
                <Star/>
              </Box>
            </Box>
            
          </Box><hr style={{width:"86%",margin:'10px 7%'}}/>

          <center>

          
          <Grid container spacing={3} sx={{marginBottom:'100px',display:'flex',justifyContent:'space-between'}}>
          <Grid item xs={12} lg={6} xl={4} >
            <Box className="property-grid" sx={{border:'1px solid gray',width:'380px',height:'505px',padding:'10px'}}>
            <img className="img-fluid" src='https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-house-plans-with-photos-1.webp' alt="" />
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
            <Grid item xs={12} lg={6} xl={4} >
            <Box className="property-grid" sx={{border:'1px solid gray',width:'380px',height:'505px',padding:'10px'}}>
            <img className="img-fluid" src='https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-house-plans-with-photos-1.webp' alt="" />
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
            <Grid item xs={12} lg={6} xl={4} >
            <Box className="property-grid" sx={{border:'1px solid gray',width:'380px',height:'505px',padding:'10px'}}>
            <img className="img-fluid" src='https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-house-plans-with-photos-1.webp' alt="" />
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

    
    </>
  )
}

export default Products