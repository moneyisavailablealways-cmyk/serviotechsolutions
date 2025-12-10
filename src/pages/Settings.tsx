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
import { useSettings, languages } from "@/hooks/use-settings";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "@/hooks/use-translations";

const Settings = () => {
  const { settings, updateSetting } = useSettings();
  const { toast } = useToast();
  const t = useTranslations();

  const handleSettingChange = <K extends keyof typeof settings>(
    key: K,
    value: typeof settings[K],
    label: string
  ) => {
    updateSetting(key, value);
    toast({
      title: t.settingsUpdated,
      description: `${label} ${value ? t.enabled : t.disabled}.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2 mb-4">
              <ArrowLeft className="w-4 h-4" />
              {t.backToHome}
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-primary">{t.settingsTitle}</h1>
          <p className="text-muted-foreground mt-2">{t.settingsSubtitle}</p>
        </div>

        <div className="grid gap-6 max-w-2xl">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                {t.notifications}
              </CardTitle>
              <CardDescription>{t.notificationsDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{t.emailNotifications}</p>
                  <p className="text-sm text-muted-foreground">{t.emailNotificationsDesc}</p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) =>
                    handleSettingChange("emailNotifications", checked, t.emailNotifications)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{t.marketingEmails}</p>
                  <p className="text-sm text-muted-foreground">{t.marketingEmailsDesc}</p>
                </div>
                <Switch
                  checked={settings.marketingEmails}
                  onCheckedChange={(checked) =>
                    handleSettingChange("marketingEmails", checked, t.marketingEmails)
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="w-5 h-5 text-primary" />
                {t.appearance}
              </CardTitle>
              <CardDescription>{t.appearanceDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{t.darkMode}</p>
                  <p className="text-sm text-muted-foreground">{t.darkModeDesc}</p>
                </div>
                <Switch
                  checked={settings.darkMode}
                  onCheckedChange={(checked) =>
                    handleSettingChange("darkMode", checked, t.darkMode)
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                {t.languageRegion}
              </CardTitle>
              <CardDescription>{t.languageRegionDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{t.language}</p>
                  <p className="text-sm text-muted-foreground">{t.languageDesc}</p>
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
                            title: t.languageUpdated,
                            description: `${t.languageChangedTo} ${lang.label}.`,
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
                {t.privacy}
              </CardTitle>
              <CardDescription>{t.privacyDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{t.analytics}</p>
                  <p className="text-sm text-muted-foreground">{t.analyticsDesc}</p>
                </div>
                <Switch
                  checked={settings.analytics}
                  onCheckedChange={(checked) =>
                    handleSettingChange("analytics", checked, t.analytics)
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
