import static org.junit.Assert.*;

import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Guidelines {
	
	
	private static ChromeDriver driver;

	@Before
	public void beforeAll() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "/Users/rajnish/Documents/Codes/test/chromedriver102");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://travel-advisor-self.vercel.app/guidelines");
		Thread.sleep(3000);
	}
	
	@Test
	// Validate if country card shows
	public void test1() {
		WebElement card = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[1]/div"));
		Assert.assertTrue(card.isDisplayed());
	}
	
	@Test
	// Validate if show detail button is clickable
	public void test2() throws InterruptedException {
		WebElement showDetail = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[1]/div/button"));
		showDetail.click();
		Assert.assertEquals(showDetail.getText(), "Loading....");
	}
	
	
	@Test
	// Validate if details populated
	public void test3() throws InterruptedException {
		WebElement showDetail = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[1]/div/button"));
		showDetail.click();
		
		Thread.sleep(10000);
		Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[1]/div[2]/div/div/div/h2")).isDisplayed());
	}
	
	
	@Test
	// Validate if close button clickable
	public void test4() throws InterruptedException {
		WebElement showDetail = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[1]/div/button"));
		showDetail.click();
		
		Thread.sleep(10000);
		showDetail.click();
		Assert.assertEquals(driver.findElements(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[1]/div[2]/div/div/div/h2")).size(), 0);
	}
	
	
	
	@After
	public void afterClass() {
		driver.close();
	}

}
