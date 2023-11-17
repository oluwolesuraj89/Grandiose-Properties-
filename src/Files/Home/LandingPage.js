import React from 'react'
import classes from '../Home/LandingPage.module.css'
import Navigation from '../Nav/Navigation'

function LandingPage() {
  return (
    <div>
        <Navigation/>
        <div className={classes.body}>
            <div className={classes.main}>
                <h2>Hello world</h2>
            </div>
        </div>
    </div>
  )
}

export default LandingPage