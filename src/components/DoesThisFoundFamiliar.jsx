import { Grid } from "@mui/material";
import DoesThisFoundFamiliarCard from "./commonComponent/DoesThisFoundFamiliarCard";
import CustomTypography from "./commonComponent/CustomTypography";

const DoesThisFoundFamiliar = () => {

    return(
        <Grid sx={{margin: '5% 0'}}> 
            <CustomTypography
                value='Does this sound familiar...'
                variant='h4'
                style={{ marginBottom: '3%', marginLeft: '4%', fontWeight: 800 }}
            />
            <Grid item sx={{display: 'flex', gap: '15px'}} >
                <Grid item xl={3} lg={3} sm={3} >
                    <DoesThisFoundFamiliarCard 
                        title='You argue with a colleague'
                        description='You get angry and defensive, instead of staying open and working towards common ground.'
                        titleIcon="icons8-crazy-48.png"
                        style={{backgroundColor: 'rgb(216,242,255)', width: '1433px'}}
                    />
                </Grid>
                <Grid item xl={3} lg={3} sm={3} >
                    <DoesThisFoundFamiliarCard 
                        title='You argue with a colleague'
                        description='You get angry and defensive, instead of staying open and working towards common ground.'
                        titleIcon="icons8-crazy-48.png"
                        style={{backgroundColor: 'rgb(237,235,253)', width: '1433px'}}
                    />
                </Grid>
                <Grid item xl={3} lg={3} sm={3} > 
                    <DoesThisFoundFamiliarCard 
                        title='You argue with a colleague'
                        description='You get angry and defensive, instead of staying open and working towards common ground.'
                        titleIcon="icons8-crazy-48.png"
                        style={{backgroundColor: 'rgb(99,64,239)', transform: 'rotate(-4deg)', width: '1433px'}}
                    />
                </Grid>
                <Grid item xl={3} lg={3} sm={3} > 
                    <DoesThisFoundFamiliarCard 
                        title='You argue with a colleague'
                        description='You get angry and defensive, instead of staying open and working towards common ground.'
                        titleIcon="icons8-crazy-48.png"
                        style={{backgroundColor: 'rgb(254,239,213)', width: '1433px'}}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DoesThisFoundFamiliar;