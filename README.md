# astrojs-mt-data-api-blog-sample

Creating jamstack blog sample using Astro.js and Movable Type Data API

## 解説記事

- [Astro.js と Movable Type Data API を使用して Jamstack な Blog を作ってみる - WWW WATCH](https://hyper-text.org/archives/2022/12/creating_jamstack_blog_astrojs_and_mt_data_api.shtml)

## Getting Started

```shell
git clone https://github.com/burnworks/astrojs-mt-data-api-blog-sample.git
cd blog
npm install
```

### Edit .env.local

```shell
cp .env.local.sample .env.local
```

Set the `SECRET_MT_ENDPOINT_URL` to your environment.

```
SECRET_MT_ENDPOINT_URL=https://example.com/path_to_MT/mt-data-api.cgi/v4/sites/{site_id}/
```

### Dev

```shell
npm run dev
```
