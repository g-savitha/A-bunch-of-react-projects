import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Convert({ text, lang }) {
  const [translate, setTranslate] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: lang,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslate(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [debouncedText, lang]);
  return (
    <div>
      <h1 className="ui header">{translate}</h1>
    </div>
  );
}
