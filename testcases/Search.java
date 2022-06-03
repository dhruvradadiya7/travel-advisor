import static org.junit.Assert.*;

import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Search {

	private static WebElement travelDate, returningDate, from, to, submit;  
	private static ChromeDriver driver;
	
	@Before
	public void beforeAll() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "/Users/rajnish/Documents/Codes/test/chromedriver102");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://travel-advisor-self.vercel.app/");
		Thread.sleep(3000);
		
		setAllElements();
		submit = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[3]/div/button"));
	}
	
	@Test
	// Success scenario, with valid fields
	public void test1() throws InterruptedException {
		travelDate.sendKeys("15/06/2022");
		returningDate.sendKeys("20/06/2022");
		from.sendKeys("YUL");
		to.sendKeys("AMD");
		submit.click();
		submit = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[3]/div/button"));
		System.out.print(submit.getText());
		Assert.assertEquals("Searching....", submit.getText());
	}
	
	@Test
	// Success scenario, without return date
	public void test2() throws InterruptedException {
		travelDate.sendKeys("15/06/2022");
		from.sendKeys("YUL");
		to.sendKeys("AMD");
		submit.click();
		submit = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[3]/div/button"));
		System.out.print(submit.getText());
		Assert.assertEquals("Searching....", submit.getText());
	}
	
	@Test
	// Trying to submit without any field except travel-date
	public void test3() throws InterruptedException {
		travelDate.sendKeys("15/06/2022");
		submit.click();
		checkMessage("Please enter all required fields!!");
	}
	
	@Test
	// Trying to submit without any field except returing-date
	public void test4() throws InterruptedException {
		returningDate.sendKeys("20/06/2022");
		submit.click();
		checkMessage("Please enter all required fields!!");
	}
	
	
	@Test
	// Trying to submit without any field except locations
	public void test5() throws InterruptedException {
		from.sendKeys("YUL");
		to.sendKeys("AMD");
		submit.click();
		checkMessage("Please enter all required fields!!");
	}
	
	@Test
	// Trying to submit without travel date 
	public void test6() throws InterruptedException {
		returningDate.sendKeys("20/06/2022");
		from.sendKeys("YUL");
		to.sendKeys("AMD");
		submit.click();
		checkMessage("Please enter all required fields!!");
	}
	
	@Test
	// Trying to submit with same origin and destination location
	public void test7() throws InterruptedException {
		travelDate.sendKeys("15/06/2022");
		returningDate.sendKeys("20/06/2022");
		from.sendKeys("YUL");
		to.sendKeys("YUL");
		submit.click();
		checkMessage("Please select To location different than From!!");
	}
	
	@Test
	// Trying to submit with past returning date from traveling date
	public void test8() throws InterruptedException {
		travelDate.sendKeys("15/06/2022");
		returningDate.sendKeys("12/06/2022");
		from.sendKeys("YUL");
		to.sendKeys("AMD");
		submit.click();
		checkMessage("Please enter later returning date than travel date!!");
	}
	
	@Test
	// Trying to submit with past traveling date from today
	public void test9() throws InterruptedException {
		travelDate.sendKeys("01/06/2022");
		returningDate.sendKeys("12/06/2022");
		from.sendKeys("YUL");
		to.sendKeys("AMD");
		submit.click();
		checkMessage("Please enter travel date as today or later!!");
	}

	
	public void checkMessage(String message) throws InterruptedException {
		Thread.sleep(2000);
		WebElement msgEle = driver.findElement(By.xpath("//*[@id=\"alert-message-fm\"]"));
		String msgText = msgEle.getText();
		System.out.print(msgText);
		Assert.assertEquals(message, msgText);
	}
	
	public static void reset() {
		travelDate.clear();
		returningDate.clear();
		from.clear();
		to.clear();
		travelDate.sendKeys("");
		returningDate.sendKeys("");
		from.sendKeys("");
		to.sendKeys("");
	}
	
	public static void setAllElements() {
		travelDate = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[3]/div/div[1]/input"));
		returningDate = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[3]/div/div[2]/input"));
		from = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[3]/div/div[3]/input"));
		to = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div/div[3]/div/div[4]/input"));
	}
	
	
	@After
	public void afterClass() {
		driver.close();
	}

}
