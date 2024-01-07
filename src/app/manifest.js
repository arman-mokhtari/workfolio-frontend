export default function manifest() {
  const darkTheme = {
    name: "Dark Theme",
    background_color: "#22273b",
    theme_color: "#22273b",
  };

  const lightTheme = {
    name: "Light Theme",
    background_color: "#F1F1F1",
    theme_color: "#F1F1F1",
  };

  return {
    name: "طراحی و توسعه وب ورکفولیو",
    short_name: "ورکفولیو",
    description:
      "طراحی وبسایت مدرن با رابط کاربری (UI) زیبا و تجربه کاربری (UX) بی‌نظیر که با استفاده از آخرین تکنولوژی‌ها و روش‌های مدرن توسط تیم ورکفولیو به شما ارائه می‌شود.",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    themes: {
      dark: darkTheme,
      light: lightTheme,
    },
  };
}
