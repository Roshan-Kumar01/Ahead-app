import { Button, Grid, IconButton, Rating, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import CustomTypography from "./commonComponent/CustomTypography";
import AppleIcon from '@mui/icons-material/Apple';
import { capitalizeFirstLetter } from "@/utils";
import Image from "next/image";

const MasterLifecomponent = (props) => {
    const styles = {
        button: {
            display: 'flex',
            flexDirection: 'row', // Set flexDirection to 'row'
            alignItems: 'center',
            backgroundColor: 'black',
        },
    };

    return(
        <Wrapper1>
            <Grid container style={{backgroundColor: 'rgb(238,235,253)', borderRadius: '35px'}}>
                <Grid item width='50%' padding='10% 0 10% 5%'> 
                    <CustomTypography
                        value='Moodkit app'
                        component='div'
                        style={{marginBottom: '5%'}}
                    />
                    <CustomTypography
                        value='Master your life by mystering emotions'
                        variant='h3'
                        style={{marginBottom: '10%'}}
                    />
                    <Stack>
                        <Grid container gap='10%'>
                            <Button style={styles.button} variant="contained">
                                <AppleIcon sx={{height: '40px', width: '40px', color: 'white', marginRight: '8px'}}/>
                                <div style={{textAlign: 'justify'}}>
                                    <CustomTypography style={{fontSize: '12px', textTransform: 'capitalize', color: 'white'}} variant="body2" value={capitalizeFirstLetter('Download on the')} />
                                    <CustomTypography style={{fontSize: '16px', textTransform: 'capitalize', color: 'white'}} variant="body1" value='App Store'/>
                                </div>
                            </Button>
                            <Grid item>
                                <Rating name="read-only" value={5} readOnly />
                                <CustomTypography style={{fontSize: '12px', textTransform: 'capitalize',}} variant="body2" value='100+ AppStore reviews' />
                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>
                <Grid item sx={{position: 'relative'}}>
                    <Image
                        src="/dashed_circle.svg"
                        alt="Next.js Logo"
                        width={500}
                        height={500}
                        priority
                    />
                    <Image 
                        src="/dashed_circle_filled.svg"
                        alt="Next.js Logo"
                        width={200}
                        height={200}
                        priority
                        style={{position: 'absolute', transform: 'translate(-24vw, 20vh)'}}
                    />
                    <Image 
                        src="/P2PE6R0.jpg"
                        alt="Next.js Logo"
                        width={100}
                        height={200}
                        priority
                        style={{position: 'absolute', transform: 'translate(-20.5vw, 20vh)'}}
                    />
                    <Image 
                        src="/icons8-angel.gif"
                        alt="Next.js Logo"
                        width={48}
                        height={48}
                        priority
                        style={{position: 'absolute', transform: 'translate(-31vw, 16vh)'}}
                    />
                    <Image 
                        src="/icons8-neutral.gif"
                        alt="Next.js Logo"
                        width={48}
                        height={48}
                        priority
                        style={{position: 'absolute', transform: 'translate(-19vw, 57vh)'}}
                    />
                    <Image 
                        src="/icons8-happy.gif"
                        alt="Next.js Logo"
                        width={48}
                        height={48}
                        priority
                        style={{position: 'absolute', transform: 'translate(-5vw, 24vh)'}}
                    />
                </Grid>
            </Grid>
        </Wrapper1>
    )
}

const Wrapper1 = styled.div`
    background-color: rgb(238,235,253);
    border-radius: 35px;
`
export default MasterLifecomponent;