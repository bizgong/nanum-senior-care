
import React from 'react';
import { CheckCircle2, MessageSquare, MapPin, Smile, Car } from 'lucide-react';

const Features: React.FC = () => {
  const trusts = [
    { icon: <MessageSquare size={18} />, text: '상담 1:1 안내' },
    { icon: <MapPin size={18} />, text: '방문 상담 가능' },
    { icon: <Smile size={18} />, text: '초기 적응 상담 지원' },
    { icon: <Car size={18} />, text: '차량 송영 운영' },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trusts.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-500 font-medium hover:text-[#8AC43A] transition-colors cursor-default group">
              <span className="text-[#8AC43A] group-hover:scale-110 transition-transform">
                <CheckCircle2 size={20} />
              </span>
              <span className="flex items-center gap-1.5">
                {item.icon}
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
