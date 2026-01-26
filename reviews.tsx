import { Star } from "lucide-react";

const reviews = [
  {
    name: "Елена М.",
    role: "Родитель",
    text: "Самая лучшая студия! Преподавательский состав имеет индивидуальный подход к каждому ребенку, мои дети выросли в прямом смысле этого слова вместе со студией, занимаются с 2019 года, желаю студии только продвижения и расширения!!!❤️❤️❤️❤️❤️",
    rating: 5
  },
  {
    name: "Ирина П.",
    role: "Родитель",
    text: "Лучшие преподователи, какие только могут быть! Смело доверяйте педагогам студии своих детей, не зависимо от выбранного направления! Добродушные профессионалы, в группах между детьми разных возврастов теплые отношения😊👍Реккомендую!!",
    rating: 5
  },
  {
    name: "Романна Зелинская",
    role: "Ученик",
    text: "Замечательная студия, занимаюсь сразу по двум направлениям уже достаточно давно. Очень теплая атмосфера, прекрасный коллектив, и заниматься, как оказалось, можно начать даже с абсолютного \"нуля\". Удобное расположение, и расписание занятий.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-background border-b border-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase mb-16 text-center">
          <span className="text-stroke-white">ОТЗЫВЫ</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white/5 p-8 border border-white/5 relative">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-white/80 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="text-white font-bold uppercase">{review.name}</p>
                <p className="text-white/40 text-xs uppercase tracking-wider">{review.role}</p>
              </div>
              <div className="absolute top-4 right-4 text-6xl font-serif text-white/5 z-0">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
