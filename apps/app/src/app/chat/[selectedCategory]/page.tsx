'use client';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import useSocket from '../../../hooks/useSocket';

export default function Page({
  params,
}: {
  params: { selectedCategory: string };
}) {
  const categories = [
    { id: 'photography' },
    { id: 'coding' },
    { id: 'exercise' },
    { id: 'learning-language' },
    { id: 'meditating' },
    { id: 'studying-exam' },
    { id: 'studying-music' },
    { id: 'tasking' },
  ];

  const selectedCategory = params.selectedCategory;

  if (!categories.some((category) => category.id === selectedCategory)) {
    return (
      <>
        {Array.from({ length: 100 }).map((_, index) => (
          <div key={index} className='text-6xl text-red-500'>
            💥 invalid category:{' '}
            <a className='text-red-600'>{selectedCategory}</a>{' '}
            <Link href='/'> 🔙 go back</Link>
          </div>
        ))}
      </>
    );
  }

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useSocket();

  return (
    <div className='flex flex-row items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-row items-center justify-center'>
          <video
            ref={videoRef}
            className='h-96 w-96'
            style={{ transform: 'scaleX(-1)' }}
          />
          <video
            ref={videoRef2}
            className='h-96 w-96'
            style={{ transform: 'scaleX(-1)' }}
          />
        </div>
        <div className='flex flex-row items-center justify-center'>
          <Link href='/'>🔙 go back</Link>
        </div>
      </div>
    </div>
  );
}
