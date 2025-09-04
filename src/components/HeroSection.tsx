import { Button } from "@/components/ui/button";
import ranchoLogo from "@/assets/rancho-logo.png";
import { Camera, Users, Clock } from "lucide-react";

export const HeroSection = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planos');
    plansSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='rgba(255,255,255,0.05)' fill-opacity='1'%3E%3Cpath d='M20 20c0 0 10-10 10-10s10 10 10 10-10 10-10 10-10-10-10-10Z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8 animate-scale-in">
          <img 
            src={ranchoLogo} 
            alt="Rancho do Maia"
            className="h-20 sm:h-28 w-auto drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 animate-fade-in">
          Rancho do Maia
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-2 animate-fade-in font-medium">
          Câmeras Ao Vivo
        </p>
        
        <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in">
          Acompanhe todos os momentos em tempo real nos quartos temáticos mais únicos do Brasil
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 glass-effect rounded-full px-6 py-3 text-white animate-fade-in">
            <Camera className="w-5 h-5" />
            <span className="font-semibold">HD 24 Horas</span>
          </div>
          <div className="flex items-center gap-3 glass-effect rounded-full px-6 py-3 text-white animate-fade-in">
            <Users className="w-5 h-5" />
            <span className="font-semibold">Múltiplos Ângulos</span>
          </div>
          <div className="flex items-center gap-3 glass-effect rounded-full px-6 py-3 text-white animate-fade-in">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Sempre Online</span>
          </div>
        </div>
        
        <Button 
          size="xl" 
          variant="hero" 
          onClick={scrollToPlans}
          className="animate-bounce hover:animate-none"
        >
          VER PLANOS VIP
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};