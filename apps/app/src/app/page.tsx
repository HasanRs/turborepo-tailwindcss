'use client';
import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Page() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );
  const router = useRouter();

  const handleSelect = (value: string) => {
    setSelectedCategory(value);
  };

  React.useEffect(() => {
    console.log(selectedCategory);
    //
  }, [selectedCategory]);

  const isCardSelected = (category: string) => category === selectedCategory;

  return (
    <div
      className='flex min-h-screen items-center justify-center'
      style={{ marginTop: '-4rem' }}
    >
      <div className='max-w-3xl '>
        <Card className='space-y-6 border-none shadow-none'>
          <CardHeader>
            <CardTitle>Welcome aboard!</CardTitle>
            <CardDescription>
              What topic do you want to discuss today?
            </CardDescription>
          </CardHeader>
          <CardContent className='grid grid-cols-2 items-center justify-center gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
            {[
              {
                id: 'photography',
                src: '/img/cameraman.jpg',
                alt: 'cameraman',
              },
              { id: 'coding', src: '/img/coding.jpg', alt: 'coding' },
              { id: 'exercise', src: '/img/exercice.jpg', alt: 'exercise' },
              {
                id: 'learning-language',
                src: '/img/learning-language.jpg',
                alt: 'learning-language',
              },
              {
                id: 'meditating',
                src: '/img/meditating.jpg',
                alt: 'meditating',
              },
              {
                id: 'studying-exam',
                src: '/img/studying-exam.jpg',
                alt: 'studying-exam',
              },
              {
                id: 'studying-music',
                src: '/img/studying-music.jpg',
                alt: 'studying-music',
              },
              { id: 'tasking', src: '/img/tasking.jpg', alt: 'tasking' },
            ].map((card) => (
              <Card
                key={card.id}
                className={` cursor-pointer shadow-lg ${
                  isCardSelected(card.id) ? 'border border-blue-500' : ''
                }`}
                onClick={() => handleSelect(card.id)}
              >
                <CardContent className='p-0'>
                  <Image
                    src={card.src}
                    className='rounded-2xl'
                    alt={card.alt}
                    width='128'
                    height='128'
                    quality={100}
                  />
                </CardContent>
              </Card>
            ))}
          </CardContent>
          <CardFooter className='flex justify-end'>
            <Button disabled={!selectedCategory}>
              <Link
                href={{
                  pathname: `/chat/${selectedCategory}`,
                }}
              >
                Next
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
