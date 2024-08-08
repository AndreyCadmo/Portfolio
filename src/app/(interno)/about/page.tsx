import Image from "next/image";

export default function Page() {
  return (
    <div>
      <article className=" mx-auto max-w-5xl md:text-justify p-4 prose prose-p:text-black dark:prose-invert dark:prose-p:text-white lg:prose-xl">
        <h1>Sobre Mim</h1>

        <Image className="float-right ml-4 rounded-[3rem] about-image" src={"/imagens/AndreyTwo.jpg"} width={200} height={0} alt="I"></Image>

        <p>Meu nome é Andrey Cadmo estou atualmente cursando o ensino superior em Ciência da Computação.</p>

        <p>Sou um desenvolvedor Full-Stack apaixonado por tecnologia, com foco principal no    desenvolvimento front-end. Tenho ampla experiência na criação de aplicações com HTML, CSS e JavaScript, incluindo projetos em Vanilla JS e JQuery. Nos meus projetos mais recentes, tenho trabalhado extensivamente com Node.js.
          Possuo conhecimentos avançados em frameworks modernos como Angular, React e Next.js, e estou desenvolvendo meu portfólio atual utilizando Next.js. Além do front-end, venho expandindo meus conhecimentos em back-end, estudando Java e bancos de dados, com ênfase em queries e procedures SQL
        </p>
        <p>
          Estou empenhado em aprimorar minhas habilidades em WebServices, explorando arquiteturas REST, GraphQL e gRPC. Com uma sólida base técnica e uma paixão contínua por aprendizado, estou sempre buscando novas oportunidades para crescer e contribuir em projetos desafiadores.</p>

        <section>
          <h2>Hobbies e Interesses</h2>
          <p>Eu sou um entusiasta de jogos, e passo boa parte do meu tempo livre envolvido em diversas aventuras virtuais. Além dos jogos, também encontro prazer em programar, especialmente quando os projetos são desafiadores e divertidos. Minha paixão pela tecnologia é evidente, e frequentemente me dedico a programar como uma forma de entretenimento. Outra atividade que aprecio é ir à academia, onde me mantenho ativo e cuido da minha saúde. A música também ocupa um lugar especial na minha vida, proporcionando momentos de relaxamento e inspiração.
          </p>
          <p>Além dos meus hobbies, tenho interesses variados que complementam minhas habilidades e conhecimentos. Já realizei cursos de Office e de VideoMaker, demonstrando meu desejo de aprimorar minhas competências e expandir meu repertório técnico. Meu interesse pela tecnologia vai além da programação, abrangendo também ferramentas que melhoram minha produtividade e criatividade. Esses cursos refletem minha dedicação em aprender e me desenvolver continuamente, mantendo-me atualizado com as tendências e demandas do mercado.
          </p>
        </section>
      </article>
    </div>
  );
}