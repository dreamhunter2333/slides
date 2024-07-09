import fs from 'fs';
import path from 'path';

function generate() {
    const directory = "../slides"
    const contents = fs.readdirSync(directory).map(item => {
        const readme = path.join(directory, item, "README.md");
        // read readme content
        const title = fs.readFileSync(readme, 'utf-8');
        return {
            path: item,
            title: title.trim()
        };
    });
    fs.writeFileSync("src/slides.json", JSON.stringify(contents, null, 4), "utf-8");
}

generate();
