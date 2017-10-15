import java.io.*;

public class test {
	public static void main (String[] args) throws Exception {
           BufferedReader keyboard;
           ...
           String output = inputString;
           if (output.length() >= 2) {
           	output = inputString.subString(0,1) + inputString.subString(2);
           }

           System.out.println(output);
	}
}
