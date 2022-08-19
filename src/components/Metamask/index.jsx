import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";
import {isMobile} from 'react-device-detect';



const Index = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['step 1', 'step 2', 'step 3'];
    let navigate = useNavigate();
    const handleNext = () => {
        if(activeStep === 2){
            navigate("/", {replace: true})
        }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

  return (
    <div className='app-container'>
        <Stepper activeStep={activeStep} style={{padding: '10px'}}>
          <Step>
            <StepLabel>Step 1</StepLabel>
          </Step>
          <Step>
            <StepLabel>Step 2</StepLabel>
          </Step>
          <Step>
            <StepLabel>Step 3</StepLabel>
          </Step>
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            
            
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep === 0 && 
              <Typography sx={{ mt: 2, mb: 1 }} style={{display: 'flex', flexDirection: 'column'}}>
                <a href='https://metamask.io/download/' target="_blank" rel='noreferrer'> <img src='/assets/images/metamask.png' /></a>
                <a href='https://metamask.io/download/' target="_blank" rel='noreferrer' style={{textAlign: 'center'}}>Get Metamask</a>
              </Typography>
            }
            {activeStep === 1 && 
              <Typography sx={{ mt: 2, mb: 1 }}>
                <ul style={{marginBottom: '120px'}}>
                  <li>Navigate to <a 
                  href="https://mumbai.polygonscan.com/"
                  target="_blank" rel='noreferrer'
                  >mumbai.polygon.com</a></li> 
                  <li>Scroll down to the bottom of the page and click on the button "Add Mumbai Network"</li>   
                  <li>Now click on Approve. You will be directly switched to Polygon’s Mainnet now in the network dropdown list.</li>                                  
                </ul>
              </Typography>
            }
            {activeStep === 2 && 
              <Typography sx={{ mt: 2, mb: 1 }}>
                <ul style={{marginBottom: `${isMobile ? '175px' : '200px'}`}}>
                    
                    <li>Copy your wallet address</li>
                    <li>Enter your wallet address here: <a href="https://mumbaifaucet.com/">Mumbai Faucet</a></li>
                    <li>Then you will get 1 MATIC for test</li>
                </ul>
              </Typography>
            }
            
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Box>
            
            
          </React.Fragment>
        )}
    </div>
  )
}

export default Index