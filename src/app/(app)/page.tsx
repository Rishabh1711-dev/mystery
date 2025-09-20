'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import messages from '@/messages.json';
import { Mail, Users, Share2 } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-24 py-12 text-white">
        <section className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Dive into the World of Anonymous Confessions
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Unspoken: The clarity you need. The privacy you deserve.
          </p>
        </section>
        <Carousel
          plugins={[Autoplay({ delay: 2500 })]}
          className="w-full max-w-lg md:max-w-xl mx-auto"
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index} className="p-1">
                <Card className="bg-gray-800/70 border-gray-700 text-white">
                  <CardHeader>
                    <CardTitle>{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                    <Mail className="flex-shrink-0 text-purple-400" />
                    <div>
                      <p>{message.content}</p>
                      <p className="text-xs text-gray-400 mt-2">
                        {message.received}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 bg-gray-900/50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Start receiving anonymous confessions in 3 simple steps.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-600 text-white mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Create an Account</h3>
              <p className="mt-2 text-base text-gray-400">
                Sign up for a free account. It's quick and easy.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-600 text-white mb-4">
                <Share2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Share Your Link</h3>
              <p className="mt-2 text-base text-gray-400">
                Share your unique link on social media or with your friends.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-600 text-white mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Receive Confessions</h3>
              <p className="mt-2 text-base text-gray-400">
                Receive anonymous confessions from others on your private dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center my-16 md:my-20 px-4">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Uncover the Unspoken?
        </h2>
        <div className="mt-8">
          <Link href="/sign-up">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              Create Your Account
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}