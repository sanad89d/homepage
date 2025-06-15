import sys
import os
from bs4 import BeautifulSoup

def extract_bookmarks(soup):
    data = {}
    current_folder = "Uncategorized"
    dt_tags = soup.find_all("dt")
    for dt in dt_tags:
        h3 = dt.find("h3")
        if h3:
            current_folder = h3.get_text(strip=True)
        else:
            a = dt.find("a")
            if a:
                url = a.get("href", "")
                text = a.get_text(strip=True)
                data.setdefault(current_folder, []).append((url, text))
    return data

def main():
    input_file = sys.argv[1] if len(sys.argv) > 1 else "bookmarks.html"
    base, ext = os.path.splitext(input_file)
    output_file = base + "_converted.html"

    print(f"📥 Loading bookmarks from: {input_file}")
    try:
        with open(input_file, "r", encoding="utf-8") as f:
            raw_html = f.read()
            print(f"✅ File loaded. Length: {len(raw_html)} characters")
    except FileNotFoundError:
        print(f"❌ File not found: {input_file}")
        sys.exit(1)

    soup = BeautifulSoup(raw_html, "html.parser")
    print("🔍 Parsing bookmarks...")

    bookmark_data = extract_bookmarks(soup)
    if not bookmark_data:
        print("⚠️ No bookmarks found!")
        return

    # HTML structure
    head_html = """
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Searchable Bookmarks - Responsive</title>
  <style>
    body {
      font-family: Comic Sans MS, 'Courier New', monospace;
      margin: 0;
      padding: 20px;
      box-sizing: border-box;
      max-width: 100%;
    }
    #searchWrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-bottom: 30px;
    }
    #homeIcon {
      height: 40px;
      width: 40px;
      cursor: pointer;
      fill: #000;
      flex-shrink: 0;
    }
    #searchBox {
      flex: 1 1 300px;
      padding: 12px;
      font-size: 18px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      max-width: 500px;
      min-width: 200px;
    }
    h3 {
      width: 100%;
      margin-top: 30px;
      color: #444;
      border-bottom: 1px solid #ddd;
      padding-bottom: 6px;
      font-size: 1.3rem;
    }
    .category {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .category a {
      display: inline-block;
      padding: 6px 10px;
      text-decoration: none;
      font-size: 16px;
      color: #1a0dab;
      background-color: #f2f2f2;
      border-radius: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
    .category a:hover {
      background-color: #e0e0e0;
      text-decoration: underline;
    }
    @media (max-width: 480px) {
      #searchBox {
        width: 100%;
      }
      .category a {
        flex: 1 1 100%;
      }
    }
  </style>
</head>
<body>
<div id="searchWrapper">
  <a href="index.html" title="Home" aria-label="Home">
    <svg id="homeIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path d="M 36 10 C 34.861 10 33.722922 10.386609 32.794922 11.162109 L 11.517578 28.941406 C 10.052578 30.165406 9.5519375 32.270219 10.460938 33.949219 C 11.711938 36.258219 14.661453 36.740437 16.564453 35.148438 L 35.359375 19.445312 C 35.730375 19.135313 36.269625 19.135313 36.640625 19.445312 L 55.435547 35.148438 C 56.183547 35.774437 57.093047 36.078125 57.998047 36.078125 C 59.171047 36.078125 60.333953 35.567219 61.126953 34.574219 C 62.503953 32.850219 62.112922 30.303672 60.419922 28.888672 L 58 26.867188 L 58 16.667969 C 58 15.194969 56.805984 14 55.333984 14 L 52.667969 14 C 51.194969 14 50 15.194969 50 16.667969 L 50 20.181641 L 39.205078 11.162109 C 38.277078 10.386609 37.139 10 36 10 z M 35.996094 22.925781 L 13.996094 41.302734 L 13.996094 50 C 13.996094 54.418 17.578094 58 21.996094 58 L 49.996094 58 C 54.414094 58 57.996094 54.418 57.996094 50 L 57.996094 41.302734 L 35.996094 22.925781 z M 32 38 L 40 38 C 41.105 38 42 38.895 42 40 L 42 50 L 30 50 L 30 40 C 30 38.895 30.895 38 32 38 z"></path>
    </svg>
  </a>
  <input type="text" id="searchBox" placeholder="Search bookmarks..." />
</div>
<div id="bookmarksContainer">
"""

    footer_html = """
</div>
<script>
const searchBox = document.getElementById('searchBox');
const container = document.getElementById('bookmarksContainer');
searchBox.addEventListener('input', () => {
  const filter = searchBox.value.toLowerCase();
  const categories = container.querySelectorAll('.category');
  categories.forEach(category => {
    const links = category.querySelectorAll('a');
    let anyVisible = false;
    links.forEach(link => {
      const match = link.textContent.toLowerCase().includes(filter);
      link.style.display = match ? 'inline-block' : 'none';
      if (match) anyVisible = true;
    });
    category.style.display = anyVisible ? '' : 'none';
  });
});
</script>
</body>
</html>
"""

    body_content = ""
    for category, links in bookmark_data.items():
        body_content += f"<h3>{category}</h3>\n<div class='category'>\n"
        for href, text in links:
            body_content += f'  <a href="{href}" target="_blank">{text}</a>\n'
        body_content += "</div>\n"

    with open(output_file, "w", encoding="utf-8") as f:
        f.write(head_html + body_content + footer_html)

    print(f"✅ Conversion complete. Output saved to: {output_file}")

if __name__ == "__main__":
    main()
