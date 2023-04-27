import { test } from "../fixtures";
import * as metamask from "@synthetixio/synpress/commands/metamask";

// metamask add and changeNetwork to ("Polygon Network");

test("connect wallet using default metamask account", async ({ page }) => {
  await page.goto("https://ace-frontend.prominencegames.io/signin");
  await page.getByLabel("Email").type("ighmazcool@gmail.com");
  await page.getByLabel("Password").type("iamighmaz1234");
  await page.getByRole("button", { name: "Sign in" }).click();
  // await page.waitForURL("http://localhost:3001/customize-avatar");
  // await page.goto("http://localhost:3001/customize-avatar");
  // await page.pause();

  await page.getByRole("button", { name: "Connect Wallet" }).click();
  await page.click("text=MetaMask");
  await page.waitForTimeout(6000);
  await metamask.acceptAccess();

  // await page.click("text=Edit base");

  // await expect(page.locator(".nextui-c-csEDlc")).toContainText(
  //   "Arcana(s) detected."
  // );

  // filter traits
  // await page.locator(".nextui-c-hdxYb").click();
  // await page.getByRole("button", { name: "Filter Type" }).click();
  // await page
  //   .getByRole("menuitemcheckbox", { name: "Weapon" })
  //   .getByText("Weapon")
  //   .click();
  // await page.getByText("Aura").click();
  // await page.getByRole("menuitemcheckbox", { name: "Outfit" }).click();
  // await page.getByRole("button", { name: "Filter Class" }).click();
  // await page.getByRole("menuitemcheckbox", { name: "Arcanist" }).click();
  // await page.getByText("Duelist").click();
  // await page.getByText("Champion").click();
  // await page.waitForTimeout(6000);
});
