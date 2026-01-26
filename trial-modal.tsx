import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TrialModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedClass?: string;
}

export default function TrialModal({ open, setOpen, selectedClass }: TrialModalProps) {
  const direction = selectedClass || "не выбрано";
  const message = encodeURIComponent(`Здравствуйте! Хотела бы записаться на пробное занятие. Направление: ${direction}`);

  // Базовый стиль кнопки
  const baseButton =
    "w-full flex items-center justify-center gap-2 rounded-none px-4 py-3 border transition-colors " +
    "bg-white text-black hover:bg-lime-400 hover:text-black";

  const whatsappButton = `${baseButton} border-lime-400`;
  const telegramButton = `${baseButton} border-lime-400`;
  const vkButton = `${baseButton} border-lime-400`;
  const phoneButton = `${baseButton} border-lime-400`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[900px] bg-black border border-primary/20 text-white p-0 overflow-hidden grid md:grid-cols-2">
        {/* Левый блок с изображением */}
        <div className="relative hidden md:block h-full min-h-[500px]">
          <img
            src="/images/booking.jpg"
            alt="Запись на пробное занятие"
            className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black/90 to-transparent">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
              Команда профессионалов
            </p>
            <h3 className="text-white font-display font-bold text-2xl uppercase leading-none">
              Учим танцевать<br />с душой
            </h3>
          </div>
        </div>

        {/* Правый блок с кнопками */}
        <div className="relative flex flex-col h-full min-h-[500px] justify-center items-center p-8 space-y-4">
          <DialogHeader>
            <DialogTitle className="text-3xl font-display font-black uppercase text-primary text-center">
              Записаться на пробное занятие за 300 рублей
            </DialogTitle>
            <DialogDescription className="text-white/70 mt-3 text-base text-center">
              Выберите способ записи, и мы сразу получим ваше сообщение
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col w-full space-y-3 mt-6">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/79897625319?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={whatsappButton}>
                <img
                  src="/images/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5 invert"
                />
                WhatsApp
              </Button>
            </a>

            {/* Telegram */}
            <a
              href={`https://t.me/st_impulse_23?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={telegramButton}>
                <img
                  src="/images/telegram.svg"
                  alt="Telegram"
                  className="w-5 h-5 invert"
                />
                Telegram
              </Button>
            </a>

          {/* VK */}
          <a
            href={`https://vk.com/impulse23s?sel=USER_ID&msg=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={vkButton}>
              <img
                src="/images/vk.svg"
                alt="VK"
                className="w-5 h-5 invert"
              />
              VK
            </Button>
          </a>

            {/* Позвонить */}
            <a href="tel:+79897625319">
              <Button className={phoneButton}>
                <img
                  src="/images/phone.svg"
                  alt="Позвонить"
                  className="w-5 h-5 invert"
                />
                Позвонить
              </Button>
            </a>

            <Button onClick={() => setOpen(false)} className="w-full bg-white/10 hover:bg-lime-400 text-white mt-4">
              Закрыть
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
