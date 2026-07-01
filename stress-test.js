const { execSync } = require('child_process');
const fs = require('fs');

const commits = [
  { file: 'src/components/Header.js', content: 'module.exports = "Header";', msg: 'Test Commit 1: Add Header' },
  { file: 'src/components/Footer.js', content: 'module.exports = "Footer";', msg: 'Test Commit 2: Add Footer' },
  { file: 'src/api/postController.js', content: 'module.exports = "Posts";', msg: 'Test Commit 3: Add Post API' },
  { file: 'utils.js', content: 'module.exports = "Utils";', msg: 'Test Commit 4: Add Utils' },
  { file: 'src/components/Break.test.js', content: 'test("intentional break", () => { expect(1).toBe(2); });', msg: 'Test Commit 5: Break the build to trigger Auto-Revert!' }
];

console.log('Starting 5-commit stress test...');

try {
  // Ensure we are synced first
  execSync('git pull --rebase origin main');

  for (let i = 0; i < commits.length; i++) {
    const c = commits[i];
    fs.writeFileSync(c.file, c.content);
    execSync(`git add . && git commit -m "${c.msg}" && git push`);
    console.log(`Pushed commit ${i + 1}/5: ${c.msg}`);
    
    if (i < 4) {
      console.log('Waiting 5 seconds before next push...');
      execSync('sleep 5');
    }
  }
  console.log('All 5 commits pushed successfully!');
} catch (error) {
  console.error('Stress test failed:', error.message);
  if (error.stdout) console.log(error.stdout.toString());
}
