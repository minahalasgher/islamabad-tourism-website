import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://klcmkujrxmywakgysvcd.supabase.co";
const supabaseKey = "sb_publishable_djuiYXKQ69DS5nGICEAJyQ_hYNixjWt";

export const supabase = createClient(supabaseUrl, supabaseKey);