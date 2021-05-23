

//will be used if it doesn’t find a translation for a given string in our current locale’s translation file
export const fallback = "en";

//supported languages of IBS mobile app
export const supportedLocales = {
    en: {
        name: "English",
        translationFileLoader: () => require('../languages/en.json'),
    },
    ar: {
        name: "عربي",
        translationFileLoader: () => require('../languages/ar.json'),
    },
};

export const defaultNamespace = "welcome";
export const namespaces = [
    "welcome",
    "auth",
    "home",
    "payment",
    "support",
    "messages",
    "profile",
    "general"
]