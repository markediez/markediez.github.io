<!DOCTYPE html>
<html>
  <head>
    <?php
      include('server.php');
      addHeaders("Test");
    ?>
    <title>Test</title>
    <meta charset="utf-8">
    <style>
      @keyframes example {
        0%   { border-color: rgba(255, 0, 0, 1); }
        50% { border-color: rgba(0, 255, 0, 1); }
        100%   { border-color: rgba(0, 0, 255, 1); }
      }

      #box {
        width: 100px;
        height: 100px;
        border: 10px solid red;
        background-color: green;
      }

      .pulse {
        border: clear;
        border: 10px solid green;
        animation: example 2s infinite;
      }
    </style>
  </head>
  <body>
    <script type="text/javascript">
      function run() {
        $('#box').addClass("pulse");
      }
    </script>
    <div id="box">
      <button onclick="run()">Click Me</button>
    </div>
  </body>
</html>
