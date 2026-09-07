import createMiddleware from 'next-intl/middleware';
import {type NextRequest, NextResponse} from 'next/server';
import {updateSession} from '@/lib/supabase/proxy';

const intlMiddleware = createMiddleware({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
  localePrefix: 'always',
});

export async function proxy(request: NextRequest) {
  const intlResponse = intlMiddleware(request);
  if (intlResponse.headers.get('location')) return intlResponse;

  const response = await updateSession(request);
  return response ?? NextResponse.next({request});
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
