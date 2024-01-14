"use client";

import { Typography, Grid, Box } from "@mui/material";
import Link from "next/link";
import NewPasswordForm from "./components/newPasswordForm";
import { useParams, useRouter } from "next/navigation";
import LoginSectionsCard from "@/common/loginSectionsCard";
import { useGetIsValidateToken } from "@/hooks/useResetPassword";
import Loading from "@/common/loading";

const Page = () => {
  const { token } = useParams();
  const router = useRouter();
  const { data, isLoading } = useGetIsValidateToken(token);
  const { isValid } = data || {};

  if (isLoading) {
    return (
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading />
      </Box>
    );
  }
  if (!!!isValid) return router.push("/404");

  return (
    <LoginSectionsCard title="بازیابی کلمه عبور">
      <NewPasswordForm token={token} />
      <Grid
        sx={{
          "& a": {
            textDecoration: "none",
            color: "text.secondary",
          },
        }}
        container
      >
        <Grid item>
          <Link
              role="link"
              aria-label="رفتن به صفحه ورود" href="/sign-in">
            <Typography noWrap variant="body2">
              کلمه عبور را به خاطر آوردم! ورود
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </LoginSectionsCard>
  );
};

export default Page;
