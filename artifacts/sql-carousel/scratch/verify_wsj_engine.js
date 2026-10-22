import { chromium } from "playwright";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1600, height: 960 } });
  const page = await context.newPage();

  console.log("Navigating to http://localhost:5173/...");
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  // Take screenshot of main workstation with Substack tab active
  await page.screenshot({ path: "C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/workstation_with_substack.png" });
  console.log("Captured workstation_with_substack.png");

  // Click on Themes tab to verify the 5 viral market themes
  const themeTab = await page.getByRole("button", { name: "Themes" });
  if (await themeTab.count() > 0) {
    await themeTab.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: "C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/themes_list_viral.png" });
    console.log("Captured themes_list_viral.png");
  }

  // Click on WSJ Daily Intake button in top bar
  const wsjBtn = await page.getByRole("button", { name: /WSJ Daily Intake/i });
  if (await wsjBtn.count() > 0) {
    await wsjBtn.click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: "C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/modal_wsj_intake.png" });
    console.log("Captured modal_wsj_intake.png");

    // Click "Synthesize Dual Intelligence" to test synthesis live!
    const synthBtn = await page.getByRole("button", { name: /Synthesize/i });
    if (await synthBtn.count() > 0) {
      await synthBtn.click();
      console.log("Clicked Synthesize...");
      await page.waitForTimeout(2200); // wait for animated steps
      await page.screenshot({ path: "C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/post_synthesis_view.png" });
      console.log("Captured post_synthesis_view.png");
    }
  }

  await browser.close();
  console.log("Verification finished successfully!");
}

run().catch(err => {
  console.error("Error in verification:", err);
  process.exit(1);
});
