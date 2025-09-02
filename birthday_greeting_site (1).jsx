import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HanaBirthdaySite() {
  const [choice, setChoice] = useState(null);
  const [celebrationType, setCelebrationType] = useState(null);
  const [palette, setPalette] = useState(null);
  const [chibi, setChibi] = useState(null);

  // Define palettes
  const palettes = [
    {
      bg: "from-purple-500 via-pink-400 to-peach-300",
      text: "text-white",
      accent: "bg-peach-400 hover:bg-peach-500 text-white",
    },
    {
      bg: "from-cyan-400 via-teal-400 to-blue-500",
      text: "text-white",
      accent: "bg-teal-500 hover:bg-teal-600 text-white",
    },
    {
      bg: "from-yellow-300 via-orange-400 to-red-400",
      text: "text-white",
      accent: "bg-orange-500 hover:bg-orange-600 text-white",
    },
    {
      bg: "from-pink-400 via-fuchsia-400 to-purple-500",
      text: "text-white",
      accent: "bg-pink-500 hover:bg-pink-600 text-white",
    },
    {
      bg: "from-green-300 via-emerald-400 to-teal-400",
      text: "text-white",
      accent: "bg-emerald-500 hover:bg-emerald-600 text-white",
    },
  ];

  // Chibi pool (replace with actual image paths if available)
  const chibis = ["🌸", "🎀", "💖", "😸", "✨", "🧸"];

  // Pick random palette + chibi on load
  useEffect(() => {
    setPalette(palettes[Math.floor(Math.random() * palettes.length)]);
    setChibi(chibis[Math.floor(Math.random() * chibis.length)]);
  }, []);

  if (!palette || !chibi) return null;

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-r ${palette.bg} p-6 ${palette.text}`}
    >
      {choice === null ? (
        // First Page: Ask if want to celebrate
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md"
        >
          <h1 className="text-3xl font-bold mb-6">
            Do you want to celebrate the day? 🎉
          </h1>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setChoice("yes")}
              className={`${palette.accent} px-6 py-2 rounded-lg shadow`}
            >
              Yes 🎂
            </button>
            <button
              onClick={() => setChoice("no")}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg shadow"
            >
              No 🙅‍♂️
            </button>
          </div>
        </motion.div>
      ) : choice === "yes" && celebrationType === null ? (
        // Second Page: Ask how to celebrate
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md"
        >
          <h1 className="text-3xl font-bold mb-6">
            How would you like to celebrate, Babe? 🥳
          </h1>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setCelebrationType("coffee")}
              className={`${palette.accent} px-6 py-2 rounded-lg shadow`}
            >
              Coffee ☕
            </button>
            <button
              onClick={() => setCelebrationType("cake")}
              className={`${palette.accent} px-6 py-2 rounded-lg shadow`}
            >
              Cake 🎂
            </button>
          </div>
        </motion.div>
      ) : choice === "yes" && celebrationType === "coffee" ? (
        // Celebration: Coffee
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-lg"
        >
          <h1 className="text-4xl font-bold mb-4">☕ Happy Birthday Coffee Date, Hana! ☕</h1>
          <p className="text-lg mb-6">
            Hey Babe, I know, I am not there to celebrate with you today, but I hope this makes a little difference.
            All I can offer you right now is the fact that I will always support you and always love you no matter what happens.
            I love you Hana! Happy Birthday My love...💕 Let's get you coffee...
          </p>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-6xl mb-6"
          >
            {chibi}
          </motion.div>
        </motion.div>
      ) : choice === "yes" && celebrationType === "cake" ? (
        // Celebration: Cake
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-lg"
        >
          <h1 className="text-4xl font-bold mb-4">🎂 Happy Birthday, Hana! 🎂</h1>
          <p className="text-lg mb-6">
            Hey Babe, I was hoping you'll choose coffee, but since you're here let me say Happy Birthday Babe...
            You know this already, but let me say this: I love you and I hope we can celebrate your next birthday together.
            I hope that all your dreams come true. I am so blessed to have met a person like you. Everyday with you makes me thankful.
            Sorry medyo broke tayo ngayon so I hope maappreciate nimo ni. I love you Babe.
          </p>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-6xl mb-6"
          >
            {chibi}
          </motion.div>
        </motion.div>
      ) : (
        // No Celebration Page
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md"
        >
          <h1 className="text-2xl font-bold mb-4">😔 Oh no...</h1>
          <p className="text-lg mb-4">
           No matter how you choose to spend today, Babe, you are appreciated, valued, and loved beyond measure 💕
          </p>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-5xl"
          >
            {chibi}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
