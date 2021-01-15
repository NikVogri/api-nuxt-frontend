export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "virus-tracker-frontnend-v4",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
      }
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  loading: {
    color: "#2f80ed",
    height: "5px"
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/filters.ts"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: `https://virus-api-updated.herokuapp.com/api/v2`,
    retry: { retries: 3 }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
