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

    const emailToMe = await transporter.sendMail({
        from: `"WEBSITE CONTATO" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "Formulário de Contato preenchido",
        text: data.mensagem,
        html: emailEmbedMe(data)
    });
    const emailToClient = await transporter.sendMail({
        from: `"Andrey Cadmo - Contato" <${process.env.EMAIL_USER}>`,
        to: data.email,
        subject: "Contato do site",
        text: data.mensagem,
        html: emailEmbedClient(data)
    });

    return new Response(JSON.stringify({
        status: 200,
        message: "Email enviado com sucesso!",
        other: emailToClient, emailToMe
    }), { status: 200 });
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
        <h1>FORMULÁRIO RECEBIDO!</h1>

        <section>
            <p>Olá, ${data.nome} 👋 </p>
            <p>Seu formulário foi recebido com sucesso!</p>
            <p>Em breve entrarei em contato com você.</p>
        </section>

        <section>
            <p>Este é um email automático, favor não responder.</p>
            <p>Atenciosamente, <br>Andrey Cadmo</p>
        </section>
        <img src="https://andreycadmo.me/imagens/logos/Ac.png" alt="Logo_AC">
    </div>
</body>
</html>
        `
}