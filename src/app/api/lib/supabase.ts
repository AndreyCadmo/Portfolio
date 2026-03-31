import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() || "";

console.log(`"${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}"`.length)

export const supabase = createClient(supabaseUrl, supabaseKey);
