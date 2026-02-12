import type { Language } from "@/i18n/LanguageContext";

// Imágenes por defecto (español / fallback)
import chatRealEs from "@/assets/chat-real-es.jpeg";
import chatRealCa from "@/assets/chat-real-ca.jpeg";
import chatRealIt from "@/assets/chat-real-it.jpeg";
import chatRealEn from "@/assets/chat-real-en.jpeg";
import whatsappReservaEs from "@/assets/whatsapp-reserva.png";
import whatsappReservaCa from "@/assets/whatsapp-reserva.png";
import whatsappReservaIt from "@/assets/whatsapp-reserva.png";
import whatsappReservaEn from "@/assets/whatsapp-reserva.png";
import tableLayoutEs from "@/assets/table-layout-es.jpeg";
import tableLayoutCa from "@/assets/table-layout-ca.jpeg";
import tableLayoutIt from "@/assets/table-layout-it.jpeg";
import tableLayoutEn from "@/assets/table-layout-en.jpeg";
import statsEs from "@/assets/stats-dashboard-es.jpeg";
import statsCa from "@/assets/stats-dashboard-ca.jpeg";
import statsIt from "@/assets/stats-dashboard-it.jpeg";
import statsEn from "@/assets/stats-dashboard-en.jpeg";
import mediaEs from "@/assets/media-management-es.jpeg";
import mediaCa from "@/assets/media-management-ca.jpeg";
import mediaIt from "@/assets/media-management-it.jpeg";
import mediaEn from "@/assets/media-management-en.jpeg";


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
