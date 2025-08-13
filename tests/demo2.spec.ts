
import {test,expect} from "@playwright/test";



test("verify the Url of the page",async ({page})=>

{

      await page.goto("http://www.automationpractice.pl/index.php");

      let url:string=await page.url();
         console.log(url);
   await expect(page).toHaveURL(/automation/)

})


