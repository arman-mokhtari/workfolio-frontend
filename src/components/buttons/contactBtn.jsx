import LoadingBtn from "@/common/loadingBtn";

const ContactBtn = ({ mt, ml, loading }) => {
  return (
    <LoadingBtn
      component="a"
      href="tel:+982191694982"
      sx={{
        mt: mt,
        ml: ml,
        fontWeight: "500",
        whiteSpace: "nowrap",
      }}
      variant="contained"
      color="warning"
      loadingIndicator=" "
      loading={loading}
      text="با ما تماس بگیرید"
    />
  );
};

export default ContactBtn;
