
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Bots show up when clicked', async ()=>{
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    let choicesDiv = await driver.findElement(By.id('choices')).getText()
    expect(choicesDiv).not.toEqual('')
})

test('Add to Duo', async ()=> {
   const addBtn = await driver.findElement(By.id('player-duo')).click();
   const playerDuo = await addBtn;
   expect(playerDuo).toBe(true)
})
