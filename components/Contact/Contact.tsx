"use client";

import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BiLinkExternal } from "react-icons/bi";
import { Linkedin, LinkedinIcon } from "lucide-react";
import React, { useState } from "react";
import { BsGithub, BsGoogle, BsLinkedin } from "react-icons/bs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Contact = () => {
  const [emailSubmited, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JsonData = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JsonData,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message Success");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-5 mt-12 md:mt-24">
        <div className="col-span-1">
          <h5 className="text-mycolor-100 font-semibold mb-4 text-2xl">
            İletişim
          </h5>
          <p className="text-base text-white">
            Bana ulaşmak için aşağıdaki formu doldurman yeterli. Her mesajı
            dikkatle okuyorum ve mümkün olan en kısa sürede cevaplıyorum.
          </p>

          <div className="flex flex-row gap-4 mt-5">
            <a
              href="https://github.com/islamVargun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="h-10 w-10 text-white hover:text-gray-400 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/islam-vargun/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="h-10 w-10 text-white hover:text-gray-400 transition" />
            </a>
            <a
              href="https://linktr.ee/islamvargun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal className="h-10 w-10 text-white hover:text-gray-400 transition" />
            </a>
          </div>
        </div>

        <div className="col-span-1">
          {emailSubmited ? (
            <Alert className="bg-green-600 text-white">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6 text-white">
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-mycolor-600 mt-2"
                />
              </div>

              <div className="mb-6 text-white">
                <Label>Konu</Label>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Konu"
                  required
                  className="bg-mycolor-600 mt-2"
                />
              </div>

              <div className="mb-6 text-white">
                <Label>Mesajın</Label>
                <Textarea
                  name="message"
                  className="bg-mycolor-600 mt-2"
                  placeholder="Mesajını buraya yazabilirsin"
                  required
                />
              </div>

              <Button type="submit">Mesajı Gönder</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
