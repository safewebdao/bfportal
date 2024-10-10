import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wifi, Gamepad2, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="container mx-auto py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">GFPortal</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="#features">Features</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#how-it-works">How It Works</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/ecosystem">Ecosystem</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="#get-started">Get Started</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Web3 GameFi Gateway on Sonic Chain</h1>
          <p className="text-xl mb-8">Experience high-speed WiFi, crypto payments, and a comprehensive GameFi ecosystem.</p>
          <Button size="lg" asChild>
            <Link href="#get-started">Join the Revolution</Link>
          </Button>
        </section>

        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Zap className="w-12 h-12 text-primary" />}
              title="Powered by Sonic Chain"
              description="Benefit from 10,000+ TPS and near-second finality for ultra-fast transactions."
            />
            <FeatureCard
              icon={<Wifi className="w-12 h-12 text-primary" />}
              title="Seamless Crypto Payments"
              description="Pay for WiFi and in-game purchases using S tokens and other cryptocurrencies."
            />
            <FeatureCard
              icon={<Gamepad2 className="w-12 h-12 text-primary" />}
              title="Integrated GameFi Ecosystem"
              description="Access a wide range of blockchain games directly from the WiFi login interface."
            />
            <FeatureCard
              icon={<Shield className="w-12 h-12 text-primary" />}
              title="Enhanced Security"
              description="Leverage Sonic Chain's robust security features and multi-signature wallets."
            />
          </div>
        </section>

        <section id="how-it-works" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>1. WiFi Connection</CardTitle>
              </CardHeader>
              <CardContent>
                Connect to the GFPortal WiFi network and access the login page.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Crypto Payment</CardTitle>
              </CardHeader>
              <CardContent>
                Pay for internet access using S tokens or other supported cryptocurrencies.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. GameFi Access</CardTitle>
              </CardHeader>
              <CardContent>
                Dive into your favorite blockchain games directly from the GFPortal interface.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="get-started" className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join GFPortal and experience the future of Web3 gaming today!</p>
          <Button size="lg">Sign Up Now</Button>
        </section>
      </main>

      <footer className="bg-secondary py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 GFPortal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
