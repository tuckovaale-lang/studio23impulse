import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-4xl font-display font-black tracking-tighter uppercase italic mb-6 block">
              <span className="text-white">Impulse</span>
              <span className="text-primary">.</span>
            </a>
            <p className="text-white/50 max-w-sm mb-6">
              Присоединяйся и выражай себя без ограничений
            </p>
            <div className="flex gap-4">
              <a href="https://vk.com/impulse23s" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                {/* VK Icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.684 13.2617C15.2186 12.7805 15.2248 12.7741 17.0329 10.8857C17.9497 9.92822 18.8387 8.86188 19.0609 7.6745H16.0671C15.7212 8.70319 14.6029 10.3248 13.8742 10.7213C13.5776 10.8798 13.4355 10.8291 13.3614 10.3914V7.6745H10.5513C9.69878 7.6745 9.55672 8.15677 9.55672 8.51405C9.55672 9.28164 10.6687 9.45928 10.786 11.5206C10.7921 12.1867 10.3721 12.3643 10.0509 12.3643C9.16139 12.3643 7.98775 10.8545 7.32677 7.6745H4.50977C4.13913 7.6745 4.00322 7.85214 3.99705 8.04878C3.98469 8.42308 4.48506 10.4389 6.86348 13.9913C8.45102 16.3451 10.6934 17.6679 12.7376 17.6679C13.9669 17.6679 14.1213 17.3761 14.1645 16.8622C14.1954 16.1137 14.041 15.7204 14.7266 15.6189C15.0479 15.5713 15.616 15.7521 16.7528 16.8971C18.0501 18.2199 18.2848 17.6679 18.2848 17.6679H21.2848C21.2848 17.6679 21.7358 17.5664 21.5257 16.8146C21.3528 16.193 20.7103 15.2509 19.8084 14.1816C19.3204 13.5948 18.5875 12.9572 17.9203 12.4243L15.684 13.2617Z" />
                </svg>
              </a>
              <a href="https://t.me/studio23impulse" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                {/* Telegram Icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path d="M20.665 3.717L2.355 10.778C1.105 11.279 1.11 11.976 2.124 12.288L6.824 13.756L17.693 6.903C18.208 6.591 18.679 6.761 18.294 7.104L9.487 15.032L9.486 15.034L9.164 19.734C9.637 19.734 9.846 19.518 10.111 19.254L12.364 17.066L17.048 20.526C17.912 21.002 18.533 20.757 18.748 19.726L21.823 5.254C22.138 3.994 21.344 3.424 20.665 3.717Z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase mb-6">НАВИГАЦИЯ</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#about" className="hover:text-primary transition-colors">О НАС</a></li>
              <li><a href="#branches" className="hover:text-primary transition-colors">ФИЛИАЛЫ</a></li>
              <li><a href="#instructors" className="hover:text-primary transition-colors">ПЕДАГОГИ</a></li>
              <li><a href="#schedule" className="hover:text-primary transition-colors">РАСПИСАНИЕ</a></li>
              <li><a href="#rates" className="hover:text-primary transition-colors">ТАРИФЫ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6">КОНТАКТЫ</h4>
            <ul className="space-y-4 text-white/60">
              <li>+7 (989) 762 - 53 - 19</li>
              <li>Анапское шоссе, 15</li>
              <li>Видова, 194</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/30 text-sm">
          <p>&copy; 2025 Impulse Dance Studio. Все права защищены.</p>
          <p>Designed with energy.</p>
        </div>
      </div>
    </footer>
  );
}
