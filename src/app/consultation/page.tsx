'use client'; //

import React, { useState } from 'react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: '',
    jobType: '',
    income: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('상담 신청 데이터:', formData);
    alert('상담 신청이 완료되었습니다.');
  };

  return (
    <div className="min-h-screen bg-orange-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-orange-600 mb-8">상담신청란</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        {/* 이름 입력 */}
        <label className="block mb-2 font-semibold">이름</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
          placeholder="이름을 입력하세요"
          required
        />

        {/* 전화번호 입력 */}
        <label className="block mb-2 font-semibold">전화번호</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
          placeholder="010-1234-5678"
          required
        />

        {/* 대출의뢰물건 선택 */}
        <label className="block mb-2 font-semibold">대출의뢰물건</label>
        <select
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        >
          <option value="">선택하세요</option>
          <option value="아파트">아파트</option>
          <option value="빌라">빌라</option>
          <option value="오피스텔">오피스텔</option>
          <option value="단독주택">단독주택</option>
          <option value="상가">상가</option>
          <option value="공장">공장</option>
          <option value="대지">대지</option>
          <option value="이외물건">이외물건</option>
        </select>

        {/* 근무형태 선택 */}
        <label className="block mb-2 font-semibold">근무형태</label>
        <select
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        >
          <option value="">선택하세요</option>
          <option value="직장인">직장인</option>
          <option value="사업자">사업자</option>
          <option value="프리랜서">프리랜서</option>
          <option value="무직">무직</option>
        </select>

        {/* 소득 입력 */}
        <label className="block mb-2 font-semibold">소득</label>
        <input
          type="text"
          name="income"
          value={formData.income}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded"
          placeholder="예: 4,500만원"
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition"
        >
          상담 신청하기
        </button>
      </form>
    </div>
  );
}
