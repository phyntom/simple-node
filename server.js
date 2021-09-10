function sleep(ms) {
   return new Promise((resolve) => setTimeout(resolve, process.env.TIMEOUT));
}

async function main() {
   while (true) {
      console.log('Containers rule!');
      await sleep(5000);
   }
}

main();
