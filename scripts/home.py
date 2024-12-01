import os
import json


def generate():
    directory = "../slides"

    contents = []
    for item in os.listdir(directory):
        readme = os.path.join(directory, item, "README.md")
        if not os.path.isfile(readme):
            continue
        with open(readme, 'r', encoding='utf-8') as f:
            title = f.read().strip()
        contents.append({
            "path": item,
            "title": title
        })
    contents.sort(key=lambda x: x["path"], reverse=True)

    with open("src/slides.json", 'w', encoding='utf-8') as f:
        json.dump(contents, f, ensure_ascii=False, indent=4)


if __name__ == "__main__":
    generate()
