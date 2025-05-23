'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface PageTemplateProps {
  title: string;
  description: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, description }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <p className="text-lg mb-6">{description}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => router.push('/')}
      >
        메인 페이지로 돌아가기
      </button>
    </div>
  );
};

export default PageTemplate;
