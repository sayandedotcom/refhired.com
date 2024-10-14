import { Separator } from "@referrer/ui";

import { ProfileForm } from "@/components/settings";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-muted-foreground text-sm">This is how others will see you on the site.</p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
}
