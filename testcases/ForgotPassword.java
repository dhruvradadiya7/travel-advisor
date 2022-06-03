import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class ForgotPassword {

	private static WebElement email, submit;
	private static ChromeDriver driver;

	@Before
	public void beforeAll() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "/Users/rajnish/Documents/Codes/test/chromedriver102");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://travel-advisor-self.vercel.app/forgot-password");
		Thread.sleep(3000);
	}

	
	@Test
	// Submitting without any input
	public void test1() throws InterruptedException {
		setElements();
		submit.click();
		checkMessage("Firebase: Error (auth/missing-email).");
	}
	
	@Test
	// Submitting with invalid formated email
	public void test2() throws InterruptedException {
		setElements();
		email.sendKeys("aaaaaaaa");
		submit.click();
		checkMessage("Firebase: Error (auth/invalid-email).");
	}
	
	
	@Test
	// Submitting with wrong email address
	public void test3() throws InterruptedException {
		setElements();
		email.sendKeys("rasdasdas@fasd.acsc");
		submit.click();
		checkMessage("Firebase: Error (auth/user-not-found).");
	}
	
	
	@Test
	// Submitting with correct email address
	public void test4() throws InterruptedException {
		setElements();
		email.sendKeys("rajnishk@gmail.com");
		submit.click();
		Thread.sleep(3000);
		Assert.assertEquals(driver.getCurrentUrl(), "https://travel-advisor-self.vercel.app/signin");
	}
	
	@Test
	// Validating signin button
	public void Test5() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[1]/button")).click();
		Thread.sleep(2000);
		String currentUrl = driver.getCurrentUrl();
		Assert.assertEquals(currentUrl, "https://travel-advisor-self.vercel.app/signin");
	}
	
	@Test
	// Validating home button
	public void Test6() throws InterruptedException {
		driver.findElement(By.xpath("//a[contains(text(),'Go Back To Home')]")).click();
		Thread.sleep(2000);
		String currentUrl = driver.getCurrentUrl();
		System.out.print(currentUrl);
		Assert.assertEquals(currentUrl, "https://travel-advisor-self.vercel.app/");
	}
	
	
	public void setElements() {
		email = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div/input"));
		submit = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/button"));
	}
	
	public void checkMessage(String message) throws InterruptedException {
		Thread.sleep(2000);
		WebElement msgEle = driver.findElement(By.xpath("//*[@id=\"alert-message-fm\"]"));
		String msgText = msgEle.getText();
		System.out.print(msgText);
		Assert.assertEquals(message, msgText);
	}
	
	@After
	public void afterClass() {
		driver.close();
	}

}
