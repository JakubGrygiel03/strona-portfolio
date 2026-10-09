export interface InquiryMailModel {
  name: string;
  company: string;
  email: string;
  message: string;
  packageLabel: string;
  modules: string;
  included: string;
  budget: string;
  timeline: string;
  range: string;
  phoneDisplay: string;
  phoneHref: string;
  studioEmail: string;
}

export function ownerInquiryMail(model: InquiryMailModel) {
  const tiles = grid([
    ["Imię", model.name],
    ["Firma", model.company],
    ["E-mail", model.email],
    ["Pakiet", model.packageLabel],
    ["Termin", model.timeline],
    ["Budżet", model.budget],
    ["Szacunek", model.range],
    ["Dodatki", model.modules],
  ]);
  const html = shell({
    preheader: `${model.name} · ${model.packageLabel} · ${model.range}`,
    kicker: "Nowe zapytanie",
    title: model.company,
    intro: "Ktoś właśnie wysłał brief z kalkulatora. Poniżej masz kontakt i podsumowanie zakresu.",
    body: `${tiles}${note("W cenie", model.included)}${note("Wiadomość", model.message)}`,
    actionHref: `mailto:${model.email}`,
    actionLabel: "Odpowiedz na ten brief",
    footer: `${model.studioEmail} · ${model.phoneDisplay}`,
  });
  const text = [
    `Nowe zapytanie: ${model.company}`,
    "",
    `Imię: ${model.name}`,
    `Firma: ${model.company}`,
    `E-mail: ${model.email}`,
    `Pakiet: ${model.packageLabel}`,
    `Dodatki: ${model.modules}`,
    `W cenie: ${model.included}`,
    `Budżet: ${model.budget}`,
    `Termin: ${model.timeline}`,
    `Szacunek: ${model.range}`,
    "",
    model.message,
  ].join("\n");
  return { html, text };
}

export function clientInquiryMail(model: InquiryMailModel) {
  const tiles = grid([
    ["Pakiet", model.packageLabel],
    ["Dodatki", model.modules],
    ["Termin", model.timeline],
    ["Szacunek", model.range],
  ]);
  const html = shell({
    preheader: `Podsumowanie: ${model.packageLabel}. Odezwę się w ciągu 24 godzin.`,
    kicker: "GrygielStudio",
    title: `Cześć, ${model.name}.`,
    intro:
      "Dzięki za kontakt i za konfigurację. Przejrzę to i odezwę się osobiście w ciągu 24 godzin — na telefon albo na ten adres.",
    body: `${tiles}${note("W cenie", model.included)}`,
    actionHref: model.phoneHref,
    actionLabel: `Zadzwoń: ${model.phoneDisplay}`,
    footer: `Jakub Grygiel · ${model.studioEmail}`,
  });
  const text = [
    `Cześć, ${model.name}!`,
    "",
    "Dzięki za kontakt i przesłanie konfiguracji.",
    "Poniżej podsumowanie tego, co zaznaczyłeś:",
    "",
    `Pakiet: ${model.packageLabel}`,
    `Dodatki: ${model.modules}`,
    `W cenie: ${model.included}`,
    `Termin: ${model.timeline}`,
    `Szacunek: ${model.range}`,
    "",
    "Przejrzę to i odezwę się osobiście w ciągu 24 godzin, na telefon albo maila.",
    "",
    "Jakub Grygiel",
    model.phoneDisplay,
    model.studioEmail,
  ].join("\n");
  return { html, text };
}

