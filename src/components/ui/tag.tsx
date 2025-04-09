interface TagProps {
    text?: string;
    icon?: React.ReactNode;
  }
  
  export default function Tag({ text, icon }: TagProps) {
    return (
      <div
        className="flex items-center gap-x-[0.2rem] text-[0.9rem] text-[#e2e8f0] bg-[#334155] rounded-[0.4rem] py-[0.7rem] px-[1rem] mr-4
                   shadow-[0_0.1rem_0.2rem_rgba(0,0,0,0.2),0_0.1rem_0.5rem_rgba(0,0,0,0.3),0_0.2rem_1.5rem_rgba(0,0,0,0.4)]"
      >
        {/* Renderiza o ícone passado via prop */}
        {icon}
  
        <span className="text-[1.2rem] text-[#64748b]">{text}</span>
      </div>
    );
  }
  