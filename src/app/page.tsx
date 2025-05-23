'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const moveTo = (path: string) => {
    router.push(path);
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/orange.jpg')" }}
    >
      {/* 상단 제목 및 메뉴 */}
      <div className="text-center pt-8">
        <h1 className="text-4xl font-bold text-orange-600">
          부동산 담보대출은 모기지멘토
        </h1>

        <div className="flex justify-center gap-3 flex-wrap mt-4 mb-3">
          {[
            ['상담신청란', 'consultation'],
            ['직장인담보대출', 'benefits'],
            ['아파트담보대출', 'services'],
            ['사업자담보대출', 'faq'],
            ['사업자대출', 'estimate'],
            ['비주거용담보대출', 'contact'],
          ].map(([label, path]) => (
            <button
              key={path}
              onClick={() => moveTo(`/${path}`)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full shadow-md"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="border-b-2 border-black w-full my-2"></div>
      </div>

      {/* 중앙 텍스트 블록 */}
      <div
        className="absolute"
        style={{
          top: '45%',
          left: '8%',
          transform: 'translateY(-50%)',
          textAlign: 'left',
        }}
      >
        <h2 className="text-[65px] font-extrabold text-orange-600">
          부동산 담보대출
        </h2>
        <p className="text-[45px] font-extrabold text-red-600 mt-4">
          최대한도! 최저금리!
        </p>
        <button
          onClick={() => moveTo('/consultation')}
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded shadow-lg"
          style={{ marginLeft: '3cm', fontSize: '1.25rem' }}
        >
          비교분석 클릭
        </button>
      </div>
    </main>
  );
}
