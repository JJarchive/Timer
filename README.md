
<!DOCTYPE html>
<html lang='en' class=''>

<head>

  <meta charset='UTF-8'>
  <title>CodePen Demo</title>

  <meta name="robots" content="noindex">

  <link rel="shortcut icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico">
  <link rel="mask-icon" href="https://cpwebassets.codepen.io/assets/favicon/logo-pin-b4b4269c16397ad2f0f7a01bcdf513a1994f4c94b8af2f191c09eb0d601762b1.svg" color="#111">
  <link rel="canonical" href="https://codepen.io/doriancami/pen/jEJvaV">

  <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
  
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">

  <style id="INLINE_PEN_STYLESHEET_ID">
    body {
  background-color: #f2f1ed;
}

.wrap {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 310px;
}

a {
  text-decoration: none;
  color: #1a1a1a;
}

h1 {
  margin-bottom: 60px;
  text-align: center;
  font: 300 2.25em "Lato";
  text-transform: uppercase;
}
h1 strong {
  font-weight: 400;
  color: #ea4c4c;
}

h2 {
  margin-bottom: 80px;
  text-align: center;
  font: 300 0.7em "Lato";
  text-transform: uppercase;
}
h2 strong {
  font-weight: 400;
}

.countdown {
  width: 720px;
  margin: 0 auto;
}
.countdown .bloc-time {
  float: left;
  margin-right: 45px;
  text-align: center;
}
.countdown .bloc-time:last-child {
  margin-right: 0;
}
.countdown .count-title {
  display: block;
  margin-bottom: 15px;
  font: normal 0.94em "Lato";
  color: #1a1a1a;
  text-transform: uppercase;
}
.countdown .figure {
  position: relative;
  float: left;
  height: 110px;
  width: 100px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 8px;
  -moz-box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2), inset 2px 4px 0 0 rgba(255, 255, 255, 0.08);
  -webkit-box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2), inset 2px 4px 0 0 rgba(255, 255, 255, 0.08);
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2), inset 2px 4px 0 0 rgba(255, 255, 255, 0.08);
}
.countdown .figure:last-child {
  margin-right: 0;
}
.countdown .figure > span {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  font: normal 5.94em/107px "Lato";
  font-weight: 700;
  color: #de4848;
}
.countdown .figure .top:after, .countdown .figure .bottom-back:after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.countdown .figure .top {
  z-index: 3;
  background-color: #f7f7f7;
  transform-origin: 50% 100%;
  -webkit-transform-origin: 50% 100%;
  -moz-border-radius-topleft: 10px;
  -webkit-border-top-left-radius: 10px;
  border-top-left-radius: 10px;
  -moz-border-radius-topright: 10px;
  -webkit-border-top-right-radius: 10px;
  border-top-right-radius: 10px;
  -moz-transform: perspective(200px);
  -ms-transform: perspective(200px);
  -webkit-transform: perspective(200px);
  transform: perspective(200px);
}
.countdown .figure .bottom {
  z-index: 1;
}
.countdown .figure .bottom:before {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.02);
}
.countdown .figure .bottom-back {
  z-index: 2;
  top: 0;
  height: 50%;
  overflow: hidden;
  background-color: #f7f7f7;
  -moz-border-radius-topleft: 10px;
  -webkit-border-top-left-radius: 10px;
  border-top-left-radius: 10px;
  -moz-border-radius-topright: 10px;
  -webkit-border-top-right-radius: 10px;
  border-top-right-radius: 10px;
}
.countdown .figure .bottom-back span {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.countdown .figure .top, .countdown .figure .top-back {
  height: 50%;
  overflow: hidden;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.countdown .figure .top-back {
  z-index: 4;
  bottom: 0;
  background-color: #fff;
  -webkit-transform-origin: 50% 0;
  transform-origin: 50% 0;
  -moz-transform: perspective(200px) rotateX(180deg);
  -ms-transform: perspective(200px) rotateX(180deg);
  -webkit-transform: perspective(200px) rotateX(180deg);
  transform: perspective(200px) rotateX(180deg);
  -moz-border-radius-bottomleft: 10px;
  -webkit-border-bottom-left-radius: 10px;
  border-bottom-left-radius: 10px;
  -moz-border-radius-bottomright: 10px;
  -webkit-border-bottom-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.countdown .figure .top-back span {
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  margin: auto;
}

  </style>

  
<script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-2c7831bb44f98c1391d6a4ffda0e1fd302503391ca806e7fcc7b9b87197aec26.js"></script>
<script src="https://cpwebassets.codepen.io/assets/editor/iframe/iframeConsoleRunner-6d8bf8b4b479137260842506acbb12717dace0823c023e08b96360e60b0840d9.js"></script>
<script src="https://cpwebassets.codepen.io/assets/editor/iframe/iframeRefreshCSS-44fe83e49b63affec96918c9af88c0d80b209a862cf87ac46bc933074b8c557d.js"></script>
<script src="https://cpwebassets.codepen.io/assets/editor/iframe/iframeRuntimeErrors-4f205f2c14e769b448bcf477de2938c681660d5038bc464e3700256713ebe261.js"></script>
</head>

<body>
  <div class="wrap">  
  <h1><strong>Countdown</strong></h1>

  <div class="countdown">
    <div class="bloc-time hours" data-init-value="24">
      <span class="count-title">Hours</span>

      <div class="figure hours hours-1">
        <span class="top">2</span>
        <span class="top-back">
          <span>2</span>
        </span>
        <span class="bottom">2</span>
        <span class="bottom-back">
          <span>2</span>
        </span>
      </div>

      <div class="figure hours hours-2">
        <span class="top">4</span>
        <span class="top-back">
          <span>4</span>
        </span>
        <span class="bottom">4</span>
        <span class="bottom-back">
          <span>4</span>
        </span>
      </div>
    </div>

    <div class="bloc-time min" data-init-value="0">
      <span class="count-title">Minutes</span>

      <div class="figure min min-1">
        <span class="top">0</span>
        <span class="top-back">
          <span>0</span>
        </span>
        <span class="bottom">0</span>
        <span class="bottom-back">
          <span>0</span>
        </span>        
      </div>

      <div class="figure min min-2">
       <span class="top">0</span>
        <span class="top-back">
          <span>0</span>
        </span>
        <span class="bottom">0</span>
        <span class="bottom-back">
          <span>0</span>
        </span>
      </div>
    </div>

    <div class="bloc-time sec" data-init-value="0">
      <span class="count-title">Seconds</span>

        <div class="figure sec sec-1">
        <span class="top">0</span>
        <span class="top-back">
          <span>0</span>
        </span>
        <span class="bottom">0</span>
        <span class="bottom-back">
          <span>0</span>
        </span>          
      </div>

      <div class="figure sec sec-2">
        <span class="top">0</span>
        <span class="top-back">
          <span>0</span>
        </span>
        <span class="bottom">0</span>
        <span class="bottom-back">
          <span>0</span>
        </span>
      </div>
    </div>
  </div>
</div>
  
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
  <script  src="https://cdpn.io/cpe/boomboom/pen.js?key=pen.js-fbd3453f-ff20-c54a-a68b-f0e3aca5731e" crossorigin></script>
</body>

</html>
