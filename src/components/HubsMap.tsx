import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Building2, Layers, Map, Compass } from 'lucide-react';
import { HUBS_DATA } from '../data';
import { HubItem } from '../types';

export default function HubsMap() {
  const [selectedHub, setSelectedHub] = useState<HubItem>(HUBS_DATA[0]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-5 bg-primary text-white flex justify-between items-center border-b border-primary-light">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-accent" />
          <div>
            <h4 className="text-base font-bold tracking-tight">On-site Delivery Hubs</h4>
            <p className="text-[10px] text-gray-300">Interact with Gurgaon primary enterprise corridors</p>
          </div>
        </div>
        <span className="text-[10px] bg-accent/20 text-accent font-extrabold uppercase px-2 py-0.5 rounded-md tracking-wider">
          Gurgaon & NCR
        </span>
      </div>

      <div className="grid md:grid-cols-12 gap-6 p-6">
        {/* SVG Interactive Map Grid */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div className="relative bg-gradient-to-br from-primary-light to-primary rounded-xl overflow-hidden aspect-[4/3] border border-gray-200 shadow-inner flex items-center justify-center p-4">
            {/* Grid Line overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            {/* National Highway-8 Spine simulation line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <path
                d="M 10 100 Q 150 150 250 100 T 450 350"
                fill="none"
                stroke="#fed255"
                strokeWidth="4"
                strokeDasharray="4"
              />
              <text x="30" y="80" fill="#ffffff" fontSize="9" fontWeight="bold" opacity="0.6">NH-48 EXPRESSWAY</text>
            </svg>

            {/* Hub Hotspots Pins */}
            {HUBS_DATA.map((hub) => {
              const isSelected = hub.id === selectedHub.id;
              // Coordinates correspond to x% and y%
              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className="absolute group z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
                  style={{ left: `${hub.coordinates.x}%`, top: `${hub.coordinates.y}%` }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Ripple glow */}
                    <span className={`absolute inline-flex h-8 w-8 rounded-full opacity-60 transition-all duration-500 ${
                      isSelected ? 'animate-ping bg-accent' : 'group-hover:scale-125 bg-white/20'
                    }`}></span>
                    
                    {/* Solid core pinpoint */}
                    <div className={`relative p-1.5 rounded-full transition-all duration-300 border shadow ${
                      isSelected ? 'bg-accent text-primary border-primary scale-125' : 'bg-primary-light text-white border-white scale-100 group-hover:bg-accent group-hover:text-primary'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>

                    {/* Pop Label */}
                    <span className={`absolute top-full mt-1.5 whitespace-nowrap bg-primary-light text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shadow-lg border border-primary-light/50 transition-opacity ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      {hub.name}
                    </span>
                  </div>
                </button>
              );
            })}

            <div className="absolute bottom-3 left-3 bg-primary/80 backdrop-blur-sm p-2 rounded border border-white/10 text-[9px] text-gray-300 pointer-events-none">
              <span className="font-extrabold text-[#fed255] block">GVC REACH LAB</span>
              5 Hubs • Complete Gurgaon Presence
            </div>
          </div>

          <div className="grid grid-cols-5 gap-1.5 mt-4">
            {HUBS_DATA.map((hub) => {
              const matches = hub.id === selectedHub.id;
              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`py-2 px-1 text-center font-bold text-[10px] rounded-lg border transition-all truncate cursor-pointer ${
                    matches
                      ? 'bg-primary text-white border-primary shadow'
                      : 'bg-gray-50 text-gray-550 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {hub.name.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Hub Details Panel */}
        <div className="md:col-span-5 bg-gray-50 rounded-xl p-5 border border-gray-200 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedHub.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div>
                <span className="text-[9px] bg-accent text-primary font-extrabold uppercase px-2 py-0.5 rounded tracking-widest block w-fit mb-1">
                  Active Service Station
                </span>
                <h5 className="text-lg font-bold text-primary tracking-tight">GVC {selectedHub.name}</h5>
                <p className="text-xs text-gray-500 mt-1 leading-normal">{selectedHub.description}</p>
              </div>

              {/* Physical Address */}
              <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm space-y-1">
                <span className="text-[10px] text-gray-400 font-bold uppercase block tracking-wider">Mailing Address</span>
                <p className="text-xs text-gray-700 leading-normal">{selectedHub.address}</p>
              </div>

              {/* Sectors */}
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase block tracking-wider mb-1.5">Dominant Local Industries</span>
                <div className="flex flex-wrap gap-1">
                  {selectedHub.prominentSectors.map((sec) => (
                    <span
                      key={sec}
                      className="bg-primary/5 text-primary text-[10px] font-bold px-2 py-0.5 rounded-md border border-primary/5"
                    >
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="pt-4 border-t border-gray-200 mt-4 flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center gap-1 text-gray-700">
              <Phone className="w-4 h-4 text-accent-dark" />
              <span>{selectedHub.contactPhone}</span>
            </div>
            <a
              href={`tel:${selectedHub.contactPhone.replace(/\s/g, '')}`}
              className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-primary-light transition-all"
            >
              Call Desk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
