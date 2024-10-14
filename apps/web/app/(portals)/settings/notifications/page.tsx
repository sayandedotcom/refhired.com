import { Separator } from "@referrer/ui";

import { NotificationsForm } from "@/components/settings";

export default function SettingsNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-muted-foreground text-sm">Configure how you receive notifications.</p>
      </div>
      <Separator />
      <NotificationsForm />
    </div>
  );
}
