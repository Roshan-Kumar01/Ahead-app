import { Grid } from "@mui/material";
import MuiCustomCard from "./commonComponent/MuiCustomCard";
import CustomTypography from "./commonComponent/CustomTypography";

const OpenVacancies = (props) => {
    
    return (
       <Grid margin='5% 2% 5% 2%'> 
            <CustomTypography
                value='Open vacancies'
                variant='h4'
                style={{ marginBottom: '3%' }}
            />
            <Grid container gap='50px'>
                <MuiCustomCard 
                    title='Senior Full-Stack Engineer'
                    points={
                        [
                            'Full-time position',
                            'Berlin or Remote',
                            '$65-85k, 0.5-1.5% equity share options'
                        ]
                    }
                />
                <MuiCustomCard 
                    title='Senior Designer'
                    points={
                        [
                            'Full-time position',
                            'Berlin or Remote',
                            '$65-85k, 0.5-1.5% equity share options'
                        ]
                    }
                />
                <MuiCustomCard 
                    title='Superstar Intern'
                    points={
                        [
                            'Full-time position',
                            'Berlin or Remote',
                            '$65-85k, 0.5-1.5% equity share options'
                        ]
                    }
                />
            </Grid>
       </Grid>
    )
}

export default OpenVacancies;