import { motion } from 'motion/react';

const products = [
  {
    name: "Glazed Liquid Lip",
    desc: "Son bóng dưỡng ẩm tạo hiệu ứng căng mọng tức thì.",
    price: "349.000đ",
    tag: "Best Seller",
    img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Velvet Matte Lipstick",
    desc: "Son thỏi siêu lì, mịn như nhung, không gây khô môi.",
    price: "389.000đ",
    tag: "New",
    img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Luminous Cushion",
    desc: "Phấn nước che phủ hoàn hảo, giữ lớp nền rạng rỡ 24h.",
    price: "529.000đ",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] font-medium text-primary/50 mb-4"
          >
            Bộ Sưu Tập
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl text-primary"
          >
            Nghệ Thuật Của Sự Quyến Rũ
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-6">
                {product.tag && (
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 text-xs uppercase tracking-wider text-primary">
                    {product.tag}
                  </div>
                )}
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl text-primary mb-2">{product.name}</h3>
              <p className="text-sm text-primary/60 font-light mb-4">{product.desc}</p>
              <p className="text-sm tracking-wide text-primary font-medium">{product.price}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="#" className="inline-block border-b border-primary text-sm uppercase tracking-widest text-primary pb-1 hover:text-primary/70 hover:border-primary/70 transition-colors">
                Xem Tất Cả Trải Nghiệm
            </a>
        </div>
      </div>
    </section>
  );
}
