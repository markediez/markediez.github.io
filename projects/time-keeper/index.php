<!DOCTYPE html>
<html>
  <head>
    <?php
      include('server.php');
      addHeaders("Time Keeper");
    ?>
  </head>
  <body>
    <div class="container-fluid">

      <div id="header" class="row">
        <div class="col-md-12">
          <h1>Time Keeper</h1>
        </div>
      </div>

      <div id="login" class="row">
        <form id="login-form" class="col-md-4" action="">
          <input class="col-md-12 form-control" type="text" placeholder="username" name="username" required>
          <input class="col-md-12 form-control form-item" type="password" placeholder="password" name="password" required>
          <a class="col-md-4 col-md-offset-3 btn btn-primary form-item" href="register.php">Register</a>
          <a class="col-md-4 col-md-offset-1 btn btn-primary form-item" onclick="login('#login-form')">Login</a>
          <input type="submit" class="hide">
        </form>
      </div>

    </div>
  </body>
</html>
