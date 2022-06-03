import static org.junit.Assert.*;

import java.util.List;

import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Dashboard {

	private static WebElement email, password, submit;
	private static ChromeDriver driver;

	@Before
	public void beforeAll() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "/Users/rajnish/Documents/Codes/test/chromedriver102");
		driver= new ChromeDriver();
		driver.get("https://travel-advisor-self.vercel.app/signin");
		Thread.sleep(3000);
		
	}
	
	@Test
	// Trying to access dashboard without signin 
	public void test1() throws InterruptedException {
		driver.navigate().to("https://travel-advisor-self.vercel.app/my-dashboard");
		Thread.sleep(2000);
		String currentUrl = driver.getCurrentUrl();
		Assert.assertEquals(currentUrl, "https://travel-advisor-self.vercel.app/");
	}
	
	@Test
	// if saved flights title exist
	public void test2() throws InterruptedException {
		signIn();
		checkExistance("//*[@id=\"__next\"]/div/div/div/div[2]/div[1]/div/h2");
	}
	
	@Test
	// if saved tour title exist
	public void test3() throws InterruptedException {
		signIn();
		checkExistance("//*[@id=\"__next\"]/div/div/div/div[2]/div[2]/div/h2");
	}
	
	@Test
	// if tour card has save button with saved text
	public void test4() throws InterruptedException {
		signIn();
		WebElement tourSave = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[2]/div[2]/div/div/div[1]/div[2]/button[2]"));
		Assert.assertTrue(tourSave.getText().equals("Saved"));
	}
	
	@Test
	// check if tour card is removed after unsaved
	public void test5() throws InterruptedException {
		signIn();
		List<WebElement> tourSave = driver.findElements(By.cssSelector(".searched-card_tour .global_save-btn"));
		tourSave.get(tourSave.size() - 1).click();
		Thread.sleep(2000);
		List<WebElement> tourSave2 = driver.findElements(By.cssSelector(".searched-card_tour .global_save-btn"));
		Assert.assertNotEquals(tourSave2.size(), tourSave.size());
	}
	
	@Test
	// validated if book now button is visible in tour card
	public void test6() throws InterruptedException {
		signIn();
		WebElement bookBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[2]/div[2]/div/div/div[1]/div[2]/button[1]"));
		Assert.assertTrue(bookBtn.isDisplayed());
	}
	
	@Test
	// check if flight card has save button with saved text
	public void test7() throws InterruptedException {
		signIn();
		WebElement flightSave = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[2]/div[1]/div/div/div[1]/div/div[4]/button[1]"));
		Assert.assertTrue(flightSave.getText().equals("Saved"));
	}
	
	@Test
	// check if flight card is removed after unsaved
	public void test8() throws InterruptedException {
		signIn();
		List<WebElement> flightSave = driver.findElements(By.cssSelector(".searched-flight_component .global_save-btn"));
		flightSave.get(flightSave.size() - 1).click();
		Thread.sleep(2000);
		List<WebElement> flightSave2 = driver.findElements(By.cssSelector(".searched-flight_component .global_save-btn"));
		Assert.assertNotEquals(flightSave2.size(), flightSave.size());
	}

	
	@Test
	// check if show/hide detail toggle works in flight card
	public void test9() throws InterruptedException {
		signIn();
		WebElement showDetail = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[2]/div[1]/div/div/div[1]/div/div[4]/button[2]"));
		
		if(showDetail.getText().equals("Show details")) {
			showDetail.click();
			System.out.print(showDetail.getText());
			Thread.sleep(2000);
			Assert.assertEquals(showDetail.getText(), "Hide details");
		} else {
			showDetail.click();
			Thread.sleep(2000);
			Assert.assertEquals(showDetail.getText(), "Show details");
		}
	}
	
	
	public void checkExistance(String path) {
		WebElement ele = driver.findElement(By.xpath(path));
		Assert.assertTrue(ele.isDisplayed());
	}
	
	public void signIn() throws InterruptedException {
		email = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[1]/input"));
		password = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[2]/input"));
		submit = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/button"));
		
		email.sendKeys("rajnishkatharotiya.rk.rk@gmail.com");
		password.sendKeys("test123");
		submit.click();
		
		Thread.sleep(1000);
		driver.navigate().to("https://travel-advisor-self.vercel.app/my-dashboard");
		Thread.sleep(3000);
	}
	
	@After
	public void afterClass() {
		driver.close();
	}
}
