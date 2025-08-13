
import {test,expect,Locator} from "@playwright/test"

/*
test("Verify the PlayWright Locators",async({page})=>{

    await  page.goto("https://demo.nopcommerce.com/")

     await expect(page.getByAltText("nopCommerce demo store")).toBeVisible();
})*/
/*222222
test("Verify the text Locator",async({page})=>{
       console.log("USING getbytext method")
   await   page.goto("https://demo.nopcommerce.com/")

      await expect(page.getByText("Welcome to our store")).toBeVisible();

})*/


test("Verify the Interactive Elements",async({page})=>{
 
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
    
 // await expect(page.getByRole("heading",{name:"Register"})).toBeVisible();
    
 //await expect(page.getByRole("checkbox",   { name:"Newsletter" })).click();
 await page.getByRole('button', { name:"Newsletter" }).click();

})