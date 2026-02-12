import type { Language } from "@/i18n/LanguageContext";

// Imágenes por defecto (español / fallback)
import chatRealEs from "@/assets/chat-real-es.png";
import chatRealCa from "@/assets/chat-real-ca.png";
import chatRealIt from "@/assets/chat-real-it.png";
import chatRealEn from "@/assets/chat-real-en.png";
import whatsappReservaEs from "@/assets/whatsapp-reserva-es.png";
import whatsappReservaCa from "@/assets/whatsapp-reserva-ca.png";
import whatsappReservaIt from "@/assets/whatsapp-reserva-it.png";
import whatsappReservaEn from "@/assets/whatsapp-reserva-en.png";
import tableLayoutEs from "@/assets/table-layout-es.png";
import tableLayoutCa from "@/assets/table-layout-ca.png";
import tableLayoutIt from "@/assets/table-layout-it.png";
import tableLayoutEn from "@/assets/table-layout-en.png";
import statsEs from "@/assets/stats-dashboard-es.png";
import statsCa from "@/assets/stats-dashboard-ca.png";
import statsIt from "@/assets/stats-dashboard-it.png";
import statsEn from "@/assets/stats-dashboard-en.png";
import mediaEs from "@/assets/media-management-es.png";
import mediaCa from "@/assets/media-management-ca.png";
import mediaIt from "@/assets/media-management-it.png";
import mediaEn from "@/assets/media-management-en.png";


// Imágenes por idioma - añade imports cuando existan variantes:
// import chatRealEn from "@/assets/chat-real-en.png";
// import whatsappReservaEn from "@/assets/whatsapp-reserva-en.png";
// etc.

export type FeatureImageKeys = "chatReal" | "whatsappReserva" | "tableLayout" | "stats" | "media";

const imagesByLanguage: Record<Language, Record<FeatureImageKeys, string>> = {
  es: {
    chatReal: chatRealEs,
    whatsappReserva: whatsappReservaEs,
    tableLayout: tableLayoutEs,
    stats: statsEs,
    media: mediaEs,
  },
  en: {
    chatReal: chatRealEn,
    whatsappReserva: whatsappReservaEn,
    tableLayout: tableLayoutEn,
    stats: statsEn,
    media: mediaEn,
  },
  ca: {
    chatReal: chatRealCa,
    whatsappReserva: whatsappReservaCa,
    tableLayout: tableLayoutCa,
    stats: statsCa,
    media: mediaCa,
  },
  it: {
    chatReal: chatRealIt,
    whatsappReserva: whatsappReservaIt,
    tableLayout: tableLayoutIt,
    stats: statsIt,
    media: mediaIt,
  },
};

export const getFeatureImages = (language: Language): Record<FeatureImageKeys, string> =>
  imagesByLanguage[language];
