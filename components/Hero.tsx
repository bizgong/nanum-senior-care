
import React from 'react';
import { ArrowRight, Users, ClipboardCheck, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Full Background Image - Updated to a warmer, high-quality caregiver & senior image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=2000" 
          alt="Warm care environment" 
          className="w-full h-full object-cover"
        />
        {/* Subtle Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-bold mb-8 animate-fade-in border border-white/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8AC43A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8AC43A]"></span>
            </span>
            사랑과 정성을 다하는 케어
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.3] mb-8 drop-shadow-lg">
            어르신의 하루가 <br />
            <span className="text-[#8AC43A]">존중받고, </span>
            안전하게 <br />
            이어지는 공간
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-[1.8] max-w-xl drop-shadow-md font-medium">
            나눔노인주간보호센터는 전문 인력과 체계적인 프로그램으로 <br className="hidden md:block" />
            어르신의 건강과 정서, 그리고 가족의 안심을 함께 돌봅니다.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: <Users className="text-[#8AC43A]" />, title: '전문인력 상주', sub: 'Point 01' },
              { icon: <ClipboardCheck className="text-[#8AC43A]" />, title: '기록 기반 케어', sub: 'Point 02' },
              { icon: <Truck className="text-[#8AC43A]" />, title: '안전한 송영', sub: 'Point 03' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/20 flex items-center gap-4 transition-all hover:bg-white/20">
                <div className="p-2.5 bg-white/90 rounded-xl shadow-inner">{item.icon}</div>
                <div>
                  <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-0.5">{item.sub}</p>
                  <p className="text-sm font-bold text-white">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-[#8AC43A] hover:bg-[#9bd64a] text-white px-10 py-5 rounded-2xl text-lg font-black shadow-2xl shadow-green-900/20 transition-all flex items-center justify-center gap-3 group">
              무료 상담 신청하기
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-10 py-5 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2">
              이용 절차 확인하기
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating indicators at the bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white/40 animate-pulse hidden lg:flex">
        <div className="w-0.5 h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        <span className="text-xs font-bold tracking-widest uppercase">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
