
import React from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { label: '홈', href: '#' },
    { label: '센터소개', href: '#' },
    { label: '이용안내', href: '#' },
    { label: '프로그램', href: '#' },
    { label: '전문인력', href: '#' },
    { label: '시설안내', href: '#' },
    { label: '공지·소식', href: '#' },
    { label: '오시는 길', href: '#' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${scrolled ? 'shadow-md py-3' : 'shadow-sm py-4'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#8AC43A] rounded-xl flex items-center justify-center shadow-lg shadow-green-200/50">
               <span className="text-white font-bold text-xl">나</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-gray-800 tracking-tight leading-none">나눔</span>
              <span className="text-xs font-medium text-[#8AC43A]">노인주간보호센터</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-sm font-bold text-gray-600 hover:text-[#8AC43A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button className="bg-[#8AC43A] hover:bg-[#7ab332] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2">
              <PhoneCall size={16} />
              무료 상담 신청
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-6 px-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-lg font-medium text-gray-700 hover:text-[#8AC43A]">
                {link.label}
              </a>
            ))}
            <button className="w-full bg-[#8AC43A] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
              <PhoneCall size={20} />
              무료 상담 신청하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
