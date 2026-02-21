"use client";
import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { translations } from "../i18n/translations";

export type Locale = "en" | "th";

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>("th");

    const t = useCallback(
        (key: string): string => {
            const keys = key.split(".");
            let value: unknown = translations[locale];
            for (const k of keys) {
                if (value && typeof value === "object") {
                    value = (value as Record<string, unknown>)[k];
                } else {
                    return key; // fallback to key if not found
                }
            }
            return typeof value === "string" ? value : key;
        },
        [locale]
    );

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
