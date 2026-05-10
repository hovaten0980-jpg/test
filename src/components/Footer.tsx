export default function Footer() {
  return (
    <footer className="bg-white py-12 md:py-20 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-1">
            <a href="#" className="font-serif text-2xl tracking-wide font-medium block mb-6">ofélia</a>
            <p className="text-sm text-primary/60 font-light leading-relaxed">
              Tôn vinh vẻ đẹp nguyên bản, kiến tạo sắc vóc rạng ngời cho người phụ nữ tinh tế.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-primary mb-6">Liên Kết</h4>
            <ul className="space-y-4">
              <li><a href="#products" className="text-sm text-primary/60 hover:text-primary transition-colors">Bộ Sưu Tập</a></li>
              <li><a href="#story" className="text-sm text-primary/60 hover:text-primary transition-colors">Câu Chuyện</a></li>
              <li><a href="#reviews" className="text-sm text-primary/60 hover:text-primary transition-colors">Đánh Giá</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-primary mb-6">Trợ Giúp</h4>
            <ul className="space-y-4">
              <li><a href="#faq" className="text-sm text-primary/60 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-primary/60 hover:text-primary transition-colors">Chính Sách Giao Hàng</a></li>
              <li><a href="#" className="text-sm text-primary/60 hover:text-primary transition-colors">Đổi Trả & Hoàn Tiền</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-primary mb-6">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="text-sm text-primary/60">hello@ofelia.vn</li>
              <li className="text-sm text-primary/60">1900 6789</li>
              <li className="text-sm text-primary/60">123 Dong Khoi, Q1, HCMC</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/5 text-xs text-primary/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} OFÉLIA COSMETICS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors">Tiktok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
