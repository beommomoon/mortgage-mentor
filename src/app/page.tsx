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
      <div className="text-center pt-8 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 leading-snug">
          부동산 담보대출은 모기지멘토
        </h1>

        <div className="flex flex-wrap justify-center gap-2 mt-6 mb-4">
          {[
            ['상담신청란', 'consultation'],
            ['직장인담보대출', 'benefits'],
            ['아파트담보대출', 'services'],
            ['사업자대출', 'faq'],
            ['비주거용담보대출', 'estimate'],
            ['상담신청란', 'contact'],
          ].map(([label, path]) => (
            <button
              key={path}
              onClick={() => moveTo(`/${path}`)}
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base px-3 py-1 rounded shadow font-semibold"
            >
              {label}
            </button>
          ))}
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-red-600 font-bold mt-4">
          최대한도! 최저금리!
        </p>

        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-base px-6 py-2 rounded shadow font-semibold">
          비교분석 클릭
        </button>
      </div>
    </main>
  );
}
