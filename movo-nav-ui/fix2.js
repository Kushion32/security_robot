const fs = require('fs');
const files = [
  'src/WaypointDashboard.jsx',
  'src/App.js',
  'src/NavButton.jsx',
  'src/RobotMap.jsx',
  'src/VideoFeed.jsx',
  'src/MapManager.jsx'
];

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log('Skipping ' + file);
    continue;
  }
  let code = fs.readFileSync(file, 'utf8');
  
  code = code.replace(/'Oxy\ngen'/g, "'Oxygen'");
  code = code.replace(/letterSpac\ning/g, "letterSpacing");
  code = code.replace(/fontWeig\nht/g, "fontWeight");
  code = code.replace(/#b49b5f\n'/g, "#b49b5f'");
  code = code.replace(/Curren\nt:/g, "Current:");
  code = code.replace(/AMCL s\ntart:/g, "AMCL start:");
  
  code = code.replace(/'Roboto', 'Oxy\ngen', 'Ubuntu'/g, "'Roboto', 'Oxygen', 'Ubuntu'");
  code = code.replace(/letterSpac\ning: '1px'/g, "letterSpacing: '1px'");
  code = code.replace(/fontWeig\nht: 500/g, "fontWeight: 500");
  code = code.replace(/#b49b5f\n' }}/g, "#b49b5f' }}");
  code = code.replace(/AMC\nL_START/g, "AMCL_START");
  code = code.replace(/Curren\nt:&nbsp;/g, "Current:&nbsp;");
  code = code.replace(/rgba\(255,255,255,0\.1\)\n', /g, "rgba(255,255,255,0.1)', ");
  code = code.replace(/AMCL s\ntart:&nbsp;/g, "AMCL start:&nbsp;");
  code = code.replace(/'\nrgba\(255, 193, 7, 0\.2\)'/g, "'rgba(255, 193, 7, 0.2)'");
  code = code.replace(/ora\nnge marker/g, "orange marker");
  code = code.replace(/'i\ntalic'/g, "'italic'");
  code = code.replace(/p\nosition\./g, "position.");
  code = code.replace(/0\.7\)\n, fontSize/g, "0.7)', fontSize");

  // App.js
  code = code.replace(/flexDirecti\non/g, "flexDirection");
  code = code.replace(/t\nransparent/g, "transparent");
  code = code.replace(/justifyCon\ntent/g, "justifyContent");
  code = code.replace(/mar\nginLeft/g, "marginLeft");

  // NavButton.jsx
  code = code.replace(/waypointNa\nme/g, "waypointName");
  code = code.replace(/waypointNam\ne/g, "waypointName");

  // RobotMap.jsx
  code = code.replace(/alignItems\n: 'center'/g, "alignItems: 'center'");
  code = code.replace(/fontWeigh\nt: 500/g, "fontWeight: 500");
  code = code.replace(/curren\nt\.y/g, "current.y");
  code = code.replace(/w\nrap/g, "wrap");

  // VideoFeed.jsx
  code = code.replace(/f\nontWeight/g, "fontWeight");

  // Random other things
  code = code.replace(/connecte\nd/g, "connected");

  fs.writeFileSync(file, code);
  console.log('Fixed ' + file);
}
console.log('Done');
