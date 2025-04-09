import Image from "next/image";

interface CardProps {
  card: {
    id: number;
    title: string;
    image: string;
    description: string;
  };
  onClick: () => void;
}

export default function Card({ card, onClick }: CardProps) {
  return (
    <button
      className="relative bg-white rounded shadow cursor-pointer hover:shadow-lg transition w-40 h-40 hover:opacity-70"
      onClick={onClick}
      type="button"
    >
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-contain rounded"
      />
    </button>
  );
}
