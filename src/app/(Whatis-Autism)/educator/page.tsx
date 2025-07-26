import Budge from "@/components/Budge";
import React from "react";

export default function Page() {
  return (
    <div className="space-y-5">
      <Budge>Educator</Budge>
      <div className="mx-auto max-w-7xl px-3 space-y-4">
        <p>
          As an educator, understanding autism can help you create an inclusive,
          supportive, and effective learning environment for students on the autism
          spectrum.
        </p>

        <h2 className="font-bold text-xl text-muted-foreground">Strategies for educators</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide clear instructions with visual aids whenever possible</li>
          <li>Use consistent routines to create a sense of safety</li>
          <li>Allow extra processing time for questions or tasks</li>
          <li>Break tasks into smaller, manageable steps</li>
          <li>Minimize sensory distractions in the classroom</li>
          <li>Encourage social interaction through structured activities</li>
          <li>Respect and support special interests to motivate learning</li>
          <li>Use positive reinforcement to encourage desired behaviors</li>
        </ul>

        <h2 className="font-bold text-xl text-muted-foreground">Building an inclusive classroom</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Promote acceptance and understanding among all students</li>
          <li>Model inclusive language and respectful interactions</li>
          <li>Educate peers about differences and strengths in a positive way</li>
          <li>Create a calm-down space for students who need breaks</li>
        </ul>

        <h2 className="font-bold text-xl text-muted-foreground">Important to remember</h2>
        <p>
          Every student with autism is unique. By adapting your teaching methods and
          showing understanding, you can make a big difference in their learning
          journey, confidence, and overall school experience.
        </p>
      </div>
    </div>
  );
}
