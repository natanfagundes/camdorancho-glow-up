import { CameraCard } from "./CameraCard";

const cameras = [
  { title: "Casa Da Árvore", image: "https://camdorancho.online/images/captura-de-tela-2024-12-11-as-23.05.46.png" },
  { title: "Quarto Dragão", image: "https://camdorancho.online/images/camera_quarto.jpg" },
  { title: "Quarto Cogumelo", image: "https://camdorancho.online/images/cam.jpeg" },
  { title: "Casa Anões", image: "https://camdorancho.online/images/casa_anao.jpg" },
  { title: "Casa XEPA", image: "https://camdorancho.online/images/casaxepa.jpg" },
  { title: "Quarto Arco-íris", image: "https://camdorancho.online/images/cam1.jpeg" },
  { title: "Prisão", image: "https://camdorancho.online/images/prisao.jpg" },
  { title: "Quarto Sushi", image: "https://camdorancho.online/images/cam2.jpeg" },
  { title: "Casa Branca", image: "https://camdorancho.online/images/casabranca.jpg" },
  { title: "Câmeras Aleatórias", image: "https://camdorancho.online/images/cam3.jpeg" },
  { title: "Área Externa", image: "https://camdorancho.online/images/cam4.jpeg" },
  { title: "Sala de Estar", image: "https://camdorancho.online/images/cam5.jpeg" },
  { title: "Cozinha", image: "https://camdorancho.online/images/cam8.jpeg" },
  { title: "Área de Lazer", image: "https://camdorancho.online/images/cam6.jpeg" },
  { title: "Jardim", image: "https://camdorancho.online/images/cam7.jpeg" },
];

export const CamerasGrid = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Câmeras Disponíveis
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore todos os ambientes únicos e temáticos do Rancho do Maia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cameras.map((camera, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CameraCard {...camera} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};