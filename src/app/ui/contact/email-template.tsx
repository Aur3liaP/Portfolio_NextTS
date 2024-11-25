import * as React from "react";

interface EmailTemplateProps {
  message: string;
  email: string;
  name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  name,
  email,
}) => (
  <div>
    <h3>
      Message reçu de {name} - {email}
    </h3>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
