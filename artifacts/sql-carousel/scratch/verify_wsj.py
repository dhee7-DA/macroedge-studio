import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1600, "height": 960})
        page = context.new_page()

        print("Navigating to http://localhost:5173/...")
        page.goto("http://localhost:5173/", wait_until="networkidle")
        time.sleep(1.5)

        # 1. Main view with Substack Draft tab
        page.screenshot(path="C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/workstation_with_substack.png")
        print("Captured workstation_with_substack.png")

        # 2. Themes list
        theme_tab = page.get_by_role("button", name="Themes")
        if theme_tab.count() > 0:
            theme_tab.click()
            time.sleep(0.5)
            page.screenshot(path="C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/themes_list_viral.png")
            print("Captured themes_list_viral.png")

        # 3. Open WSJ Intake Modal
        wsj_btn = page.get_by_role("button", name="WSJ Daily Intake")
        if wsj_btn.count() > 0:
            wsj_btn.click()
            time.sleep(0.6)
            page.screenshot(path="C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/modal_wsj_intake.png")
            print("Captured modal_wsj_intake.png")

            # Click Synthesize
            synth_btn = page.get_by_role("button", name="Synthesize Dual Intelligence")
            if synth_btn.count() > 0:
                synth_btn.click()
                print("Clicked Synthesize Dual Intelligence...")
                time.sleep(2.5) # Wait for progress steps to finish
                page.screenshot(path="C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/post_synthesis_view.png")
                print("Captured post_synthesis_view.png")

        browser.close()
        print("All screenshots captured successfully!")

if __name__ == "__main__":
    run()
