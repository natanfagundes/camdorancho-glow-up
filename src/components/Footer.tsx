import { Heart, Users, Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-heading font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
              <Users className="w-5 h-5" />
              Rancho do Maia
            </h3>
            <p className="text-primary-foreground/80">
              A experiência mais autêntica de reality show do Brasil. 
              Acompanhe cada momento em tempo real.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              Segurança & Privacidade
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Pagamentos 100% seguros</li>
              <li>Dados protegidos</li>
              <li>Streaming confiável</li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Atendimento 24/7</li>
              <li>FAQ & Ajuda</li>
              <li>Contato direto</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-red-400" /> para os fãs do Rancho do Maia
          </p>
          <p className="text-sm text-primary-foreground/60 mt-2">
            © 2024 Rancho do Maia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};