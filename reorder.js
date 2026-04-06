const fs = require('fs');
const content = fs.readFileSync('components/projects-grid.tsx', 'utf8');

const startStr = "const projects = [";
const endStr = "  return (";

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

const projectsStr = content.substring(startIndex + "const projects = [".length, endIndex).trim();
// removing the last "]"
const arrStr = "[" + projectsStr.substring(0, projectsStr.length - 1) + "]";

let projects = eval(arrStr); // This will fail because of syntax? Not if it's just object literals

// Better to rebuild the string with regex or just manually via prompt.
