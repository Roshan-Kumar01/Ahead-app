import { Grid } from "@mui/material";
import CustomTypography from "./commonComponent/CustomTypography";

const EqBeatsIqComponent = (props) => {

    return(
        <Grid container margin='5% 2% 5% 2%'>
            <Grid item xl={4} lg={4} sm={4}>
                <CustomTypography
                    value='EQ beats IQ'
                    variant='h4'
                    // style={{ marginBottom: '10%' }}
                />
            </Grid>
            <Grid item xl={3} lg={3} sm={3} marginRight='10%'>
                <CustomTypography
                    value='People with high emotional intelligence (EQ) live more fullfilled lives. They tend to be happier and have healthier relationships.'
                    variant='div'
                    style={{ lineHeight: '1.5', color: 'rgb(76,77,79)' }}
                />
            </Grid>
            <Grid item xl={3} lg={3} sm={3}>
                <CustomTypography
                    value='They are more successfull in their pursuits and make for inspiring leaders. According to science they earn $29k a year.'
                    variant='div'
                    style={{ lineHeight: '1.5', color: 'rgb(76,77,79)' }}
                />
            </Grid>
        </Grid>
    )
}

export default EqBeatsIqComponent;