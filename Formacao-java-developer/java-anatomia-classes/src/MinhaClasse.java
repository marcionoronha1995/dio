public class MinhaClasse {
    /**
     * @param args
     */
    public static void main (String [] args) {
        System.out.print ("Olá Turma! Variáveis");
        String meuNome = "Marcio";
        int anoNascimento = 1969;
        boolean simNao = true;
        double altura = 1.62;
 
        String primeiroNome = "Zeferino";
        String segundoNome = "Noronha";
        String nomeCompleto = nomeCompleto(primeiroNome, segundoNome);
        
        System.out.println(meuNome);
        System.out.println(anoNascimento);
        System.out.println(simNao);
        System.out.println(altura);
        System.out.println(nomeCompleto);


        anoNascimento = 2023;
        simNao = false;


    } 

    public static String nomeCompleto (String primeiroNome, String segundoNome) {
        System.out.println("--..00..00");
        return "Resultado do metodo " + primeiroNome.concat(" " + segundoNome);
    }
}
