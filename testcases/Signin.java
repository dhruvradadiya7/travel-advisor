package fmSelTest;

import static org.junit.Assert.*;

import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Signin {
	private static WebElement email, password, submit;  
	private static ChromeDriver driver;
	
	@BeforeClass
	public static void beforeAll() throws InterruptedException {
		SetupDrivers.setup();
		
	}
	
	@Before
	public void getURL() throws InterruptedException {
		driver= new ChromeDriver();
		driver.get("https://travel-advisor-self.vercel.app/");
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[1]/div[2]/button[3]")).click();
		Thread.sleep(3000);
		driver.manage().window().fullscreen();
		setAllElements();
	}
	
	//all details empty
	@Test
	public void test1() throws InterruptedException {
		submit.click();
		checkMessage("Firebase: Error (auth/invalid-email).");
	}
	
	//invalid e-mail
	@Test
	public void test2() throws InterruptedException {
		email.sendKeys("asdsadas");
		submit.click();
		checkMessage("Firebase: Error (auth/invalid-email).");
	}
	
	
	//empty password
	@Test
	public void test3() throws InterruptedException {
		reset();
		email.sendKeys("dhruv@gmail.com");
		submit.click();
		checkMessage("Firebase: Error (auth/internal-error).");
	}
	
	@Test
	public void test4() throws InterruptedException {
		reset();
		email.sendKeys("dhruv@gmail.com");
		password.sendKeys("asdasd");
		submit.click();
		checkMessage("Firebase: Error (auth/wrong-password).");
	}
	
	// Success test case
	@Test
	public void test5() throws InterruptedException {
		reset();
		email.sendKeys("dhruv@gmail.com");
		password.sendKeys("Qwerty@7");
		submit.click();
		Thread.sleep(2000);
		String currentUrl = driver.getCurrentUrl();
		System.out.print(currentUrl);
		Assert.assertEquals(currentUrl, "https://travel-advisor-self.vercel.app/");
	}
	
	@Test
	public void Test6() throws InterruptedException {
		driver.findElement(By.xpath("//body/div[@id='__next']/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]")).click();
		Thread.sleep(2000);
		String currentUrl = driver.getCurrentUrl();
		System.out.print(currentUrl);
		Assert.assertEquals(currentUrl, "https://travel-advisor-self.vercel.app/register");
	}
	
	@Test
	public void Test7() throws InterruptedException {
		driver.findElement(By.xpath("//a[contains(text(),'Go Back To Home')]")).click();
		Thread.sleep(2000);
		String currentUrl = driver.getCurrentUrl();
		System.out.print(currentUrl);
		Assert.assertEquals(currentUrl, "https://travel-advisor-self.vercel.app/");
	}
	
	@Test
	public void Test8() throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(text(),'Forgot your password ?')]")).click();
		Thread.sleep(2000);
		String currentUrl = driver.getCurrentUrl();
		System.out.print(currentUrl);
		Assert.assertEquals(currentUrl, "https://travel-advisor-self.vercel.app/forgot-password");
	}
	
	public void checkMessage(String message) throws InterruptedException {
		Thread.sleep(2000);
		WebElement msgEle = driver.findElement(By.xpath("//*[@id=\"alert-message-fm\"]"));
		String msgText = msgEle.getText();
		System.out.print(msgText);
		Assert.assertEquals(message, msgText);
	}
	
	public static void reset() {
		email.clear();
		password.clear();
		email.sendKeys("");
		password.sendKeys("");
	}
	
	public static void setAllElements() {
		email = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[1]/input"));
		password = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[2]/input"));
		submit = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/button"));
	}
	
	
	@After
	public void afterClass() {
		driver.quit();
	}
}
