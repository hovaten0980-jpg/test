import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-rose-blush/20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1615397323625-f8bb15ba5aee?q=80&w=2600&auto=format&fit=crop"
          alt="Ofélia Cosmetics Campaign"
          className="w-full h-full object-cover object-center opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent md:bg-gradient-to-l md:from-background md:via-background/70 md:to-transparent/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center pt-24 pb-12">
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-primary/70 mb-6"
          >
            Nét Đẹp Tinh Tế Của Thời Đại Mới
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-medium text-primary mb-8"
          >
            Định Nghĩa<br />
            Lại Sự <span className="italic font-light">Hoàn Mỹ</span>.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-primary/80 max-w-md mb-10 leading-relaxed font-light"
          >
            Khám phá quy chuẩn làm đẹp quốc tế. Dành riêng cho người phụ nữ yêu kiều, tự tin và trân trọng giá trị bản thân.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 bg-primary text-white text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors text-center"
            >
              Nhận Ưu Đãi Giới Hạn
            </a>
            <a
              href="#products"
              className="w-full sm:w-auto px-10 py-4 bg-transparent text-primary text-sm uppercase tracking-widest border border-primary/20 hover:border-primary/50 transition-colors text-center"
            >
              Xem Bộ Sưu Tập
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
