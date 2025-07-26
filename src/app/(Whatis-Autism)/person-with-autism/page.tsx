import Budge from "@/components/Budge";
import React from "react";

export default function Page() {
  return (
    <div className="space-y-5">
      <Budge>Person with autism</Budge>
      <div className="mx-auto max-w-7xl px-3 space-y-3">
        <p>
          One of the most important things to remember is that every person with
          autism is unique. Autism, or Autism Spectrum Disorder (ASD), affects how a
          person thinks, communicates, interacts, and experiences the world around them.
        </p>

        <p className="font-bold text-xl text-muted-foreground">Common characteristics</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Difficulty in understanding social cues or rules</li>
          <li>Preferring to spend time alone or in familiar environments</li>
          <li>Facing challenges in expressing thoughts or feelings</li>
          <li>Finding comfort in routines and familiar patterns</li>
          <li>Having strong, focused interests or hobbies</li>
          <li>
            Being very sensitive or under-sensitive to sounds, lights, textures,
            tastes, or smells
          </li>
          <li>Using repetitive movements or speech (like flapping hands, rocking, or repeating words)</li>
        </ul>

        <p className="font-bold text-xl text-muted-foreground">Strengths of people with autism</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Strong attention to detail</li>
          <li>Ability to focus deeply on topics of interest</li>
          <li>Honest and direct communication</li>
          <li>Unique ways of thinking and problem-solving</li>
          <li>Creativity in arts, music, technology, or specific hobbies</li>
        </ul>

        <p className="font-bold text-xl text-muted-foreground">Important to remember</p>
        <p>
          Every person with autism has their own strengths, challenges, and ways of
          experiencing life. With understanding, acceptance, and the right support,
          they can lead happy, fulfilling, and successful lives.
        </p>
      </div>
    </div>
  );
}
