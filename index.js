import fs from 'fs';
import path from 'path';

const indexPath = "dist/index.html";

function getDirectoryContents(directory) {
    return fs.readdirSync(directory).map(item => {
        const itemPath = path.join(directory, item);
        const stats = fs.statSync(itemPath);
        return {
            name: item,
            path: itemPath,
            isDirectory: stats.isDirectory(),
        };
    });
}

// 生成 index.html 的内容
function generateIndexContent(contents) {
    const rows = contents.map(item => `
        <tr>
            <td><a href="./${item.name}${item.isDirectory ? '/' : ''}">${item.name}</a></td>
        </tr>
    `).join('\n');

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index of /</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
    <h1>Index of /</h1>
    <table>
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            ${rows}
        </tbody>
    </table>
</body>
</html>
    `;
}

// 主函数
function generateIndexFile() {
    const contents = getDirectoryContents("dist");
    const indexContent = generateIndexContent(contents);

    fs.writeFileSync(indexPath, indexContent);

    console.log(`index.html has been generated at: ${indexPath}`);
}

// 执行主函数
generateIndexFile();
