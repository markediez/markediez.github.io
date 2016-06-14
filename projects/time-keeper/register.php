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

      <div id="register" class="row">
        <form id="register-form" class="col-md-4">
          <input class="col-md-12 form-control" type="text" placeholder="username" name="username" required>
          <input class="col-md-12 form-control form-item" type="password" placeholder="password" name="password" required>
          <input class="col-md-12 form-control form-item" type="text" placeholder="email" name="email" required>
          <a class="col-md-4 col-md-offset-8 btn btn-primary form-item" onclick="postFormSubmit('#register-form', 'http://localhost:8888/db/ajax/register.php')">Register</a>
          <a class='col-md-4 col-md-offset-8 text-right no-padding' href="/">
            <span class="small">Already have an account? Login</span>
          </a>
          <input type="submit" class="hide">
        </form>
      </div>

    </div>
  </body>
</html>
