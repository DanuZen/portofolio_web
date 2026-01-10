const fs = require('fs');
const path = 'src/pages/Home.tsx';
const startLine = 484;
const endLine = 508;

try {
  const data = fs.readFileSync(path, 'utf8');
  const lines = data.split(/\r?\n/);

  // 1-based to 0-based
  const startIndex = startLine - 1;
  const endIndex = endLine - 1;

  console.log(`Total lines before: ${lines.length}`);
  console.log(`Removing lines ${startLine} to ${endLine}`);

  // Remove lines from startIndex to endIndex (inclusive)
  lines.splice(startIndex, endIndex - startIndex + 1);
  
  console.log(`Total lines after: ${lines.length}`);

  fs.writeFileSync(path, lines.join('\n'), 'utf8');
  console.log('File updated successfully.');

} catch (err) {
  console.error(err);
}
