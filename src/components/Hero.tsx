import React from 'react';
import { TrendingUp, Target, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.15),rgba(0,0,0,0))]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Transformieren Sie Ihr Business mit</span>
            <span className="block text-gradient">Xpert Scale Marketing</span>
          </h1>
          
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Steigern Sie Ihre Markenleistung mit datengesteuerten Marketingstrategien, maßgeschneidert für Ihren Erfolg.
          </p>

          <div className="mt-10 flex justify-center gap-8">
            <div className="animate-float delay-0">
              <div className="p-4 bg-black/50 backdrop-blur-lg rounded-xl border border-green-500/20 shadow-lg shadow-green-500/10">
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto" />
                <p className="mt-2 text-sm text-gray-300">Performance Marketing</p>
              </div>
            </div>
            
            <div className="animate-float delay-300">
              <div className="p-4 bg-black/50 backdrop-blur-lg rounded-xl border border-green-500/20 shadow-lg shadow-green-500/10">
                <Target className="h-8 w-8 text-green-500 mx-auto" />
                <p className="mt-2 text-sm text-gray-300">Gezielte Kampagnen</p>
              </div>
            </div>
            
            <div className="animate-float delay-600">
              <div className="p-4 bg-black/50 backdrop-blur-lg rounded-xl border border-green-500/20 shadow-lg shadow-green-500/10">
                <Zap className="h-8 w-8 text-green-500 mx-auto" />
                <p className="mt-2 text-sm text-gray-300">Schnelles Wachstum</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-500 hover:bg-green-400 transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transform hover:scale-105 active:scale-95"
            >
              Jetzt starten
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}