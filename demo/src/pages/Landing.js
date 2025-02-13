import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Typography, Container } from "@mui/material";
import i18n from "../i18n"; // ✅ Import i18n

const Landing = () => {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  // ✅ Ensure LocalStorage is Read Correctly
  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    setCurrentLanguage(savedLang);
    i18n.changeLanguage(savedLang);
  }, []);

  // ✅ Change Language Function
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <Container>
      {/* Language Switch Buttons */}
      <div style={{ textAlign: "right", margin: "20px 0" }}>
        <Button onClick={() => changeLanguage("en")} variant="contained" color={currentLanguage === "en" ? "primary" : "default"}>
          English
        </Button>
        <Button onClick={() => changeLanguage("te")} variant="contained" color={currentLanguage === "te" ? "secondary" : "default"} style={{ marginLeft: "10px" }}>
          తెలుగు
        </Button>
        <Button onClick={() => changeLanguage("hi")} variant="contained" color={currentLanguage === "hi" ? "success" : "default"} style={{ marginLeft: "10px" }}>
          हिन्दी
        </Button>
      </div>

      {/* Hero Section */}
      <Typography variant="h3">{t("welcome")}</Typography>
      <Button variant="contained" color="primary" style={{ marginTop: "15px" }}>
        {t("login")}
      </Button>
      <Button variant="contained" color="secondary" style={{ marginTop: "15px", marginLeft: "10px" }}>
        {t("register")}
      </Button>
    </Container>
  );
};

export default Landing;
