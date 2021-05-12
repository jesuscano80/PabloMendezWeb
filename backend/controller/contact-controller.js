import nodemailer from "nodemailer"; 


export const sendEmail = async (req, res)=>{
    const {name, email, message, subscribe}= req.body;
    const structure= `<h1>Envio de formulario web Pablo Méndez</h1>
    <ul>
        <li> Usuario : ${name}</li>
        <li> Email : ${email}</li>     
    </ul>
    <p> Mensaje : ${message}</p>
    `;

const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "f3662a633214e7",
          pass: "500cd97304755a"
        }
      });

const info = await transporter.sendMail({
        from: "' jesus cano' <jesuscano@yahoo.es>",
        to: " jesuscano@yahoo.es",
        subject: "website Pablo",
        html: structure
    })

    console.log(info);

    res.json({funciona:"si"})

}
