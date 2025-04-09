"use client";

import { useState } from "react";
import Card from "./card";
import CardDetail from "./card-detail";

interface CardData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function Experiences() {
  const cards: CardData[] = [
    {
      id: 1,
      title: "Taqtile",
      image: "/taqtileBrasil.jpeg",
      description: "Detalhes da Experiência 1.",
    },
    {
      id: 2,
      title: "Experiência 2",
      image: "/facilsolucoes_logo.jpeg",
      description: "Detalhes da Experiência 2.",
    },
    {
      id: 3,
      title: "Experiência 3",
      image: "/labteve.jpeg",
      description: "Detalhes da Experiência 3.",
    },
    {
      id: 4,
      title: "Experiência 4",
      image: "/energisa.jpeg",
      description: "Detalhes da Experiência 4.",
    },
  ];

  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
  };

  // ... imports, interface, component start ...

  return (
    <div id="experiences" className="my-16">
      <h1 className="text-white text-3xl font-bold mb-10 text-center">Experiences</h1>
      <div className="bg-[#1e293b] flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
        <div className="w-full max-w-sm grid grid-cols-2 gap-12">
          {cards.map((card) => (
            <Card key={card.id} card={card} onClick={() => handleCardClick(card)} />
          ))}
        </div>

        <div className="w-full md:w-3/5 mt-8 md:mt-0"> 
          {selectedCard ? (
            <CardDetail card={selectedCard} />
          ) : (
            <p className="text-white text-center md:text-left">
              Clique em um card para ver os detalhes.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
