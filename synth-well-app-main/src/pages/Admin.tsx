import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Activity, 
  TrendingUp, 
  Settings,
  Database,
  BarChart3,
  AlertCircle,
  CheckCircle,
  Clock,
  Shield
} from "lucide-react";

const Admin = () => {
  const systemStats = [
    {
      title: "Utilisateurs Actifs",
      value: "2,847",
      change: "+18.2%",
      icon: Users,
      status: "success",
    },
    {
      title: "Analyses IA",
      value: "15,429",
      change: "+24.5%",
      icon: Activity,
      status: "success",
    },
    {
      title: "Recommandations",
      value: "8,234",
      change: "+12.8%",
      icon: TrendingUp,
      status: "success",
    },
    {
      title: "Taux d'engagement",
      value: "94.2%",
      change: "+3.1%",
      icon: BarChart3,
      status: "success",
    },
  ];

  const recentActivities = [
    {
      user: "Sophie Martin",
      action: "Nouvel utilisateur inscrit",
      time: "Il y a 5 minutes",
      status: "new",
    },
    {
      user: "Thomas Dubois",
      action: "Défi communautaire complété",
      time: "Il y a 12 minutes",
      status: "success",
    },
    {
      user: "Marie Leclerc",
      action: "Score écologique amélioré",
      time: "Il y a 25 minutes",
      status: "success",
    },
    {
      user: "Système",
      action: "Mise à jour du modèle IA",
      time: "Il y a 1 heure",
      status: "info",
    },
    {
      user: "Pierre Bernard",
      action: "Feedback utilisateur reçu",
      time: "Il y a 2 heures",
      status: "new",
    },
  ];

  const systemHealth = [
    { name: "Serveurs API", status: "operational", uptime: "99.98%" },
    { name: "Base de données", status: "operational", uptime: "99.99%" },
    { name: "Modèle IA", status: "operational", uptime: "99.95%" },
    { name: "Services Cloud", status: "maintenance", uptime: "98.50%" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4 text-primary" />;
      case "maintenance":
        return <Clock className="h-4 w-4 text-accent" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Activity className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getActivityColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-primary/10 text-primary border-primary/30";
      case "new":
        return "bg-secondary/10 text-secondary border-secondary/30";
      case "info":
        return "bg-accent/10 text-accent border-accent/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <main className="container px-4 py-8" role="main" aria-label="Panneau d'administration">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between animate-fade-in-up">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold md:text-4xl">
                  Panneau d'Administration
                </h1>
                <p className="text-muted-foreground">
                  Gestion et supervision de la plateforme
                </p>
              </div>
            </div>
          </div>
          <Button variant="secondary" className="gap-2">
            <Settings className="h-4 w-4" />
            Paramètres
          </Button>
        </header>

        {/* System Stats */}
        <section className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4" role="region" aria-label="Statistiques système">
          {systemStats.map((stat, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in-up border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <Badge variant="secondary" className="gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3" role="region" aria-label="Activités et état système">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <Card className="animate-fade-in border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Activité Récente
                </CardTitle>
                <CardDescription>
                  Dernières actions sur la plateforme
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <article 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-border/50"
                    >
                      <div className={`flex h-2 w-2 mt-2 rounded-full ${
                        activity.status === "success" ? "bg-primary" :
                        activity.status === "new" ? "bg-secondary" :
                        "bg-accent"
                      }`} />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{activity.user}</p>
                          <Badge 
                            variant="outline" 
                            className={getActivityColor(activity.status)}
                          >
                            {activity.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {activity.action}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Health */}
          <div className="space-y-6">
            <Card className="animate-fade-in border-2" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-accent" />
                  État du Système
                </CardTitle>
                <CardDescription>
                  Surveillance en temps réel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {systemHealth.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50"
                  >
                    <div className="flex items-center gap-3">
                      {getStatusIcon(service.status)}
                      <div>
                        <p className="font-medium text-sm">{service.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Disponibilité: {service.uptime}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="animate-fade-in border-2 bg-gradient-to-br from-primary/5 to-secondary/5" style={{ animationDelay: "300ms" }}>
              <CardHeader>
                <CardTitle className="text-lg">Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Users className="h-4 w-4" />
                  Gérer les utilisateurs
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Database className="h-4 w-4" />
                  Base de données
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Rapports détaillés
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Settings className="h-4 w-4" />
                  Configuration
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
