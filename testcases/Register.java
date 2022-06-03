package taSelTest;

import static org.junit.Assert.*;

import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Register {
	private static WebElement username, email, password, cPassword, terms, submit;
	private static ChromeDriver driver;

	@BeforeClass
	public static void beforeAll() throws InterruptedException {
		SetupDrivers.setup();

	}

	@Before
	public void openURL() throws InterruptedException {
		driver = new ChromeDriver();
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

	//sucesss test case
	@Test
	public void test1() throws InterruptedException {
		username.sendKeys("testuser3");
		email.sendKeys("blockeduser@gmail.com");
		password.sendKeys("test123");
		cPassword.sendKeys("test123");
		terms.click();
		submit.click();
		Thread.sleep(3000);
		String currentUrl = driver.getCurrentUrl();
		System.out.print(currentUrl);
		Assert.assertEquals(currentUrl, "https://travel-advisor-self.vercel.app/");
	}	
	
	
	//everything is empty
	@Test
	public void test2() throws InterruptedException {
		submit.click();
		checkMessage("Please enter username!");
	}

	// only user name entered
	@Test
	public void test3() throws InterruptedException {
		username.sendKeys("testuser");
		terms.click();
		submit.click();
		checkMessage("Firebase: Error (auth/invalid-email).");
	}

	// only user name entered
	@Test
	public void test4() throws InterruptedException {
		username.sendKeys("testuser");
		email.sendKeys("asdfghjk");
		terms.click();
		submit.click();
		checkMessage("Firebase: Error (auth/internal-error).");
	}

	// only user name entered
	@Test
	public void test5() throws InterruptedException {
		username.sendKeys("testuser");
		email.sendKeys("testuser123@gmail.com");
		terms.click();
		submit.click();
		checkMessage("Firebase: Error (auth/internal-error).");
	}
	
	
	@Test
	public void test6() throws InterruptedException {
		username.sendKeys("testuser");
		email.sendKeys("testuser123@gmail.com");
		terms.click();
		submit.click();
		checkMessage("Firebase: Error (auth/internal-error).");
	}
	
	
	//invalid passwords
	@Test
	public void test7() throws InterruptedException {
		reset();
		Thread.sleep(2000);
		username.sendKeys("testuser");
		email.sendKeys("testuser3@gmail.com");
		terms.click();
		submit.click();
		Thread.sleep(2000);
		checkMessage("Firebase: Error (auth/internal-error).");
	}
	
	//empty conform password
	@Test
	public void test8() throws InterruptedException {
		reset();
		username.sendKeys("testuser");
		email.sendKeys("testuser3@gmail.com");
		password.sendKeys("test123");
		submit.click();
		Thread.sleep(2000);
		checkMessage("Passwords do not match!");
	}
	
	// both different passwords
		@Test
		public void test9() throws InterruptedException {
			reset();
			username.sendKeys("testuser");
			email.sendKeys("testuser3@gmail.com");
			password.sendKeys("test123");
			cPassword.sendKeys("123");
			terms.click();
			submit.click();
			Thread.sleep(2000);
			checkMessage("Passwords do not match!");
		}
		
		
		@Test
		public void test10() throws InterruptedException {
			reset();
			username.sendKeys("testuser");
			email.sendKeys("testuser3@gmail.com");
			password.sendKeys("test123");
			cPassword.sendKeys("test123");
			submit.click();
			Thread.sleep(2000);
			checkMessage("Please select terms & conditions!!");
		}

		@Test
		public void test11() throws InterruptedException {
			reset();
			username.sendKeys("testuser");
			email.sendKeys("dhruv@gmail.com");
			password.sendKeys("test123");
			cPassword.sendKeys("test123");
			terms.click();
			submit.click();
			Thread.sleep(2000);
			checkMessage("Firebase: Error (auth/email-already-in-use).");
		}

		
		@Test
		public void test12() throws InterruptedException {
			driver.findElement(By.xpath("//body/div[@id='__next']/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]")).click();
			Thread.sleep(2000);
			String currentUrl = driver.getCurrentUrl();
			System.out.print(currentUrl);
			Assert.assertEquals(currentUrl, "https://travel-advisor-self.vercel.app/signin");
		}
		
		@Test
		public void test13() throws InterruptedException {
			driver.findElement(By.xpath("//a[contains(text(),'Go Back To Home')]")).click();
			Thread.sleep(2000);
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
		terms = driver
				.findElement(By.xpath("//body/div[@id='__next']/div[1]/div[1]/div[2]/div[1]/div[2]/div[4]/div[1]"));
		submit = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/button"));
	}

//	@AfterClass
//	public static void afterClass() {
//		driver.close();
//	}
}
