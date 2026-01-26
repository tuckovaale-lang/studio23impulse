import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const days = ["ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА", "ВОСКРЕСЕНЬЕ"];
const branches = ["Анапское шоссе", "Улица Видова"];

const classes = [
  { day: "ПОНЕДЕЛЬНИК", time: "09:00 - 10:00", title: "DANCE - MIX", instructor: "Екатерина Александровна", style: "", level: "Kids", branch: "Анапское шоссе" },
  { day: "ПОНЕДЕЛЬНИК", time: "10:00 - 11:00", title: "K-Pop Cover", instructor: "Екатерина Александровна", style: "", level: "Beginners", branch: "Анапское шоссе" },
  { day: "ПОНЕДЕЛЬНИК", time: "15:00 - 16:00", title: "K-Pop Cover", instructor: "Екатерина Александровна", style: "", level: "Beginners", branch: "Анапское шоссе" },
  { day: "ПОНЕДЕЛЬНИК", time: "16:00 - 17:30", title: "HIP-HOP", instructor: "Екатерина Александровна", style: "", level: "12+", branch: "Анапское шоссе" },
  { day: "ПОНЕДЕЛЬНИК", time: "19:00 - 20:00", title: "Dance - Mix", instructor: "Екатерина Александровна", style: "", level: "12+", branch: "Анапское шоссе" },
  { day: "ПОНЕДЕЛЬНИК", time: "20:00 - 21:30", title: "Choreography", instructor: "Екатерина Александровна", style: "Авторская хореография", level: "16+", branch: "Анапское шоссе" },
   { day: "ВТОРНИК", time: "15:30 - 17:00", title: "Contemporary", instructor: "Валерия Сергеевна", style: "", level: "11-14 лет", branch: "Анапское шоссе" },
   { day: "ВТОРНИК", time: "18:00 - 19:00", title: "Contemporary", instructor: "Валерия Сергеевна", style: "", level: "5-7 лет", branch: "Анапское шоссе" },
  { day: "ВТОРНИК", time: "19:00 - 20:00", title: "Contemporary", instructor: "Валерия Сергеевна", style: "", level: "8-10 лет", branch: "Анапское шоссе" },
   { day: "ВТОРНИК", time: "20:00 - 21:00", title: "Contemporary", instructor: "Валерия Сергеевна", style: "", level: "16+", branch: "Анапское шоссе" },
  { day: "СРЕДА", time: "10:00 - 11:30", title: "HIP-HOP", instructor: "Екатерина Александровна", style: "", level: "12+", branch: "Анапское шоссе" },
   { day: "СРЕДА", time: "17:00 - 18:00", title: "DANCE - MIX", instructor: "Екатерина Александровна", style: "", level: "Kids", branch: "Анапское шоссе" },
   { day: "СРЕДА", time: "18:00 - 19:00", title: "Jazz-Funk", instructor: "Эльвира Рагимовна", style: "", level: "14+", branch: "Анапское шоссе" },
   { day: "СРЕДА", time: "19:00 - 20:00", title: "K-Pop Cover", instructor: "Екатерина Александровна", style: "", level: "MID", branch: "Анапское шоссе" },
   { day: "СРЕДА", time: "20:00 - 21:00", title: "K-Pop Cover", instructor: "Екатерина Александровна", style: "", level: "Pro", branch: "Анапское шоссе" },
  { day: "ЧЕТВЕРГ", time: "09:00 - 10:30", title: "Contemporary", instructor: "Валерия Сергеевна", style: "", level: "11-14 лет", branch: "Анапское шоссе" },
  { day: "ЧЕТВЕРГ", time: "18:00 - 19:00", title: "Contemporary", instructor: "Валерия Сергеевна", style: "", level: "5-7 лет", branch: "Анапское шоссе" },
  { day: "ЧЕТВЕРГ", time: "19:00 - 20:00", title: "Contemporary", instructor: "Валерия Сергеевна", style: "", level: "8-10 лет", branch: "Анапское шоссе" },
  { day: "ЧЕТВЕРГ", time: "20:00 - 21:30", title: "Contemporary", instructor: "Валерия Сергеевна", style: "", level: "16+", branch: "Анапское шоссе" },
  { day: "ПЯТНИЦА", time: "17:30 - 19:00", title: "Choreography", instructor: "Екатерина Александровна", style: "Авторская хореография", level: "16+", branch: "Анапское шоссе" },
  { day: "ПЯТНИЦА", time: "19:00 - 20:00", title: "Jazz-Funk", instructor: "Эльвира Рагимовна", style: "", level: "14+", branch: "Анапское шоссе" },
  { day: "СУББОТА", time: "11:00 - 12:30", title: "Contemporary", instructor: "Валерия Сергеевна", style: "", level: "11-14 лет", branch: "Анапское шоссе" },
  { day: "СУББОТА", time: "13:30 - 14:30", title: "K-Pop Cover", instructor: "Екатерина Александровна", style: "", level: "Beginners", branch: "Анапское шоссе" },
  { day: "СУББОТА", time: "14:30 - 15:30", title: "DANCE - MIX", instructor: "Екатерина Александровна", style: "", level: "12+", branch: "Анапское шоссе" },
  { day: "СУББОТА", time: "15:30 - 17:00", title: "HIP-HOP", instructor: "Екатерина Александровна", style: "", level: "12+", branch: "Анапское шоссе" },
  { day: "СУББОТА", time: "18:00 - 19:00", title: "DANCE - MIX", instructor: "Екатерина Александровна", style: "", level: "Kids", branch: "Анапское шоссе" },
   { day: "СУББОТА", time: "19:00 - 20:00", title: "K-Pop Cover", instructor: "Екатерина Александровна", style: "", level: "MID", branch: "Анапское шоссе" },
   { day: "СУББОТА", time: "20:00 - 21:00", title: "K-Pop Cover", instructor: "Екатерина Александровна", style: "", level: "Pro", branch: "Анапское шоссе" },
  { day: "ВОСКРЕСЕНЬЕ", time: "13:00 - 15:30", title: "K-POP CHOREOGRAPHY", instructor: "Екатерина Александровна", style: "", level: "", branch: "Анапское шоссе" },
  { day: "ПОНЕДЕЛЬНИК", time: "18:00 - 19:00", title: "Contemporary", instructor: "Валерия Сергеевна", style: "", level: "6-9 лет", branch: "Улица Видова" },
  { day: "ПОНЕДЕЛЬНИК", time: "19:00 - 20:30", title: "Contemporary", instructor: "Валерия Сергеевна", style: "", level: "16+", branch: "Улица Видова" },
  { day: "ВТОРНИК", time: "16:00 - 17:00", title: "Jazz - Funk", instructor: "Эльвира Рагимовна", style: "", level: "10-13 лет", branch: "Улица Видова" },
  { day: "ВТОРНИК", time: "17:00 - 18:00", title: "Jazz - Funk", instructor: "Эльвира Рагимовна", style: "", level: "14-17 лет", branch: "Улица Видова" },
  { day: "ВТОРНИК", time: "18:00 - 19:30", title: "Jazz - Funk /Открытая группа", instructor: "Эльвира Рагимовна", style: "", level: "", branch: "Улица Видова" },
  { day: "СРЕДА", time: "18:00 - 19:00", title: "Contemporary", instructor: "Валерия Сергеевна", style: "", level: "6-9 лет", branch: "Улица Видова" },
  { day: "СРЕДА", time: "19:00 - 20:30", title: "Contemporary", instructor: "Валерия Сергеевна", style: "", level: "16+", branch: "Улица Видова" },
  { day: "ЧЕТВЕРГ", time: "10:00 - 11:00", title: "DANCE - MIX", instructor: "Екатерина Александровна", style: "", level: "6+ лет", branch: "Улица Видова" },
  { day: "ЧЕТВЕРГ", time: "18:00 - 19:00", title: "DANCE - MIX", instructor: "Екатерина Александровна", style: "", level: "6+ лет", branch: "Улица Видова" },
  { day: "ЧЕТВЕРГ", time: "19:00 - 20:00", title: "K-Pop Cover", instructor: "Екатерина Александровна", style: "", level: "Beginners", branch: "Улица Видова" },
  { day: "ПЯТНИЦА", time: "17:00 - 18:00", title: "Contemporary", instructor: "Валерия Сергеевна", style: "", level: "4-5 лет", branch: "Улица Видова" },
  { day: "ПЯТНИЦА", time: "19:00 - 20:00", title: "Lady Dance", instructor: "", style: "", level: "18+", branch: "Улица Видова" },
  { day: "ПЯТНИЦА", time: "20:00 - 21:00", title: "Girly Hip-Hop", instructor: "", style: "", level: "18+", branch: "Улица Видова" },
  { day: "СУББОТА", time: "15:00 - 16:00", title: "K-Pop Cover", instructor: "Мария Алексеевна", style: "", level: "16+", branch: "Улица Видова" },
  { day: "СУББОТА", time: "16:00 - 17:00", title: "Strip", instructor: "Мария Алексеевна", style: "", level: "16+", branch: "Улица Видова" },
  { day: "СУББОТА", time: "17:00 - 18:00", title: "Jazz - Funk", instructor: "Эльвира Рагимовна", style: "", level: "10-13 лет", branch: "Улица Видова" },
  { day: "СУББОТА", time: "18:00 - 19:00", title: "Jazz - Funk", instructor: "Эльвира Рагимовна", style: "", level: "14-17 лет", branch: "Улица Видова" },
  { day: "ВОСКРЕСЕНЬЕ", time: "09:00 - 10:00", title: "K-Pop Cover", instructor: "Екатерина Александровна", style: "", level: "Beginners", branch: "Улица Видова" },
  { day: "ВОСКРЕСЕНЬЕ", time: "10:00 - 11:00", title: "DANCE - MIX", instructor: "Екатерина Александровна", style: "", level: "6+ лет", branch: "Улица Видова" },
  { day: "ВОСКРЕСЕНЬЕ", time: "17:00 - 18:00", title: "K-Pop Cover", instructor: "Мария Алексеевна", style: "", level: "16+", branch: "Улица Видова" },
  { day: "ВОСКРЕСЕНЬЕ", time: "18:00 - 19:00", title: "Strip", instructor: "Мария Алексеевна", style: "", level: "16+", branch: "Улица Видова" },
  { day: "ВОСКРЕСЕНЬЕ", time: "19:00 - 20:00", title: "Lady Dance", instructor: "", style: "", level: "18+", branch: "Улица Видова" },
  { day: "ВОСКРЕСЕНЬЕ", time: "20:00 - 21:00", title: "Girly Hip-Hop", instructor: "", style: "", level: "18+", branch: "Улица Видова" },
];

