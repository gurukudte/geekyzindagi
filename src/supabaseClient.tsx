import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://uxavjxmxxnfaxkhtpmpr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4YXZqeG14eG5mYXhraHRwbXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE5MDQ0MTYsImV4cCI6MTk4NzQ4MDQxNn0.gIMUSuJU5F2WhlSAI2eHeVSKEqzvsSnOPKVekQkzgQk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);