import static org.junit.Assert.*;

import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Register {
	private static WebElement username, email, password, cPassword, submit;  
	private static ChromeDriver driver;
	
	@BeforeClass
	public static void beforeAll() throws InterruptedException {
		SetupDrivers.setup();
		
	}
	
	@Before
	public void openURL() throws InterruptedException {
		driver= new ChromeDriver();
		driver.get("https://travel-advisor-self.vercel.app/");
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[1]/div[2]/button[2]")).click();
		Thread.sleep(3000);
		driver.manage().window().fullscreen();
		setAllElements();
	}
	
	@After
	public void close() {
		driver.close();
	}
	
	
	//username is empty
	@Test
	public void test1() throws InterruptedException {
		submit.click();
		checkMessage("Please enter username!");
	}
	
	
	//only user name entered
	@Test
	public void test2() throws InterruptedException {
		username.sendKeys("testuser");
		submit.click();
		checkMessage("Firebase: Error (auth/invalid-email).");
	}
	
	
	//empty passwords
	@Test
	public void test3() throws InterruptedException {
		reset();
		Thread.sleep(2000);
		username.sendKeys("testuser");
		email.sendKeys("testuser3@gmail.com");
		submit.click();
		Thread.sleep(2000);
		checkMessage("Firebase: Error (auth/internal-error).");
	}
	
	//empty conform password
	@Test
	public void test4() throws InterruptedException {
		reset();
		username.sendKeys("testuser");
		email.sendKeys("testuser3@gmail.com");
		password.sendKeys("test123");
		submit.click();
		Thread.sleep(2000);
		checkMessage("Passwords do not match!");
	}
	
	//empty username
	@Test
	public void test5() {
		reset();
		email.sendKeys("testuser3@gmail.com");
		password.sendKeys("test123");
		cPassword.sendKeys("test123");
		submit.click();
		String currentUrl = driver.getCurrentUrl();
		System.out.print(currentUrl);
		Assert.assertEquals(currentUrl, "https://travel-advisor-self.vercel.app/register");
	}
	
	
	//sucesss test case
	@Test
	public void test6() throws InterruptedException {
		username.sendKeys("testuser3");
		email.sendKeys("testuser4@gmail.com");
		password.sendKeys("test123");
		cPassword.sendKeys("test123");
		submit.click();
		Thread.sleep(3000);
		String currentUrl = driver.getCurrentUrl();
		System.out.print(currentUrl);
		Assert.assertEquals(currentUrl, "https://travel-advisor-self.vercel.app/");
	}
	
	
	public void checkMessage(String message) throws InterruptedException {
		Thread.sleep(2000);
		WebElement msgEle = driver.findElement(By.xpath("//*[@id=\"alert-message-fm\"]"));
		String msgText = msgEle.getText();
		System.out.print(msgText);
		Assert.assertEquals(message, msgText);
	}
	
	public static void reset() {
		username.sendKeys("");
		email.sendKeys("");
		password.sendKeys("");
		cPassword.sendKeys("");

		username.clear();
		email.clear();
		password.clear();
		cPassword.clear();
	}
	
	public static void setAllElements() {
		username = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[1]/input"));
		email = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[2]/input"));
		password = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[3]/div[1]/input"));
		cPassword = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[3]/div[2]/input"));
		submit = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/button"));
	}
	
	
	@AfterClass
	public static void afterClass() {
		driver.close();
	}
}
