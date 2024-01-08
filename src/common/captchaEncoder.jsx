"use client"

//todo develop this page. this component isnt connect  to any othe page
import { useState, useEffect } from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

const CaptchaEncoder = () => {
  const [base64Data, setBase64Data] = useState("");
  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await queryClient.fetchQuery("get-newsletter-captcha");
        const encoder = new TextEncoder();
        const base64 = btoa(encoder.encode(data).reduce((acc, byte) => acc + String.fromCharCode(byte), ''));
        setBase64Data(base64);
      } catch (error) {
        // Handle error fetching captcha data
        console.error("Error fetching captcha data", error);
      }
    };

    fetchData();
  }, [queryClient]);

  return (
    <Image
      src={`data:image/svg+xml;base64,${base64Data}`}
      width="120"
      height="50"
      alt="Captcha Image"
    />
  );
};

export default CaptchaEncoder;
