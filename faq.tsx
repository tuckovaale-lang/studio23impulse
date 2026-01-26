import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-black border-b border-white/10">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase mb-16 text-center">
          FAQ
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-white/10 px-4 data-[state=open]:border-primary/50 transition-colors">
            <AccordionTrigger className="text-white hover:text-primary hover:no-underline uppercase font-bold tracking-wide text-left">
              Что взять с собой на занятие?
            </AccordionTrigger>
            <AccordionContent className="text-white/70">
              Удобную одежду, наколенники, обувь (по направлению), бутылочку воды.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-white/10 px-4 data-[state=open]:border-primary/50 transition-colors">
            <AccordionTrigger className="text-white hover:text-primary hover:no-underline uppercase font-bold tracking-wide text-left">
              Что будет с занятием, в случае пропуска?
            </AccordionTrigger>
            <AccordionContent className="text-white/70">
              О пропуске занятия необходимо заранее предупредить педагога или администратора. В случае болезни, необходимо предоставить справку от врача, чтобы заморозить абонемент.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-white/10 px-4 data-[state=open]:border-primary/50 transition-colors">
            <AccordionTrigger className="text-white hover:text-primary hover:no-underline uppercase font-bold tracking-wide text-left">
              Что, если я не хочу выступать на сцене?
            </AccordionTrigger>
            <AccordionContent className="text-white/70">
              Вы можете сами выбирать - выступать на сцене или заниматься для себя.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-white/10 px-4 data-[state=open]:border-primary/50 transition-colors">
            <AccordionTrigger className="text-white hover:text-primary hover:no-underline uppercase font-bold tracking-wide text-left">
              Как записаться на занятие?
            </AccordionTrigger>
            <AccordionContent className="text-white/70">
              Вы можете записаться через форму на сайте, отправив нам сообщение в социальных сетях - WhatsApp, VK, Telegramm. а так же позвонив по номеру телефона +7 (989) 762 - 53 - 19.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
