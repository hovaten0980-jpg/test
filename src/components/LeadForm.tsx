import { motion } from 'motion/react';
import { useState } from 'react';

export default function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Decorative text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none flex">
        <span className="text-[20rem] font-serif whitespace-nowrap leading-none">ofélia ofélia</span>
      </div>

      <div className="max-w-xl mx-auto px-6 relative z-10">
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
              Đánh Thức Vẻ Đẹp Của Bạn
            </h2>
            <p className="text-white/70 font-light mb-12">
              Đăng ký ngay để trở thành một trong những người đầu tiên sở hữu Bộ Sưu Tập mới và nhận đặc quyền giảm 15% cho đơn hàng đầu tiên.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-white/60 mb-2">Họ & Tên</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                  placeholder="Nhập họ tên của bạn"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-white/60 mb-2">Số Điện Thoại</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 mt-8 bg-white text-primary text-sm uppercase tracking-widest hover:bg-white/90 transition-colors font-medium"
              >
                Nhận Ưu Đãi Ngay
              </button>
            </form>
            <p className="text-[10px] text-white/40 uppercase tracking-widest mt-6">
              Thông tin của bạn được bảo mật tuyệt đối.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Cảm Ơn Bạn</h2>
            <p className="text-white/70 font-light mb-8 max-w-sm mx-auto">
              Đăng ký thành công! Chuyên viên tư vấn của ofélia sẽ liên hệ với bạn trong vòng 24h tới để gửi tặng ưu đãi đặc quyền.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="border-b border-white/50 pb-1 text-sm uppercase tracking-widest text-white hover:border-white transition-colors"
            >
              Quay lại trang chủ
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
