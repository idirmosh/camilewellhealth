import sgMail from "@sendgrid/mail";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

const zohoEmail = process.env.ZOHO_EMAIL;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method === "POST") {
    const { fname, phone, time, desc, timezone } = req.body;
    const firstName = fname.split(" ")[0];
    const msg = {
      to: zohoEmail,
      from: zohoEmail,
      templateId: process.env.SENDGRID_TEMPLATE_ID,
      dynamicTemplateData: {
        subject: `New Discovery call from ${firstName}`,
        name: firstName,
        fullName: fname,
        desc,
        phone,
        timezone,
        time,
        date: format(new Date(), "dd MMMM yyyy", { locale: enUS }),
      },
    };
    sgMail
      .send(msg)
      .then((results) => {
        res.json({ sent: true, name: firstName });
      })
      .catch((err) => {
        res.json({ sent: false, msg: err.message });
      });
  } else {
    res.end(JSON.stringify({ error: "Not Authorized" }));
  }
};

export const config = {
  api: {
    externalResolver: true,
  },
};
