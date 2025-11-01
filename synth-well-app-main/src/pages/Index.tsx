import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowRight, Brain, Leaf, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description: "Analyse intelligente de vos habitudes pour des recommandations personnalisées",
    },
    {
      icon: Leaf,
      title: "Développement Durable",
      description: "Actions concrètes pour réduire votre empreinte écologique au quotidien",
    },
    {
      icon: TrendingUp,
      title: "Suivi de Progression",
      description: "Visualisez votre impact et suivez vos progrès en temps réel",
    },
    {
      icon: Users,
      title: "Communauté Engagée",
      description: "Rejoignez une communauté passionnée par l'innovation responsable",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden" role="banner" aria-label="Section principale">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />
        <div className="container relative px-4 py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Innovation Technologique & Durabilité
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">L'avenir est</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Intelligent & Durable
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
                Une plateforme innovante qui utilise l'IA pour analyser vos habitudes et vous proposer 
                des actions personnalisées pour améliorer votre bien-être tout en préservant notre planète.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto group">
                    Découvrir le Dashboard
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/admin">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Espace Admin
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="Fusion nature et technologie - Innovation durable"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-20 bg-muted/30" role="region" aria-label="Nos fonctionnalités">
        <div className="container px-4">
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <h2 className="text-3xl font-bold md:text-4xl">
              Pourquoi choisir EcoMind ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une approche unique combinant technologie de pointe et conscience écologique
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20" role="region" aria-label="Appel à l'action">
        <div className="container px-4">
          <Card className="relative overflow-hidden border-2 border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
            <div className="relative p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Prêt à transformer votre impact ?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Rejoignez des milliers d'utilisateurs qui utilisent l'IA pour un avenir plus durable
              </p>
              <Link to="/dashboard">
                <Button variant="hero" size="lg" className="animate-pulse-glow">
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
