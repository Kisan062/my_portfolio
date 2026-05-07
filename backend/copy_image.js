const fs = require('fs');
const path = require('path');

const source = "c:\\Users\\sk776\\OneDrive\\Pictures\\Screenshots\\Screenshot 2026-05-07 084329.png";
const destination = "c:\\Users\\sk776\\Downloads\\portfolio-fullstack\\portfolio-fullstack\\frontend\\public\\images\\packetscope_screenshot.png";

try {
    fs.copyFileSync(source, destination);
    console.log('✅ File copied successfully to:', destination);
} catch (err) {
    console.error('❌ Error copying file:', err);
    process.exit(1);
}
