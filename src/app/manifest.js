export default function manifest() {
  return {
    name: "طراحی و توسعه وب ورکفولیو",
    short_name: "ورکفولیو",
    description:
      "طراحی وبسایت مدرن با رابط کاربری (UI) زیبا و تجربه کاربری (UX) بی‌نظیر که با استفاده از آخرین تکنولوژی‌ها و روش‌های مدرن توسط تیم ورکفولیو به شما ارائه می‌شود.",
    start_url: "/",
    display: "standalone",
    background_color: "#F1F1F1",
    theme_color: "#F1F1F1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/icons/maskable_icon.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-144x144.png",
        type: "image/png",
        sizes: "144x144",
        purpose: "any",
      },
    ],
    "screenshots": [
      {
        src: "/screenshots/web_design_2.png",
        type: "image/jpg",
        sizes: "1200x788",
        form_factor: "narrow"
      },
      {
        src: "/screenshots/web_design_1.png",
        type: "image/png",
        sizes: "1200x788",
        form_factor: "wide"
      }
    ]
  };
}