import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Kết cấu son đỉnh cao nhất tôi từng thử. Nó trượt trên môi nhẹ như không, nhưng độ lưu màu lại đáng kinh ngạc.",
    author: "Thu Hà",
    role: "Beauty Editor",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "ofélia đã thay đổi hoàn toàn định kiến của tôi về son lì. Môi tôi được dưỡng ẩm suốt cả ngày mà màu vẫn chuẩn xác.",
    author: "Linh Lan Makeup",
    role: "Professional MUA",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Thiết kế bao bì toát lên sự sang trọng, tinh tế đến từng chi tiết. Một sản phẩm mang đẳng cấp quốc tế.",
    author: "Minh Châu",
    role: "Lifestyle Blogger",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  }
];

export default function SocialProof() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-rose-blush/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-primary mb-6"
          >
            Được Tin Dùng Bởi Chuyên Gia
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-primary/60 font-light max-w-2xl mx-auto"
          >
              Hàng ngàn phụ nữ và các chuyên gia trang điểm hàng đầu đã chọn ofélia như một bảo chứng cho vẻ đẹp rạng rỡ và an toàn.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-8 md:p-10 flex flex-col justify-between shadow-sm border border-black/5"
            >
              <div className="mb-8">
                <div className="flex text-stone-300 font-serif text-6xl leading-none mb-4">"</div>
                <p className="text-primary/80 font-light leading-relaxed italic">
                  {testi.quote}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={testi.img}
                  alt={testi.author}
                  className="w-12 h-12 rounded-full object-cover grayscale opacity-80"
                />
                <div>
                  <h4 className="font-medium text-sm text-primary uppercase tracking-wider">{testi.author}</h4>
                  <p className="text-xs text-primary/50 mt-1">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
