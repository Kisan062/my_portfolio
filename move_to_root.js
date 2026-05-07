const fs = require('fs');
const path = require('path');

const root = 'C:\\Users\\sk776\\Downloads\\portfolio-fullstack';
const innerFolder = path.join(root, 'portfolio-fullstack');

if (fs.existsSync(innerFolder)) {
    const files = fs.readdirSync(innerFolder);
    files.forEach(file => {
        const oldPath = path.join(innerFolder, file);
        const newPath = path.join(root, file);
        
        // Move file or folder
        if (fs.existsSync(newPath)) {
            console.log(`Skipping ${file}, already exists in root.`);
        } else {
            fs.renameSync(oldPath, newPath);
            console.log(`Moved ${file} to root.`);
        }
    });
    console.log('✅ All files moved to root.');
} else {
    console.log('❌ Inner folder not found.');
}
