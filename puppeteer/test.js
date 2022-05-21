const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-bacefbcecadccbaeccbbafeacbefeadbbdbceac.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('h1');
    console.log('TESTCASE:testcase1:success');
  }
  catch(e){
    console.log('TESTCASE:testcase1:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-bacefbcecadccbaeccbbafeacbefeadbbdbceac.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('h2');
    const result1 = await page.evaluate(()=>{
      let heading = document.querySelector("#titleName");
      return heading.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let heading = document.querySelector("#instruction");
      return heading.innerHTML;
    })
    console.log('TESTCASE:testcase2:success');
  }
  catch(e){
    console.log('TESTCASE:testcase2:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-bacefbcecadccbaeccbbafeacbefeadbbdbceac.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('div');
    const result1 = await page.evaluate(()=>{
      let button = document.querySelector("#smiley");
      return button.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let button = document.querySelector("#eye1");
      return button.innerHTML;
    })
    console.log('TESTCASE:testcase3:success');
  }
  catch(e){
    console.log('TESTCASE:testcase3:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-bacefbcecadccbaeccbbafeacbefeadbbdbceac.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
	const result1 = await page.evaluate(()=>{
      let heading = document.querySelector("#eye2");
      return heading.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let heading = document.querySelector("#mouth");
      return heading.innerHTML;
    })
    console.log('TESTCASE:testcase4:success');
  }
  catch(e){
    console.log('TESTCASE:testcase4:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-bacefbcecadccbaeccbbafeacbefeadbbdbceac.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('button');
    const result1 = await page.evaluate(()=>{
      let textBox = document.querySelector("#happyButton");
      return textBox.innerHTML;
    })
    console.log('TESTCASE:testcase5:success');
  }
  catch(e){
    console.log('TESTCASE:testcase5:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-bacefbcecadccbaeccbbafeacbefeadbbdbceac.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    const result1 = await page.evaluate(()=>{
      let textBox = document.querySelector("#sadButton");
      return textBox.innerHTML;
    })
	const result2 = await page.evaluate(()=>{
      let textBox = document.querySelector("#angryButton");
      return textBox.innerHTML;
    })
    console.log('TESTCASE:testcase6:success');
  }
  catch(e){
    console.log('TESTCASE:testcase6:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();