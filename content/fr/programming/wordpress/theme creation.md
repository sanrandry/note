---
title: Theme Creation
description: ""
position: 2
category: "Programming"
---

## create a the theme folder
## create index.php and style.css
## add comment to style.css
cpoy the comment in the index.css in the default theme to your index.css and edit it.
## try to loop the post on the index.php page
``` php
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php bloginfo('name') ?>
    </title>
</head>

<body>
    <header>
        <?php echo (bloginfo('name')) ?>
    </header>
    <main>
        <?php if (have_posts()) : ?>
        <?php while (have_posts()) : ?>
        <?php the_post(); ?>
        <h1>
            <?php the_title(); ?>
        </h1>
        <div>
            <?php the_content(); ?>
        </div>
        <?php endwhile ?>
        <?php else : ?>
        <?php endif; ?>
    </main>
    <footer>
        footer
    </footer>
</body>

</html>
```
## separete header and footer to header.php and footer.php
header.php
```php
<!DOCTYPE <?php language_attributes(); ?>>
<html lang="en">

<head>
    <meta charset="<?php bloginfo('charset') ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php bloginfo('name') ?>
    </title>
    <?php wp_head(); ?>
</head>

<body>
    <header>
        <a href="<?php echo (home_url()) ?>">
            <?php echo (bloginfo('name')) ?>
        </a>
    </header>
```
index.php
```php
<?php get_header() ?>
<main>
    <?php if (have_posts()) : ?>
    <?php while (have_posts()) : ?>
    <?php the_post(); ?>
    <h1>
        <?php the_title(); ?>
    </h1>
    <div>
        <?php the_content(); ?>
    </div>
    <?php endwhile; ?>
    <?php else : ?>
    <?php endif; ?>
</main>
<?php get_footer() ?>
```
footer.php
```php
      <footer>
        <span><?php bloginfo('name') ?></span> <?php echo (date('Y')) ?>
    </footer>
    </body>
    <?php wp_footer(); ?>

    </html>
```
## enque the default style
### create a functions.php file
add this code to the functions.php
```php
<?php
function enqueue_theme_resources()
{
    wp_enqueue_style('style', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'enqueue_theme_resources');
```
