import { Card, CardContent } from "@/components/ui/card";

interface CameraCardProps {
  title: string;
  image: string;
  isLive?: boolean;
}

export const CameraCard = ({ title, image, isLive = true }: CameraCardProps) => {
  return (
    <Card className="group overflow-hidden border-2 border-border hover:border-accent transition-smooth shadow-soft hover:shadow-strong cursor-pointer">
      <CardContent className="p-0 relative">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 sm:h-56 object-cover transition-smooth group-hover:scale-105"
          />
          {isLive && (
            <div className="absolute top-3 right-3 flex items-center gap-2 glass-effect rounded-full px-3 py-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-white">AO VIVO</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
        </div>
        <div className="p-4 gradient-card">
          <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-accent transition-smooth">
            {title}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};