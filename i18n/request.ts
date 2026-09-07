import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';

const locales = ['ar', 'en'] as const;

const messages = {
  ar: {
    common: {
      name: 'رَافِين',
      tagline: 'عالم المبدعين والأعمال والمجتمعات.',
      foundation: 'الأساس الجديد قيد البناء',
      description: 'RAVINE Next مستقل عن المشروع القديم، ومصمم من البداية ليكون شبكة إبداع كاملة.',
      architecture: 'معمارية جاهزة للتوسع',
      auth: 'المصادقة',
      authReady: 'Supabase Auth جاهز للربط',
      database: 'البيانات',
      databaseReady: 'طبقة Supabase جاهزة بدون تعديل البيانات الحالية'
    }
  },
  en: {
    common: {
      name: 'RAVINE',
      tagline: 'A world for creators, works, and communities.',
      foundation: 'The new foundation is under construction',
      description: 'RAVINE Next is independent from the legacy project and designed from the ground up as a complete creative network.',
      architecture: 'Architecture ready to scale',
      auth: 'Authentication',
      authReady: 'Supabase Auth is ready to connect',
      database: 'Data',
      databaseReady: 'Supabase layer is ready without changing existing data'
    }
  }
} as const;

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(locales, requested) ? requested : 'ar';
  return {locale, messages: messages[locale]};
});
