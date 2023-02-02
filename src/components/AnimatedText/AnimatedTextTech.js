import { useEffect, useState } from "react";

const homeData = {
  tech: [
    "Health",
    "Frontier",
    "Hard"
  ],
};
const AnimatedTextTech = () => {
  const [text, setText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(text < homeData.tech.length - 1 ? text + 1 : 0);
      console.log(homeData.tech.length - 1, text);
    }, 10000);
    return () => clearInterval(interval);
  });
  return (
    <span className="hermtac-font">
      <span className="hermtac-orange">
        <span className="cd-headline push">          
          <span className="cd-words-wrapper">
            {homeData.tech.map((tech, i) => (
              <b key={i} className={text === i ? "is-visible" : "is-hidden"}>
                {tech}
              </b>
            ))}
          </span>
          <span className="blc"><span className="hermtac-purple"> Tech</span></span>
        </span>
      </span>
    </span>
  );
};
export default AnimatedTextTech;
