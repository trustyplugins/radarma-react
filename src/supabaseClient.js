// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://fsqrhubzpfoudvvbvzla.supabase.co',
  'sb_publishable_NAgdIjzeVvP0Mod9nzLv0w_Ih17WFQX'
);

export default supabase;
