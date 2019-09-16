import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class AdminTesting {

	public static void main(String[] args) throws InterruptedException {

		System.setProperty("webdriver.chrome.driver", "C:\\Users\\verizon\\Downloads\\Selenium drivers\\chromedriver.exe");
		WebDriver myDriver=new ChromeDriver();
		
//		System.setProperty("webdriver.chrome.driver", "C:\\Users\\verizon\\Downloads\\Selenium drivers\\geckodriver.exe");
//		WebDriver myDriver=new FirefoxDriver();
		
		myDriver.get("http://localhost:3000/");
		myDriver.manage().window().maximize();
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div[2]/div/div/form/div[1]/div/input")).sendKeys("admin");
		Thread.sleep(1000);
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div[2]/div/div/form/div[2]/div/input")).sendKeys("admin");
		Thread.sleep(1000);
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div[2]/div/div/form/button")).click();
		Thread.sleep(3000);
		
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div/div/div/div[1]/a[2]")).click();
		Thread.sleep(1000);
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div/div/div/div[2]/div/form/div[1]/div[1]/div/div/input")).sendKeys("Pooja");
		Thread.sleep(1000);
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div/div/div/div[2]/div/form/div[1]/div[2]/div/div/input")).sendKeys("Pooja Shree");
		Thread.sleep(1000);
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div/div/div/div[2]/div/form/div[1]/div[3]/div/div/input")).sendKeys("Pooja");
		Thread.sleep(1000);
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div/div/div/div[2]/div/form/div[2]/button")).click();
		Thread.sleep(2000);
		
		myDriver.findElement(By.xpath("//*[@id='react-confirm-alert']/div/div/div/div/button")).click();
		Thread.sleep(1000);
		
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div/div/div/div[1]/a[1]")).click();
		Thread.sleep(2000);
		
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div/div/div/div[1]/a[3]")).click();
		Thread.sleep(1000);
		
//		myDriver.close();
		
	}

}
