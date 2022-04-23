const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  let wordsArray = [];

  for (let i = 4; i < 15; i++) {
    await page.goto(
      `https://www.dicionarioinformal.com.br/caca-palavras/5-letras/-----/${i}`
    );

    const arr = await page.evaluate(() => {
      let wordsArray = [];
      const nodeList = document.querySelectorAll(
        "ul.ul_simple.link_cinza.text-center > li"
      );

      for (let i = 0; i < nodeList.length; i++) {
        wordsArray.push(nodeList[i].innerText);
      }

      return wordsArray;
    });

    wordsArray.push([...arr].flat());
  }
  await browser.close();
  const file = fs.createWriteStream("words.txt");
  file.on("error", function (err) {
    console.log(err);
  });
  wordsArray.flat().forEach((word) => file.write(word + "\n"));
  file.end();
})();
