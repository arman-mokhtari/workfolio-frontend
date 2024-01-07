
import RequestResetPasswordForm from "./components/requestResetPasswordForm";
import LoginSectionsCard from "@/common/loginSectionsCard";

const SignInPage = () => {
  return (
    <LoginSectionsCard title=" فراموشی کلمه عبور">
      <RequestResetPasswordForm />
    </LoginSectionsCard>
  );
};

export default SignInPage;
