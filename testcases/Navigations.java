import static org.junit.Assert.*;

import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Navigations {
	
	private static WebElement email, password, submit;  
	private static ChromeDriver driver;

	@Before
	public void beforeAll() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "/Users/rajnish/Documents/Codes/test/chromedriver102");
		driver= new ChromeDriver();
		driver.get("https://travel-advisor-self.vercel.app/");
		Thread.sleep(3000);
	}
	
	@Test
	// Validate if guideline button is clickable
	public void test1() throws InterruptedException {
		WebElement guideBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[1]/div[2]/button[1]"));
		guideBtn.click();

		Thread.sleep(1000);
		validateUrl("https://travel-advisor-self.vercel.app/guidelines");
	}
	
	@Test
	// Validate if register button is clickable
	public void test2() throws InterruptedException {
		WebElement registerBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[1]/div[2]/button[2]"));
		registerBtn.click();

		Thread.sleep(1000);
		validateUrl("https://travel-advisor-self.vercel.app/register");
	}
	
	@Test
	// validate if signin button is clickable
	public void test3() throws InterruptedException {
		WebElement siginBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[1]/div[2]/button[3]"));
		siginBtn.click();

		Thread.sleep(1000);
		validateUrl("https://travel-advisor-self.vercel.app/signin");
	}
	
	@Test
	// check if My Dashboard button exist, for guest user
	public void test4() throws InterruptedException {
		WebElement dashBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[1]/div[2]/button[2]"));
		System.out.print(dashBtn.getText());
		Assert.assertNotEquals("My Dashboard", dashBtn.getText());
	}
	
	@Test
	// check if My Dashboard button exist and working, for logged in user
	public void test5() throws InterruptedException {
		signIn();
		Thread.sleep(1000);
		WebElement dashBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[1]/div[2]/button[2]"));
		dashBtn.click();
		
		Thread.sleep(1000);
		validateUrl("https://travel-advisor-self.vercel.app/my-dashboard");
	}
	
	@Test
	// Check if Manage Sources button exist, for guest user
	public void test6() throws InterruptedException {
		WebElement srcBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[1]/div[2]/button[3]"));
		System.out.print(srcBtn.getText());
		Assert.assertNotEquals("Manage Sources", srcBtn.getText());
	}
	
	@Test
	// Check if Manage Sources button exist, for standard user
	public void test7() throws InterruptedException {
		WebElement siginBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[1]/div[2]/button[3]"));
		siginBtn.click();

		Thread.sleep(1000);
		email = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[1]/input"));
		password = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[2]/input"));
		submit = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/button"));
		
		email.sendKeys("testuser4@gmail.com");
		password.sendKeys("test123");
		submit.click();
		
		Thread.sleep(1000);
		
		WebElement srcBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[1]/div[2]/button[3]"));
		System.out.print(srcBtn.getText());
		Assert.assertNotEquals("Manage Sources", srcBtn.getText());
	}
	
	@Test
	// Check if Manage Sources button exist and working, for admin user
	public void test8() throws InterruptedException {
		signIn();
		Thread.sleep(1000);
		WebElement dashBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[1]/div[2]/button[3]"));
		dashBtn.click();
		
		Thread.sleep(1000);
		validateUrl("https://travel-advisor-self.vercel.app/manage-sources");
	}
	
	@Test
	// Check if logout button exist, for guest user
	public void test9() throws InterruptedException {
		Assert.assertEquals(driver.findElements(By.xpath("//*[@id=\"__next\"]/div/div/div[1]/div[2]/button[4]")).size(), 0);
	}
	
	@Test
	// Check if logout button exist, for logged in user
	public void test10() throws InterruptedException {
		signIn();
		Thread.sleep(5000);
		String logoutBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[1]/div[2]/button[4]")).getText();
		System.out.print(logoutBtn);
		Assert.assertEquals("Logout", logoutBtn);
	}
	
	public void validateUrl(String newUrl){
		String currentUrl = driver.getCurrentUrl();
		Assert.assertEquals(currentUrl, newUrl);
	}
	
	public void signIn() throws InterruptedException {
		WebElement siginBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[1]/div[2]/button[3]"));
		siginBtn.click();

		Thread.sleep(1000);
		email = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[1]/input"));
		password = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[2]/input"));
		submit = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/button"));
		
		email.sendKeys("rajnishkatharotiya.rk.rk@gmail.com");
		password.sendKeys("test123");
		submit.click();
		
		Thread.sleep(1000);
	}
	
	@After
	public void afterClass() {
		driver.close();
	}

}
