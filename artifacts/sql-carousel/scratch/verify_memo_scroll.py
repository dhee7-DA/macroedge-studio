import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1600, "height": 960})
        page = context.new_page()

        page.goto("http://localhost:5173/", wait_until="networkidle")
        time.sleep(1.2)

        # Switch to Grid Matrix
        grid_btn = page.get_by_role("button", name="Grid Matrix")
        grid_btn.click()
        time.sleep(0.5)

        # Scroll to bottom of stage-viewport
        page.evaluate("document.getElementById('stage-viewport').scrollTop = 1600")
        time.sleep(0.8)
        page.screenshot(path="C:/Users/hp/.gemini/antigravity/brain/37117fdd-8bd9-4388-aa30-339684cf8a68/showcase_memo_bottom_scrolled.png")
        print("Captured showcase_memo_bottom_scrolled.png")

        browser.close()

if __name__ == "__main__":
    run()
