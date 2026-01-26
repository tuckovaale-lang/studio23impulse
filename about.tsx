import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Diagonal divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest mb-4 block text-[21px]"
          >O НАС</motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-black text-white uppercase mb-6"
          >
            МЫ <span className="text-stroke text-transparent">ПУЛЬС</span> ЭТОГО ГОРОДА
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 leading-relaxed font-light"
          >
            Impulse — это не просто студия. Это движение. Мы верим, что танец — это самая мощная форма самовыражения. 
            Наша миссия — развивать творчество, укреплять уверенность и создавать сообщество людей, которые не боятся выделяться. 
            Будь вы новичок, ищущий свой ритм, или профессионал, оттачивающий мастерство — здесь вам рады.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { title: "Универсальность", desc: "Студия предлагает танцевальные направления не только для детей, но и для взрослых." },
            { title: "Сообщество", desc: "Поддерживающая семья, где каждого танцора поощряют быть самим собой." },
            { title: "Мастерство", desc: "Преподаватели используют индивидуальный подход к каждому ученику." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                0{index + 1}. {item.title}
              </h3>
              <p className="text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
