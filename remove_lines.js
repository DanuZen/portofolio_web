const fs = require('fs');
const path = 'src/pages/Home.tsx';
const startLine = 485;
const endLine = 508;

try {
  const data = fs.readFileSync(path, 'utf8');
  const lines = data.split(/\r?\n/);

  // 1-based to 0-based
  const startIndex = startLine - 1;
  const endIndex = endLine - 1;

  console.log(`Line ${startLine}: ${lines[startIndex].trim()}`);
  console.log(`Line ${endLine}: ${lines[endIndex].trim()}`);

  if (lines[startIndex].includes('BentoGridItem') && lines[endIndex].includes('</BentoGridItem>')) {
    console.log('Found expected tags. Removing lines...');
    // Remove lines from startIndex to endIndex (inclusive)
    // splice removes elements: start index, delete count
    // delete count = endIndex - startIndex + 1
    lines.splice(startIndex, endIndex - startIndex + 1);
    
    fs.writeFileSync(path, lines.join('\n'), 'utf8');
    console.log('File updated successfully.');
  } else {
    console.log('Lines did not match expected content. Aborting.');
  }
} catch (err) {
  console.error(err);
}
