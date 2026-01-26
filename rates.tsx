import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "РАЗОВОЕ ПОСЕЩЕНИЕ",
    price: "600₽",
    features: ["1 ЗАНЯТИЕ"],
    highlight: false,
    type: "kids"
  },
  {
    name: "БАЗОВЫЙ",
    price: "1700₽",
    features: ["4 ЗАНЯТИЯ"],
    highlight: false,
    type: "kids"
  },
  {
    name: "СТАНДАРТ",
    price: "3000₽",
    features: ["8 ЗАНЯТИЙ"],
    highlight: true,
    type: "kids"
  },
  {
    name: "МАКСИМУМ",
    price: "4000₽",
    features: ["12 ЗАНЯТИЙ"],
    highlight: false,
    type: "kids"
  },
  {
    name: "РАЗОВОЕ ПОСЕЩЕНИЕ",
    price: "600₽",
    features: ["1 ЗАНЯТИЕ"],
    highlight: false,
    type: "adults"
  },
  {
    name: "БАЗОВЫЙ",
    price: "2000₽",
    features: ["4 ЗАНЯТИЯ"],
    highlight: false,
    type: "adults"
  },
  {
    name: "СТАНДАРТ",
    price: "3300₽",
    features: ["8 ЗАНЯТИЙ"],
    highlight: true,
    type: "adults"
  },
  {
    name: "МАКСИМУМ",
    price: "4300₽",
    features: ["12 ЗАНЯТИЙ"],
    highlight: false,
    type: "adults"
  }
];

const categories = ["Дети", "Взрослые"];

interface RatesProps {
  onOpenModal?: (planInfo?: string) => void;
}

export default function Rates({ onOpenModal }: RatesProps) {
  // стартовая вкладка "Дети"
  const [activeCategory, setActiveCategory] = useState("Дети");

  // фильтрация тарифов по выбранной категории
  const filteredPlans = plans.filter(plan =>
    activeCategory === "Дети" ? plan.type === "kids" : plan.type === "adults"
  );

  return (
    <section id="rates" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase mb-12 text-center">
          ПАКЕТЫ <span className="text-primary">ЗАНЯТИЙ</span>
        </h2>

        {/* ФИЛЬТР КАТЕГОРИЙ */}
        <div className="flex justify-center mb-14">
          <div className="flex bg-white/5 p-1 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-black"
                    : "text-white hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* СПИСОК ТАРИФОВ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filteredPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 border ${
                plan.highlight
                  ? "border-primary bg-white/5 scale-105 z-10"
                  : "border-white/10 bg-black hover:border-white/30"
              } transition-all duration-300 flex flex-col`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-bold uppercase px-3 py-1 tracking-widest">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white uppercase mb-2">
                {plan.name}
              </h3>
              <div className="text-4xl font-display font-black text-primary mb-6">
                {plan.price}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-white/70 text-[15px]">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => onOpenModal?.(`${plan.name} (${plan.price})`)}
                className={`w-full uppercase font-bold tracking-wider rounded-none ${
                  plan.highlight
                    ? "bg-primary text-black hover:bg-white"
                    : "bg-white/10 text-white hover:bg-white hover:text-black"
                }`}
              >
                ВЫБРАТЬ
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
