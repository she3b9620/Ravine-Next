import {getTranslations} from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('common');

  return (
    <main className="min-h-screen bg-ravine-obsidian text-ravine-ivory">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-ravine-umber/50 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ravine-copper">RAVINE</p>
            <p className="mt-2 text-sm text-ravine-stone">{t('tagline')}</p>
          </div>
          <div className="rounded-full border border-ravine-umber bg-ravine-charcoal px-4 py-2 text-xs text-ravine-stone">Next foundation</div>
        </header>

        <section className="flex flex-1 items-center py-16">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium text-ravine-copper">RAVINE NEXT</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{t('foundation')}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ravine-stone sm:text-lg">{t('description')}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-ravine-umber/60 bg-ravine-charcoal p-5"><p className="text-xs uppercase tracking-[0.2em] text-ravine-copper">{t('architecture')}</p><p className="mt-3 text-sm text-ravine-stone">Next.js App Router · AR/EN · Tailwind · scalable route structure</p></div>
              <div className="rounded-2xl border border-ravine-umber/60 bg-ravine-charcoal p-5"><p className="text-xs uppercase tracking-[0.2em] text-ravine-copper">{t('auth')}</p><p className="mt-3 text-sm text-ravine-stone">{t('authReady')}</p></div>
              <div className="rounded-2xl border border-ravine-umber/60 bg-ravine-charcoal p-5 sm:col-span-2"><p className="text-xs uppercase tracking-[0.2em] text-ravine-copper">{t('database')}</p><p className="mt-3 text-sm text-ravine-stone">{t('databaseReady')}</p></div>
            </div>
          </div>
        </section>

        <footer className="border-t border-ravine-umber/50 pt-5 text-xs text-ravine-stone">RAVINE Next · independent foundation</footer>
      </div>
    </main>
  );
}
