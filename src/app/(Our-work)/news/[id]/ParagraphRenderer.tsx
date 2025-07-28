"use client";

import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface ParagraphRendererProps {
  htmlContent: string;
  dialogImage: string;
}

export default function ParagraphRenderer({
  htmlContent,
  dialogImage,
}: ParagraphRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleImageClick = () => setOpen(true);

    const attachClickToImage = () => {
      const img = container.querySelector("img");
      if (img && !img.classList.contains("click-bound")) {
        img.classList.add("cursor-pointer", "click-bound");
        img.addEventListener("click", handleImageClick);
      }
    };

    // Initial attach
    attachClickToImage();

    // 👁️ MutationObserver to re-attach if content changes
    const observer = new MutationObserver(() => {
      attachClickToImage();
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      const img = container.querySelector("img");
      if (img) {
        img.removeEventListener("click", handleImageClick);
      }
    };
  }, [htmlContent]);

  return (
    <>
      <div
        ref={containerRef}
        className="prose prose-neutral mx-auto max-w-7xl px-3"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        data-aos="fade-left"
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="hidden">Image Preview</DialogTitle>
            <DialogDescription className="h-[600px] overflow-auto">
              <Image src={dialogImage} alt="Preview" width={600} height={400} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
