import { Grid } from "@mui/material"
import CustomTypography from "./commonComponent/CustomTypography"
import SelfImprovementTimeline from "./SelfImprovementTimeline"
import Image from "next/image"

const SelfImprovementUgh = () => {

    return(
        <Grid>
            <Grid item marginLeft='6%'>
                <CustomTypography
                    style={{ 
                        fontSize: '16px', 
                        textTransform: 'capitalize', 
                        color: 'black',
                        marginBottom: '2%' 
                    }}
                    variant="body1"
                    value={`Wrong with self-improvment and how we're fixing it.`}
                />

                <Grid display='flex'>
                    <CustomTypography
                        value='Self-improvement. Ugh.'
                        variant='h4'
                        style={{ marginBottom: '1%', display: 'inline' }}
                    /> 
                    <Image
                        src="/icons8-mad-48.png"
                        alt="Next.js Logo"
                        width={48}
                        height={48}
                        priority
                        style={{marginLeft: '2%', transform: 'rotate(15de'}}
                    />
                </Grid>
            </Grid>
            <Grid item marginLeft='15%' marginTop='8%' marginBottom='15%'>
                <SelfImprovementTimeline />
            </Grid>

        </Grid>
    )
}
export default SelfImprovementUgh