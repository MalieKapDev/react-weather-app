import React, { useState, useEffect } from "react";

export default function RandomQuote({ city }) {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const quotes = [
      "Remember to stay hydrated",
      "Be amazing",
      "Don't get too stressed",
      "Accomplish your goals",
      "Don't forget to smile",
      "Read a book today",
      "Keep moving forward",
      "Enjoy the little things",
      "Do the impossible",
      "Stay focused",
      "Achieve greatness",
      "Have fun",
      "Stay active",
      "Be appreciative",
      "Be nice",
      "Unleash your potential",
    ];

    // Select a random quote when the page is reloaded
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(`"${randomQuote}"`);
  }, [city]);

  return (
    <div className="text-center p-4 rounded-md">
      {quote}
    </div>
  );
}
