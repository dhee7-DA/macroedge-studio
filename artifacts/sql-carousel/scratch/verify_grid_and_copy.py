import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1600, "height": 960})
        page = context.new_page()

        page.goto("http://localhost:5173/", wait_until="networkidle")
        time.sleep(1.2)

        # Open WSJ Intake and synthesize
        wsj_btn = page.get_by_role("button", name="WSJ Daily Intake")
        wsj_btn.click()
        time.sleep(0.5)

        synth_btn = page.get_by_role("button", name="Synthesize Dual Intelligence")
        synth_btn.click()
        time.sleep(2.5)

        # Click "Grid Matrix (7)" button to show all 7 generated slides
        grid_btn = page.get_by_role("button", name="Grid Matrix")
        if grid_btn.count() > 0:
            grid_btn.click()
            time.sleep(0.8)
            page.screenshot(path="C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/synthesized_grid_matrix.png")
            print("Captured synthesized_grid_matrix.png")

        # Click on Social Copy tab to verify the matching viral X thread & IG caption
        social_tab = page.get_by_role("button", name="Social Copy")
        if social_tab.count() > 0:
            social_tab.click()
            time.sleep(0.5)
            page.screenshot(path="C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/synthesized_social_copy.png")
            print("Captured synthesized_social_copy.png")

        browser.close()

if __name__ == "__main__":
    run()
