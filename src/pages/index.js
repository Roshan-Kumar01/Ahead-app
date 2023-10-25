
'use-client';
import { Button, Grid, Typography } from "@mui/material"
import Image from "next/image"
import styles from '@/styles/Home.module.css'
import styled from "styled-components"
import CustomTypography from "@/components/commonComponent/CustomTypography"
import MasterLifecomponent from "@/components/MasterLifecomponent"
import EqBeatsIqComponent from "@/components/EqBeatsIqComponent";
import AheadFooter from "@/components/AheadFooter";
import OpenVacancies from "@/components/OpenVacancies";
import DoesThisFoundFamiliar from "@/components/DoesThisFoundFamiliar";

export default function Home() {
    
    return (
        <>
            <Wrapper>
                <Grid container justifyContent='space-between' alignItems='center' marginTop='20px'>
                    <Grid item>
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
                    <Grid item display='flex' gap='30px' marginLeft='40px'>
                        <CustomTypography 
                            value="Emotions"
                            component='div'
                        />
                        <CustomTypography 
                            value="Manifesto"
                            component='div'
                        />
                        <CustomTypography 
                            value="Self-awareness test"
                            component='div'
                        />
                        <CustomTypography 
                            value="Work With Us"
                            component='div'
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" 
                            sx={{backgroundColor: 'black', borderRadius: '20px', textTransform: 'capitalize'}}>
                            Download app
                        </Button>
                    </Grid>
                </Grid>
                <MasterLifecomponent />
                <DoesThisFoundFamiliar />
                <EqBeatsIqComponent />
                <OpenVacancies />
                <AheadFooter />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    cursor: pointer;

`