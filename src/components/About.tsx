import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="story" className="py-24 md:py-32 bg-rose-blush/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2 aspect-[4/5] relative"
          >
            <img
              src="https://images.unsplash.com/photo-1596704017049-3543eb720c78?q=80&w=1200&auto=format&fit=crop"
              alt="ofélia Texture"
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-white p-2 shadow-2xl">
               <img
                  src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop"
                  alt="ofélia Model"
                  className="w-full h-full object-cover"
                />
            </div>
          </motion.div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-sm uppercase tracking-[0.2em] font-medium text-primary/50 mb-6"
            >
              Giải Pháp Từ ofélia
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl leading-tight text-primary mb-8"
            >
              Chạm Để Cảm Nhận <br /><span className="italic font-light">Sự Thanh Lịch</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-primary/70 font-light leading-relaxed mb-10"
            >
              <p>
                Ra đời từ niềm khao khát mang đến chuẩn mực sắc đẹp cao cấp, ofélia kết hợp nghệ thuật pha màu tinh tế và khoa học dưỡng da tiên tiến. 
              </p>
              <p>
                Mỗi sản phẩm là một tuyệt tác được chế tác tỉ mỉ, với chiết xuất từ dầu Jojoba và Hyaluronic Acid, giúp lên màu chuẩn xác ngay từ lần lướt đầu tiên đồng thời khóa ẩm suốt 12 giờ.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-8"
            >
              <div>
                <h4 className="font-serif text-2xl text-primary mb-2">12h</h4>
                <p className="text-xs uppercase tracking-wider text-primary/60">Nuôi dưỡng mượt mà</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-primary mb-2">100%</h4>
                <p className="text-xs uppercase tracking-wider text-primary/60">Thành phần tự nhiên</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
