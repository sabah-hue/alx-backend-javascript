process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (e) => {
  process.stdout.write(`Your name is: ${e}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
