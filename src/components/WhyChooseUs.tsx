import { motion } from 'motion/react';
import { Droplets, Leaf, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "Thuần Chay 100%",
    desc: "Chúng tôi cam kết sử dụng nguyên liệu từ thực vật, hoàn toàn không thử nghiệm trên động vật."
  },
  {
    icon: Droplets,
    title: "Nuôi Dưỡng Tuyệt Đối",
    desc: "Công thức độc quyền tích hợp các tinh chất dưỡng ẩm sâu, phục hồi màng bảo vệ da."
  },
  {
    icon: Sparkles,
    title: "Sắc Tố Chuẩn Mực",
    desc: "Được nghiên cứu riêng để tôn vinh undertone của làn da phụ nữ Á Châu."
  },
  {
    icon: ShieldCheck,
    title: "An Toàn Lành Tính",
    desc: "Không chứa Paraben, Sulfates và các hoá chất gây hại. Đạt chuẩn FDA."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-1/3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-5xl leading-tight mb-8"
            >
              Niềm Tin Xây Dựng Từ Chất Lượng
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 font-light leading-relaxed mb-8"
            >
              Tại ofélia, chúng tôi tin rằng mỹ phẩm không chỉ để che giấu, mà để nâng niu. Mọi chiết xuất đều được tuyển chọn khắt khe nhất.
            </motion.p>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="flex gap-4"
              >
                <div className="mt-1">
                  <feature.icon className="w-6 h-6 text-rose-blush" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
