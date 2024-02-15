import { PlaylistAdd } from "@mui/icons-material";
import { Typography, Stack, Button } from "@mui/material";
import Link from "next/link";

const HeadStack = ({ title, href }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        mb: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: "1.5rem",
        }}
        noWrap
        component="h1"
      >
        {title}
      </Typography>

      <Button
        sx={{
          whiteSpace: "nowrap",
        }}
        component={Link}
        role="link"
        href={href}
        color="success"
        variant="contained"
        aria-label="add item"
        endIcon={<PlaylistAdd />}
      >
        اضافه
      </Button>
    </Stack>
  );
};

export default HeadStack;
