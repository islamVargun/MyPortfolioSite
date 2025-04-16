"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import Tabbutton from "./Tabbutton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Html,CSS,JavaScript</li>
        <li>NextJS</li>
        <li>TypeScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Maltepe Üniversitesi</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");

  const [isPending, startTransition] = useTransition();

  const handleChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="text-white" id="about">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center
         py-8 px-4"
      >
        <Image alt="" src="/2.png" width={500} height={500} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
            Modern JavaScript teknolojileriyle çalışmayı seviyorum ve React,
            Next.js, TypeScript gibi araçlarla projeler geliştiriyorum.
            Öğrenmeye açık bir yapım var ve sürekli olarak yeni teknolojileri
            takip ediyorum. Hedefim; kullanıcı odaklı, performanslı ve
            ölçeklenebilir web uygulamaları geliştirmek. Favori teknolojilerimi
            ve projelerimi aşağıda detaylı olarak bulabilirsiniz.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <Tabbutton
              selectTab={() => handleChange("skills")}
              active={tab === "skills"}
            >
              Teknolojilerim
            </Tabbutton>

            <Tabbutton
              selectTab={() => handleChange("education")}
              active={tab === "education"}
            >
              Eğitimim
            </Tabbutton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
