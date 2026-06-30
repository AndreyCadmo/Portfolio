import { EmailDataType } from "@/components/ui/form";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
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

        // Envia os dois e-mails em paralelo
        const [emailToMe, emailToClient] = await Promise.all([
            transporter.sendMail({
                from: `"WEBSITE CONTATO" <${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_USER,
                subject: `Nova Mensagem: ${data.assunto || "Formulário de Contato"}`,
                text: `Nova mensagem recebida de ${data.nome} (${data.email}):\n\n${data.mensagem}`,
                html: emailEmbedMe(data)
            }),
            transporter.sendMail({
                from: `"Andrey Cadmo - Confirmação" <${process.env.EMAIL_USER}>`,
                to: data.email,
                subject: "Obrigado pelo seu contato!",
                text: `Olá ${data.nome},\n\nAgradeço por entrar em contato! Recebi sua mensagem e em breve retornarei com uma resposta.\n\nMensagem recebida:\n${data.mensagem}\n\nAtenciosamente,\nAndrey Cadmo`,
                html: emailEmbedClient(data)
            })
        ]);

        if (emailToMe.accepted && emailToClient.accepted) {
            return new Response(JSON.stringify({ message: "Email enviado com sucesso!" }), { status: 200, headers: { "Content-Type": "application/json" } });
        } else {
            throw new Error("Pelo menos um e-mail não foi aceito.");
        }
    } catch (error) {
        console.error("Erro no envio de e-mail:", error);
        return new Response(JSON.stringify({ message: "Erro ao enviar email!", error: (error as Error).message }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
}

const emailEmbedMe = (data: EmailDataType) => {
    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Nova Mensagem Recebida</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin: 0; padding: 0; background-color: #09090b; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #09090b; padding: 20px 10px;">
        <tr>
            <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #18181b; border: 1px solid #27272a; border-radius: 12px; overflow: hidden; border-collapse: separate;">
                    <tr>
                        <td align="center" style="center" style="background-color: #2563eb; padding: 30px 20px; border-radius: 12px 12px 0 0; color: #ffffff !important; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 800;">
                            <span style="color: #ffffff !important; font-size: 24px; font-weight: 800; tracking-tight; display: block; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; -webkit-text-size-adjust: none;">
                                Nova mensagem recebida via Portfólio
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 30px; text-align: left;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0f0f11; border: 1px solid #27272a; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-collapse: separate;">
                                <tr><td style="padding-bottom: 8px; font-size: 14px;"><span style="font-weight: 700; color: #a1a1aa; margin-right: 5px;">Nome:</span> <span style="color: #f4f4f5;">${data.nome}</span></td></tr>
                                <tr><td style="padding-bottom: 8px; font-size: 14px;"><span style="font-weight: 700; color: #a1a1aa; margin-right: 5px;">Email:</span> <span style="color: #f4f4f5;"><a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a></span></td></tr>
                                <tr><td style="font-size: 14px;"><span style="font-weight: 700; color: #a1a1aa; margin-right: 5px;">Assunto:</span> <span style="color: #f4f4f5;">${data.assunto || "Não informado"}</span></td></tr>
                            </table>
                            
                            <p style="font-size: 14px; font-weight: 700; color: #a1a1aa; margin: 0 0 10px 0;">Mensagem:</p>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td style="background-color: #27272a; color: #e4e4e7; border-left: 4px solid #2563eb; padding: 15px; border-radius: 4px; font-size: 14px; line-height: 1.6;">
                                        ${data.mensagem}
                                    </td>
                                </tr>
                            </table>

                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 30px;">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:${data.email}?subject=Re: ${data.assunto || "Contato do site"}" style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 14px;">Responder por E-mail →</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px 30px; font-size: 12px; color: #71717a; border-top: 1px solid #27272a;">
                            &copy; 2026 <strong style="color: #f4f4f5;">Andrey Cadmo</strong> - <a href="https://andreycadmo.dev.br" style="color: #3b82f6; text-decoration: none;">andreycadmo.dev.br</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;
}

const emailEmbedClient = (data: EmailDataType) => {
    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Obrigado pelo seu Contato!</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin: 0; padding: 0; background-color: #09090b; font-family: 'Segoe UI', Helvetica, Arial, sans-serif;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #09090b; padding: 20px 10px;">
        <tr>
            <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #18181b; border: 1px solid #27272a; border-radius: 12px; overflow: hidden; border-collapse: separate;">
                    <tr>
                        <td align="center" style="center" style="background-color: #2563eb; padding: 30px 20px; border-radius: 12px 12px 0 0; color: #ffffff !important; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 800;">
                            <span style="color: #ffffff !important; font-size: 24px; font-weight: 800; tracking-tight; display: block; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; -webkit-text-size-adjust: none;">
                                Obrigado por entrar em contato!
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 30px; text-align: center; color: #e4e4e7; font-size: 15px; line-height: 1.6;">
                            <p style="margin: 0 0 15px 0;">Olá <strong style="color: #f4f4f5;">${data.nome}</strong>,</p>
                            <p style="margin: 0 0 15px 0;">Recebi sua mensagem com sucesso através do formulário do meu portfólio.</p>
                            <p style="margin: 0 0 25px 0;">Agradeço o interesse! Analisarei o conteúdo e retornarei com uma resposta o mais breve possível.</p>
                            
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                                <tr>
                                    <td align="center">
                                        <a href="https://andreycadmo.dev.br" style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 14px;">Explorar Portfólio →</a>
                                    </td>
                                </tr>
                            </table>
                            
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #27272a; padding-top: 20px; text-align: left;">
                                <tr>
                                    <td>
                                        <p style="font-size: 13px; font-weight: 700; color: #a1a1aa; margin: 0 0 8px 0;">Mensagem enviada por você:</p>
                                        <p style="font-size: 13px; font-style: italic; color: #71717a; margin: 0 0 15px 0; line-height: 1.5;">
                                            "${data.mensagem}"
                                        </p>
                                        <p style="font-size: 11px; color: #52525b; margin: 0;">Este é um e-mail automático de confirmação de recebimento.</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px 30px; border-top: 1px solid #27272a;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="left" style="font-size: 12px; color: #71717a; vertical-align: middle;">
                                        &copy; 2026 <strong style="color: #f4f4f5;">Andrey Cadmo</strong> - <a href="https://andreycadmo.dev.br" style="color: #3b82f6; text-decoration: none;">andreycadmo.dev.br</a>
                                    </td>
                                    <td align="right" style="vertical-align: middle;">
                                        <img src="https://andreycadmo.dev.br/images/Ac.png" alt="Ac" style="max-width: 30px; height: auto; display: block; filter: brightness(0) invert(1); opacity: 0.6;" />
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;
}