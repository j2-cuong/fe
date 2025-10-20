"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Phone, Mail, MapPin } from "lucide-react";

export function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-6 z-50" style={{ bottom: "25vh" }}>
      {isOpen && (
        <div className="mb-4 bg-background/95 backdrop-blur-md border border-primary/20 rounded-2xl p-6 shadow-2xl animate-slide-up min-w-[280px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className=" font-bold text-lg text-foreground">Liên Hệ</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 hover:bg-destructive/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span>Hotline: 1900-xxxx</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="h-4 w-4 text-primary" />
              <span>Email: support@game.vn</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Hà Nội, Việt Nam</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Hỗ trợ 24/7 cho game thủ
            </p>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-2xl animate-pulse-glow group relative overflow-hidden"
        aria-label="Mở form liên hệ"
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </Button>
    </div>
  );
}
