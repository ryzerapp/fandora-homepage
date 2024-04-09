import "./index.css";
import "./../assets/css/grid.css";
import "./../assets/scss/style.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/img/favicon/logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TJ76CQH5');
            `
          }}
        />
        {/* End Google Tag Manager */}
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
              (function(d, w, c) {
                  w.BrevoConversationsID = '643feee23f69d460984db234';
                  w[c] = w[c] || function() {
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
        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SYG0TR84H2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SYG0TR84H2');
            `
          }}
        />
        {/* End Google Analytics Script */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJ76CQH5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}

{
  /* <meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<link rel="profile" href="https://gmpg.org/xfn/11" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-title"
  content="Ryzer App - Fractional Ownership & Investing in Real Estate, Bonds, Solar - Ryzer is a blockchain fractional asset investment platform" />
<link rel="pingback" href="https://www.ryzer.app/xmlrpc.php" />
<link rel="shortcut icon" href="/assets/img/favicon/logo.ico" />
<title>Ryzer App - Fractional Ownership & Investing in Real Estate, Bonds, Solar</title>
<script type="text/javascript" id="sendinblue-js" async=""
  src="https://sibautomation.com/sa.js?plugin=wordpress&amp;key=p99g0rfbaugm1j0cu90dl1hk"></script>
<meta name="title"
  content="Ryzer App - Fractional Ownership & Investing in Real Estate, Bonds, Solar" />
<meta name="description"
  content="Ryzer is a Asset tokenization platform which enables the issuance and distribution of tokenized securities backed by real world assets. Ryzer’s goal is to transform investment through tokenization, leveraging blockchain technology to increase operational efficiency in fractional ownership, lower the barriers of entry to investment, and unlock liquidity in previously illiquid assets." />
<meta name="robots" content="max-image-preview:large" />
<link rel="canonical" href="https://www.ryzer.app/" />
<meta name="generator" content="All in One SEO Pro (AIOSEO) 4.4.5.1" />
<meta property="og:locale" content="en_US" />
<meta property="og:site_name"
  content="Ryzer App - Fractional Ownership & Investing in Real Estate, Bonds, Solar - Ryzer is a blockchain fractional asset investment platform" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Ryzer App - Fractional Ownership & Investing in Real Estate, Bonds, Solar" />
<meta property="og:description"
  content="Ryzer is a Asset backed tokenised platform which enables the issuance and distribution of tokenized securities backed by real assets. Ryzer’s goal is to transform investment through tokenization, leveraging blockchain technology to increase operational efficiency in fractional ownership, lower the barriers of entry to investment, and unlock liquidity in previously illiquid assets." />
<meta property="og:url" content="https://www.ryzer.app/" />
<meta property="og:image" content="https://ryzerproduction.s3.ap-south-1.amazonaws.com/email/logo_text.png" />
<meta property="og:image:secure_url" content="https://ryzerproduction.s3.ap-south-1.amazonaws.com/email/logo_text.png" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@ryzer" />
<meta name="twitter:title" content="Ryzer App - Fractional Ownership & Investing in Real Estate, Bonds, Solar" />
<meta name="twitter:description"
  content="Ryzer is a Asset backed tokenised platform which enables the issuance and distribution of tokenized securities backed by real assets. Ryzer’s goal is to transform investment through tokenization, leveraging blockchain technology to increase operational efficiency in fractional ownership, lower the barriers of entry to investment, and unlock liquidity in previously illiquid assets." />
<meta name="twitter:creator" content="@ryzer" />
<meta name="twitter:image" content="https://ryzerproduction.s3.ap-south-1.amazonaws.com/email/logo_text.png" />

<meta itemprop="name" content="Ryzer App - Fractional Ownership & Investing in Real Estate, Bonds, Solar" />
<meta itemprop="url" content="https://www.ryzer.app/" />
<link rel="alternate" type="application/rss+xml"
  title="Ryzer App - Fractional Ownership & Investing in Real Estate, Bonds, Solar » Feed" href="https://www.ryzer.app/feed/" />
<link rel="alternate" type="application/rss+xml"
  title="Ryzer App - Fractional Ownership & Investing in Real Estate, Bonds, Solar » Comments Feed"
  href="https://www.ryzer.app/comments/feed/" />
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
<link rel="shortlink" href="https://www.ryzer.app/" />
<meta name="generator"
  content="Elementor 3.18.1; features: e_dom_optimization, e_optimized_assets_loading, e_optimized_css_loading, additional_custom_breakpoints, block_editor_assets_optimize, e_image_loading_optimization; settings: css_print_method-internal, google_font-enabled, font_display-swap" /> */
}
