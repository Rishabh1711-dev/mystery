import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function CommunityGuidelinesPage() {
  const guidelines = [
    { title: 'Be Respectful', description: 'Treat others as you would like to be treated. No hate speech, bullying, or harassment will be tolerated.' },
    { title: 'Be Honest, but Kind', description: 'While this is a platform for honesty, always express yourself with kindness and empathy.' },
    { title: 'No Illegal Content', description: 'Do not post content that is illegal or promotes illegal activities.' },
    { title: 'Protect Your Privacy', description: 'Do not share personal identifying information about yourself or others.' },
    { title: 'Report Violations', description: 'If you see something that violates our guidelines, please report it to our moderation team.' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 text-white">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tighter">Community Guidelines</h1>
        <p className="mt-4 text-xl text-gray-300">
          Help us keep Unspoken a safe and welcoming space for everyone.
        </p>
      </section>

      <div className="space-y-8">
        {guidelines.map((guideline, index) => (
          <Card key={index} className="bg-gray-800/70 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                <CheckCircle className="text-purple-400" />
                {guideline.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{guideline.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}