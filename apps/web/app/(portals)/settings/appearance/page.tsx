import { unstable_setRequestLocale } from "next-intl/server";

import { Separator } from "@referrer/ui";

import { AppearanceForm } from "@/components/settings";

export default function SettingsAppearancePage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-muted-foreground text-sm">
          Customize the appearance of the app. Automatically switch between day and night themes.
        </p>
      </div>
      <Separator />
      <AppearanceForm />
    </div>
  );
}
