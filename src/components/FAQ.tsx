import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Sản phẩm của ofélia có phù hợp với da nhạy cảm không?",
    answer: "Có. Tất cả sản phẩm của chúng tôi đều được kiểm nghiệm lâm sàng, không chứa Paraben và các chất gây kích ứng, an toàn tuyệt đối cho làn da nhạy cảm nhất."
  },
  {
    question: "Son ofélia có gây khô môi khi sử dụng hàng ngày?",
    answer: "Hoàn toàn không. Công thức của chúng tôi kết hợp Jojoba Oil và Hyaluronic Acid, giúp khoá ẩm và nuôi dưỡng đôi môi ngay cả khi bạn sử dụng dòng son lỳ (matte)."
  },
  {
    question: "Chính sách vận chuyển và đổi trả như thế nào?",
    answer: "Chúng tôi giao hàng hỏa tốc trong 24h đối với khu vực trung tâm và 2-3 ngày với các tỉnh thành khác. Hỗ trợ đổi trả miễn phí trong 7 ngày nếu có lỗi từ nhà sản xuất."
  },
  {
    question: "Màu son thực tế có giống với hình ảnh trên website không?",
    answer: "Màu sắc trên website được căn chỉnh sát với thực tế nhất có thể. Tuy nhiên, sắc độ lên môi có thể thay đổi nhẹ tùy thuộc vào nền môi tự nhiên (undertone) của bạn."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
           <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-primary mb-6"
          >
            Giải Đáp Thắc Mắc
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-primary/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-serif text-lg md:text-xl text-primary pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary/50 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-primary/70 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
