
const servicesData = {
    "web-development": {
        HeroText : "Web Development",
    },
    "app-development": {
        HeroText : "App Development",
    },
    "uiux-design": {
        HeroText : "UI/UX Design",
    },
    "seo-services": {
        HeroText : "SEO Services",
    },
}

export type ServiceSlug = keyof typeof servicesData;

export default servicesData;