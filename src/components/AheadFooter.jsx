import { Button, Divider, Grid, Stack } from "@mui/material";
import CustomTypography from "./commonComponent/CustomTypography";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import AppleIcon from '@mui/icons-material/Apple';
import { capitalizeFirstLetter } from "@/utils";

const AheadFooter = (props) => {
    const styles = {
        button: {
            display: 'flex',
            flexDirection: 'row', // Set flexDirection to 'row'
            alignItems: 'center',
            backgroundColor: 'black',
        },
    };

    return (
        <Grid>
            <Divider />
            <Grid item sx={{margin: '4% auto', display: 'flex', justifyContent: 'center', }}>
                <img
                    src='https://www.happierhuman.com/wp-content/uploads/2022/02/moodkit-app-logo.png'
                    alt="Vercel Logo"
                    width={100}
                    height={24}
                    priority={true}
                    style={{
                        height: '52px',
                        borderRadius: '10px'
                    }}
                />
            </Grid>
            <Grid container sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                <Grid item sx={{display: 'flex', alignItems: 'center', gap: '10px', marginRight: '5%'}}>
                    <Stack style={{display: 'inline-block', backgroundColor: 'rgb(153,240,215)', borderRadius: '50%'}}>
                        <LocationOnIcon sx={{margin: '5px', height: '16px', width: '16px', color: "black"}} />
                    </Stack>
                    <CustomTypography
                        value='AugustraBe 26, 10117 Berlin'
                        variant='p'
                        // style={{ margin }}
                    />
                </Grid>
                <Grid item sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <Stack style={{display: 'inline-block', backgroundColor: 'rgb(153,240,215)', borderRadius: '50%'}}>
                        <MailIcon  sx={{margin: '5px', height: '16px', width: '16px', color: 'black'}} />
                    </Stack>
                    <CustomTypography
                        value='hi@ahead-app.com'
                        variant='p'
                        // style={{ margin }}
                    />
                </Grid>
            </Grid>
            <Grid item sx={{display: 'flex', justifyContent: 'center', marginTop: '3%'}}>
                <Button style={styles.button} variant="contained">
                    <AppleIcon sx={{ height: '40px', width: '40px', color: 'white', marginRight: '8px' }} />
                    <div style={{ textAlign: 'justify' }}>
                        <CustomTypography style={{ fontSize: '12px', textTransform: 'capitalize', color: 'white' }} variant="body2" value={capitalizeFirstLetter('Download on the')} />
                        <CustomTypography style={{ fontSize: '16px', textTransform: 'capitalize', color: 'white' }} variant="body1" value='App Store' />
                    </div>
                </Button>
            </Grid>
            <CustomTypography 
                style={{ 
                    fontSize: '16px', 
                    textTransform: 'capitalize', 
                    color: 'rgb(132,132,135)',
                    textAlign: 'center', 
                    marginTop: '3%',
                }} 
                variant="body2" 
                value={<span>&#169; &nbsp; 2022 Ahead App. All right reserved.</span>}
            />
            
        </Grid>
    )
}

export default AheadFooter;