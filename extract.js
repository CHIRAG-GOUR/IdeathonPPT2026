const fs = require('fs');
const html = fs.readFileSync('temp.html', 'utf-8');
const start = html.indexOf('<svg ');
const idStart = html.indexOf('id="freepik_stories-webinar"', start);

if (start !== -1 && idStart !== -1) {
  const svgStart = html.lastIndexOf('<svg', idStart);
  const end = html.indexOf('</svg>', svgStart) + 6;
  let svg = html.substring(svgStart, end);
  
  // Escape backticks and variables
  svg = svg.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  
  const reactCode = `export default function AnimatedIdea() {
  return (
    <div
      className="w-full max-w-[500px] mx-auto relative flex items-center justify-center p-4 drop-shadow-2xl"
      dangerouslySetInnerHTML={{ __html: \`${svg}\` }}
    />
  );
}`;

  fs.writeFileSync('src/components/illustrations/AnimatedIdea.tsx', reactCode);
  console.log('Successfully injected SVG into component');
  fs.unlinkSync('temp.html');
} else {
  console.log('Could not find SVG in temp.html');
}
