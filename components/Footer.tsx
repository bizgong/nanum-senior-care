
import React from 'react';
import { MapPin, Phone, Printer, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#8AC43A] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">나</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-gray-800 tracking-tight leading-none">나눔</span>
                <span className="text-xs font-medium text-[#8AC43A]">노인주간보호센터</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              어르신의 행복한 노후와 가족의 평안을 위해 최선을 다하는 나눔노인주간보호센터입니다. 사랑과 정성으로 모시겠습니다.
            </p>
          </div>

          <div>
            <h4 className="font-black text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#8AC43A] rounded-full"></span>
              센터 정보
            </h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#8AC43A] flex-shrink-0 mt-0.5" />
                <span>서울특별시 강남구 테헤란로 123 나눔빌딩 2층</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#8AC43A] flex-shrink-0" />
                <span>02-1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Printer size={18} className="text-[#8AC43A] flex-shrink-0" />
                <span>02-1234-5679</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#8AC43A] flex-shrink-0" />
                <span>contact@nanumcare.co.kr</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#8AC43A] rounded-full"></span>
              운영 시간
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center text-gray-600">
                <span className="font-bold">평일 (월~금)</span>
                <span>08:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span className="font-bold">토요일</span>
                <span>09:00 - 15:00</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span className="font-bold text-red-500">일요일/공휴일</span>
                <span className="text-red-500 font-bold">휴무</span>
              </div>
              <p className="text-[11px] text-gray-400 mt-2">* 상담은 운영 시간 내 상시 가능합니다.</p>
            </div>
          </div>

          <div>
            <h4 className="font-black text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#8AC43A] rounded-full"></span>
              바로가기
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#8AC43A] transition-colors">이용안내 및 절차</a></li>
              <li><a href="#" className="hover:text-[#8AC43A] transition-colors">자주 묻는 질문 (FAQ)</a></li>
              <li><a href="#" className="hover:text-[#8AC43A] transition-colors">직원 채용 공고</a></li>
              <li><a href="#" className="hover:text-[#8AC43A] transition-colors">자원봉사 신청</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2023 Nanum Senior Day Care Center. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px] text-gray-400 font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-[#8AC43A]">개인정보처리방침</a>
            <a href="#" className="hover:text-[#8AC43A]">이용약관</a>
            <a href="#" className="hover:text-[#8AC43A]">이메일무단수집거부</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
