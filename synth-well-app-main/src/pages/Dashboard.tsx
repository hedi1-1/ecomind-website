import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Leaf, 
  Droplet, 
  Zap, 
  Heart,
  Target,
  Award,
  Activity
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Score Écologique",
      value: "78%",
      change: "+12%",
      icon: Leaf,
      color: "text-primary",
      progress: 78,
    },
    {
      title: "Eau Économisée",
      value: "1,250L",
      change: "+8%",
      icon: Droplet,
      color: "text-secondary",
      progress: 65,
    },
    {
      title: "Énergie Optimisée",
      value: "340kWh",
      change: "+15%",
      icon: Zap,
      color: "text-accent",
      progress: 82,
    },
    {
      title: "Impact Santé",
      value: "85/100",
      change: "+5%",
      icon: Heart,
      color: "text-primary",
      progress: 85,
    },
  ];

  const recommendations = [
    {
      title: "Optimiser la consommation d'eau",
      description: "Réduisez votre consommation de 15% en suivant nos conseils personnalisés",
      priority: "high",
      impact: "+45 points éco",
    },
    {
      title: "Routine matinale éco-responsable",
      description: "Adoptez des gestes simples pour un réveil plus vert",
      priority: "medium",
      impact: "+30 points éco",
    },
    {
      title: "Challenge communautaire du mois",
      description: "Participez au défi 'Zéro déchet' avec 1,234 autres utilisateurs",
      priority: "low",
      impact: "+60 points éco",
    },
  ];

  const achievements = [
    { title: "Première semaine", icon: Award, completed: true },
    { title: "Économie d'eau expert", icon: Droplet, completed: true },
    { title: "Ambassadeur vert", icon: Leaf, completed: false },
    { title: "100 jours actifs", icon: Activity, completed: false },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive hover:bg-destructive/20";
      case "medium":
        return "bg-accent/10 text-accent hover:bg-accent/20";
      default:
        return "bg-muted text-muted-foreground hover:bg-muted/80";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container px-4 py-8" role="main" aria-label="Tableau de bord principal">
        {/* Header */}
        <header className="mb-8 space-y-2 animate-fade-in-up">
          <h1 className="text-3xl font-bold md:text-4xl">
            Tableau de bord
          </h1>
          <p className="text-muted-foreground text-lg">
            Suivez votre progression et découvrez vos recommandations personnalisées
          </p>
        </header>

        {/* Stats Grid */}
        <section className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4" role="region" aria-label="Statistiques principales">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in-up border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <Badge variant="secondary" className="gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </Badge>
                </div>
                <Progress value={stat.progress} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3" role="region" aria-label="Recommandations et succès">
          {/* Recommendations */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="animate-fade-in border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Recommandations IA
                </CardTitle>
                <CardDescription>
                  Actions personnalisées basées sur vos habitudes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map((rec, index) => (
                  <article 
                    key={index}
                    className="p-4 hover:shadow-md transition-all duration-300 cursor-pointer hover:border-primary/50 border-2 rounded-lg bg-card"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{rec.title}</h3>
                      <Badge className={getPriorityColor(rec.priority)}>
                        {rec.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {rec.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="gap-1 border-primary text-primary">
                        <Leaf className="h-3 w-3" />
                        {rec.impact}
                      </Badge>
                    </div>
                  </article>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <Card className="animate-fade-in border-2" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Succès
                </CardTitle>
                <CardDescription>
                  Vos accomplissements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                      achievement.completed 
                        ? "bg-primary/10 border-2 border-primary/30" 
                        : "bg-muted/50"
                    }`}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      achievement.completed 
                        ? "bg-gradient-to-br from-primary to-secondary" 
                        : "bg-muted"
                    }`}>
                      <achievement.icon className={`h-5 w-5 ${
                        achievement.completed 
                          ? "text-primary-foreground" 
                          : "text-muted-foreground"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium text-sm ${
                        achievement.completed ? "" : "text-muted-foreground"
                      }`}>
                        {achievement.title}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="animate-fade-in border-2 bg-gradient-to-br from-primary/5 to-secondary/5" style={{ animationDelay: "300ms" }}>
              <CardHeader>
                <CardTitle className="text-lg">Votre Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Jours actifs</span>
                    <span className="font-bold">47</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Défis complétés</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">CO₂ évité</span>
                    <span className="font-bold text-primary">124 kg</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
