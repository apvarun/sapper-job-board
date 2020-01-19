import config from '../../theme.config.js';

export async function get(req, res, next) {
  const source = await config.source;
  const posts = source.contents;

  if (posts !== null) {
    const response = {
      jobsPerPage: source.postsPerPage,
      jobs: posts,
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  } else {
    next();
  }
}
