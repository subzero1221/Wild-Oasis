import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zmrjsseiiopipvbvqfvw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inptcmpzc2VpaW9waXB2YnZxZnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwMTE4OTEsImV4cCI6MjAyNTU4Nzg5MX0.dks7GIiGaj-oR3KjrtHw0O7AxmxXNOWtjbIJGlgjcOg";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
