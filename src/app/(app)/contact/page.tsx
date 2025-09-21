'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you shortly.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12 text-white">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tighter">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-300">
          We'd love to hear from you.
        </p>
      </section>

      <Card className="bg-gray-800/70 border-gray-700 text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Send us a message</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="bg-gray-700 border-gray-600" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-gray-700 border-gray-600" />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="bg-gray-700 border-gray-600" />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}