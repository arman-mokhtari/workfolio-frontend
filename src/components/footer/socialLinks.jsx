import { socialData } from "@/constants/socialData";
import { IconButton, Box } from "@mui/material";


const SocialLinks = () => {
    return (
        <Box
            component="div"
            sx={{
                m: "0 auto",
                textAlign: "center",
            }} >
            {
                socialData.map(({ ariaLabel, title, href, icon, id },index) => {

                    return (<IconButton
                        key={index} 
                        sx={{
                            '&.MuiIconButton-root:hover': {
                                backgroundColor: "transparent"
                            },
                        }}
                        aria-label={ariaLabel}
                    >
                        <a title={title} href={href} target="_blank" rel="noopener" >
                            {icon}
                        </a>
                    </IconButton>)
                })
            }
        </Box>

    )
}

export default SocialLinks;