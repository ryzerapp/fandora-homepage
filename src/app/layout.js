import "./index.css";
import "./../assets/css/grid.css";
import "./../assets/scss/style.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/img/favicon/logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          id="google-fonts-1-css"
          href="https://fonts.googleapis.com/css?family=Poppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CNunito%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7C&display=swap&ver=6.4.2"
          type="text/css"
          media="all"
        />
        {/* Add Brevo Conversations script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (d, w, c) {
            w.BrevoConversationsID = '63b535057270ae48953fb4b0';
          w[c] = w[c] || function () {
            (w[c].q = w[c].q || []).push(arguments);
          };
          var s = d.createElement('script');
          s.async = true;
          s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
          if (d.head) d.head.appendChild(s);
      })(document, window, 'BrevoConversations');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}