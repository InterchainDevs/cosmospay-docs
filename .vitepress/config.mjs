import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/CosmosPay-Docs/",
  rewrites: { 'source/:page': 'destination/:page' },
  title: "CosmosPay",
  description: "Connecting web2 to the interchain",
  sitemap: { hostname: "https://docs.cosmos-pay.com/" },
  head: [['link', { rel: 'icon', href: '/CosmosPay-Docs/logo/favicon.ico' }]],
  themeConfig: {
    siteTitle: "CosmosPay Docs",
    logo: "/assets/logo/ID-logo.svg",
    search: { provider: "local" },

    nav: [
      { text: "Home", link: "/" },
      { text: "Docs & Guides", link: "/pages/introduction" }
    ],

    sidebar: [
      {
        items: [
          { text: "👀 Introduction to CosmosPay", link: "/pages/introduction" }
        ]
      }, 
      {
        text: "🏃‍♂️ Get started",
        link: "/pages/get-started/get-started",
        items: [
          { text: "WooCommerce plugin", link: "/pages/get-started/woocommerce-plugin" },
          { text: "PrestaShop plugin", link: "/pages/get-started/prestashop-plugin" }
        ]
      }, 
      {
        text: "📋 The basics",
        link: "/pages/basics/basics",
        items: [
          { text: "Payment status", link: "/pages/basics/payment-status" },
          { text: "Supported currencies", link: "/pages/basics/supported-currencies" }
        ] 
      },
      {
        text: "🤝 Join CosmosPay",
        link: "/pages/listing/join",
        items: [
          { text: "Apply for listing", link: "/pages/listing/apply" }
        ] 
      },
      {
        text: "❓ FAQ",
        items: [
          { text: "Frequently Asked Questions", link: "/pages/faq/faq" },
          { text: "Disclaimer CosmosPay", link: "/pages/faq/disclaimer" }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/InterchainDev" },
    ],

    footer: {
      copyright: "© 2024 InterchainDev.io | All rights reserved.",
    }
  }
})