import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  console.log("Server");

  return (
    <div>
      <h1>From Server {t("log_in")}</h1>
    </div>
  );
}
