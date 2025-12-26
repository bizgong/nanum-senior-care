
import React from 'react';
import { Activity, Palette } from 'lucide-react';

const Highlights: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            세상을 바꾸는 작은 실천, <br />
            <span className="text-[#8AC43A]">나눔</span>이 함께합니다.
          </h2>
          <p className="text-lg text-gray-600">
            나눔노인주간보호센터는 평범한 이웃들의 따뜻한 마음이 모여 만들어진 공간입니다.<br />
            어르신을 위한 마음이 모여, 더불어 살아가는 세상의 이야기가 계속되고 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Highlight Card 1 */}
          <div className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
            <img 
              src="https://picsum.photos/seed/rehab/800/600" 
              alt="Physical Rehab" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500 text-white rounded-lg text-xs font-bold mb-4">
                <Activity size={14} />
                재활 프로그램
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">맞춤형 신체 기능 회복</h3>
              <p className="text-gray-200 text-sm md:text-base opacity-90">전문 물리치료사와 함께하는 1:1 맞춤 운동</p>
            </div>
          </div>

          {/* Highlight Card 2 */}
          <div className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
            <img 
              src="https://picsum.photos/seed/art/800/600" 
              alt="Art Activity" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8AC43A] text-white rounded-lg text-xs font-bold mb-4">
                <Palette size={14} />
                인지 프로그램
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">즐거운 인지 미술 활동</h3>
              <p className="text-gray-200 text-sm md:text-base opacity-90">치매 예방과 정서적 안정을 위한 다양한 활동</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
