
import React from 'react';
import { ChevronRight } from 'lucide-react';

const NewsSection: React.FC = () => {
  const posts = [
    {
      id: '1',
      category: '인지활동',
      title: '어르신들과 함께한 맛있는 요리 교실, 웃음꽃이 활짝!',
      desc: '직접 만두를 빚으며 옛 추억도 나누고 소근육도 발달시키는 즐거운 시간이었습니다.',
      date: '2023.11.26',
      image: 'https://picsum.photos/seed/cooking/400/300',
      catColor: 'bg-green-500'
    },
    {
      id: '2',
      category: '생신잔치',
      title: '김OO 어르신의 84번째 생신을 진심으로 축하드립니다',
      desc: '모두가 함께 생일 축하 노래를 부르며 따뜻한 케이크 커팅식을 가졌습니다.',
      date: '2023.11.24',
      image: 'https://picsum.photos/seed/birthday/400/300',
      catColor: 'bg-blue-500'
    },
    {
      id: '3',
      category: '야외나들이',
      title: '따스한 가을 햇살 맞으며, 근처 공원 산책 다녀왔어요',
      desc: '오랜만에 바깥 바람을 쐬며 단풍 구경도 하고 힐링하는 시간이었습니다.',
      date: '2023.11.20',
      image: 'https://picsum.photos/seed/park/400/300',
      catColor: 'bg-amber-500'
    },
    {
      id: '4',
      category: '재활운동',
      title: '건강한 내일을 위한 1:1 맞춤 재활 운동 프로그램',
      desc: '개별 신체 능력에 맞춘 스트레칭과 근력 운동으로 활력을 되찾습니다.',
      date: '2023.11.18',
      image: 'https://picsum.photos/seed/exercise/400/300',
      catColor: 'bg-purple-500'
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[#8AC43A] font-bold text-sm tracking-widest uppercase block mb-2">Our Programs</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">오늘의 프로그램 이야기</h2>
          </div>
          <a href="#" className="flex items-center gap-1 text-gray-400 hover:text-[#8AC43A] font-bold transition-colors">
            스토리 더 보기
            <ChevronRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="group flex flex-col h-full transition-all duration-300">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5 shadow-sm">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 ${post.catColor} text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-lg`}>
                  {post.category}
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-[#8AC43A] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {post.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <span className="text-gray-300 text-xs font-medium">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
