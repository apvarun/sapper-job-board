import config from '../../../theme.config.js';
import formatter from '../../utils/formatter';

export async function get(req, res, next) {
  const source = await config.source;

  const response = {
    jobsPerPage: source.postsPerPage,
    ...formatter(source.contents, source.postsPerPage).getPostsByPage(1),
  };

  if (response !== null) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  } else {
    next();
  }
}
