import static org.junit.Assert.*;

import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


public class SearchResults {
	
	private static WebElement email, password, submit;
	private static ChromeDriver driver;

	@Before
	public void beforeAll() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "/Users/rajnish/Documents/Codes/test/chromedriver102");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://travel-advisor-self.vercel.app/?departingDate=06/04/2022&departingLocation=YUL&goingToLocation=AMD");
		Thread.sleep(3000);
	}

	
	@Test
	// Validate if available tours exist
	public void test1() throws InterruptedException {
		checkExistance("//*[@id=\"__next\"]/div/div/div/div[3]/div/h2");
	}
	
	@Test
	// Validate if prices includes inside each tour card
	public void test2() throws InterruptedException {
		checkExistance("//*[@id=\"__next\"]/div/div/div/div[3]/div/div/div[1]/div[1]/h4");
	}
	
	
	@Test
	// Validate if guideline section exist
	public void test3() throws InterruptedException {
		checkExistance("//*[@id=\"__next\"]/div/div/div/div[5]/div/h2");
	}
	
	
	@Test
	// Trying to click save button without signin
	public void test4() throws InterruptedException {
		WebElement tourSave = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[3]/div/div/div[1]/div[2]/button[2]"));
		tourSave.click();
		
		checkMessage("Signin is required to save tours!");
	}
	
	
	@Test
	// Validate if save tours works for logged-in user
	public void test5() throws InterruptedException {
		signIn();
		WebElement tourSave = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[3]/div/div/div[1]/div[2]/button[2]"));
		if(tourSave.getText().equals("Saved")) {
			tourSave.click();
			Thread.sleep(2000);
			WebElement tourSave2 = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[3]/div/div/div[1]/div[2]/button[2]"));
			Assert.assertEquals(tourSave2.getText(), "Save");
		} else {
			tourSave.click();
			Thread.sleep(2000);
			WebElement tourSave2 = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[3]/div/div/div[1]/div[2]/button[2]"));
			Assert.assertEquals(tourSave2.getText(), "Saved");
		}
	}
	
	@Test
	// Validate if book now button is visible for tour card
	public void test6() throws InterruptedException {
		WebElement bookBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[3]/div/div/div[1]/div[2]/button[1]"));
		Assert.assertTrue(bookBtn.isDisplayed());
	}
	
	
	@Test
	// Trying to save flight without signin
	public void test7() throws InterruptedException {
		WebElement flightSave = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[4]/div/div/div[1]/div/div[4]/button[1]"));
		flightSave.click();
		
		checkMessage("Signin is required to save flights!");
	}
	
	
	@Test
	// Validating save flight with logged-in user
	public void test8() throws InterruptedException {
		signIn();
		WebElement flightSave = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[4]/div/div/div[1]/div/div[4]/button[1]"));
		if(flightSave.getText().equals("Saved")) {
			flightSave.click();
			Thread.sleep(2000);
			WebElement flightSave2 = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[4]/div/div/div[1]/div/div[4]/button[1]"));
			Assert.assertEquals(flightSave2.getText(), "Save");
		} else {
			flightSave.click();
			Thread.sleep(2000);
			WebElement flightSave2 = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[4]/div/div/div[1]/div/div[4]/button[1]"));
			Assert.assertEquals(flightSave2.getText(), "Saved");
		}
	}
	
	
	@Test
	// Validating toggle of show/hide details for searched flight card
	public void test9() throws InterruptedException {
		Thread.sleep(1000);
		WebElement showDetail = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[4]/div/div/div[1]/div/div[4]/button[2]"));
		
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
		driver.navigate().to("https://travel-advisor-self.vercel.app/?departingDate=06/04/2022&departingLocation=YUL&goingToLocation=AMD");
		Thread.sleep(3000);
	}
	
	
	public void checkMessage(String message) throws InterruptedException {
		Thread.sleep(2000);
		WebElement msgEle = driver.findElement(By.xpath("//*[@id=\"alert-message-fm\"]"));
		String msgText = msgEle.getText();
		System.out.print(msgText);
		Assert.assertEquals(message, msgText);
	}
	
	public void checkExistance(String path) {
		WebElement ele = driver.findElement(By.xpath(path));
		Assert.assertTrue(ele.isDisplayed());
	}
	
	
	@After
	public void afterClass() {
		driver.close();
	}
}
