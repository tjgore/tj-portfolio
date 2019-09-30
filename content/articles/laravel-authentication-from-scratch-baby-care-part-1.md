---
title: "Laravel Authentication from Scratch: Baby Care Part 1"
date: 2019-06-17
description: "Follow along and see how I build up an e-commerce site authentication"
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-red-gradient"
categories: ["Laravel"]
keywords: ["Laravel authentication from scratch"]
draft: false
---

## Intro 

This is the start of a high level walk through series of how I built an e-commerce platform for mommies looking to buy or sell affordable baby items. The platform is called Baby Care.

This article does not go deep into details. It is for experienced users to review or refresh their knowledge of Laravel.

Let's dive right into building Baby Care's Laravel app authentication.

## Set up Laravel Project

First let's install Laravel. I myself tend to forget this command quite often.

```bash
composer create-project --prefer-dist laravel/laravel babycare
```

Move into **babycare** folder and start up laravel server

```bash
php artisan serve
# or run on custom host and port
php artisan serve --host=babycar.tes --port=8000
```

Add a host `127.0.0.1 babycare.tes` to your `/etc/hosts` file with `sudo nano /etc/hosts`

Generate your laravel app key
```bash
php artisan key:generate
```
Create a mysql database and update `.env` database variables so that we can connect to it.

If you have `.env` variable with speacial characters put quotes around them.

## Authentication

For fast development, create laravel out of the box authentication.

```bash
php artisan make:auth && php artisan migrate
```

To allow Laravel to verify user's email update your `Auth::route()`

**web.php**. 
```php
<?php

Auth::routes(['verify' => true]);

```
 And implement `MustVerifyEmail` in the **User model**

 ```php
 <?php
/* ... */
use Illuminate\Contracts\Auth\MustVerifyEmail;
/* ... */

class User extends Authenticatable implements MustVerifyEmail
{
  /* ... */
}
 ```

You also need to update the `.env` with a mail host and credentials.
You can create an account at [MaiTrap](https://mailtrap.io).

```bash
MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=1sdvdc93edvs13
MAIL_PASSWORD=ghmamthdcc2fsd0
MAIL_ENCRYPTION=null
```

## Adding Multi Authentication

Next we are going to add another `guard`, **manager** to allow multi authentication. Currently there is only the `web` guard which authenticate users. Regular user are mommies buying items, while managers are mommies selling items. 

Update `/config/auth.php`

```php
<?php

return [

// guards: used to authenticate users 
'guards' => [
  'web' => [
    'driver' => 'session',
    'provider' => 'users',
  ],
  'manager' => [
    'driver' => 'session',
    'provider' => 'manager'
  ],
],

// providers: access and storage of users
  'providers' => [
    'users' => [
      'driver' => 'eloquent',
      'model' => App\User::class,
    ],
    'manager' => [
      'driver' => 'eloquent',
      'model' => App\Manager::class,
    ]
  ]

];
```

We should now add a `Manager` Model and migration, which will hold these manager users.

```bash
php artisan make:model Models/Manager --migration
```

```php
<?php

/* ... */

public function up()
{
  Schema::create('managers', function (Blueprint $table) {
    $table->bigIncrements('id');
    $table->string('name');
    $table->string('email')->unique();
    $table->timestamp('email_verified_at')->nullable();
    $table->string('password');
    $table->timestamps();
  });
}
```
Run manager migration

```bash
php artisan migration
```