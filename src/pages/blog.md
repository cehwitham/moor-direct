---
title: Blog
description: 'Latest updates'
layout: blog
pagination:
  data: collections.posts
  size: 6
permalink: 'blog/{% if pagination.pageNumber >=1  %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html'
---

This blog has a pagination of **{{ pagination.size }}** posts per page.
The pagination is only shown if there are more posts ({{ collections.posts.length }}) than items per page ({{ pagination.size }}).
