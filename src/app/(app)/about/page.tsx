import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 text-white">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tighter">About Unspoken</h1>
        <p className="mt-4 text-xl text-gray-300">
          The clarity you need. The privacy you deserve.
        </p>
      </section>

      <Card className="bg-gray-800/70 border-gray-700 text-white mb-12">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            In a world where everyone is connected, it's ironic how often we feel unheard. At Unspoken, we believe in the power of sharing, of unburdening your heart and mind without fear of judgment. Our mission is to provide a safe and anonymous space where you can freely express your thoughts, feelings, and secrets.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800/70 border-gray-700 text-white mb-12">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Our Story</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Unspoken was born from a simple idea: what if everyone had a place to be completely honest? We wanted to create a platform that champions both vulnerability and privacy. From a small passion project, we've grown into a community of thousands who find solace and connection through shared anonymity.
          </p>
        </CardContent>
      </Card>

      <section className="text-center">
        <h2 className="text-4xl font-bold mb-8">Meet the Team</h2>
        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-center">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="https://github.com/shadcn.png" alt="Team Member" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-semibold">Rishabh</h3>
            <p className="text-gray-400">Founder & CEO</p>
          </div>
        </div>
      </section>
    </div>
  );
}