"use client";

import { useState } from "react";
import {
  Calendar,
  Users,
  Presentation,
  Trophy,
  Clock,
  Globe,
  MapPin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const INDIA_EVENTS = [
  {
    title: "PPT Submission Deadline",
    icon: Presentation,
    date: "05 December 2025",
    description: "Teams must submit their initial presentation and approach",
  },
  {
    title: "Shortlisting Phase I",
    icon: Users,
    date: "08 December 2025",
    description: "First round of team selection based on submissions",
  },
  {
    title: "Online Pitching",
    icon: Presentation,
    date: "28 December 2025",
    description: "Selected teams present their solutions online",
  },
  {
    title: "Results Announcement",
    icon: Trophy,
    date: "07 January 2026",
    description: "Winners will be announced for both tracks",
  },
  {
    title: "AI Hands-On Workshop",
    icon: Users,
    date: "17 January 2026",
    description: "Practical AI workshop for all participants",
  },
  {
    title: "Innovation Challenge",
    icon: Trophy,
    date: "17-18 January 2026",
    description: "Final 24-hour hackathon event",
  },
];

const UQ_EVENTS = [
  {
    title: "PPT Submission Deadline",
    icon: Presentation,
    date: "05 December 2025",
    description: "Teams must submit their initial presentation and approach",
  },
  {
    title: "Shortlisting Phase I",
    icon: Users,
    date: "10 December 2025",
    description: "First round of team selection based on submissions",
  },
  {
    title: "Online Pitching",
    icon: Presentation,
    date: "04 January 2026",
    description: "Selected teams present their solutions online",
  },
  {
    title: "Results Announcement",
    icon: Trophy,
    date: "07 January 2026",
    description: "Winners will be announced for both tracks",
  },
  {
    title: "AI Hands-On Workshop",
    icon: Users,
    date: "17 January 2026",
    description: "Practical AI workshop for all participants",
  },
  {
    title: "Innovation Challenge",
    icon: Trophy,
    date: "17-18 January 2026",
    description: "Final 24-hour hackathon event",
  },
];

export function Timeline() {
  const [selectedTrack, setSelectedTrack] = useState<"india" | "uq">("india");

  const currentEvents = selectedTrack === "india" ? INDIA_EVENTS : UQ_EVENTS;

  return (
    <div className="space-y-8">
      {/* Track Selector */}
      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Event Timeline</h3>
          <p className="text-muted-foreground">
            Select your region to view the specific timeline for your
            participation
          </p>
        </div>

        <div className="flex gap-4">
          <Button
            variant={selectedTrack === "india" ? "default" : "outline"}
            onClick={() => setSelectedTrack("india")}
            className="flex items-center gap-2"
          >
            <MapPin className="h-4 w-4" />
            India (TIET)
          </Button>
          <Button
            variant={selectedTrack === "uq" ? "default" : "outline"}
            onClick={() => setSelectedTrack("uq")}
            className="flex items-center gap-2"
          >
            <Globe className="h-4 w-4" />
            Australia (UQ)
          </Button>
        </div>
      </div>

      {/* Timeline Display */}
      <div className="max-w-4xl mx-auto">
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {selectedTrack === "india" ? (
                <>
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Timeline for India (TIET Students)
                </>
              ) : (
                <>
                  <Globe className="h-5 w-5 text-blue-600" />
                  Timeline for Australia (UQ Students)
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="flex gap-8 min-w-max pb-4">
                {currentEvents.map((event, index) => {
                  const IconComponent = event.icon;
                  const isCompleted = false; // You can add logic to determine if event is completed
                  const isCurrent = index === 0; // You can add logic to determine current event

                  return (
                    <div
                      key={index}
                      className="relative flex flex-col items-center min-w-[200px]"
                    >
                      {/* Timeline Line */}
                      {index < currentEvents.length - 1 && (
                        <div className="absolute top-6 left-[calc(100%-16px)] w-8 h-0.5 bg-blue-200 z-0" />
                      )}

                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 ${
                          isCompleted
                            ? "bg-green-100 border-green-500 text-green-600"
                            : isCurrent
                            ? "bg-blue-100 border-blue-500 text-blue-600"
                            : "bg-gray-100 border-gray-300 text-gray-500"
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>

                      {/* Content */}
                      <div className="text-center mt-4 max-w-[180px]">
                        <Badge
                          variant={isCurrent ? "default" : "secondary"}
                          className="text-xs mb-2"
                        >
                          {event.date}
                        </Badge>
                        <h4 className="font-semibold text-sm mb-2 leading-tight">
                          {event.title}
                        </h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
