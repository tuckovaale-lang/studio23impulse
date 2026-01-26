"use client";

import React from "react";

const achievementsData = [
  { id: 1, place: "3 место", title: "Фестиваль Гран-При танцпола, Марьина Роща", img: "/images/achieve1.jpg", width: 180, height: 190, top: "4%", left: "3%" },
  { id: 2, place: "3 место", title: "Битва Чемпионов, Геленджик", img: "/images/achieve2.jpg", width: 220, height: 130, top: "6%", left: "26%" },
  { id: 3, place: "2 место", title: "Международный Project 818, Москва", img: "/images/achieve3.jpg", width: 250, height: 160, top: "7%", left: "71%" },
  { id: 4, place: "1 место", title: "Фестиваль Клякса, Геленджик", img: "/images/achieve4.jpg", width: 220, height: 180, top: "38%", left: "4%" },
  { id: 5, place: "1 место", title: "Битва Чемпионов, Краснодар", img: "/images/achieve5.jpg", width: 220, height: 170, top: "32%", left: "30%" },
  { id: 6, place: "2 место", title: "Поколение Талантов, Новороссийск", img: "/images/achieve6.jpg", width: 180, height: 150, top: "38%", left: "55%" },
  { id: 7, place: "3 место", title: "Другой Формат, Новороссийск", img: "/images/achieve7.jpg", width: 220, height: 150, top: "71%", left: "9%" },
  { id: 8, place: "1 место", title: "New Year Fest, Краснодар", img: "/images/achieve8.jpg", width: 210, height: 190, top: "66%", left: "38%" },
  { id: 9, place: "4 место", title: "For you Fest, Ростов-на-Дону", img: "/images/achieve9.jpg", width: 260, height: 160, top: "67%", left: "65%" },
  { id: 10, place: "2 место", title: "КлЯкса Dance Fest, Новороссийск", img: "/images/achieve10.jpg", width: 200, height: 160, top: "37%", left: "77%" },
  { id: 11, place: "2 место", title: "One Fest, Новороссийск", img: "/images/achieve11.jpg", width: 150, height: 160, top: "3%", left: "52%" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Заголовок */}
        <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase mb-12 text-center">
          НАШИ <span className="text-primary">ДОСТИЖЕНИЯ</span>
        </h2>

        {/* Mobile View: Grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {achievementsData.map((achieve) => (
            <div key={achieve.id} className="relative group overflow-hidden rounded-lg aspect-square">
              <img
                src={achieve.img}
                alt={achieve.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-2 bg-black/80 opacity-100">
                <p className="text-primary font-bold uppercase tracking-widest text-[9px]">{achieve.place}</p>
                <h3 className="font-display font-bold text-white text-[10px] leading-tight line-clamp-2">{achieve.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Corkboard */}
        <div
          className="hidden md:block mx-auto relative w-full max-w-[960px] h-[600px] rounded-xl overflow-hidden shadow-lg"
          style={{
            backgroundImage: 'url(/images/cork-texture.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >

          {achievementsData.map((achieve) => (
            <div
              key={achieve.id}
              className="absolute group cursor-pointer overflow-hidden rounded"
              style={{
                top: achieve.top,
                left: achieve.left,
                width: achieve.width,
                height: achieve.height,
              }}
            >

              {/* Фото */}
              <img
                src={achieve.img}
                alt={achieve.title}
                className="
                  w-full h-full object-cover 
                  grayscale 
                  group-hover:grayscale-0 
                  transition-all 
                  duration-500
                  group-hover:scale-110
                "
              />

              {/* Рамка как у педагогов */}
              <div
                className="
                  absolute inset-0 border-2 border-primary 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 pointer-events-none
                "
              />

              {/* Текст как у педагогов */}
              <div className="absolute bottom-0 left-0 w-full p-3 z-20 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <p className="text-primary font-bold uppercase tracking-widest text-[11px]">
                  {achieve.place}
                </p>

                <h3 className="font-display font-bold text-white text-[14px] leading-tight">
                  {achieve.title}
                </h3>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
