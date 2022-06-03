import static org.junit.Assert.*;

import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class ManageUsers {

	public static ChromeDriver driver;
	public static WebElement email, password, submit;
	
	
	@Before
	public void beforeAll() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "/Users/rajnish/Documents/Codes/test/chromedriver102");
		driver = new ChromeDriver();
		driver.get("https://travel-advisor-self.vercel.app/signin");
		Thread.sleep(3000);

	}
	
	
	@Test
	public void test1() throws InterruptedException {
		signIn();
		Thread.sleep(1000);
		WebElement blockBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[3]/div[2]/div[2]/div[4]"));
		blockBtn.click();
		checkMessage("You can not block admin user!!");
	}
	
	
	@Test
	public void test2() throws InterruptedException {
		signIn();
		Thread.sleep(1000);
		WebElement blockBtn = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[3]/div[2]/div[3]/div[4]"));
		blockBtn.click();
		Assert.assertEquals(driver.findElements(By.xpath("//*[@id=\"alert-message-fm\"]")).size(), 0);
	}
	
	public void signIn() throws InterruptedException {
		email = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[1]/input"));
		password = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[2]/input"));
		submit = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/button"));

		email.sendKeys("rajnishkatharotiya.rk.rk@gmail.com");
		password.sendKeys("test123");
		submit.click();

		Thread.sleep(1000);
		driver.navigate().to("https://travel-advisor-self.vercel.app/manage-sources");
		Thread.sleep(3000);
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
