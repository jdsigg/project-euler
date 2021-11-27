import java.io.FilenameFilter;
import java.math.BigInteger;
import java.util.ArrayList;

public class Problem33 {

    public static void main(String[] args) {

        ArrayList<Integer> numerators = new ArrayList<>();
        ArrayList<Integer> denominators = new ArrayList<>();

        for(int i = 10; i < 100; i++) {
            for(int j = i + 1; j < 100; j++) {
                // Fractions are i / j
                String iAsStr = Integer.toString(i);
                String jAsStr = Integer.toString(j);
                BigInteger iStart = new BigInteger(iAsStr);
                BigInteger jStart = new BigInteger(jAsStr);
                BigInteger gcd = iStart.gcd(jStart);
                iStart = iStart.divide(gcd);
                jStart = jStart.divide(gcd);

                String number = "f";

                for(int k = 0; k < 2; k++) {
                    String num = Character.toString(iAsStr.charAt(k));
                    if(!num.equals("0") && jAsStr.contains(num)) {
                        number = num;
                        break;
                    }
                }

                if(number != "f") {
                    iAsStr = iAsStr.replace(number, "");
                    jAsStr = jAsStr.replace(number, "");

                    if(iAsStr.length() != 0 && jAsStr.length() != 0) {
                        BigInteger newI = new BigInteger(iAsStr);
                        BigInteger newJ = new BigInteger(jAsStr);
                        BigInteger newGcd = newI.gcd(newJ);
                        newI = newI.divide(newGcd);
                        newJ = newJ.divide(newGcd);

                        if(newI.toString().equals(iStart.toString()) && newJ.toString().equals(jStart.toString())) {
                            numerators.add(i);
                            denominators.add(j);
                        }
                    }
                }
            }
        }

        int numeratorProduct = 1;
        int denominatorProduct = 1;
        for(int i = 0; i < numerators.size(); i++) {
            numeratorProduct *= numerators.get(i);
            denominatorProduct *= denominators.get(i);
        }

        BigInteger finalNumerator = new BigInteger(Integer.toString(numeratorProduct));
        BigInteger finalDenominator = new BigInteger(Integer.toString(denominatorProduct));
        BigInteger finalGcd = finalNumerator.gcd(finalDenominator);

        System.out.println(finalDenominator.divide(finalGcd));
    }
}