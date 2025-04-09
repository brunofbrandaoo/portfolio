// Experiences.tsx
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

  return (
    <div className="bg-[#1e293b] p-6 flex flex-col md:flex-row gap-4 justify-center items-center">
      {/* Container de Cards: duas colunas, gap horizontal reduzido e centralizado */}
      <div className="w-full md:w-1/2 max-w-sm mx-auto grid grid-cols-2 gap-12 justify-items-center">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={() => handleCardClick(card)} />
        ))}
      </div>

      {/* Container de Detalhes */}
      <div className="w-full md:w-1/2 p-4">
        {selectedCard ? (
          <CardDetail card={selectedCard} />
        ) : (
          <p className="text-white text-center">
            Clique em um card para ver os detalhes.
          </p>
        )}
      </div>
    </div>
  );
}
