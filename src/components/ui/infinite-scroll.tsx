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
    { id: "awsa", icon: AwsIcon },
    { id: "nodea", icon: NodeIcon },
    { id: "astroa", icon: AstroIcon },
    { id: "jsa", icon: JavaScriptIcon },
    { id: "npma", icon: NpmIcon },
    { id: "tsa", icon: TypescriptIcon },
    { id: "nexta", icon: NextJsIcon },
    { id: "pythona", icon: PythonIcon },
    { id: "reacta", icon: ReactIcon },
    
  ];

  return (
    <div className="bg-[#1e293b] text-[#f8fafc] flex flex-col items-center justify-center w-full">
      <div className="relative overflow-hidden py-6 w-full flex flex-col gap-y-4">
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