function shell(input: {
  preheader: string;
  kicker: string;
  title: string;
  intro: string;
  body: string;
  actionHref: string;
  actionLabel: string;
  footer: string;
}) {
  return `<!DOCTYPE html>
<html lang="pl">
<body style="margin:0;padding:0;background:#f3f6f4;">
  <div style="display:none;max-height:0;overflow:hidden;">${esc(input.preheader)}</div>
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f3f6f4;padding:28px 12px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;">
        <tr><td style="background:#0a0a0a;border-radius:20px 20px 0 0;padding:20px 24px;">
          <table cellpadding="0" cellspacing="0" role="presentation"><tr>
            <td width="36" height="36" align="center" style="width:36px;height:36px;background:#1b4332;border-radius:10px;color:#ffffff;font-family:Inter,Segoe UI,sans-serif;font-size:13px;font-weight:700;">GS</td>
            <td style="padding-left:12px;color:#ffffff;font-family:Inter,Segoe UI,sans-serif;font-size:15px;font-weight:600;">GrygielStudio</td>
          </tr></table>
        </td></tr>
        <tr><td style="background:#ffffff;padding:28px 24px 8px;border-left:1px solid #e5e5e5;border-right:1px solid #e5e5e5;">
          <p style="margin:0;color:#c4a265;font-family:Inter,Segoe UI,sans-serif;font-size:13px;font-weight:600;">${esc(input.kicker)}</p>
          <h1 style="margin:8px 0 0;color:#0a0a0a;font-family:Inter,Segoe UI,sans-serif;font-size:26px;line-height:32px;font-weight:600;">${esc(input.title)}</h1>
          <p style="margin:12px 0 0;color:#404040;font-family:Inter,Segoe UI,sans-serif;font-size:15px;line-height:24px;">${esc(input.intro)}</p>
        </td></tr>
        <tr><td style="background:#ffffff;padding:16px 18px 8px;border-left:1px solid #e5e5e5;border-right:1px solid #e5e5e5;">
          ${input.body}
        </td></tr>
        <tr><td style="background:#ffffff;padding:8px 24px 28px;border:1px solid #e5e5e5;border-top:0;border-radius:0 0 20px 20px;">
          <a href="${esc(input.actionHref)}" style="display:inline-block;background:#1b4332;color:#ffffff;text-decoration:none;font-family:Inter,Segoe UI,sans-serif;font-size:14px;font-weight:600;padding:12px 18px;border-radius:12px;">${esc(input.actionLabel)}</a>
          <p style="margin:18px 0 0;color:#5c5c5c;font-family:Inter,Segoe UI,sans-serif;font-size:12px;line-height:18px;">${esc(input.footer)}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function grid(items: [string, string][]) {
  const rows: string[] = [];
  for (let index = 0; index < items.length; index += 2) {
    const right = items[index + 1];
    rows.push(
      `<tr>${tile(items[index][0], items[index][1])}${right ? tile(right[0], right[1]) : `<td width="50%" style="padding:6px;"></td>`}</tr>`,
    );
  }
  return `<table width="100%" cellpadding="0" cellspacing="0" role="presentation">${rows.join("")}</table>`;
}

function tile(label: string, value: string) {
  return `<td width="50%" valign="top" style="padding:6px;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f3f6f4;border-radius:14px;">
      <tr><td style="padding:14px 16px;font-family:Inter,Segoe UI,sans-serif;">
        <div style="font-size:12px;line-height:16px;color:#5c5c5c;">${esc(label)}</div>
        <div style="margin-top:4px;font-size:15px;line-height:21px;font-weight:600;color:#0a0a0a;">${esc(value)}</div>
      </td></tr>
    </table>
  </td>`;
}

function note(label: string, value: string) {
  return `<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:6px;">
    <tr><td style="padding:6px;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f3f6f4;border-radius:14px;">
        <tr><td style="padding:14px 16px;font-family:Inter,Segoe UI,sans-serif;">
          <div style="font-size:12px;line-height:16px;color:#5c5c5c;">${esc(label)}</div>
          <div style="margin-top:4px;font-size:15px;line-height:22px;color:#0a0a0a;">${esc(value).replaceAll("\n", "<br>")}</div>
        </td></tr>
      </table>
    </td></tr>
  </table>`;
}

function esc(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
