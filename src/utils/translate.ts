interface Locale {
	[key: string]: string
}
import de from '@/locales/de.json'
import en from '@/locales/en.json'
import es from '@/locales/es.json'
import fr from '@/locales/fr.json'
import hr from '@/locales/hr.json'
import nl from '@/locales/nl.json'

const lang = import.meta.env.WEBSITE_LANGUAGE
export const t = (field: string): string => {
	const translations: Record<string, Locale> = {
		en: en,
		nl: nl,
		es: es,
		de: de,
		hr: hr,
		fr: fr
	}

	if (translations[lang]?.[field]) {
		return translations[lang][field]
	}

	if (translations.en?.[field]) {
		return translations.en[field]
	}

	return field
}
