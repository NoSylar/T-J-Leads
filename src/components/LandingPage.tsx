import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Target, Zap, ChevronRight, Menu, X, Phone, Clock, CheckCircle2, Edit3, Filter, Handshake } from 'lucide-react';
import { Hero3D, HowItWorks3D, Icon3D, PageBackground3D, Stats3D } from './ThreeComponents';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-400 rounded-xl flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-900 leading-none">T&J Leads</span>
            <span className="text-[10px] text-gray-400 font-medium">Partnership-ready pipeline</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Proof', 'How it works', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="flex items-center gap-2 px-6 py-2.5 border border-orange-200 rounded-full text-sm font-semibold text-gray-800 hover:bg-orange-50 transition-all">
            <Phone size={16} className="text-orange-500" />
            Speak to growth
          </button>
        </div>

        <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 px-6 overflow-hidden bg-diagonal-stripes">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="pill-badge mb-8">
            <div className="dot-yellow" />
            Premium, qualified pipeline
          </div>
          
          <h1 className="text-5xl md:text-6xl text-gray-900 leading-[1.1] mb-8 tracking-tight">
            Predictable pipeline <br /> from leads already <br /> leaning in
          </h1>
          
          <div className="space-y-6 text-gray-600 text-lg max-w-xl mb-10 font-medium leading-relaxed">
            <p>
              We source, qualify and warm prospects who are actively exploring partnerships—so your team invests time in decisive, high-value conversations.
            </p>
            <p className="text-base font-normal text-gray-500">
              We are building our future reputation on the results we provide for you today. This is not a service; it is a bespoke partnership designed to define the pinnacle of the market.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-racing-red text-white rounded-2xl font-bold text-sm hover:bg-red-700 transition-all shadow-lg shadow-red-200">
              Get vetted leads
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
              See how we qualify
            </button>
          </div>
        </motion.div>

        <div className="hidden md:block relative h-[600px]">
          <Hero3D />
        </div>
      </div>
    </section>
  );
};

const Proof = () => {
  const cards = [
    {
      icon: Target,
      title: 'Intent-first discovery',
      desc: 'Signals from partner marketplaces, RFP feeds and topic velocity—not scraped directories.',
    },
    {
      icon: Shield,
      title: 'Human-grade qualification',
      desc: 'Every contact reviewed for strategic fit and willingness to explore concrete next steps.',
    },
    {
      icon: Clock,
      title: 'Faster path to meetings',
      desc: 'Warm intros and suggested agendas. Most clients book first calls within two weeks.',
    },
  ];

  return (
    <section id="proof" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="pill-badge mb-6">
            Why teams choose us
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold">
            Proof that feels premium, not padded
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl font-medium">
            The difference is discernible: fewer, better conversations—grounded in intent and readiness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-gray-50/50 rounded-3xl border border-gray-100 relative group hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                  <card.icon size={20} className="text-gray-600" />
                </div>
                <div className="dot-red" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative inline-block">
                {card.title}
                <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-racing-red" />
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mt-4">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: Edit3,
      title: 'Define the partner profile',
      desc: 'We tune ICP by pains solved together, GTM motion, region priority and partner economics.',
    },
    {
      number: '2',
      icon: Filter,
      title: 'Signal-led sourcing',
      desc: 'We filter by intent signals and screen for willingness to explore concrete next steps.',
    },
    {
      number: '3',
      icon: Handshake,
      title: 'Warm intro with momentum',
      desc: 'You receive briefed contacts ready for a first call—plus suggested agendas and follow-ups.',
    },
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="pill-badge mb-6">
            How it works
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold">
            From signal to meeting—no wasted motion
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl font-medium">
            An efficient, human-in-the-loop system that keeps quality high and time-to-first-call low.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm">
                  {step.number}
                </div>
                <div className="dot-red" />
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <step.icon size={18} className="text-gray-500" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-12 md:p-20 bg-gray-50/50 rounded-[3rem] border border-gray-100 relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold leading-tight">
              Let's put qualified conversations on your calendar
            </h2>
            <p className="text-gray-500 text-lg mb-12 font-medium">
              Share a few details. We'll reply within one business day with a tailored sample and next steps.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="w-full space-y-2">
                <input 
                  type="email" 
                  placeholder="Work email" 
                  className="w-full bg-white border border-gray-200 rounded-xl p-4 text-gray-900 focus:ring-2 focus:ring-racing-red/20 focus:border-racing-red outline-none transition-all"
                />
              </div>
              <div className="w-full space-y-2">
                <input 
                  type="text" 
                  placeholder="Company" 
                  className="w-full bg-white border border-gray-200 rounded-xl p-4 text-gray-900 focus:ring-2 focus:ring-racing-red/20 focus:border-racing-red outline-none transition-all"
                />
              </div>
              <button className="w-full sm:w-auto whitespace-nowrap px-8 py-4 bg-racing-red text-white rounded-xl font-bold text-sm hover:bg-red-700 transition-all shadow-lg shadow-red-100">
                Get a vetted sample list
              </button>
            </form>
            <p className="text-[10px] text-gray-400 mt-6 font-medium">
              No spam. We'll only use your info to respond to your request.
            </p>
          </div>
          
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Stats3D />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-gray-100 text-center bg-white">
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="w-8 h-8 bg-racing-red rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">T</span>
        </div>
        <span className="font-bold text-gray-900 tracking-tight">T&J Leads</span>
      </div>
      <div className="flex justify-center gap-10 mb-8">
        {['Privacy', 'Terms', 'Methodology'].map(item => (
          <a key={item} href="#" className="text-xs font-semibold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">{item}</a>
        ))}
      </div>
      <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.2em]">
        © 2026 T&J Leads. Precision Engineering.
      </p>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-off-white selection:bg-racing-red selection:text-white">
      <PageBackground3D />
      <Navbar />
      <Hero />
      <Proof />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
}

