import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AddAdminTesting {

	public static void main(String[] args) throws InterruptedException {

		System.setProperty("webdriver.chrome.driver", "C:\\Users\\verizon\\Downloads\\Selenium drivers\\chromedriver.exe");

		WebDriver myDriver=new ChromeDriver();
		myDriver.get("http://localhost:8000/adminAdd");
		myDriver.manage().window().maximize();
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div/div/div/div[1]/a[2]")).click();
		Thread.sleep(1000);
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div/div/div/div[2]/div/form/div[1]/div[1]/div/div/input")).sendKeys("Siji");
		Thread.sleep(1000);
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div/div/div/div[2]/div/form/div[1]/div[2]/div/div/input")).sendKeys("Siji Prabhakaran");
		Thread.sleep(1000);
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div/div/div/div[2]/div/form/div[1]/div[3]/div/div/input")).sendKeys("SijiP");
		Thread.sleep(1000);
		myDriver.findElement(By.xpath("//*[@id='root']/div/div/div/div/div/div/div[2]/div/form/div[2]/button")).click();
		Thread.sleep(2000);
//		myDriver.close();
		
	}
}
