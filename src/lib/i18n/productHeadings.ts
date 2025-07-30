type SupportedLocale = 'es' | 'en' | 'de';

const productHeadings: Record<SupportedLocale, Record<string, string>> = {
    es: {
        descripcion: "Descripción",
        caracteristicas: "Características",
        usos: "Usos recomendados",
        como_solicitar: "¿Cómo solicitar?",
    },
    en: {
        descripcion: "Description",
        caracteristicas: "Features",
        usos: "Recommended Uses",
        como_solicitar: "How to Request?",
    },
    de: {
        descripcion: "Beschreibung",
        caracteristicas: "Merkmale",
        usos: "Empfohlene Verwendungen",
        como_solicitar: "Wie anfragen?",
    },
};

export function getProductHeadings(locale: string) {
    const fallback = "es";
    return productHeadings[locale as SupportedLocale] ?? productHeadings[fallback];
}
