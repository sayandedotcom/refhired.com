"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  console.log("Client");

  return (
    <div>
      <h1>from client {t("log_in")}</h1>
    </div>
  );
}
