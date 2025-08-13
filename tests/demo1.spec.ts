
import {test,expect} from "@playwright/test"


test("Verify the title of the page",async({page})=>{

   await page.goto("http://www.automationpractice.pl/index.php")

        console.log(page.title())
   await  expect(page).toHaveTitle("My Shop")

})
