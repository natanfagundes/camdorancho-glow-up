import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Star } from "lucide-react";

export const VipPlans = () => {
  return (
    <section id="planos" className="py-20 px-6 gradient-nature">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Crown className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            PLANOS VIP
          </h2>
          <p className="text-xl text-white/90 mb-2">
            Acesso TOTAL às Melhores Câmeras do Rancho
          </p>
        </div>

        <Card className="border-4 border-accent shadow-glow bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-accent" />
              <CardTitle className="text-2xl font-heading">PLANO PREMIUM</CardTitle>
              <Star className="w-6 h-6 text-accent" />
            </div>
            <div className="text-6xl font-bold text-accent mb-2">
              R$ 19
              <span className="text-2xl text-muted-foreground">,90</span>
            </div>
            <p className="text-muted-foreground">Acesso mensal completo</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground font-medium">Acesso a 5 Câmeras 24hrs</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground font-medium">Você escolhe 5 câmeras</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground font-medium">Câmeras em HD</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground font-medium">Mobile + Desktop</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground font-medium">Sem anúncios</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground font-medium">Suporte prioritário</span>
              </div>
            </div>

            <div className="pt-6 text-center">
              <Button 
                size="xl" 
                variant="hero" 
                className="w-full sm:w-auto px-12"
                onClick={() => window.open('https://checkout.arkama.com.br/pay/PL1KVPCD', '_blank')}
              >
                ASSINAR AGORA
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Pagamento seguro • Cancele quando quiser • Sem compromisso
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-white/80">
            🔥 Oferta por tempo limitado • Milhares de usuários já aproveitam!
          </p>
        </div>
      </div>
    </section>
  );
};