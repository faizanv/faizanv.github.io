---
layout: post
title:  "Setup a website with Github Pages"
date:   2017-08-29 00:26:02 -0700
categories: tutorials 
comments: true
---
This tutorial will cover how to host a personal static website for free using Github pages as a host.

Github Pages is a great and reliable service to help everyone have a little pressence on the web. In fact, this very website is hosted on Github pages! [https://faizanv.github.io/](https://faizanv.github.io/)

In the end we will have a website running at http://[Github Username].github.io/

![Github pages logo]({{ site.url }}/blog/assets/github_pages.jpg)
## Prerequisites
For this tutorial you must be familiar with HTML/CSS and be comfortable working in a command line interface as well as using git and have a Github account.

## Getting Started
# Create Repository
To get started you need to go to github and create a repository with the format [Github Username].github.io

So for example, if my Github username is faizanv, my repository would be named faizanv.github.io 

![New repository screenshot]({{ site.url }}/blog/assets/github_pages/make_repository.png)

After the repository is created, go ahead and clone the repository to your computer `git clone https://github.com/faizanv/faizanv.github.io.git` and change the directory to the cloned folder `cd faizanv.github.io`

## The Content

Before we can host a site on Github Pages, we need a website! We can start with this simple template.

`index.html`
{% highlight html %}
<!DOCTYPE html>
<head>
  <meta charset="UTF-8">
  <title>My Website</title>
  <link rel="stylesheet" href="stylesheets/style.css" />
</head>
<body>
  <h1>Hello World</h1>
</body>
{% endhighlight %}

and we can create a simple stylesheet

`stylesheets/style.css`
{% highlight css %}
body {
  text-align: center;
  background-color: black;
  color: white;
}
{% endhighlight %}

## Deployment

Deploying our website is as simple as using git to push our changes to the repository we created earlier.
1. `git add .`
2. `git commit -m "Initial commit"`
3. `git push origin master`

Once you finish those steps, you can open http://[Github Username].github.io/ and voilà! You have a website!

![Finished website]({{ site.url }}/blog/assets/github_pages/finished_website.png)

To make updates to your website all you have to do is push changes to the Github repository like we did earlier. You can create a portfolio website, add some pictures, maybe some javascript. Anything is possible!

