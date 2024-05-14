import LoginSectionsCard from "@/common/loginSectionsCard";
import RequestResetPasswordForm from "@/components/main/forgetPass/requestResetPasswordForm";

const SignInPage = () => {
  return (
    <LoginSectionsCard title=" فراموشی کلمه عبور">
      <RequestResetPasswordForm />
    </LoginSectionsCard>
  );
};

export default SignInPage;
