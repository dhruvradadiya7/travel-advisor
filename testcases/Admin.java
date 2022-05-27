package taSelTest;

import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.Test;

public class Admin {

	static ChromeDriver driver;
	static WebElement email, password, submit, adminBtn, stopBtn;
	static WebElement manageResource, addNewAirportCode, DeleteAirportCode, errorBox;
	
	
	
	@BeforeClass
	public static void beforeAll() throws InterruptedException {
		SetupDrivers.setup();
		driver= new ChromeDriver();
		driver.get("http://localhost:3000/signin");
		Thread.sleep(3000);
		email = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[1]/input"));
		password = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[2]/input"));
		submit = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/button"));
		email.sendKeys("dhruv@gmail.com");
		password.sendKeys("Qwerty@7");
		submit.click();
		driver.get("http://localhost:3000/manage-sources");
		Thread.sleep(3000); 
	}
	
	//add new airport
	@Test
	public void test1() throws InterruptedException {
		addNewAirportCode = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[1]/button"));
		addNewAirportCode.click();
		Thread.sleep(3000);   
		addNewAirportCode = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[1]/input"));
		addNewAirportCode.sendKeys("TST"+Keys.TAB+"TESTAIRPORT"+Keys.TAB+"TestCountry"+Keys.TAB+"IN");
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[5]/div")).click();
	}
	
	//delete Added airport code
	@Test
	public void test2() throws InterruptedException {
		Thread.sleep(1000);   
		DeleteAirportCode = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[5]/div[2]"));
		DeleteAirportCode.click();
	}
	
	
	//add new airport with empty fields
	@Test
	public void test3() throws InterruptedException {
		addNewAirportCode = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[1]/button"));
		addNewAirportCode.click();
		Thread.sleep(3000);   
		addNewAirportCode = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[1]/input"));
		addNewAirportCode.sendKeys("");
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[5]/div")).click();
		errorBox = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[4]"));
		boolean res = errorBox.isDisplayed();
		Assert.assertTrue(res);
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[5]/svg[2]")).click();
		
	}
	
	//add new airport with empty Airport name
		@Test
		public void test4() throws InterruptedException {
			addNewAirportCode = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[1]/button"));
			addNewAirportCode.click();
			Thread.sleep(3000);   
			addNewAirportCode = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[1]/input"));
			addNewAirportCode.sendKeys("TST");
			driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[5]/div")).click();
			errorBox = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[4]"));
			boolean res = errorBox.isDisplayed();
			Assert.assertTrue(res);
			driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[5]/div[2]")).click();
			
		}
		
		//add new airport name with empty country name
		@Test
		public void test5() throws InterruptedException {
			addNewAirportCode = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[1]/button"));
			addNewAirportCode.click();
			Thread.sleep(3000);   
			addNewAirportCode = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[1]/input"));
			addNewAirportCode.sendKeys("TST"+Keys.TAB+"TESTAIRPORT");
			driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[5]/div")).click();
			errorBox = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[4]"));
			boolean res = errorBox.isDisplayed();
			Assert.assertTrue(res);
			driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[5]/div[2]")).click();
			
		}
		
		//add new airport name country code more than two letters
				@Test
				public void test6() throws InterruptedException {
					addNewAirportCode = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[1]/button"));
					addNewAirportCode.click();
					Thread.sleep(3000);   
					addNewAirportCode = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[1]/input"));
					addNewAirportCode.sendKeys("TST"+Keys.TAB+"TESTAIRPORT"+Keys.TAB+"SAMCOUNTRY"+Keys.TAB+"AAA");
					driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[5]/div")).click();
					errorBox = driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[4]"));
					boolean res = errorBox.isDisplayed();
					Assert.assertTrue(res);
					driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[7]/div[5]/div[2]")).click();
					
				}
		
		@AfterClass
		public static void afterAll() {
			driver.quit();
		}


}
