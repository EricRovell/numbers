export default {
  title: "Welcome to Numbers!",
  warning: "Application is for educational purposes.",
  description: "Numbers can guide you through the hidden realm of numbers: numeral systems. This application will illustrate you the idea behind various ways of expressing numbers, and show the value that systems bring along with its usage.",
  links: {
    manual: {
      href: "/[lang]/manual/[...route]",
      as: "/ru/manual/ru/welcome",
      label: "Interactive manual",
      title: "Interactive manual"
    },
    sandbox: {
      href: "/[lang]/sandbox",
      as: "/ru/sandbox",
      label: "Skip",
      title: "Skip and continue using the application"
    },
  },
  helpers: {
    theme: "Switch a theme",
    lang: "Set language"
  }
};
