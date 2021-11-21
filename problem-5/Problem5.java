import java.math.BigInteger;

public class Problem5 {
    public static void main(String[] args) {
        BigInteger result = new BigInteger("1");
        for(int i = 2; i <= 20; i++) {
            BigInteger copy = new BigInteger(result.toString());
            BigInteger next = new BigInteger(""+i);
            result = copy.multiply(next).divide(copy.gcd(next));
        }
        System.out.println(result.toString());
    }
}