"use client";

import { Button } from "@/components/ui/button";
import { CircuitBackground } from "./circuit-background";

export function Hero() {
  return (
    <section id="home" className="relative isolate bg-background py-0">
      <CircuitBackground />
      <div className="container mx-auto px-4 pt-2 md:pt-6">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Content (3 columns) */}
          <div className="lg:col-span-3">
            <div className="flex flex-col items-center lg:items-start mt-2 lg:mt-4">
              {/* Institutional Header */}
              <div className="mb-4 text-center lg:text-left w-full">
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#00BFA5] mb-2">
                      TIET-UQ Center of Excellence in Data Science & AI
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                      Thapar Institute of Engineering and Technology, Patiala
                    </h3>
                  </div>
                </div>
                <p className="text-xl font-semibold mb-2">
                  Presents
                </p>
              </div>

              {/* Main Title */}
              <h1 className="text-pretty leading-tight text-[#3F51B5] mb-2">
                <span className="block text-2xl md:text-6xl lg:text-5xl font-extrabold">Innovation Challenge 2026</span>
                <span className="block text-xl md:text-5xl lg:text-4xl font-bold mt-2">SabkaAI: AI for Inclusion</span>
              </h1>

              {/* Description */}
              <p className="mt-2 text-xl md:text-2xl text-muted-foreground font-bold max-w-2xl text-center lg:text-left">
                Official Pre-Summit Event of the AI Impact Summit 2026
              </p>
              
              <p className="mt-4 text-xl text-muted-foreground font-medium max-w-2xl text-center lg:text-justify">
                The Innovation Challenge is aligned with the IndiaAI Summit, reflecting the core theme of "Inclusion." This challenge envisions a futuristic path for Inclusive and Culturally Grounded AI, fostering solutions that are innovative, accessible, and impactful.
              </p>

              <p className="mt-4 text-xl text-muted-foreground font-medium max-w-2xl text-center lg:text-justify">
                The "Inclusion" Innovation Challenge embodies the spirit of the IndiaAI Sutras — <span className="italic">Empowering People, Accelerating Progress, and Securing the Planet's Future through Responsible and Transformative AI.</span> Join us in creating AI solutions that bridge gaps and empower communities across all regions.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-[#00BFA5] hover:bg-[#00A895] text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200"
                  onClick={() => window.open('https://innovation-challenge-2026.devpost.com/', '_blank')}
                >
                  Register Now
                </Button>
                <Button
                  variant="outline"
                  className="text-base px-6 py-6 rounded-lg border-muted-foreground/30"
                  onClick={() => {
                    const guidelinesSection = document.getElementById('guidelines');
                    if (guidelinesSection) {
                      guidelinesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  View Guidelines
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content (1 column) - Image and Event Highlights */}
          <div className="lg:col-span-1">
            {/* AI Mission Logo */}
            <div className="mb-8 -mt-2 lg:-mt-4 flex justify-center lg:justify-end">
              <img
                src="/Ai mission logo.PNG"
                alt="AI Mission Logo"
                className="h-30 md:h-38 lg:h-42 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Collaboration Logo */}
            {/* <div className="mb-8 flex justify-center">
              <div className="inline-block rounded-xl border-2 border-[#00BFA5]/20 bg-white/50 backdrop-blur-sm p-4 shadow-lg">
                <img
                  src="/collab_logo.png"
                  alt="Collaboration Logo"
                  className="w-auto h-auto max-w-full"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div> */}

            {/* Event Highlights */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg mt-0 lg:mt-2">
              <h3 className="text-xl font-semibold mb-6">Event Highlights</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-[#00BFA5]">🏆</div>
                  <div>
                    <div className="font-semibold">₹1,75,000</div>
                    <div className="text-sm text-muted-foreground">Total Prize Pool</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[#00BFA5]">👥</div>
                  <div>
                    <div className="font-semibold">500+</div>
                    <div className="text-sm text-muted-foreground">Expected Participants</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[#00BFA5]">🌍</div>
                  <div>
                    <div className="font-semibold">2</div>
                    <div className="text-sm text-muted-foreground">Participating Nations</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[#00BFA5]">🎫</div>
                  <div>
                    <div className="font-semibold">Free Event</div>
                    <div className="text-sm text-muted-foreground">No Registration Cost</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[#00BFA5]">⏰</div>
                  <div>
                    <div className="font-semibold">24 Hours</div>
                    <div className="text-sm text-muted-foreground">Event Duration</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[#00BFA5]">🔄</div>
                  <div>
                    <div className="font-semibold">Hybrid Event</div>
                    <div className="text-sm text-muted-foreground">Both Offline & Online Mode</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
