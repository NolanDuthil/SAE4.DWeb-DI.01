/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Background */
        background: "hsl(var(--background)/<alpha-value>)",
        bgCard: "hsl(var(--bg-card)/<alpha-value>)",
        bgIcon: "hsl(var(--bg-icon)/<alpha-value>)",
        bgAgeCard: "hsl(var(--bg-age-card)/<alpha-value>)",
        bgSelectCat: "hsl(var(--bg-select-cat)/<alpha-value>)",

        /* Button */
        button: "hsl(var(--button) /<alpha-value>)",
        hoverBtn: "hsl(var(--hover-btn) /<alpha-value>)",
        borderBtn: "hsl(var(--border-btn) /<alpha-value>)",
        hoverBorderBtn: "hsl(var(--hover-border-btn) /<alpha-value>)",
        borderTag: "hsl(var(--border-tag) /<alpha-value>)",
        borderScore: "hsl(var(--border-score) /<alpha-value>)",
        
        /* Text */
        textSuscription: "hsl(var(--text-suscription) /<alpha-value>)",
        textLoan: "hsl(var(--text-loan) /<alpha-value>)",
        textNewEpisode: "hsl(var(--text-new-episode) /<alpha-value>)",
        forground: "hsl(var(--forground)/<alpha-value>)",
        textButton: "hsl(var(--text-button) /<alpha-value>)",
        hoverTextNav: "hsl(var(--hover-text-nav) /<alpha-value>)",
        textEmail: "hsl(var(--text-email) /<alpha-value>)",
      },
      backgroundImage: {
        'header': "url('/img/header.jpg')"
      },
      objectFit: {
        cover: 'cover',
        contain: 'contain',
      },
    },
  },
  plugins: [],
};
