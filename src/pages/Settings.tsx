import { Link } from "react-router-dom";
import { ArrowLeft, Bell, Moon, Globe, Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSettings, languages, Language } from "@/hooks/use-settings";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { settings, updateSetting } = useSettings();
  const { toast } = useToast();

  const handleSettingChange = <K extends keyof typeof settings>(
    key: K,
    value: typeof settings[K],
    label: string
  ) => {
    updateSetting(key, value);
    toast({
      title: "Settings Updated",
      description: `${label} has been ${value ? "enabled" : "disabled"}.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2 mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-primary">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your preferences and account settings</p>
        </div>

        <div className="grid gap-6 max-w-2xl">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notifications
              </CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) =>
                    handleSettingChange("emailNotifications", checked, "Email Notifications")
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Emails</p>
                  <p className="text-sm text-muted-foreground">Receive promotional content</p>
                </div>
                <Switch
                  checked={settings.marketingEmails}
                  onCheckedChange={(checked) =>
                    handleSettingChange("marketingEmails", checked, "Marketing Emails")
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="w-5 h-5 text-primary" />
                Appearance
              </CardTitle>
              <CardDescription>Customize the look and feel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Use dark theme</p>
                </div>
                <Switch
                  checked={settings.darkMode}
                  onCheckedChange={(checked) =>
                    handleSettingChange("darkMode", checked, "Dark Mode")
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Language & Region
              </CardTitle>
              <CardDescription>Set your preferred language and region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Language</p>
                  <p className="text-sm text-muted-foreground">Select your preferred language</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2 min-w-[160px] justify-between">
                      <span className="flex items-center gap-2">
                        <span>{languages.find(l => l.value === settings.language)?.flag}</span>
                        <span>{languages.find(l => l.value === settings.language)?.label}</span>
                      </span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-background border border-border z-50">
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.value}
                        onClick={() => {
                          updateSetting("language", lang.value);
                          toast({
                            title: "Language Updated",
                            description: `Language changed to ${lang.label}.`,
                          });
                        }}
                        className={`flex items-center gap-2 cursor-pointer ${
                          settings.language === lang.value ? "bg-primary/10" : ""
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Privacy
              </CardTitle>
              <CardDescription>Manage your privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Analytics</p>
                  <p className="text-sm text-muted-foreground">Help improve our services</p>
                </div>
                <Switch
                  checked={settings.analytics}
                  onCheckedChange={(checked) =>
                    handleSettingChange("analytics", checked, "Analytics")
                  }
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
