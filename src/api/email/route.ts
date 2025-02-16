import { EmailDataType } from "@/components/clientSide/form";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const data: EmailDataType = await req.json();

    const [emailToMe, emailToClient] = await Promise.all([
        transporter.sendMail({
            from: `"WEBSITE CONTATO" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "Formulário de Contato preenchido",
            text: data.mensagem,
            html: emailEmbedMe(data)
        }),
        transporter.sendMail({
            from: `"Andrey Cadmo - Contato" <${process.env.EMAIL_USER}>`,
            to: data.email,
            subject: "Contato do site",
            text: data.mensagem,
            html: emailEmbedClient(data)
        })
    ]);
    
    if (emailToMe.accepted && emailToClient.accepted) {
        return new Response(JSON.stringify({ message: "Email enviado com sucesso!" }), { status: 200, headers: { "Content-Type": "application/json" } });
    } else {
        return new Response(JSON.stringify({ message: "Erro ao enviar email!" }), { status: 500, headers: { "Content-Type": "application/json" } });
    }

}

const emailEmbedMe = (data: EmailDataType) => {

    return `
        <!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Andrey Cadmo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        div {
            background-color: #121212;
            color: #fff;
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            border-radius: 5px;
            border-color: #1b1b1b;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
        }

        h1 {
            text-align: center;
        }

        p {
            font-size: 16px;
        }

        img {
            display: block;
            margin: 0 auto;
            margin-top: 20px;
            width: 100px;
        }

        section {
            margin-top: 10vw;
        }
    </style>
</head>
<body>
    <div>
        <h1>FORMULÁRIO PREENCHIDO ✔</h1>

        <h2>Dados Fornecidos:</h2>
        <p>Nome: ${data.nome}</p>
        <p>Email: ${data.email}</p>
        <p>Assunto: ${data.assunto}</p>
        <p>Mensagem: ${data.mensagem} </p>
        
        <img src="https://andreycadmo.me/imagens/logos/Ac.png" alt="Logo_AC">
    </div>
</body>
</html>
    `
}

const emailEmbedClient = (data: EmailDataType) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obrigado pelo Contato!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #1e293b;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            color: #e2e8f0;
        }
        .header {
            background-color: #2563eb;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            color: #fff;
            font-size: 24px;
            font-weight: bold;
        }
        .content {
            padding: 20px;
            font-size: 16px;
            color: #e2e8f0;
        }
        .footer {
            margin-top: 20px;
            padding: 15px;
            font-size: 14px;
            color: #94a3b8;
            border-top: 1px solid #334155;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 15px;
            background: #2563eb;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }
        .btn:hover {
            background: #1d4ed8;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Obrigado pelo seu contato!</div>
        <div class="content">
            <p>Olá ${data.nome},</p>
            <p>Agradeço por entrar em contato! Recebi sua mensagem e em breve retornarei com uma resposta.</p>
            <p>Enquanto isso, sinta-se à vontade para explorar meu portfólio e conhecer mais sobre meu trabalho.</p>
            <a href="http://andreycadmo.me" class="btn">Acessar Portfólio</a>
        </div>
        <div class="footer">
            &copy; 2025 Andrey Cadmo - <a href="http://andreycadmo.me" style="color: #60a5fa;">andreycadmo.me</a>
        </div>
    </div>
</body>
</html>
        `
}