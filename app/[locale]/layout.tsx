import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import type {ReactNode} from 'react';
import {notFound} from 'next/navigation';
import '../globals.css';

const locales = ['ar', 'en'] as const;
type Props = Readonly<{children: ReactNode; params: Promise<{locale: string}>}>;

export const metadata: Metadata = {
  title: 'RAVINE',
  description: 'RAVINE — a complete creative network.',
};

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  if (!locales.includes(locale as (typeof locales)[number])) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
