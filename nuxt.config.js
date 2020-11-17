import theme from "@nuxt/content-theme-docs";

export default theme({
  target: "static",
  router: {
    base: "/note/",
  },
  i18n: {
    locales: () => [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.js',
        name: 'Français'
      }],
      defaultLocale: 'en'
    }
});
