'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import messages from '@/messages.json';
import { Mail, Users, Share2, Heart, Lock, Zap } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Link from 'next/link';

export default function Home() {
  const featuredConfessions = [
    {
      title: "A Secret Dream",
      content: "I've always wanted to be a painter, but I'm an accountant. My family would never understand.",
      received: "2 days ago"
    },
    {
      title: "An Unspoken Crush",
      content: "I have a crush on my best friend, but I'm too scared to tell them and risk our friendship.",
      received: "1 week ago"
    },
    {
      title: "A Hidden Talent",
      content: "I can speak three languages fluently, but I've never told anyone because I'm shy about it.",
      received: "3 hours ago"
    }
  ];

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

      {/* Featured Confessions Section */}
      <section className="py-16 md:py-20 bg-gray-900 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Featured Confessions
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              A glimpse into the hearts and minds of our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredConfessions.map((confession, index) => (
              <Card key={index} className="bg-gray-800/70 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle>{confession.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{confession.content}</p>
                  <p className="text-xs text-gray-400 mt-4">{confession.received}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
      
      {/* Why Choose Unspoken Section */}
      <section className="py-16 md:py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Why Choose Unspoken?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              A safe, anonymous, and judgment-free space for your thoughts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-600 text-white mb-4">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Complete Anonymity</h3>
              <p className="mt-2 text-base text-gray-400">
                Your identity is always protected. Share without fear.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-600 text-white mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Supportive Community</h3>
              <p className="mt-2 text-base text-gray-400">
                Join a community that listens and supports.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-600 text-white mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Fast and Easy</h3>
              <p className="mt-2 text-base text-gray-400">
                Start sharing and receiving confessions in minutes.
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