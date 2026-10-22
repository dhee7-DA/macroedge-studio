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

        # 1. Switch to Grid Matrix view to show all 10 showcase slides
        grid_btn = page.get_by_role("button", name="Grid Matrix")
        if grid_btn.count() > 0:
            grid_btn.click()
            time.sleep(0.8)
            page.screenshot(path="C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/showcase_10_grid_matrix.png")
            print("Captured showcase_10_grid_matrix.png")

        # 2. Scroll the grid viewport to capture the bottom slides (Waterfall, Versus, Memo, CTA)
        page.evaluate("document.getElementById('stage-viewport').scrollTop = 900")
        time.sleep(0.8)
        page.screenshot(path="C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/showcase_new_components_scrolled.png")
        print("Captured showcase_new_components_scrolled.png")

        # 3. Switch to Themes tab and select "Citadel Quant Emerald"
        theme_tab = page.get_by_role("button", name="Themes")
        if theme_tab.count() > 0:
            theme_tab.click()
            time.sleep(0.5)

            # Click Citadel Quant Emerald button
            citadel_btn = page.get_by_role("button", name="Citadel Quant Emerald")
            if citadel_btn.count() > 0:
                citadel_btn.click()
                time.sleep(0.8)
                page.screenshot(path="C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/citadel_emerald_theme_grid.png")
                print("Captured citadel_emerald_theme_grid.png")

        # 4. Switch back to Carousel View and inspect the Versus slide or Waterfall slide
        carousel_btn = page.get_by_role("button", name="Carousel View")
        if carousel_btn.count() > 0:
            carousel_btn.click()
            time.sleep(0.8)
            page.screenshot(path="C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/citadel_carousel_view.png")
            print("Captured citadel_carousel_view.png")

        browser.close()
        print("All verification screenshots captured!")

if __name__ == "__main__":
    run()
