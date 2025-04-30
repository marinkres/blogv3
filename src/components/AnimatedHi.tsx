import { useEffect, useState } from 'react';

const greetings = [
  {
    hi: 'Hi',
    pron: '/hʌɪ/',
    lang: 'English',
    desc: 'exclamation',
  },
  {
    hi: 'こんにちは',
    pron: 'Kon-ni-chi-wa',
    lang: 'Japanese',
    desc: '感嘆詞 (exclamation)',
  },
  {
    hi: 'Hola',
    pron: '/ˈola/',
    lang: 'Spanish',
    desc: 'exclamación',
  },
  {
    hi: 'Bok',
    pron: '/bok/',
    lang: 'Croatian',
    desc: 'uzvik (exclamation)',
  },
];

const intervalMs = 2200;

export default function AnimatedHi() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % greetings.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, []);

  const { hi, pron, desc, lang } = greetings[idx];

  return (
    <>
      <h3 className="text-3xl leading-none font-medium transition-all duration-500 animate-fade-in">
        {hi}
      </h3>
      <p className="text-muted-foreground text-sm transition-all duration-500 animate-fade-in">
        {pron} &bull; <span className="font-medium">{desc}</span>
      </p>
    </>
  );
}
