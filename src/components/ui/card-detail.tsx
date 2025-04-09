import Image from "next/image";

interface CardDetailProps {
    card: {
      id: number;
      title: string;
      image: string;
      description: string;
    };
  }
  
  export default function CardDetail({ card }: CardDetailProps) {
    return (
      <div className="bg-[#020D19] rounded shadow p-6 relative">
        <h2 className="text-2xl font-bold mb-4 text-white">{card.title}</h2>
        {/* <Image src={card.image} alt={card.title} fill /> */}
        <p className="text-white">{card.description}</p>
        <Image
        src={card.image}
        alt={card.title}
        width={360}
        height={360}
        className="object-contain rounded"
      />
      </div>
    );
  }
  