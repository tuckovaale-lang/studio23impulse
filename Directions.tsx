"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// Все направления
const directions = [
  {
    id: 1,
    title: "CONTEMPORARY",
    desc: "Современное направление танца, которое объединяет элементы классического балета, модерна и экспериментального движения.",
    video: "/videos/contemporary.mp4",
    category: ["kids", "adults"], // показывается и детям, и взрослым
  },
  {
    id: 2,
    title: "DANCE-MIX",
    desc: "Это смесь танцевальных направлений — от jazz‑funk и hip‑hop до waacking и vogue. Вспомните фильмы «Шаг вперёд»: они наглядно показывают, что входит в это направление.",
    video: "/videos/dancemix.mp4",
    category: ["kids", "adults"],
  },
  {
    id: 3,
    title: "K-POP",
    desc: "Танцевальное направление, в котором танцоры воспроизводят хореографию корейских исполнителей — от жестов и поз до мимики и взгляда.",
    video: "/videos/kpop.mp4",
    category: "kids",
  },
  {
    id: 4,
    title: "LADY-DANCE",
    desc: "Чувственное направление, суть которого заключается в проработке пластичности, женственности, а порой и провокационности.",
    video: "/videos/lady-dance.mp4",
    category: "adults",
  },
  {
    id: 5,
    title: "JAZZ-FUNK",
    desc: "Энергичное направление, сочетающее элементы разных стилей, развивающее пластику, ритм и сценическое самовыражение.",
    video: "/videos/jazz-funk.mp4",
    category: ["kids", "adults"],
  },
  {
    id: 6,
    title: "STRIP",
    desc: "Динамичный и современный стиль, сочетающий чёткие контуры движений и пластичность, создавая уникальную визуальную эстетику.",
    video: "/videos/strip.mp4",
    category: "adults",
  },
  {
    id: 7,
    title: "GIRLY HIP-HOP",
    desc: "Направление, где грубость хип‑хопа и знойность женских стилей сливаются. Сексуальность здесь обретает характер.",
    video: "/videos/girly-hip-hop.mp4",
    category: "adults",
  },
];

export default function Directions() {
  const [filter, setFilter] = useState("all");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Фильтрация с поддержкой массивов категорий
  const filtered = directions.filter((d) => {
    if (filter === "all") return true;
    if (typeof d.category === "string") return d.category === filter;
    return Array.isArray(d.category) && d.category.includes(filter);
  });

  return (
    <section id="directions" className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-4 relative">
        {/* Заголовок */}
        <h2 className="text-4xl md:text-6xl text-center font-display font-black uppercase mb-16">
          НАШИ <span className="text-lime-400">НАПРАВЛЕНИЯ</span>
        </h2>

        {/* Фильтр */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { id: "all", label: "Все" },
            { id: "kids", label: "Дети" },
            { id: "adults", label: "Взрослые" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-5 py-2 rounded-full border transition-all ${
                filter === btn.id
                  ? "border-lime-400 text-lime-400"
                  : "border-white/30 hover:border-white"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Сетка направлений */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-neutral-900 rounded-2xl overflow-hidden shadow-xl border border-neutral-800 hover:border-lime-400 transition-all cursor-pointer"
              onClick={() => setActiveVideo(item.video)}
            >
              {/* Видео превью */}
              <div className="relative w-full h-56 overflow-hidden group">
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-40 transition"></div>
              </div>

              {/* Текст */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Модальное окно с видео */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* Close button inside video area for better visibility */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 backdrop-blur-sm transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-auto max-h-[85vh] rounded-xl shadow-2xl bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}
