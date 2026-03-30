import KeySpeaker, { OtherSpeaker } from "@/components/cards/speaker";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import React from "react";

const speakers = [
  {
    image: "/speakers/speaker-1.jpg",
    name: "Paige Turner",
    description:
      "Paige Turner is a sustainability strategist and advisor with more than 15 years of experience helping Australian organizations embed practical ESG initiatives into operations and governance. She is known for turning complex sustainability priorities into clear business action and has worked across infrastructure, higher education, and large-scale services organisations.",
  },
  {
    image: "/speakers/speaker-2.jpg",
    name: "Chris P. Bacon",
    description:
      "Chris P. Bacon is the Founder and Managing Director of Circular Future Advisory, where he works with organizations on resource efficiency, circular economy planning, and sustainable procurement. He is a regular speaker on commercial approaches to sustainability and is recognised for helping leadership teams connect environmental goals with operational performance",
  },
  {
    image: "/speakers/speaker-3.jpg",
    name: "Greta Roots",
    description:
      "Greta Roots is a climate communications specialist and former corporate affairs executive who now advises brands and institutions on sustainability engagement, stakeholder trust, and public-facing strategy. Her work focuses on helping organisations communicate sustainability commitments with clarity, credibility, and relevance.",
  },
];

const otherSpeakers = [
  {
    name: "Jack Hazel",
    title: "Sustainabiltiy Expert",
    image: "/speakers/speaker-4.jpg",
  },
  {
    name: "Harper Jones",
    title: "ESG Expert",
    image: "/speakers/speaker-5.jpg",
  },
  {
    name: "Oliver Queen",
    title: "Sustainabiltiy Expert",
    image: "/speakers/speaker-6.jpg",
  },
  {
    name: "Isla Williams",
    title: "Sustainabiltiy Expert",
    image: "/speakers/speaker-7.jpg",
  },
  {
    name: "Matilda Avery",
    title: "Sustainabiltiy Expert",
    image: "/speakers/speaker-8.jpg",
  },
];

export default function Speakers() {
  return (
    <section className="bg-[#E1E7E0]/25 py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          subTitlte="Who will be speaking"
          title="Meet Our Speakers"
          description="We We've gathered Australia's leading sustainability strategists, circular economy pioneers, and communications specialists to share their blueprints for impact "
        />
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <h5 className="text-primary whitespace-nowrap">Key Speakers</h5>
            <div className="bg-default-200 h-px w-full" />
          </div>
          <div className="grid grid-cols-1 gap-20 xl:grid-cols-3">
            {speakers.map((speaker, index) => (
              <KeySpeaker
                key={index + speaker.name}
                image={speaker.image}
                name={speaker.name}
                description={speaker.description}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <h5 className="text-primary whitespace-nowrap">Other Speakers</h5>
            <div className="bg-default-200 h-px w-full" />
          </div>
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-5">
            {otherSpeakers.map((speaker, index) => (
              <OtherSpeaker
                key={index + speaker.name}
                image={speaker.image}
                name={speaker.name}
                title={speaker.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
