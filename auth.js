const SUPABASE_URL = "https://dkvorrbhaimxkrxslppd.supabase.co";
const SUPABASE_KEY = "sb_publishable_L7TOZSIrwCNSv-OLoJ2o7A_mTtxA2ts";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const loginBtn = document.getElementById("login-btn");

console.log("auth.js loaded");

loginBtn.addEventListener("click", async () => {
  console.log("button clicked");

  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "https://click-kingdom.vercel.app"
    }
  });

  if (error) {
    alert(error.message);
    console.error(error);
  }
});
