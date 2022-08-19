const area = prompt("Você gosta mais de 1-front-end ou 2-Back-end")

if (area == 1) {
    alert("Você pode estudar React ou VUE")
}
else {
    alert("Você pode estudar C# ou JAVA")
}

const escolha = prompt("Você 1-gostaria de seguir na area ou 2-se especializar em fullstack")
const linguagem = prompt ("Qual sao suas linguagem de programação favorita?")

switch (linguagem) {
    case "java" :
        alert("Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirido pela empresa Oracle Corporation.");
        break;
    case "react" :
        alert("O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.")
        break;  
    case " vue" :
        alert("Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.")
        break;
    case "c#" :
        alert("C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java")
        break;
    case "pyton" :
        alert("Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.")
        break;    
    case "javascript" :
        alert("JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.")
        break;    
    default:
        alert("Muito boa a linguagem, uma pena não ter informaçoes sobre ela")

}

