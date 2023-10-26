import { Typography } from "@mui/material";

export default function CustomTypography(props) {
    const {value, style, variant} = props
    return(
        <Typography variant={variant} sx={{color: 'black', ...style}}>
            {value}
        </Typography>
    )
}