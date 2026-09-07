import {createServerClient} from '@supabase/ssr';
import type {SupabaseClient} from '@supabase/supabase-js';
import {cookies} from 'next/headers';

export async function createClient(): Promise<SupabaseClient> {
  const cookieStore = await cookies();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error('Missing Supabase public environment variables.');

  return createServerClient(url, key, {
    cookies: {
      getAll() { return cookieStore.getAll(); },
      setAll(cookiesToSet) {
        try {
          for (const {name, value, options} of cookiesToSet) cookieStore.set(name, value, options);
        } catch {
          // Server Components may not mutate cookies; proxy handles refreshes.
        }
      },
    },
  });
}
