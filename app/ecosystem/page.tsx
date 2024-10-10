"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, Zap, Coins, Users } from 'lucide-react';

export default function Ecosystem() {
  const [activeTab, setActiveTab] = useState('games');

  const tabs = [
    { id: 'games', label: 'Games', icon: <Gamepad2 className="w-5 h-5" /> },
    { id: 'rewards', label: 'Rewards', icon: <Coins className="w-5 h-5" /> },
    { id: 'developers', label: 'Developers', icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="container mx-auto py-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">GFPortal</span>
          </Link>
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">GFPortal Ecosystem</h1>

        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'outline'}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center space-x-2"
            >
              {tab.icon}
              <span>{tab.label}</span>
            </Button>
          ))}
        </div>

        {activeTab === 'games' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GameCard
              title="Crypto Racers"
              description="High-octane racing game with NFT vehicles and crypto rewards."
              players="10,000+"
            />
            <GameCard
              title="Blockchain Battles"
              description="Strategic card game with tradable NFT heroes and items."
              players="25,000+"
            />
            <GameCard
              title="Sonic Miners"
              description="Resource management and mining simulation on the Sonic Chain."
              players="15,000+"
            />
          </div>
        )}

        {activeTab === 'rewards' && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Coins className="w-6 h-6 mr-2 text-primary" />
                  Sonic Gems Rewards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Earn Sonic Gems for various activities on the platform:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>WiFi usage</li>
                  <li>Game participation</li>
                  <li>Community engagement</li>
                  <li>Referrals</li>
                </ul>
                <p className="mt-4">Redeem Sonic Gems for future S token airdrops and exclusive in-game items!</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-primary" />
                  S Token Staking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Stake your S tokens to earn additional rewards and benefits:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Higher WiFi speeds</li>
                  <li>Exclusive game access</li>
                  <li>Increased Sonic Gems earning rate</li>
                  <li>Governance voting power</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'developers' && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Developer Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Join the GFPortal ecosystem and leverage Sonic Chain's powerful infrastructure:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Access to 10,000+ TPS and near-second finality</li>
                  <li>Integration with Sonic's Fee Monetization (FeeM) program</li>
                  <li>Earn up to 90% of the fees your games generate</li>
                  <li>Cross-chain compatibility through Sonic Gateway</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Developer Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Comprehensive SDK and API documentation</li>
                  <li>Sonic Chain smart contract templates</li>
                  <li>Game integration guides and best practices</li>
                  <li>Community forums and developer support</li>
                </ul>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Button size="lg">Join Developer Program</Button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-secondary py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 GFPortal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function GameCard({ title, description, players }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <p className="mt-4 text-sm font-semibold">Active Players: {players}</p>
        <Button className="mt-4" variant="outline">Play Now</Button>
      </CardContent>
    </Card>
  );
}