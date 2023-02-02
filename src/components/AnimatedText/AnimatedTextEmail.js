import { useEffect, useState } from "react";

const homeData = {
  skills: [
    "hi",
    "hey",
    "hafaadai",
    "whatsup",
    "greetings",
    "howdy",
    "hei",
    "tjena",
    "namaste",
    "halo",
    "witaj",
    "czesc",
    "hallo",
    "hoi",
    "halloj",
    "hej",
    "goddag",
    "ahlan",
    "anyyoung",
    "oi",
    "ola",
    "yo",
    "ya",
    "ciao",
    "salve",
    "nihao",
    "ninhao",
    "privet",
    "quetal",
    "hola",
    "salut"
  ],
};
const AnimatedTextEmail = () => {
  const [text, setText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(text < homeData.skills.length - 1 ? text + 1 : 0);
      console.log(homeData.skills.length - 1, text);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <span className="cd-headline type">
      <span className="cd-words-wrapper">
        {homeData.skills.map((skill, i) => (
          <b key={i} className={text === i ? "is-visible" : "is-hidden"}>
            {skill}
          </b>
        ))}
      </span>
    </span>
  );
};
export default AnimatedTextEmail;
