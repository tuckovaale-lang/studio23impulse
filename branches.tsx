import { motion } from "framer-motion";
import { MapPin, Phone, Clock, X, Edit, Save } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Map, Marker } from "pigeon-maps";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Branches() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [activeBranch, setActiveBranch] = useState<number | null>(null); // null means show all
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  // Coordinates for Novorossiysk branches
  // Branch 1: Анапское шоссе, 15
  // Branch 2: Видова, 194
  
  const [branch1Coords, setBranch1Coords] = useState<[number, number]>([44.727325, 37.762066]);
  const [branch2Coords, setBranch2Coords] = useState<[number, number]>([44.7440, 37.7550]);
  
  const defaultCenter: [number, number] = [44.7356, 37.7585];

  const getCenter = (): [number, number] => {
    if (activeBranch === 1) return branch1Coords;
    if (activeBranch === 2) return branch2Coords;
    return defaultCenter;
  };

  const getZoom = () => {
    if (activeBranch) return 16;
    return 13;
  };

  const openMap = (branchId: number | null) => {
    setActiveBranch(branchId);
    setIsMapOpen(true);
    setIsEditing(false);
  };

  const handleMapClick = ({ latLng }: { latLng: [number, number] }) => {
    if (!isEditing || activeBranch === null) return;

    if (activeBranch === 1) {
      setBranch1Coords(latLng);
    } else if (activeBranch === 2) {
      setBranch2Coords(latLng);
    }
    
    toast({
      title: "Местоположение обновлено",
      description: "Новые координаты сохранены для этого филиала.",
    });
    setIsEditing(false);
  };

  return (
    <section id="branches" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase mb-8">
              <span className="text-primary">ФИЛИАЛЫ</span>
            </h2>

            <div className="space-y-12">
              {/* Branch 1 */}
              <div className="group border-l-2 border-white/20 pl-6 hover:border-primary transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase">
                  Большой зал
                </h3>
                <div className="space-y-2 text-white/70 mb-4">
                  <p className="flex items-center gap-3">
                    <MapPin className="text-primary h-5 w-5" />
                    Анапское шоссе, 15, каб. 401
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="text-primary h-5 w-5" />
                    +7 (989) 762 - 53 - 19
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="text-primary h-5 w-5" />
                    09:00 - 22:00
                  </p>
                </div>
                <button 
                  onClick={() => openMap(1)}
                  className="text-primary uppercase font-bold tracking-widest text-xs hover:text-white transition-colors border-b border-primary/50 hover:border-white pb-0.5"
                >
                  Посмотреть на карте
                </button>
              </div>

              {/* Branch 2 */}
              <div className="group border-l-2 border-white/20 pl-6 hover:border-primary transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase">Малый зал</h3>
                <div className="space-y-2 text-white/70 mb-4">
                  <p className="flex items-center gap-3">
                    <MapPin className="text-primary h-5 w-5" />
                    Видова, 194, 2 этаж
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="text-primary h-5 w-5" />
                    +7 (989) 762 - 53 - 19
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="text-primary h-5 w-5" />
                    09:00 - 22:00
                  </p>
                </div>
                <button 
                  onClick={() => openMap(2)}
                  className="text-primary uppercase font-bold tracking-widest text-xs hover:text-white transition-colors border-b border-primary/50 hover:border-white pb-0.5"
                >
                  Посмотреть на карте
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <div className="relative overflow-hidden border border-white/10 max-h-[830px]">
              <div className="absolute inset-0 bg-black/20 z-10"></div>
              <img
                src="/images/branches.jpg"
                alt="Филиалы студии"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 -z-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Map Modal */}
      <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
        <DialogContent className="sm:max-w-[800px] p-0 bg-black border border-primary/20 overflow-hidden">
          <div className="relative h-[500px] w-full">
            <button 
              onClick={() => setIsMapOpen(false)}
              className="absolute right-4 top-4 z-50 bg-black/50 p-2 rounded-full text-white hover:bg-primary hover:text-black transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            
            {/* Edit controls - only visible when a specific branch is selected */}
            {activeBranch !== null && (
              <div className="absolute right-4 top-16 z-50 flex flex-col gap-2">
                <Button
                  size="sm"
                  variant={isEditing ? "default" : "secondary"}
                  className={`shadow-lg ${isEditing ? "bg-primary text-black" : "bg-black/80 text-white border border-white/20"}`}
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? (
                    <>
                      <Save className="h-3 w-3 mr-2" />
                      Сохранить
                    </>
                  ) : (
                    <>
                      <Edit className="h-3 w-3 mr-2" />
                      Изменить метку
                    </>
                  )}
                </Button>
                {isEditing && (
                  <div className="bg-black/80 text-white text-xs p-2 rounded border border-primary/30 max-w-[150px]">
                    Нажмите на карту, чтобы установить новое местоположение
                  </div>
                )}
              </div>
            )}
            
            <Map 
              center={getCenter()} 
              zoom={getZoom()}
              onClick={handleMapClick}
              provider={(x, y, z, dpr) => {
                // Use CartoDB Dark Matter for dark theme style
                const pixelRatio = dpr || 1;
                return `https://basemaps.cartocdn.com/dark_all/${z}/${x}/${y}${pixelRatio >= 2 ? '@2x' : ''}.png`;
              }}
            >
              {(activeBranch === null || activeBranch === 1) && (
                <Marker 
                  width={50} 
                  anchor={branch1Coords} 
                  color={activeBranch === 1 && isEditing ? "#ffffff" : "#CCFF00"} 
                  onClick={() => !isEditing && window.open("https://yandex.ru/maps/?text=Новороссийск, Анапское шоссе 15", "_blank")}
                />
              )}
              {(activeBranch === null || activeBranch === 2) && (
                <Marker 
                  width={50} 
                  anchor={branch2Coords} 
                  color={activeBranch === 2 && isEditing ? "#ffffff" : "#CCFF00"} 
                  onClick={() => !isEditing && window.open("https://yandex.ru/maps/?text=Новороссийск, Видова 194", "_blank")}
                />
              )}
            </Map>
            
            {/* Custom Overlay for branding */}
            <div className="absolute bottom-4 left-4 bg-black/80 p-4 border border-primary/20 backdrop-blur-md max-w-xs">
              <h4 className="text-primary font-bold uppercase text-sm mb-2">
                {activeBranch === 1 ? "Большой зал" : activeBranch === 2 ? "Малый зал" : "Наши филиалы"}
              </h4>
              <div className="space-y-2 text-xs text-white/70">
                {(activeBranch === null || activeBranch === 1) && <p>Анапское шоссе, 15</p>}
                {(activeBranch === null || activeBranch === 2) && <p>Видова, 194</p>}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
