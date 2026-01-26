import { motion } from "framer-motion";

const instructors = [
  {
    name: "Валерия Сергеевна",
    specialty: "CONTEMPORARY",
    image: "/images/instructor-2.jpg"
  },
  {
    name: "Екатерина Александровна",
    specialty: "DANCE - MIX/ K-POP",
    image: "/images/instructor-1.jpg"
  },
  {
    name: "Эльвира Рагимовна",
    specialty: "JAZZ-FUNK",
    image: "/images/instructor-4.jpg"
  },
  {
    name: "Мария Алексеевна",
    specialty: "STRIP/ K-POP",
    image: "/images/instructor-5.jpg"
  }
];

export default function Instructors() {
  return (
    <section id="instructors" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase mb-4">
            <span className="text-primary">ПЕДАГОГИ</span>
          </h2>
        </div>

        {/* Сетка карточек с равными отступами */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center px-4">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden cursor-pointer bg-white/5 w-full"
            >
              {/* Контейнер изображения */}
              <div className="relative w-full h-full aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
              </div>

              {/* Текст */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <p className="text-primary font-bold uppercase tracking-widest mb-1 text-[13px]">{instructor.specialty}</p>
                <h3 className="font-display font-bold text-white text-[19px]">{instructor.name}</h3>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
