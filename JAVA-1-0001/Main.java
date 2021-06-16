public class Main {
  public static void main(String[] args) {
	System.out.println(huehueGenerator("o rato roeu"));
    //System.out.println(huehueGenerator("o r4to r0eu"));
  }
  
  public static String huehueGenerator(String text) {
  	//https://stackoverflow.com/a/18590949
  	if(text.matches(".*\\d.*")) return "entrada inválida";
    
    int count = 0;
    String hueText = "";

    for (var i = 0; i < text.length(); i++) {
        if(Character.isLetter(text.charAt(i))) {
            if(count % 2 != 0) {
                hueText += Character.toUpperCase(text.charAt(i));
            }else{
                hueText += Character.toLowerCase(text.charAt(i));
            }
            count++;
        }else{
            hueText += text.charAt(i);
        }
    }

    return hueText;
  }
}