interface ScheduleProps {
  onOpenModal?: (className?: string) => void;
}

export default function Schedule({ onOpenModal }: ScheduleProps) {
  const [activeDay, setActiveDay] = useState("ПОНЕДЕЛЬНИК");
  const [activeBranch, setActiveBranch] = useState("Анапское шоссе");

  const filteredClasses = classes.filter(cls => cls.branch === activeBranch && cls.day === activeDay);

  return (
    <section id="schedule" className="py-24 bg-background border-y border-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase mb-12 text-center">
          <span className="text-stroke-white">расписание</span>
        </h2>

        {/* Branch Filter */}
        <div className="flex justify-center gap-8 mb-8">
          {branches.map((branch) => (
            <button
              key={branch}
              onClick={() => setActiveBranch(branch)}
              className={cn(
                "text-lg font-bold uppercase tracking-widest transition-all duration-300 pb-2 border-b-2",
                activeBranch === branch 
                  ? "text-primary border-primary" 
                  : "text-white/40 border-transparent hover:text-white"
              )}
            >
              {branch}
            </button>
          ))}
        </div>

        {/* Day Filter */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={cn(
                "text-sm md:text-lg font-bold uppercase px-4 py-2 rounded-xl transition-all",
                activeDay === day
                  ? "bg-primary text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              {day}
            </button>
          ))}
        </div>
    
        {/* Schedule List */}
        <div className="max-w-4xl mx-auto space-y-4 min-h-[400px]">
          {filteredClasses.length > 0 ? (
            filteredClasses.map((cls, index) => (
              <motion.div
                key={`${activeBranch}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col md:flex-row items-center justify-between bg-white/5 p-6 border border-white/5 hover:border-primary/50 transition-colors group"
              >
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 w-full md:w-auto text-center md:text-left">
                  <span className="text-xl md:text-2xl font-display font-bold text-primary min-w-[140px]">{cls.time}</span>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white uppercase break-words max-w-[200px] md:max-w-none mx-auto md:mx-0">{cls.title}</h4>
                    <p className="text-white/50 text-sm">
                      {cls.instructor}
                      {cls.level && ` • ${cls.level}`}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 w-full md:w-auto">
                  <Button 
                    onClick={() => onOpenModal?.(`${cls.title} (${cls.time})`)}
                    variant="outline" 
                    className="w-full md:w-auto border-white/20 text-white hover:bg-primary hover:text-black uppercase font-bold tracking-wider"
                  >
                    Записаться
                  </Button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-white/40 py-12 font-light"
            >
              No classes scheduled for this day at this location.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
