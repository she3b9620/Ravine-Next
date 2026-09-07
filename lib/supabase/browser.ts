import {createBrowserClient} from '@supabase/ssr';
import type {SupabaseClient} from '@supabase/supabase-js';

function getEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error('Missing Supabase public environment variables.');
  return {url, key};
}

export function createClient(): SupabaseClient {
  const {url, key} = getEnv();
  return createBrowserClient(url, key);
}
