import { motion } from 'motion/react';

export default function Problem() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-sm uppercase tracking-[0.2em] font-medium text-primary/50 mb-8"
        >
          Sự Thật Về Lớp Trang Điểm
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl leading-tight text-primary mb-10"
        >
          Bạn đang đánh đổi độ ẩm tự nhiên để đổi lấy một sắc môi lâu trôi?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-primary/70 font-light leading-relaxed space-y-6"
        >
          <p>
            Những thỏi son lì thông thường thường mang đến một lời nguyền: màu sắc rực rỡ nhưng lại bòn rút độ ẩm, để lại cảm giác căng rát, khô nứt vào cuối ngày.
          </p>
          <p>
            Bạn không cần phải lựa chọn giữa một vẻ ngoài hoàn hảo và sự thoải mái. Một đôi môi đẹp thực sự phải là một đôi môi được nuôi dưỡng từ sâu bên trong.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
