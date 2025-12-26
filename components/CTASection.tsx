
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-[#8AC43A] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
          궁금하신 점이 있으신가요?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
          친절하고 상세하게 안내해 드리겠습니다. 언제든 편하게 연락주세요.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="tel:02-1234-5678" 
            className="flex items-center gap-3 bg-white hover:bg-gray-50 text-[#8AC43A] px-10 py-5 rounded-2xl text-xl font-black shadow-xl transition-all hover:-translate-y-1"
          >
            <Phone size={24} strokeWidth={3} />
            02-1234-5678
          </a>
          <a 
            href="#" 
            className="flex items-center gap-3 bg-[#113322]/20 hover:bg-[#113322]/30 text-white border border-white/20 px-10 py-5 rounded-2xl text-xl font-black backdrop-blur-sm shadow-xl transition-all hover:-translate-y-1"
          >
            <MessageCircle size={24} strokeWidth={3} />
            카카오톡 상담하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
