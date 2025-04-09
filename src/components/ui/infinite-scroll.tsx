import type React from "react";
import Tag from "./tag";
import {
  JavaScriptIcon,
  NextJsIcon,
  TypescriptIcon,
  PythonIcon,
  ReactIcon,
  NpmIcon,
  AstroIcon,
  AwsIcon,
  NodeIcon,
} from "./icons";

export default function InfiniteScroll() {
  // Cria um array com os itens (tags) a serem exibidos
  const iconTags = [
    { id: "js", icon: JavaScriptIcon },
    { id: "npm", icon: NpmIcon },
    { id: "ts", icon: TypescriptIcon },
    { id: "next", icon: NextJsIcon },
    { id: "python", icon: PythonIcon },
    { id: "react", icon: ReactIcon },
    { id: "aws", icon: AwsIcon },
    { id: "node", icon: NodeIcon },
    { id: "astro", icon: AstroIcon },
    { id: "react2", icon: ReactIcon },
  ];

  return (
    <div className="bg-[#1e293b] text-[#f8fafc] flex flex-col items-center justify-center">
      <div className="relative overflow-hidden py-6 w-xl max-w-2xl flex flex-col gap-y-4">
        <div
          style={
            { "--duration": "15951ms", "--direction": "normal" } as React.CSSProperties
          }
        >
          <div className="flex w-fit infinite-scroll whitespace-nowrap">
            {iconTags.map((item) => (
              <Tag key={`${item.id}-1`} icon={item.icon} />
            ))}
            {iconTags.map((item) => (
              <Tag key={`${item.id}-2`} icon={item.icon} />
            ))}
          </div>
        </div>

        <div
          style={
            { "--duration": "16981ms", "--direction": "reverse" } as React.CSSProperties
          }
        >
          <div className="flex w-fit infinite-scroll whitespace-nowrap">
            {iconTags.map((item) => (
              <Tag key={`${item.id}-1`} icon={item.icon} />
            ))}
            {iconTags.map((item) => (
              <Tag key={`${item.id}-2`} icon={item.icon} />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1e293b] via-transparent to-[#1e293b]" />
      </div>
    </div>
  );
}
