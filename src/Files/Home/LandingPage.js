import React from 'react'
import classes from '../Home/LandingPage.module.css';
import Navigation from '../Nav/Navigation';
import Form from 'react-bootstrap/Form';
import 'boxicons';
import property1  from '../../Images/Properties/Property1.png';
import Bed from '../../Images/Properties/Bed.png'
import Jacusy from '../../Images/Properties/Jacusi.png'
import heart from '../../Images/Properties/heart.png'
import Next from '../../Images/Properties/Next.png'


function LandingPage() {
  return (
    <div className={classes.General}>
        <Navigation/>
        <div className={classes.body}>
          <div className={classes.herosection}>
            <div className={classes.main}>
              <h1>Find your future home</h1>
              <div className={classes.taskSectionContainer}>
                <div className={classes.buyRentBtns}>
                  <button type='button' className={classes.buy}>Buy</button>
                  <button type='button' className={classes.rent}>Rent</button>
                </div>
                <div className={classes.tasksSection}>
                  <div className={classes.searchSection}>
                    <i class='bx bx-search' style={{fontSize:'19px',}}></i>
                    <input type='search' id='search' placeholder='Region or L.G.A or Community'/>    
                  </div>
                  {/* <div class="dropdown"> */}
                  <Form.Select className={classes.select}>
                    <option>Default select</option>
                    <option>Default select</option>
                    <option>Default select</option>
                  </Form.Select>
                  <Form.Select className={classes.select}>
                    <option>Default select</option>
                    <option>Default select</option>
                    <option>Default select</option>
                  </Form.Select>
                  <Form.Select className={classes.select}>
                    <option>Default select</option>
                    <option>Default select</option>
                    <option>Default select</option>
                  </Form.Select>
                  <button type='button'><i class='bx bx-search'></i></button>
                </div>
                <div className={classes.moreOptions}>
                  <div className={classes.showtype}>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <span>Show commercial properties</span>
                  </div>
                  <div className={classes.moreSearchOptions}>
                  <Form.Select>
                    <option style={{color:'red',}}>Show more search options</option>
                    <option>Default select</option>
                    <option>Default select</option>
                  </Form.Select>
                  </div>
                </div>
                </div>
              </div>
            {/* </div> */}
              
          </div>
          <div className={classes.section}>
            <div className={classes.FeaturesProperties}>
              <p>Features Properties</p>
              <div className={classes.displayedproperties}>
                  <div className={classes.card}>
                      <div className={classes.image}>
                        <div className={classes.actionsbtns}>
                            <i class='bx bx-heart'></i>
                            <div className={classes.next}><i className='bx bx-chevron-right'></i></div>
                        </div>
                        <div className={classes.details}>
                          <p style={{paddingRight:'28px',}}>Apartment</p>
                          <span>
                            <p>2</p>
                            <img src={Bed} alt='Bed'/>
                          </span>
                          <span style={{paddingLeft:'13px',}}>
                            <p>3</p>
                            <img src={Jacusy} alt='Jacusy'/>
                          </span>
                        </div>
                      </div>
                      <div className={classes.propertyDetails}>
                        <span>
                          <h6>Lekki pahase 2, Ajah, Lagos State</h6>
                          <h6> <i class='bx bxs-star'></i> 4.75</h6>
                        </span>
                        <p style={{fontSize:'12px', color:'#0B0C0C',}}>Property for rent</p>
                        <p className={classes.price}>₦21,005,000 / Per Year</p>
                      </div>
                  </div>
                  <div className={classes.card}>
                      <div className={classes.image}>
                        <div className={classes.actionsbtns}>
                            <i class='bx bx-heart'></i>
                            <div className={classes.next}><i className='bx bx-chevron-right'></i></div>
                        </div>
                        <div className={classes.details}>
                          <p style={{paddingRight:'28px',}}>Apartment</p>
                          <span>
                            <p>2</p>
                            <img src={Bed} alt='Bed'/>
                          </span>
                          <span style={{paddingLeft:'13px',}}>
                            <p>3</p>
                            <img src={Jacusy} alt='Jacusy'/>
                          </span>
                        </div>
                      </div>
                      <div className={classes.propertyDetails}>
                        <span>
                          <h6>Amen Estate, Epe, Lagos State</h6>
                          <h6> <i class='bx bxs-star'></i> 4.95</h6>
                        </span>
                        <p style={{fontSize:'12px', color:'#0B0C0C',}}>Property for sale</p>
                        <p className={classes.price}>₦53,105,000</p>
                      </div>
                  </div>
                  <div className={classes.card}>
                      <div className={classes.image}>
                        <div className={classes.actionsbtns}>
                            <i class='bx bx-heart'></i>
                            <div className={classes.next}><i className='bx bx-chevron-right'></i></div>
                        </div>
                        <div className={classes.details}>
                          <p style={{paddingRight:'28px',}}>Apartment</p>
                          <span>
                            <p>2</p>
                            <img src={Bed} alt='Bed'/>
                          </span>
                          <span style={{paddingLeft:'13px',}}>
                            <p>3</p>
                            <img src={Jacusy} alt='Jacusy'/>
                          </span>
                        </div>
                      </div>
                      <div className={classes.propertyDetails}>
                        <span>
                          <h6>Solomade,Ikorodu, Lagos State</h6>
                          <h6> <i class='bx bxs-star'></i> 5.0</h6>
                        </span>
                        <p style={{fontSize:'12px', color:'#0B0C0C',}}>Property for rent</p>
                        <p className={classes.price}>₦1,505,000 / Per YearYear</p>
                      </div>
                  </div>
                  
              </div>

            </div>
          </div>
          <div className={classes.section}>
            <div className={classes.SimilarListings}>
              <p className={classes.SimilarListingsP}>Similar Listings</p>
              <div className={classes.displayedproperties}>
                  <div className={classes.card}>
                      <div className={classes.image}>
                        <div className={classes.actionsbtns}>
                            <i class='bx bx-heart'></i>
                            <div className={classes.next}><i className='bx bx-chevron-right'></i></div>
                        </div>
                        <div className={classes.details}>
                          <p style={{paddingRight:'28px',}}>Apartment</p>
                          <span>
                            <p>2</p>
                            <img src={Bed} alt='Bed'/>
                          </span>
                          <span style={{paddingLeft:'13px',}}>
                            <p>3</p>
                            <img src={Jacusy} alt='Jacusy'/>
                          </span>
                        </div>
                      </div>
                      <div className={classes.propertyDetails}>
                        <span>
                          <h6>Lekki pahase 2, Ajah, Lagos State</h6>
                          <h6> <i class='bx bxs-star'></i> 4.75</h6>
                        </span>
                        <p style={{fontSize:'12px', color:'#0B0C0C',}}>Property for rent</p>
                        <p className={classes.price}>₦21,005,000 / Per Year</p>
                      </div>
                  </div>
                  <div className={classes.card}>
                      <div className={classes.image}>
                        <div className={classes.actionsbtns}>
                            <i class='bx bx-heart'></i>
                            <div className={classes.next}><i className='bx bx-chevron-right'></i></div>
                        </div>
                        <div className={classes.details}>
                          <p style={{paddingRight:'28px',}}>Apartment</p>
                          <span>
                            <p>2</p>
                            <img src={Bed} alt='Bed'/>
                          </span>
                          <span style={{paddingLeft:'13px',}}>
                            <p>3</p>
                            <img src={Jacusy} alt='Jacusy'/>
                          </span>
                        </div>
                      </div>
                      <div className={classes.propertyDetails}>
                        <span>
                          <h6>Amen Estate, Epe, Lagos State</h6>
                          <h6> <i class='bx bxs-star'></i> 4.95</h6>
                        </span>
                        <p style={{fontSize:'12px', color:'#0B0C0C',}}>Property for sale</p>
                        <p className={classes.price}>₦53,105,000</p>
                      </div>
                  </div>
                  <div className={classes.card}>
                      <div className={classes.image}>
                        <div className={classes.actionsbtns}>
                            <i class='bx bx-heart'></i>
                            <div className={classes.next}><i className='bx bx-chevron-right'></i></div>
                        </div>
                        <div className={classes.details}>
                          <p style={{paddingRight:'28px',}}>Apartment</p>
                          <span>
                            <p>2</p>
                            <img src={Bed} alt='Bed'/>
                          </span>
                          <span style={{paddingLeft:'13px',}}>
                            <p>3</p>
                            <img src={Jacusy} alt='Jacusy'/>
                          </span>
                        </div>
                      </div>
                      <div className={classes.propertyDetails}>
                        <span>
                          <h6>Solomade,Ikorodu, Lagos State</h6>
                          <h6> <i class='bx bxs-star'></i> 5.0</h6>
                        </span>
                        <p style={{fontSize:'12px', color:'#0B0C0C',}}>Property for rent</p>
                        <p className={classes.price}>₦1,505,000 / Per YearYear</p>
                      </div>
                  </div>
                  <div className={classes.card}>
                      <div className={classes.image}>
                        <div className={classes.actionsbtns}>
                            <i class='bx bx-heart'></i>
                            <div className={classes.next}><i className='bx bx-chevron-right'></i></div>
                        </div>
                        <div className={classes.details}>
                          <p style={{paddingRight:'28px',}}>Apartment</p>
                          <span>
                            <p>2</p>
                            <img src={Bed} alt='Bed'/>
                          </span>
                          <span style={{paddingLeft:'13px',}}>
                            <p>3</p>
                            <img src={Jacusy} alt='Jacusy'/>
                          </span>
                        </div>
                      </div>
                      <div className={classes.propertyDetails}>
                        <span>
                          <h6>Ojodu, Berger, Lagos State</h6>
                          <h6> <i class='bx bxs-star'></i> 4.75</h6>
                        </span>
                        <p style={{fontSize:'12px', color:'#0B0C0C',}}>Property for sale</p>
                        <p className={classes.price}>₦131,058,000</p>
                      </div>
                  </div>
                  <div className={classes.card}>
                      <div className={classes.image}>
                        <div className={classes.actionsbtns}>
                            <i class='bx bx-heart'></i>
                            <div className={classes.next}><i className='bx bx-chevron-right'></i></div>
                        </div>
                        <div className={classes.details}>
                          <p style={{paddingRight:'28px',}}>Apartment</p>
                          <span>
                            <p>2</p>
                            <img src={Bed} alt='Bed'/>
                          </span>
                          <span style={{paddingLeft:'13px',}}>
                            <p>3</p>
                            <img src={Jacusy} alt='Jacusy'/>
                          </span>
                        </div>
                      </div>
                      <div className={classes.propertyDetails}>
                        <span>
                          <h6>Palngroove, Yaba, Lagos State</h6>
                          <h6> <i class='bx bxs-star'></i> 4.95</h6>
                        </span>
                        <p style={{fontSize:'12px', color:'#0B0C0C',}}>Property for sale</p>
                        <p className={classes.price}>₦147,876,000</p>
                      </div>
                  </div>
                  <div className={classes.card}>
                      <div className={classes.image}>
                        <div className={classes.actionsbtns}>
                            <i class='bx bx-heart'></i>
                            <div className={classes.next}><i className='bx bx-chevron-right'></i></div>
                        </div>
                        <div className={classes.details}>
                          <p style={{paddingRight:'28px',}}>Apartment</p>
                          <span>
                            <p>2</p>
                            <img src={Bed} alt='Bed'/>
                          </span>
                          <span style={{paddingLeft:'13px',}}>
                            <p>3</p>
                            <img src={Jacusy} alt='Jacusy'/>
                          </span>
                        </div>
                      </div>
                      <div className={classes.propertyDetails}>
                        <span>
                          <h6>Palngroove, Yaba, Lagos State</h6>
                          <h6> <i class='bx bxs-star'></i> 5.0</h6>
                        </span>
                        <p style={{fontSize:'12px', color:'#0B0C0C',}}>Property for sale</p>
                        <p className={classes.price}>₦147,876,000</p>
                      </div>
                  </div>
                  
              </div>

            </div>
          </div>
        </div>
        <footer>
          <div className={classes.footerCont}>
            <div className={classes.footerIcons}>
              <span><i class='bx bxl-facebook'></i></span>
              <span><i class='bx bxl-facebook'></i></span>
              <span><i class='bx bxl-facebook'></i></span>
              <span><i class='bx bxl-facebook'></i></span>
            </div>
            <div className={classes.footerContent}>
              <p>Nigeria’s Real Agent Under One Roof Terms of Use and Privacy Policy © 2023 Real Agent - All rights reserved</p>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default LandingPage